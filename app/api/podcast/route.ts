import { NextRequest } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export const maxDuration = 60

interface DialogueTurn {
  speaker: 'host' | 'expert'
  text: string
}

interface PodcastScript {
  title: string
  slug: string
  duration_estimate: string
  turns: DialogueTurn[]
}

function buildDialogueText(turns: DialogueTurn[]): string {
  return turns
    .map((t) => `${t.speaker === 'host' ? 'Host' : 'Expert'}: ${t.text}`)
    .join('\n')
}

// Gemini TTS returns raw 24kHz 16-bit mono PCM. Browsers can't play raw PCM,
// so we wrap it in a minimal WAV container before sending.
function pcmToWav(pcm: Buffer, sampleRate = 24000, channels = 1, bitDepth = 16): Buffer {
  const dataSize = pcm.length
  const wav = Buffer.allocUnsafe(44 + dataSize)
  wav.write('RIFF', 0)
  wav.writeUInt32LE(36 + dataSize, 4)
  wav.write('WAVE', 8)
  wav.write('fmt ', 12)
  wav.writeUInt32LE(16, 16)
  wav.writeUInt16LE(1, 20)                                       // PCM format
  wav.writeUInt16LE(channels, 22)
  wav.writeUInt32LE(sampleRate, 24)
  wav.writeUInt32LE(sampleRate * channels * (bitDepth / 8), 28)
  wav.writeUInt16LE(channels * (bitDepth / 8), 32)
  wav.writeUInt16LE(bitDepth, 34)
  wav.write('data', 36)
  wav.writeUInt32LE(dataSize, 40)
  pcm.copy(wav, 44)
  return wav
}

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Podcast not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return new Response(JSON.stringify({ error: 'Invalid slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let script: PodcastScript
  try {
    const scriptPath = join(process.cwd(), 'public', 'podcasts', `${slug}.json`)
    const raw = readFileSync(scriptPath, 'utf-8')
    script = JSON.parse(raw)
  } catch {
    return new Response(JSON.stringify({ error: 'Script not found', slug }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const dialogueText = buildDialogueText(script.turns)

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: dialogueText }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            multiSpeakerVoiceConfig: {
              speakerVoiceConfigs: [
                {
                  speaker: 'Host',
                  voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } },
                },
                {
                  speaker: 'Expert',
                  voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } },
                },
              ],
            },
          },
        },
      }),
    },
  )

  if (!geminiRes.ok) {
    const body = await geminiRes.text()
    return new Response(
      JSON.stringify({ error: 'TTS upstream error', detail: `Gemini ${geminiRes.status}: ${body}` }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const data = await geminiRes.json()

  const inlineData = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData
  const audioData: string | undefined = inlineData?.data
  if (!audioData) {
    return new Response(JSON.stringify({ error: 'No audio in Gemini response' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const raw = Buffer.from(audioData, 'base64')
  const mimeType: string = inlineData?.mimeType ?? ''

  // Wrap raw PCM in WAV so browsers can decode it
  const isPcm = mimeType.includes('L16') || mimeType.includes('pcm') || mimeType === ''
  const contentType = isPcm ? 'audio/wav' : mimeType
  // Buffer.from() strips the generic ArrayBufferLike parameter so Response accepts it
  const audioBuffer = Buffer.from(isPcm ? pcmToWav(raw) : raw)

  return new Response(audioBuffer, {
    headers: {
      'Content-Type': contentType,
      'Content-Length': audioBuffer.length.toString(),
      'Cache-Control': 'no-store',
    },
  })
}

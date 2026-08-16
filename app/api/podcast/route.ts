import { NextRequest } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

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

// Build dialogue text with speaker tags for Gemini multi-speaker TTS
function buildDialogueText(turns: DialogueTurn[]): string {
  return turns
    .map((t) => `${t.speaker === 'host' ? 'Host' : 'Expert'}: ${t.text}`)
    .join('\n')
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

  // Gemini returns audio as base64-encoded inline data
  const audioData = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data
  if (!audioData) {
    return new Response(JSON.stringify({ error: 'No audio in Gemini response' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const audioBuffer = Buffer.from(audioData, 'base64')
  return new Response(audioBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length.toString(),
      'Cache-Control': 'no-store',
    },
  })
}

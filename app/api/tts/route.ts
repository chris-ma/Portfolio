import { NextRequest } from 'next/server'

const CARTESIA_VERSION = '2024-06-10'
let cachedVoiceId: string | null = null

async function resolveVoiceId(apiKey: string): Promise<string> {
  if (process.env.CARTESIA_VOICE_ID) return process.env.CARTESIA_VOICE_ID
  if (cachedVoiceId) return cachedVoiceId

  const res = await fetch('https://api.cartesia.ai/voices', {
    headers: {
      'Cartesia-Version': CARTESIA_VERSION,
      'X-API-Key': apiKey,
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Failed to list voices — Cartesia ${res.status}: ${body}`)
  }

  const data = await res.json()
  const voices: Array<{ id: string; language?: string }> = Array.isArray(data) ? data : data?.voices ?? []
  if (voices.length === 0) throw new Error('No voices available in this Cartesia account')

  const pick = voices.find((v) => !v.language || v.language.startsWith('en')) ?? voices[0]
  cachedVoiceId = pick.id
  return cachedVoiceId!
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.CARTESIA_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'TTS not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { text } = await req.json()
  if (!text || typeof text !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing text' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let voiceId: string
  try {
    voiceId = await resolveVoiceId(apiKey)
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Voice resolution failed'
    return new Response(JSON.stringify({ error: msg }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const res = await fetch('https://api.cartesia.ai/tts/bytes', {
    method: 'POST',
    headers: {
      'Cartesia-Version': CARTESIA_VERSION,
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: 'sonic-2',
      transcript: text,
      voice: { mode: 'id', id: voiceId },
      output_format: { container: 'mp3', encoding: 'mp3', sample_rate: 44100 },
      language: 'en',
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    return new Response(
      JSON.stringify({ error: 'TTS upstream error', detail: `Cartesia ${res.status}: ${body}` }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    )
  }

  return new Response(res.body, { headers: { 'Content-Type': 'audio/mpeg' } })
}

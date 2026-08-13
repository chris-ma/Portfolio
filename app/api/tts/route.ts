import { NextRequest } from 'next/server'

const DEFAULT_VOICE_ID = 'a0e99841-438c-4a64-b679-ae501e7d6091' // Barbora — natural, neutral

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

  const voiceId = process.env.CARTESIA_VOICE_ID || DEFAULT_VOICE_ID

  const res = await fetch('https://api.cartesia.ai/tts/bytes', {
    method: 'POST',
    headers: {
      'Cartesia-Version': '2024-06-10',
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: 'sonic-2',
      transcript: text,
      voice: { mode: 'id', id: voiceId },
      output_format: {
        container: 'mp3',
        encoding: 'mp3',
        sample_rate: 44100,
      },
      language: 'en',
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    return new Response(JSON.stringify({ error: 'TTS upstream error', detail: body }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(res.body, {
    headers: { 'Content-Type': 'audio/mpeg' },
  })
}

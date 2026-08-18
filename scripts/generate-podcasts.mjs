#!/usr/bin/env node
/**
 * Pre-generate podcast audio files and upload to Vercel Blob.
 *
 * Usage:
 *   node scripts/generate-podcasts.mjs                        # all slugs
 *   node scripts/generate-podcasts.mjs api-rate-limits-design # single slug
 *
 * Requires in env (or .env.local):
 *   GOOGLE_AI_API_KEY     — Gemini TTS
 *   BLOB_READ_WRITE_TOKEN — Vercel Blob upload token
 *
 * After running, commit public/podcast-audio-urls.json and push.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { put } from '@vercel/blob'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// Load .env.local if present (Node doesn't read it automatically)
try {
  const envFile = readFileSync(join(ROOT, '.env.local'), 'utf-8')
  for (const line of envFile.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length && !process.env[key.trim()]) {
      process.env[key.trim()] = rest.join('=').trim()
    }
  }
} catch { /* no .env.local — fine */ }

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY
const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN

if (!GOOGLE_AI_API_KEY) {
  console.error('Missing GOOGLE_AI_API_KEY in environment')
  process.exit(1)
}
if (!BLOB_READ_WRITE_TOKEN) {
  console.error('Missing BLOB_READ_WRITE_TOKEN in environment')
  console.error('Get it from: Vercel dashboard → Storage → Blob → your store → .env.local')
  process.exit(1)
}

function pcmToWav(pcm, sampleRate = 24000, channels = 1, bitDepth = 16) {
  const dataSize = pcm.length
  const wav = Buffer.allocUnsafe(44 + dataSize)
  wav.write('RIFF', 0)
  wav.writeUInt32LE(36 + dataSize, 4)
  wav.write('WAVE', 8)
  wav.write('fmt ', 12)
  wav.writeUInt32LE(16, 16)
  wav.writeUInt16LE(1, 20)
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

async function generateForSlug(slug) {
  const scriptPath = join(ROOT, 'public', 'podcasts', `${slug}.json`)
  let script
  try {
    script = JSON.parse(readFileSync(scriptPath, 'utf-8'))
  } catch {
    throw new Error(`No podcast script found at public/podcasts/${slug}.json`)
  }

  const dialogueText = script.turns
    .map(t => `${t.speaker === 'host' ? 'Host' : 'Expert'}: ${t.text}`)
    .join('\n')

  console.log(`  → Calling Gemini TTS...`)
  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${GOOGLE_AI_API_KEY}`,
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
                { speaker: 'Host', voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } } },
                { speaker: 'Expert', voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } } },
              ],
            },
          },
        },
      }),
    }
  )

  if (!geminiRes.ok) {
    const body = await geminiRes.text()
    throw new Error(`Gemini ${geminiRes.status}: ${body.slice(0, 300)}`)
  }

  const data = await geminiRes.json()
  const inlineData = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData
  const audioData = inlineData?.data
  if (!audioData) throw new Error('No audio in Gemini response')

  const raw = Buffer.from(audioData, 'base64')
  const mimeType = (inlineData?.mimeType ?? '').toLowerCase()
  const isPcm = mimeType.includes('l16') || mimeType.includes('pcm') || mimeType === ''
  const audioBuffer = isPcm ? pcmToWav(raw) : raw
  const contentType = isPcm ? 'audio/wav' : mimeType

  console.log(`  → Uploading to Vercel Blob (${(audioBuffer.length / 1024 / 1024).toFixed(1)} MB)...`)
  const blob = await put(`podcasts/${slug}.wav`, audioBuffer, {
    access: 'private',
    contentType,
    token: BLOB_READ_WRITE_TOKEN,
  })

  return blob.url
}

async function main() {
  const urlMapPath = join(ROOT, 'public', 'podcast-audio-urls.json')
  const urlMap = JSON.parse(readFileSync(urlMapPath, 'utf-8'))

  // Determine slugs to process
  const arg = process.argv[2]
  let slugs
  if (arg && !arg.startsWith('--')) {
    slugs = [arg]
  } else {
    slugs = readdirSync(join(ROOT, 'public', 'podcasts'))
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
      .sort()
  }

  const skip = process.argv.includes('--skip-existing')
  let generated = 0
  let skipped = 0
  let failed = 0

  for (const slug of slugs) {
    if (skip && urlMap[slug]) {
      console.log(`[skip] ${slug}`)
      skipped++
      continue
    }
    console.log(`[gen]  ${slug}`)
    try {
      const url = await generateForSlug(slug)
      urlMap[slug] = url
      // Write after each success so partial runs are saved
      writeFileSync(urlMapPath, JSON.stringify(urlMap, null, 2) + '\n')
      console.log(`  ✓ ${url}`)
      generated++
    } catch (err) {
      console.error(`  ✗ ${err.message}`)
      failed++
    }
    // Brief pause to avoid rate limiting
    if (slugs.indexOf(slug) < slugs.length - 1) {
      await new Promise(r => setTimeout(r, 1500))
    }
  }

  console.log(`\nDone: ${generated} generated, ${skipped} skipped, ${failed} failed`)
  if (generated > 0) {
    console.log('\nNext steps:')
    console.log('  git add public/podcast-audio-urls.json && git commit -m "Add pre-generated podcast audio"')
    console.log('  git push')
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

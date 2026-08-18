import { NextRequest } from 'next/server'
import { list } from '@vercel/blob'

export async function GET(_req: NextRequest) {
  const lines: string[] = []
  const ts = new Date().toISOString()

  lines.push(`=== Podcast Debug ${ts} ===`)
  lines.push('')
  lines.push(`BLOB_READ_WRITE_TOKEN set: ${!!process.env.BLOB_READ_WRITE_TOKEN}`)
  lines.push(`GOOGLE_AI_API_KEY set:     ${!!process.env.GOOGLE_AI_API_KEY}`)
  lines.push('')

  try {
    const { blobs, cursor } = await list({ prefix: 'podcasts/', limit: 50 })
    lines.push(`Blob list() → OK  (${blobs.length} file${blobs.length !== 1 ? 's' : ''} found${cursor ? ', more exist' : ''})`)
    if (blobs.length === 0) {
      lines.push('  No audio files uploaded yet.')
      lines.push('  The GitHub Actions workflow may still be running (~45 min total).')
      lines.push('  Once it finishes, podcast playback will work automatically.')
    } else {
      lines.push('')
      for (const b of blobs) {
        const mb = (b.size / 1024 / 1024).toFixed(1)
        lines.push(`  ✓ ${b.pathname}  ${mb} MB  ${b.uploadedAt.toISOString()}`)
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    lines.push(`Blob list() → FAILED`)
    lines.push(`  Error: ${msg}`)
    lines.push('')
    lines.push('  Likely causes:')
    lines.push('  1. BLOB_READ_WRITE_TOKEN is not set in Vercel env vars')
    lines.push('  2. The Blob store is not connected to this project')
    lines.push('  Fix: Vercel dashboard → Storage → connect store → redeploy')
  }

  lines.push('')
  lines.push('=== end ===')

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

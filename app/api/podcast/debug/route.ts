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
    } else {
      lines.push('')
      for (const b of blobs) {
        const mb = (b.size / 1024 / 1024).toFixed(1)
        // Show first 60 chars of downloadUrl so we can see if it's signed
        const dlPreview = b.downloadUrl?.slice(0, 80) ?? 'undefined'
        lines.push(`  ✓ ${b.pathname}  ${mb} MB`)
        lines.push(`      url:         ${b.url.slice(0, 60)}`)
        lines.push(`      downloadUrl: ${dlPreview}`)
      }

      // Test fetching the first blob's downloadUrl
      const first = blobs[0]
      lines.push('')
      lines.push(`Testing fetch of first blob's downloadUrl...`)
      try {
        const testRes = await fetch(first.downloadUrl, { method: 'HEAD' })
        lines.push(`  HEAD ${first.downloadUrl.slice(0, 60)}`)
        lines.push(`  → status ${testRes.status} ${testRes.statusText}`)
        lines.push(`  → content-type: ${testRes.headers.get('content-type')}`)
        lines.push(`  → content-length: ${testRes.headers.get('content-length')}`)
      } catch (e: unknown) {
        lines.push(`  → FAILED: ${e instanceof Error ? e.message : String(e)}`)
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    lines.push(`Blob list() → FAILED`)
    lines.push(`  Error: ${msg}`)
  }

  lines.push('')
  lines.push('=== end ===')

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

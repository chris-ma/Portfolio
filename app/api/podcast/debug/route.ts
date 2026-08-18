import { NextRequest } from 'next/server'
import { list, issueSignedToken, presignUrl } from '@vercel/blob'

export async function GET(_req: NextRequest) {
  const lines: string[] = []
  const ts = new Date().toISOString()

  lines.push(`=== Podcast Debug ${ts} ===`)
  lines.push('')
  lines.push(`BLOB_READ_WRITE_TOKEN set: ${!!process.env.BLOB_READ_WRITE_TOKEN}`)
  lines.push(`VERCEL_OIDC_TOKEN set:     ${!!process.env.VERCEL_OIDC_TOKEN}`)
  lines.push(`BLOB_STORE_ID set:         ${!!process.env.BLOB_STORE_ID}`)
  lines.push(`GOOGLE_AI_API_KEY set:     ${!!process.env.GOOGLE_AI_API_KEY}`)
  lines.push('')

  let blobs: Awaited<ReturnType<typeof list>>['blobs'] = []

  try {
    const result = await list({ prefix: 'podcasts/', limit: 50 })
    blobs = result.blobs
    const { cursor } = result
    lines.push(`Blob list() → OK  (${blobs.length} file${blobs.length !== 1 ? 's' : ''} found${cursor ? ', more exist' : ''})`)
    if (blobs.length === 0) {
      lines.push('  No audio files uploaded yet.')
    } else {
      lines.push('')
      for (const b of blobs) {
        const mb = (b.size / 1024 / 1024).toFixed(1)
        lines.push(`  ✓ ${b.pathname}  ${mb} MB`)
        lines.push(`      url:         ${b.url.slice(0, 70)}`)
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    lines.push(`Blob list() → FAILED`)
    lines.push(`  Error: ${msg}`)
  }

  // Test issueSignedToken + presignUrl on first blob
  if (blobs.length > 0) {
    lines.push('')
    lines.push(`Testing issueSignedToken + presignUrl on first blob...`)
    try {
      const signedToken = await issueSignedToken({
        pathname: blobs[0].pathname,
        operations: ['get'],
        validUntil: Date.now() + 60_000,
      })
      const { presignedUrl: pUrl } = await presignUrl(signedToken, {
        operation: 'get',
        pathname: blobs[0].pathname,
        access: 'private',
      })
      lines.push(`  issueSignedToken → OK`)
      lines.push(`  presignedUrl: ${pUrl.slice(0, 100)}`)
      try {
        const testRes = await fetch(pUrl, { method: 'HEAD' })
        lines.push(`  HEAD presignedUrl → ${testRes.status} ${testRes.statusText}`)
        lines.push(`  content-type:   ${testRes.headers.get('content-type')}`)
        lines.push(`  content-length: ${testRes.headers.get('content-length')}`)
      } catch (e: unknown) {
        lines.push(`  HEAD presignedUrl → FAILED: ${e instanceof Error ? e.message : String(e)}`)
      }
    } catch (e: unknown) {
      lines.push(`  issueSignedToken → FAILED: ${e instanceof Error ? e.message : String(e)}`)
    }
  }

  lines.push('')
  lines.push('=== end ===')

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

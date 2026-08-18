import { NextRequest } from 'next/server'
import { list, issueSignedToken, presignUrl } from '@vercel/blob'

export const maxDuration = 30

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return new Response(JSON.stringify({ error: 'Invalid slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { blobs } = await list({ prefix: `podcasts/${slug}.wav`, limit: 1 })
    if (blobs.length > 0) {
      const blob = blobs[0]
      const signedToken = await issueSignedToken({
        pathname: blob.pathname,
        operations: ['get'],
        validUntil: Date.now() + 10 * 60 * 1000,
      })
      const { presignedUrl: audioUrl } = await presignUrl(signedToken, {
        operation: 'get',
        pathname: blob.pathname,
        access: 'private',
      })
      return Response.redirect(audioUrl, 302)
    }
  } catch {
    // Blob not configured or auth error
  }

  return new Response(
    JSON.stringify({ error: 'Podcast audio not yet available for this article.' }),
    { status: 503, headers: { 'Content-Type': 'application/json' } },
  )
}

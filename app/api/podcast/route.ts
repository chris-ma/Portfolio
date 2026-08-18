import { NextRequest } from 'next/server'
import { list } from '@vercel/blob'

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
      // downloadUrl is a signed URL valid for 600 s — works for private stores
      return Response.redirect(blobs[0].downloadUrl, 302)
    }
  } catch {
    // Blob not configured or auth error
  }

  return new Response(
    JSON.stringify({ error: 'Podcast audio not yet available for this article.' }),
    { status: 503, headers: { 'Content-Type': 'application/json' } },
  )
}

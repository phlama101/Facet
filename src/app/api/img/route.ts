import { NextRequest, NextResponse } from 'next/server'

// Only proxy from these trusted image hosts
const ALLOWED = new Set([
  'upload.wikimedia.org',
  'earthobservatory.nasa.gov',
  'photolib.noaa.gov',
  'images.unsplash.com',
])

// Served when the upstream image fails to load
const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <rect width="800" height="450" fill="#1a1f2e"/>
  <rect x="340" y="185" width="120" height="80" rx="6" fill="#2a3040" stroke="#3a4255" stroke-width="1.5"/>
  <line x1="350" y1="195" x2="450" y2="255" stroke="#3a4255" stroke-width="1.5"/>
  <line x1="450" y1="195" x2="350" y2="255" stroke="#3a4255" stroke-width="1.5"/>
  <text x="400" y="295" font-family="monospace" font-size="12" fill="#6b7280" text-anchor="middle">Image unavailable</text>
</svg>`

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get('url')
  if (!raw) return new NextResponse('Missing url', { status: 400 })

  let parsed: URL
  try { parsed = new URL(decodeURIComponent(raw)) } catch {
    return new NextResponse('Invalid url', { status: 400 })
  }

  if (!ALLOWED.has(parsed.hostname)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  try {
    const upstream = await fetch(parsed.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Facet/1.0; +https://facet.earth) AppleWebKit/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://commons.wikimedia.org/',
      },
      // 10 s timeout
      signal: AbortSignal.timeout(10_000),
    })

    if (!upstream.ok) {
      return new NextResponse(PLACEHOLDER_SVG, {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=60',
          'X-Image-Status': `upstream-${upstream.status}`,
        },
      })
    }

    const body = await upstream.arrayBuffer()
    const contentType = upstream.headers.get('content-type') ?? 'image/jpeg'

    if (!contentType.startsWith('image/') && !contentType.startsWith('application/octet-stream')) {
      return new NextResponse(PLACEHOLDER_SVG, {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=60',
          'X-Image-Status': 'unexpected-content-type',
        },
      })
    }

    return new NextResponse(body, {
      headers: {
        'Content-Type': contentType,
        // Cache 7 days on CDN, 1 day in browser, serve stale for up to 30 days while revalidating
        'Cache-Control': 'public, s-maxage=604800, max-age=86400, stale-while-revalidate=2592000',
        'Vary': 'Accept',
      },
    })
  } catch {
    return new NextResponse(PLACEHOLDER_SVG, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=30',
        'X-Image-Status': 'fetch-error',
      },
    })
  }
}

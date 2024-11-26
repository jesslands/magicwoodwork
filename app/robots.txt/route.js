import { MetadataRoute } from 'next'

export function GET() {
  return new Response(`User-agent: *
Allow: /

# Sitemaps
Sitemap: https://magicwoodwork.us/sitemap.xml`, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  })
}
const BASE_URL = 'https://podafultech.com';

const PUBLIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/affiliate-disclosure',
  '/disclaimer',
  '/free-operations-audit',
  '/inventory-assessment',
  '/portfolio/portfolio-loan-tracking',
  '/portfolio/portfolio-fabrication-pm',
  '/portfolio/portfolio-shipping-ai',
  '/portfolio/portfolio-hr-geofence',
] as const;

function xmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const urls = Array.from(
    new Set(
      PUBLIC_PATHS.map((path) => new URL(path, BASE_URL).toString())
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((loc) => `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

import type { MetadataRoute } from 'next';
import { site, publicationReady } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const production = publicationReady;
  if (!production) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: site.url + '/sitemap.xml', host: site.url };
}

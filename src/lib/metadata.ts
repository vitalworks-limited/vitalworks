import type { Metadata } from 'next';
import { site } from './site';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const ready = site.url.startsWith('https://') && !site.url.includes('.example');
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title + ' | Vitalworks Limited',
      description,
      url: new URL(path, site.url).toString(),
      siteName: site.name,
      type: 'website',
      locale: 'en_UG',
      images: [{url:'/brand/logo-primary.png',alt:'Vitalworks Limited — Purpose Driven'}],
    },
    twitter: { card: 'summary_large_image', title: title + ' | Vitalworks Limited', description },
    robots: { index: ready, follow: ready },
  };
}

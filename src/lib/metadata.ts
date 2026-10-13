import type { Metadata } from 'next';
import { site } from './site';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path },
    openGraph: { title: title + ' | Vitalworks Limited', description, url: new URL(path,site.url).toString(), siteName:site.name, type:'website', locale:'en_UG' },
    twitter: { card:'summary_large_image', title: title + ' | Vitalworks Limited', description },
    robots: { index: true, follow: true } };
}

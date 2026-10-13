import type { MetadataRoute } from 'next';
import { site, solutions } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
 if (site.url.includes('.example')) return [];
 const paths=['/','/company','/solutions',...solutions.map(s=>'/solutions/'+s.slug),'/products','/industries','/insights','/contact'];
 return paths.map(path=>({url:new URL(path,site.url).toString(),changeFrequency:path==='/'?'weekly' as const:'monthly' as const,priority:path==='/'?1:path.startsWith('/solutions/')?0.7:0.8}));
}

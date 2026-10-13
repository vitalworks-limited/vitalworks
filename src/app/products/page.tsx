import Link from 'next/link';
import type { Metadata } from 'next';
import { portfolio } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
 'Technology portfolio',
 'Explore selected Vitalworks technology initiatives, product concepts and platforms in development.',
 '/products'
);

export default function Products() {
 return <div className="portfolio-page">
  <section className="shell interior portfolio-intro">
   <p className="eyebrow">PRODUCTS / OUR PORTFOLIO</p>
   <h1>Technology designed for practical progress.</h1>
   <p className="intro">Our portfolio brings together platform initiatives across business operations, education, monitoring and digital services. Each initiative evolves independently, and availability must be confirmed before procurement or implementation.</p>
   <div className="portfolio-overview"><span>SELECTED PLATFORM INITIATIVES</span><strong>{String(portfolio.length).padStart(2,'0')}</strong><Link href="/contact">Discuss a platform <span aria-hidden="true">↗</span></Link></div>
  </section>
  <section className="portfolio-list" aria-label="Technology initiatives"><div className="shell">
   {portfolio.map((p,index)=><article key={p.name} className="portfolio-entry">
    <div className="portfolio-entry-meta"><span>{String(index+1).padStart(2,'0')} / {String(portfolio.length).padStart(2,'0')}</span><span>{p.category}</span></div>
    <div className="portfolio-entry-main"><div><h2>{p.name}</h2><p>{p.summary}</p></div><div className="portfolio-entry-aside"><span>{p.status}</span><Link href={'/contact?interest='+encodeURIComponent(p.name)} aria-label={'Enquire about '+p.name}>Enquire <span aria-hidden="true">↗</span></Link></div></div>
   </article>)}
  </div></section>
  <section className="shell portfolio-outro"><div><p className="eyebrow">OUR APPROACH</p><h2>Purpose before complexity.</h2></div><p>Good platforms are shaped by the context they serve. Our work emphasizes clear requirements, sound architecture, responsible data practices and ongoing improvement.</p></section>
 </div>;
}

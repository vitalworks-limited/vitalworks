import Link from 'next/link';
import type { Metadata } from 'next';
import { solutions } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('Technology solutions','Explore enterprise software, integration, cloud infrastructure, analytics, security and advisory solutions from Vitalworks Limited.','/solutions');

export default function Solutions() {
 return <div className="solutions-page">
  <section className="shell interior solutions-intro"><p className="eyebrow">SOLUTIONS / TECHNOLOGY EXPERTISE</p><h1>Complex challenges. Thoughtful engineering.</h1><p className="intro">From the earliest architecture decisions to deployment and operations, we help organizations approach technology with clarity, technical discipline and long-term purpose.</p></section>
  <section className="solutions-directory"><div className="shell"><p className="eyebrow">OUR CAPABILITIES</p>
   <div className="solutions-directory-list">{solutions.map((s,i)=><article key={s.slug} className="solution-feature"><span className="solution-index">{String(i+1).padStart(2,'0')}</span><div><h2><Link href={'/solutions/'+s.slug}>{s.name}</Link></h2><p>{s.lead}</p><p className="solution-detail">{s.detail}</p></div><Link className="solution-feature-link" href={'/solutions/'+s.slug} aria-label={'Explore '+s.name}>Explore <span aria-hidden="true">↗</span></Link></article>)}</div>
  </div></section>
  <section className="shell solutions-outro"><div><p className="eyebrow">LET'S COLLABORATE</p><h2>Build with a clear direction.</h2></div><Link className="button button-dark" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
 </div>;
}

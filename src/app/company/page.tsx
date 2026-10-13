import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
export const metadata:Metadata=pageMetadata('About Vitalworks Limited','Learn about Vitalworks Limited, its technology scope, engineering principles and approach to responsible digital solutions in Uganda.','/company');
const values=[
 {title:'Purpose in every decision',detail:'We prioritize clear problems, useful outcomes and solutions that match the people and environments they serve.'},
 {title:'Engineering with care',detail:'Reliable systems require maintainable architecture, security awareness, documentation and practical operational planning.'},
 {title:'Responsible collaboration',detail:'We advocate transparent delivery, considered stewardship of data and meaningful participation by stakeholders.'},
 {title:'Thinking beyond launch',detail:'Delivery is one milestone. Supportability, adaptability and long-term value shape how platforms should be designed.'}
];
export default function Company(){return <>
<section className="shell interior company-lead"><p className="eyebrow">COMPANY / PURPOSE DRIVEN</p><h1>Building technology that matters beyond the screen.</h1><div className="company-lead-bottom"><p className="intro">Vitalworks Limited is a private company registered in Uganda. Our corporate scope spans software and digital platforms, enterprise integration, data and AI, cybersecurity, cloud infrastructure, managed services, advisory and research.</p><Link href="/contact" className="text-link">Connect with us <span aria-hidden="true">↗</span></Link></div></section>
<section className="company-purpose"><div className="shell company-purpose-grid"><p className="eyebrow">OUR APPROACH / 01</p><div><h2>Considered solutions.<br/><em>Meaningful outcomes.</em></h2><p>We believe technology should address real needs, respect the environments where it operates and remain useful over time. That means balancing creativity and ambition with sound engineering, security, accessibility and operational realities.</p></div></div></section>
<section className="shell company-values"><div className="section-heading"><div><p className="eyebrow">OUR PRINCIPLES / 02</p><h2>Principles that shape the work.</h2></div></div><div className="values-list">{values.map((v,i)=><article key={v.title}><span>0{i+1}</span><div><h3>{v.title}</h3><p>{v.detail}</p></div></article>)}</div></section>
<section className="company-corporate"><div className="shell company-corporate-grid"><div><p className="eyebrow">CORPORATE SCOPE / 03</p><h2>Multiple disciplines.<br/>One considered approach.</h2></div><div><p>Our registered corporate objectives provide a broad foundation for technology research, engineering, integration and advisory work. Individual service availability, certifications and delivery arrangements are confirmed for each engagement.</p><Link className="text-link" href="/solutions">Explore our capabilities <span aria-hidden="true">↗</span></Link></div></div></section>
</>}

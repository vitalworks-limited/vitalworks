import Link from 'next/link';
import { site } from '@/lib/site';
export function Footer(){return <footer className="footer"><div className="shell">
 <div className="footer-top"><div><p className="eyebrow">VITALWORKS LIMITED</p><h2>Technology built around<br/>what matters.</h2><p>Engineering purposeful digital systems for organizations and communities.</p></div><Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
 <div className="footer-bottom"><span>© {new Date().getUTCFullYear()} Vitalworks Limited. All rights reserved.</span><nav aria-label="Footer navigation">{site.navigation.map(x=><Link key={x.href} href={x.href}>{x.title}</Link>)}</nav></div>
 </div></footer>}

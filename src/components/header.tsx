import Link from 'next/link';
import { site } from '@/lib/site';
export function Header() {
 return <header className="site-header"><div className="shell header-inner">
  <Link className="wordmark" href="/" aria-label="Vitalworks Limited home"><span className="wordmark-symbol" aria-hidden="true">V</span><span>VITALWORKS<span className="wordmark-limited">LIMITED</span></span></Link>
  <nav className="desktop-nav" aria-label="Primary navigation">{site.navigation.map(x=><Link key={x.href} href={x.href}>{x.title}</Link>)}</nav>
  <Link href="/contact" className="header-action">Let's talk <span aria-hidden="true">↗</span></Link>
  <details className="mobile-menu"><summary aria-label="Toggle navigation">Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Mobile navigation">{site.navigation.map(x=><Link key={x.href} href={x.href}>{x.title}</Link>)}</nav></details>
 </div></header>
}

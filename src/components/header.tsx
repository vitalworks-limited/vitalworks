'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export function Header() {
 const pathname = usePathname();
 const [open, setOpen] = useState(false);
 useEffect(() => setOpen(false), [pathname]);
 return <header className="site-header"><div className="shell header-inner">
  <Link className="brand-logo-link" href="/" aria-label="Vitalworks Limited home"><Image src="/brand/logo-primary.png" alt="Vitalworks — Purpose Driven" width={900} height={512} className="brand-logo" priority sizes="(max-width: 800px) 106px, 126px" /></Link>
  <nav className="desktop-nav" aria-label="Primary navigation">{site.navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?'page':undefined}>{item.title}</Link>)}</nav>
  <Link href="/contact" className="header-action">Let's talk <span aria-hidden="true">↗</span></Link>
  <div className="mobile-menu"><button type="button" className="mobile-menu-trigger" aria-expanded={open} aria-controls="mobile-site-nav" onClick={()=>setOpen(value=>!value)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button>
  {open&&<nav id="mobile-site-nav" className="mobile-site-nav" aria-label="Mobile navigation">{site.navigation.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} aria-current={pathname===item.href?'page':undefined}>{item.title}</Link>)}</nav>}</div>
 </div></header>;
}

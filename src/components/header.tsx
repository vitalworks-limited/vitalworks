'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site, solutions, portfolio } from '@/lib/site';

const groups = {
 Solutions: solutions.map(x=>({title:x.name,href:'/solutions/'+x.slug,description:x.lead})),
 Products: portfolio.map(x=>({title:x.name,href:'/products',description:x.category+' · '+x.status})),
};
export function Header(){
 const pathname=usePathname();
 const [mobileOpen,setMobileOpen]=useState(false);
 const [menu,setMenu]=useState<'Solutions'|'Products'|null>(null);
 const navRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{setMobileOpen(false);setMenu(null);},[pathname]);
 useEffect(()=>{
  function dismiss(e:KeyboardEvent){if(e.key==='Escape'){setMenu(null);setMobileOpen(false);}}
  function outside(e:PointerEvent){if(navRef.current&&!navRef.current.contains(e.target as Node))setMenu(null);}
  window.addEventListener('keydown',dismiss);document.addEventListener('pointerdown',outside);
  return ()=>{window.removeEventListener('keydown',dismiss);document.removeEventListener('pointerdown',outside)};
 },[]);
 return <header className="site-header"><div className="shell header-inner" ref={navRef}>
  <Link href="/" className="brand-logo-link" aria-label="Vitalworks Limited home"><Image src="/brand/logo-primary.png" alt="Vitalworks — Purpose Driven" width={900} height={512} className="brand-logo" priority sizes="(max-width: 800px) 106px, 126px"/></Link>
  <nav className="desktop-nav" aria-label="Primary navigation">{site.navigation.map(item=>{
   const hasMenu=item.title==='Solutions'||item.title==='Products';
   const selected=hasMenu?menu===item.title:false;
   return hasMenu?<div className="nav-group" key={item.href}><button type="button" aria-expanded={selected} aria-controls="nav-submenu" onClick={()=>setMenu(selected?null:item.title as 'Solutions'|'Products')} className={pathname.startsWith(item.href)?'nav-active':undefined}>{item.title}<span aria-hidden="true">⌄</span></button></div>
   :<Link href={item.href} key={item.href} aria-current={pathname===item.href?'page':undefined}>{item.title}</Link>;
  })}</nav>
  <Link href="/contact" className="header-action">Let's talk <span aria-hidden="true">↗</span></Link>
  <div className="mobile-menu"><button type="button" className="mobile-menu-trigger" aria-expanded={mobileOpen} aria-controls="mobile-site-nav" onClick={()=>setMobileOpen(x=>!x)}>{mobileOpen?'Close':'Menu'} <span aria-hidden="true">{mobileOpen?'×':'☰'}</span></button>
  {mobileOpen&&<nav className="mobile-site-nav" id="mobile-site-nav" aria-label="Mobile navigation">{site.navigation.map(item=><div key={item.href} className="mobile-nav-group"><Link href={item.href} aria-current={pathname===item.href?'page':undefined} onClick={()=>setMobileOpen(false)}>{item.title}</Link>{item.title==='Solutions'&&<div className="mobile-nav-children">{solutions.map(s=><Link key={s.slug} href={'/solutions/'+s.slug} onClick={()=>setMobileOpen(false)}>{s.name}</Link>)}</div>}</div>)}</nav>}</div>
  {menu&&<div className="mega-panel" id="nav-submenu" role="region" aria-label={menu+' navigation'}><div className="mega-heading"><div><p className="eyebrow">EXPLORE VITALWORKS</p><h2>{menu==='Solutions'?'Engineering for real-world needs':'Our technology portfolio'}</h2></div><Link href={menu==='Solutions'?'/solutions':'/products'} onClick={()=>setMenu(null)}>View all {menu.toLowerCase()} <span aria-hidden="true">↗</span></Link></div><div className="mega-links">{groups[menu].map(x=><Link href={x.href} key={x.title} onClick={()=>setMenu(null)}><strong>{x.title}</strong><small>{x.description}</small></Link>)}</div></div>}
 </div></header>;
}

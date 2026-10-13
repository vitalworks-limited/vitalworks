'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site, solutions, portfolio } from '@/lib/site';

type MenuName = 'Solutions' | 'Products';
const menuContent = {
 Solutions: {
  eyebrow: 'OUR EXPERTISE',
  heading: 'Technology built around your goals.',
  description: 'Explore the disciplines that help organizations design, connect and operate dependable digital solutions.',
  href: '/solutions',
  links: solutions.map(item => ({ title: item.name, href: '/solutions/' + item.slug, detail: item.lead }))
 },
 Products: {
  eyebrow: 'TECHNOLOGY PORTFOLIO',
  heading: 'Platforms with practical purpose.',
  description: 'Discover our platform initiatives. Availability and implementation arrangements are confirmed individually.',
  href: '/products',
  links: portfolio.map(item => ({ title: item.name, href: '/products#' + item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), detail: item.category + ' · ' + item.status }))
 }
};

export function Header() {
 const pathname = usePathname();
 const [menu, setMenu] = useState<MenuName | null>(null);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [mobileSection, setMobileSection] = useState<MenuName | null>(null);
 const headerRef = useRef<HTMLElement>(null);
 const navToggleRef = useRef<HTMLButtonElement>(null);
 const menuTriggerRefs = useRef<Partial<Record<MenuName, HTMLButtonElement | null>>>({});
 const mobileTriggerRef = useRef<HTMLButtonElement>(null);

 useEffect(() => { setMenu(null); setMobileOpen(false); setMobileSection(null); }, [pathname]);
 useEffect(() => {
  function keydown(event: KeyboardEvent) {
   if (event.key !== 'Escape') return;
   if (menu) { menuTriggerRefs.current[menu]?.focus(); setMenu(null); }
   if (mobileOpen) { mobileTriggerRef.current?.focus(); setMobileOpen(false); }
  }
  function outside(event: PointerEvent) {
   if (!headerRef.current?.contains(event.target as Node)) { setMenu(null); setMobileOpen(false); }
  }
  document.addEventListener('keydown', keydown);
  document.addEventListener('pointerdown', outside);
  return () => { document.removeEventListener('keydown', keydown); document.removeEventListener('pointerdown', outside); };
 }, [menu, mobileOpen]);

 const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
 const closeNavigation = () => { setMenu(null); setMobileOpen(false); setMobileSection(null); };
 const selected = menu ? menuContent[menu] : null;

 return <header ref={headerRef} className="site-header">
  <div className="shell header-inner">
   <Link href="/" className="brand-logo-link" aria-label="Vitalworks Limited home" onClick={closeNavigation}>
    <Image src="/brand/logo-primary.png" alt="Vitalworks Limited — Purpose Driven" width={900} height={512} priority className="brand-logo" sizes="(max-width: 800px) 120px, 150px"/>
   </Link>

   <nav className="desktop-nav" aria-label="Main navigation">
    {site.navigation.filter(item => item.title !== 'Contact').map(item => {
     const expandable = item.title === 'Solutions' || item.title === 'Products';
     if (expandable) {
      const name = item.title as MenuName;
      const expanded = menu === name;
      return <div className="nav-group" key={item.href}>
       <button ref={node => { menuTriggerRefs.current[name] = node; }} type="button" className={'nav-trigger' + (active(item.href) ? ' nav-active' : '')}
        aria-expanded={expanded} aria-controls={expanded ? 'vitalworks-mega-panel' : undefined}
        onClick={() => setMenu(expanded ? null : name)}>
        {item.title} <span className={'nav-chevron' + (expanded ? ' is-open' : '')} aria-hidden="true">⌄</span>
       </button>
      </div>;
     }
     return <Link key={item.href} href={item.href} className={active(item.href) ? 'nav-active' : undefined} aria-current={active(item.href) ? 'page' : undefined} onClick={() => setMenu(null)}>{item.title}</Link>;
    })}
   </nav>
   <Link href="/contact" className="header-action" onClick={closeNavigation}>Let's talk <span aria-hidden="true">↗</span></Link>
   <button ref={mobileTriggerRef} className="mobile-menu-trigger nav-mobile-toggle" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="vitalworks-mobile-nav"
    onClick={() => { setMobileOpen(open => !open); setMenu(null); }}>
    <span>{mobileOpen ? 'Close' : 'Menu'}</span><span className="mobile-toggle-glyph" aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
   </button>
  </div>

  {selected && <div className="mega-panel" id="vitalworks-mega-panel" role="region" aria-label={menu + ' navigation'}>
   <div className="shell mega-layout">
    <div className="mega-intro">
     <p className="eyebrow">{selected.eyebrow}</p>
     <h2>{selected.heading}</h2>
     <p>{selected.description}</p>
     <Link href={selected.href} className="mega-all" onClick={closeNavigation}>Explore all {menu?.toLowerCase()} <span aria-hidden="true">↗</span></Link>
    </div>
    <div className="mega-links">
     {selected.links.map((entry, index) => <Link key={entry.href} href={entry.href} onClick={closeNavigation} className="mega-link">
      <span className="mega-link-index">{String(index + 1).padStart(2, '0')}</span>
      <span><strong>{entry.title}</strong><small>{entry.detail}</small></span>
      <span className="mega-link-arrow" aria-hidden="true">↗</span>
     </Link>)}
    </div>
   </div>
  </div>}

  <nav id="vitalworks-mobile-nav" className={'mobile-drawer' + (mobileOpen ? ' is-open' : '')} aria-label="Mobile navigation" inert={!mobileOpen}>
   <div className="mobile-drawer-inner">
    {site.navigation.filter(item => item.title !== 'Contact').map(item => {
     const expandable = item.title === 'Solutions' || item.title === 'Products';
     if (!expandable) return <Link key={item.href} href={item.href} className="mobile-top-link" aria-current={active(item.href) ? 'page' : undefined} onClick={closeNavigation}>{item.title}<span aria-hidden="true">↗</span></Link>;
     const name = item.title as MenuName;
     const opened = mobileSection === name;
     return <div className="mobile-nav-group" key={name}>
      <div className="mobile-nav-heading"><Link href={item.href} onClick={closeNavigation}>{name}</Link>
       <button type="button" aria-label={(opened ? 'Collapse ' : 'Expand ') + name} aria-expanded={opened} aria-controls={'mobile-'+name.toLowerCase()+'-links'}
        onClick={() => setMobileSection(opened ? null : name)}><span aria-hidden="true">{opened ? '−' : '+'}</span></button></div>
      <div id={'mobile-'+name.toLowerCase()+'-links'} className="mobile-nav-children" hidden={!opened}>
       {menuContent[name].links.map(entry => <Link key={entry.href} href={entry.href} onClick={closeNavigation}>{entry.title}</Link>)}
      </div>
     </div>;
    })}
    <Link href="/contact" className="mobile-contact-link" onClick={closeNavigation}>Let's talk <span aria-hidden="true">↗</span></Link>
   </div>
  </nav>
 </header>;
}

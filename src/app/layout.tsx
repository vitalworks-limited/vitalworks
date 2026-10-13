import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export const metadata: Metadata = {
 metadataBase: new URL(site.url),
 title:{default:'Vitalworks Limited | Technology & Digital Engineering',template:'%s | Vitalworks Limited'},
 description:site.description,
 applicationName:site.name,
 icons:{icon:[{url:'/brand/brand-symbol-orange.png',type:'image/png'}],apple:'/brand/brand-symbol-orange.png'},
 alternates:{canonical:'/'},
 openGraph:{type:'website',locale:'en_UG',siteName:site.name,title:'Vitalworks Limited | Technology & Digital Engineering',description:site.description,url:site.url,images:[{url:'/brand/logo-primary.png',alt:'Vitalworks Limited — Purpose Driven'}]},
 robots: site.url.includes('.example') ? {index:false,follow:false} : {index:true,follow:true},
};
export const viewport: Viewport = {width:'device-width',initialScale:1,themeColor:'#f7f8fa'};
export default function RootLayout({children}:{children:React.ReactNode}){
 const organization={ '@context':'https://schema.org','@type':'Organization',name:site.name,url:site.url,description:site.description,areaServed:{'@type':'Country',name:'Uganda'} };
 return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,'\\u003c')}}/></body></html>
}

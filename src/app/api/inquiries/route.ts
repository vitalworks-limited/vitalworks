import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';
const allowedSubjects = new Set(['Software & platforms','Enterprise integration','Cloud & infrastructure','Data, analytics & AI','Cybersecurity & privacy','Managed services & advisory','Partnerships','Other inquiry']);
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function stringValue(value:unknown,max:number){return typeof value==='string'?value.trim().slice(0,max+1):'';}
export async function POST(request:NextRequest) {
 const destination=process.env.INQUIRY_WEBHOOK_URL;
 if(!destination) return NextResponse.json({error:'Service unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});
 let url:URL;
 try {url=new URL(destination);if(url.protocol!=='https:')throw Error('HTTPS required');}catch{return NextResponse.json({error:'Service unavailable'},{status:503});}
 const origin=request.headers.get('origin');
 if(origin && origin!==new URL(request.url).origin) return NextResponse.json({error:'Forbidden'},{status:403});
 const size=Number(request.headers.get('content-length')||0);
 if(size>12000)return NextResponse.json({error:'Payload too large'},{status:413});
 let data:Record<string,unknown>;
 try {const body=await request.json(); if(!body||typeof body!=='object'||Array.isArray(body))throw Error('Invalid');data=body;}catch{return NextResponse.json({error:'Invalid request'},{status:400});}
 const name=stringValue(data.name,120), email=stringValue(data.email,254), organization=stringValue(data.organization,160), subject=stringValue(data.subject,120), message=stringValue(data.message,4000), website=stringValue(data.website,300);
 if(website) return NextResponse.json({ok:true},{status:202});
 if(!name||name.length>120||!emailPattern.test(email)||email.length>254||organization.length>160||!allowedSubjects.has(subject)||message.length<20||message.length>4000||data.consent!==true) return NextResponse.json({error:'Invalid fields'},{status:400});
 try{
   const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.INQUIRY_WEBHOOK_TOKEN?{'Authorization':'Bearer '+process.env.INQUIRY_WEBHOOK_TOKEN}:{})},body:JSON.stringify({name,email,organization,subject,message,consent:true,receivedAt:new Date().toISOString()}),cache:'no-store',signal:AbortSignal.timeout(8000)});
   if(!response.ok)throw Error('Delivery failed');
   return NextResponse.json({ok:true},{status:202,headers:{'Cache-Control':'no-store'}});
 }catch{return NextResponse.json({error:'Delivery unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});}
}

import { existsSync,readFileSync } from 'node:fs';
import { validateWebhookDestination } from '../src/lib/webhook-destination.mjs';
export function checkRelease(root=process.cwd(),env=process.env){
 const failures=[];
 if(!existsSync(root+'/package-lock.json'))failures.push('Missing package-lock.json');
 if(existsSync(root+'/package-lock.json')){
  try{
   const pkg=JSON.parse(readFileSync(root+'/package.json','utf8'));
   const lock=JSON.parse(readFileSync(root+'/package-lock.json','utf8'));
   if(lock.name!==pkg.name||lock.version!==pkg.version||lock.lockfileVersion<2)failures.push('Lockfile metadata mismatch');
   for(const group of ['dependencies','devDependencies'])for(const [name,range] of Object.entries(pkg[group]||{}))if(lock.packages?.['']?.[group]?.[name]!==range)failures.push('Lockfile mismatch: '+name);
  }catch{failures.push('Invalid dependency manifest');}
 }
 if(env.VITALWORKS_RELEASE==='production'){
  try{const url=new URL(env.NEXT_PUBLIC_SITE_URL);if(url.protocol!=='https:'||url.pathname!=='/'||url.hostname.endsWith('.example'))throw Error();}catch{failures.push('Invalid production domain');}
  if(!validateWebhookDestination(env.INQUIRY_WEBHOOK_URL,env.INQUIRY_WEBHOOK_ALLOWED_HOST))failures.push('Invalid or unapproved inquiry receiver configuration');
 }
 return {ok:failures.length===0,failures};
}
if(process.argv[1]?.endsWith('release-preflight.mjs')){
 const result=checkRelease();for(const failure of result.failures)console.error('ERROR:',failure);console.log(result.ok?'Preflight passed':'Preflight failed');if(!result.ok)process.exitCode=1;
}

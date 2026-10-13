import { existsSync,readFileSync } from 'node:fs';
import { isApprovedPublicationUrl } from '../src/lib/publication.mjs';
import { validateWebhookDestination } from '../src/lib/webhook-destination.mjs';
function hasValidIntegrity(raw) {
 if (typeof raw !== 'string') return false;
 return raw.trim().split(/\\s+/).some(token => {
  const match = /^(sha512|sha384|sha256)-([A-Za-z0-9+/]+={0,2})$/.exec(token);
  if (!match) return false;
  const length = match[1] === 'sha512' ? 64 : match[1] === 'sha384' ? 48 : 32;
  const bytes = Buffer.from(match[2], 'base64');
  return bytes.byteLength === length && bytes.toString('base64') === match[2];
 });
}
export function checkRelease(root=process.cwd(),env=process.env){
 const failures=[];
 if(!existsSync(root+'/package-lock.json'))failures.push('Missing package-lock.json');
 if(existsSync(root+'/package-lock.json')){
  try{
   const pkg=JSON.parse(readFileSync(root+'/package.json','utf8'));
   const lock=JSON.parse(readFileSync(root+'/package-lock.json','utf8'));
   if(lock.name!==pkg.name||lock.version!==pkg.version||lock.lockfileVersion<2)failures.push('Lockfile metadata mismatch');
   for(const group of ['dependencies','devDependencies'])for(const [name,range] of Object.entries(pkg[group]||{})){
    if(lock.packages?.['']?.[group]?.[name]!==range)failures.push('Lockfile mismatch: '+name);
    const resolved=lock.packages?.['node_modules/'+name];
    if(!resolved || typeof resolved.version!=='string' || typeof resolved.resolved!=='string' || !resolved.resolved.startsWith('https://registry.npmjs.org/') || typeof resolved.integrity!=='string' || !hasValidIntegrity(resolved.integrity))failures.push('Missing npm resolution/integrity for '+name);
   }
  }catch{failures.push('Invalid dependency manifest');}
 }
 if(env.VITALWORKS_RELEASE==='production'){
  if(env.NEXT_PUBLIC_SITE_PUBLISHED!=='true')failures.push('Website publication has not been explicitly approved');
  if(!isApprovedPublicationUrl(env.NEXT_PUBLIC_SITE_URL))failures.push('Invalid production domain');
  if(!validateWebhookDestination(env.INQUIRY_WEBHOOK_URL,env.INQUIRY_WEBHOOK_ALLOWED_HOST))failures.push('Invalid or unapproved inquiry receiver configuration');
 }
 return {ok:failures.length===0,failures};
}
if(process.argv[1]?.endsWith('release-preflight.mjs')){
 const result=checkRelease();for(const failure of result.failures)console.error('ERROR:',failure);console.log(result.ok?'Preflight passed':'Preflight failed');if(!result.ok)process.exitCode=1;
}

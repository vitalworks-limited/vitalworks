import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const base=process.cwd();
const failures=[];
const required=[
 'package.json','src/app/layout.tsx','src/app/page.tsx',
 'src/app/robots.ts','src/app/sitemap.ts','src/app/not-found.tsx',
 'src/app/company/page.tsx','src/app/solutions/page.tsx',
 'src/app/solutions/[slug]/page.tsx','src/app/products/page.tsx',
 'src/app/industries/page.tsx','src/app/insights/page.tsx',
 'src/app/contact/page.tsx','src/app/api/inquiries/route.ts',
 'src/components/header.tsx','src/components/footer.tsx',
 'src/lib/inquiry-validation.mjs','tests/inquiry-validation.test.mjs',
 'public/brand/logo-primary.png','public/brand/logo-reversed.png',
 'public/brand/brand-symbol-orange.png','public/brand/brand-symbol-navy.png',
];
for(const path of required) {
 if(!existsSync(join(base,path)))failures.push('Missing: '+path);
}
const checks=[
 ['src/app/layout.tsx',['metadataBase','application/ld+json','skip-link']],
 ['src/app/sitemap.ts',['MetadataRoute.Sitemap','/company','/products']],
 ['src/app/robots.ts',['MetadataRoute.Robots','sitemap']],
 ['src/components/header.tsx',['aria-expanded','aria-controls','aria-label']],
 ['src/app/api/inquiries/route.ts',['parseInquiry','INQUIRY_WEBHOOK_URL','MAX_INQUIRY_BYTES']],
];
for(const [path,markers] of checks) {
 const file=join(base,path);
 if(!existsSync(file))continue;
 const content=readFileSync(file,'utf8');
 for(const marker of markers)if(!content.includes(marker))failures.push(path+': missing '+marker);
}
for(const logo of ['logo-primary.png','logo-reversed.png','brand-symbol-orange.png','brand-symbol-navy.png']){
 const path=join(base,'public/brand',logo);
 if(!existsSync(path))continue;
 const sig=readFileSync(path).subarray(0,8);
 if(!sig.equals(Buffer.from([137,80,78,71,13,10,26,10])))failures.push('Not PNG: '+logo);
}
assert.equal(failures.length,0,failures.join('\n'));
console.log('Vitalworks repository smoke checks passed ('+required.length+' required files).');

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkRelease } from '../scripts/release-preflight.mjs';
test('missing lockfile blocks release', () => {
 const root=mkdtempSync(join(tmpdir(),'vitalworks-release-'));
 try {const result=checkRelease(root,{});assert.equal(result.ok,false);assert.match(result.failures.join(' '),/package-lock/);} finally {rmSync(root,{recursive:true,force:true});}
});

import { writeFileSync } from 'node:fs';
function withManifest(fn) {
 const root=mkdtempSync(join(tmpdir(),'vitalworks-check-'));
 try {
  writeFileSync(join(root,'package.json'),JSON.stringify({name:'website',version:'1.0.0',dependencies:{next:'^15'}}));
  writeFileSync(join(root,'package-lock.json'),JSON.stringify({name:'website',version:'1.0.0',lockfileVersion:3,packages:{'':{dependencies:{next:'^15'}}}}));
  fn(root);
 } finally {rmSync(root,{recursive:true,force:true});}
}
test('matching lockfile passes dependency gate',()=>withManifest(root=>assert.equal(checkRelease(root,{}).ok,true)));
test('mismatched package lock rejected',()=>withManifest(root=>{
 writeFileSync(join(root,'package-lock.json'),JSON.stringify({name:'website',version:'1.0.0',lockfileVersion:3,packages:{'':{dependencies:{next:'^14'}}}}));
 assert.equal(checkRelease(root,{}).ok,false);
}));
test('production requires domain and inquiry destination',()=>withManifest(root=>assert.equal(checkRelease(root,{VITALWORKS_RELEASE:'production'}).ok,false)));
test('configured production passes basic preflight',()=>withManifest(root=>assert.equal(checkRelease(root,{VITALWORKS_RELEASE:'production',NEXT_PUBLIC_SITE_URL:'https://vitalworks.test',INQUIRY_WEBHOOK_URL:'https://hooks.vitalworks.test/inquiries',INQUIRY_WEBHOOK_ALLOWED_HOST:'hooks.vitalworks.test'}).ok,true)));

test('production rejects HTTP inquiry receiver',()=>withManifest(root=>assert.equal(checkRelease(root,{VITALWORKS_RELEASE:'production',NEXT_PUBLIC_SITE_URL:'https://vitalworks.test',INQUIRY_WEBHOOK_URL:'http://hooks.vitalworks.test/inquiries',INQUIRY_WEBHOOK_ALLOWED_HOST:'hooks.vitalworks.test'}).ok,false)));
test('production rejects unapproved inquiry host',()=>withManifest(root=>assert.equal(checkRelease(root,{VITALWORKS_RELEASE:'production',NEXT_PUBLIC_SITE_URL:'https://vitalworks.test',INQUIRY_WEBHOOK_URL:'https://other.test/inquiries',INQUIRY_WEBHOOK_ALLOWED_HOST:'hooks.vitalworks.test'}).ok,false)));

test('production rejects credentialed and queried site origin',()=>withManifest(root=>{
 const base={VITALWORKS_RELEASE:'production',INQUIRY_WEBHOOK_URL:'https://hooks.vitalworks.test/inquiries',INQUIRY_WEBHOOK_ALLOWED_HOST:'hooks.vitalworks.test'};
 assert.equal(checkRelease(root,{...base,NEXT_PUBLIC_SITE_URL:'https://user:password@vitalworks.test'}).ok,false);
 assert.equal(checkRelease(root,{...base,NEXT_PUBLIC_SITE_URL:'https://vitalworks.test/?source=test'}).ok,false);
}));

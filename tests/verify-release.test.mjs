import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

test('release command stops before invoking npm if required lockfile is absent', () => {
 const root = mkdtempSync(join(tmpdir(), 'vitalworks-release-'));
 try {
  mkdirSync(join(root,'scripts'));
  mkdirSync(join(root,'src','lib'),{recursive:true});
  const required = ['scripts/verify-release.mjs','scripts/release-preflight.mjs','src/lib/webhook-destination.mjs'];
  for (const file of required) {
   const content = readFileSync(new URL('../'+file, import.meta.url),'utf8');
   writeFileSync(join(root,file),content);
  }
  writeFileSync(join(root,'package.json'),JSON.stringify({name:'test',version:'0.0.0'}));
  const run = spawnSync(process.execPath,[join(root,'scripts/verify-release.mjs')],{
   cwd:root,encoding:'utf8',env:{...process.env,NEXT_PUBLIC_SITE_PUBLISHED:'true',NEXT_PUBLIC_SITE_URL:'https://vitalworks.test',INQUIRY_WEBHOOK_URL:'https://hooks.vitalworks.test/submit',INQUIRY_WEBHOOK_ALLOWED_HOST:'hooks.vitalworks.test'}
  });
  assert.equal(run.status,1);
  assert.match(run.stderr,/Missing package-lock\.json/);
 } finally { rmSync(root,{recursive:true,force:true}); }
});

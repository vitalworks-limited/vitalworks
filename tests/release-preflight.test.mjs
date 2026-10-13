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

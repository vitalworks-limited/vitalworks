import test from 'node:test';
import assert from 'node:assert/strict';
import { canPublish, isApprovedPublicationUrl } from '../src/lib/publication.mjs';
test('requires explicit publication authorization',()=>assert.equal(canPublish({NEXT_PUBLIC_SITE_URL:'https://www.vitalworks.test'}),false));
test('accepts valid approved-format HTTPS origin',()=>assert.equal(canPublish({NEXT_PUBLIC_SITE_URL:'https://www.vitalworks.test',NEXT_PUBLIC_SITE_PUBLISHED:'true'}),true));
test('rejects malformed or unapproved origins',()=>{for(const url of ['https://www.vitalworks.example','http://www.vitalworks.test','https://user:pass@www.vitalworks.test','https://www.vitalworks.test:8443','https://www.vitalworks.test/path','https://www.vitalworks.test/?x=1','https://localhost','not-a-url'])assert.equal(isApprovedPublicationUrl(url),false,url);});

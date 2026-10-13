import test from 'node:test';
import assert from 'node:assert/strict';
import { parseInquiry, MAX_INQUIRY_BYTES, isJsonContentType } from '../src/lib/inquiry-validation.mjs';
const valid = {name:'Jane Example',email:'jane@example.org',organization:'Example Ltd',subject:'Enterprise integration',message:'We are planning a secure software integration project.',consent:true};
test('accepts and trims valid inquiry',()=>{const r=parseInquiry(JSON.stringify({...valid,name:' Jane Example '}));assert.equal(r.value.name,'Jane Example');});
test('rejects invalid email',()=>assert.equal(parseInquiry(JSON.stringify({...valid,email:'not-an-email'})).status,400));
test('requires consent',()=>assert.equal(parseInquiry(JSON.stringify({...valid,consent:false})).status,400));
test('rejects unknown topic',()=>assert.equal(parseInquiry(JSON.stringify({...valid,subject:'Other'})).status,400));
test('rejects long form content',()=>assert.equal(parseInquiry(JSON.stringify({...valid,message:'a'.repeat(4001)})).status,400));
test('rejects short messages',()=>assert.equal(parseInquiry(JSON.stringify({...valid,message:'short'})).status,400));
test('rejects long name instead of truncating it',()=>assert.equal(parseInquiry(JSON.stringify({...valid,name:'x'.repeat(121)})).status,400));
test('handles malformed JSON',()=>assert.equal(parseInquiry('{').status,400));
test('rejects arrays',()=>assert.equal(parseInquiry('[]').status,400));
test('rejects >12kb actual UTF-8 bytes',()=>assert.equal(parseInquiry('a'.repeat(MAX_INQUIRY_BYTES+1)).status,413));
test('honeypot discards bot submissions',()=>assert.equal(parseInquiry(JSON.stringify({...valid,website:'http://spam.invalid'})).spam,true));

test('accepts JSON MIME type with charset',()=>assert.equal(isJsonContentType('application/json; charset=utf-8'),true));
test('rejects plain text and forged JSON MIME types',()=>{assert.equal(isJsonContentType('text/plain'),false);assert.equal(isJsonContentType('application/json-fake'),false);});

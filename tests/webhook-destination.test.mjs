import test from 'node:test';
import assert from 'node:assert/strict';
import { validateWebhookDestination } from '../src/lib/webhook-destination.mjs';

test('accept approved HTTPS webhook',()=>assert.equal(validateWebhookDestination('https://hooks.example.com/receive','hooks.example.com')?.pathname,'/receive'));
test('reject absent approval',()=>assert.equal(validateWebhookDestination('https://hooks.example.com/receive',''),null));
test('reject unapproved host or lookalike',()=>{
 assert.equal(validateWebhookDestination('https://other.example.com/path','hooks.example.com'),null);
 assert.equal(validateWebhookDestination('https://hooks.example.com.evil.test/path','hooks.example.com'),null);
});
test('reject non-HTTPS and credentials',()=>{
 assert.equal(validateWebhookDestination('http://hooks.example.com/path','hooks.example.com'),null);
 assert.equal(validateWebhookDestination('https://user:pass@hooks.example.com/path','hooks.example.com'),null);
});
test('reject private, loopback and metadata targets',()=>{
 for(const h of ['localhost','127.0.0.1','10.10.0.1','172.16.0.1','192.168.1.1','169.254.169.254','100.64.0.1','service.internal','[::1]']) {
  assert.equal(validateWebhookDestination('https://'+h+'/inquiries',h.replace(/^\[|\]$/g,'')),null,h);
 }
});
test('reject fragments and unexpected ports',()=>{
 assert.equal(validateWebhookDestination('https://hooks.example.com:8443/path','hooks.example.com'),null);
 assert.equal(validateWebhookDestination('https://hooks.example.com/path#secret','hooks.example.com'),null);
});

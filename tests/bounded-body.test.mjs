import test from 'node:test';
import assert from 'node:assert/strict';
import { readBoundedBody } from '../src/lib/bounded-body.mjs';
function stream(chunks) { return new ReadableStream({start(controller){ for(const chunk of chunks)controller.enqueue(new TextEncoder().encode(chunk));controller.close(); }}); }
test('reads bounded content',async()=>assert.equal((await readBoundedBody(stream(['hel','lo']),5)).text,'hello'));
test('rejects extra bytes across chunks',async()=>assert.equal((await readBoundedBody(stream(['abc','def']),5)).status,413));
test('counts UTF-8 bytes rather than characters',async()=>assert.equal((await readBoundedBody(stream(['éé']),3)).status,413));
test('rejects missing stream',async()=>assert.equal((await readBoundedBody(null,12)).status,400));
test('rejects invalid UTF-8',async()=>{const s=new ReadableStream({start(c){c.enqueue(Uint8Array.of(255));c.close();}});assert.equal((await readBoundedBody(s,4)).status,400)});

test('rejects already-locked request stream without throwing',async()=>{
 const s=stream(['ok']);
 const lock=s.getReader();
 try{assert.equal((await readBoundedBody(s,10)).status,400);}finally{lock.releaseLock();}
});

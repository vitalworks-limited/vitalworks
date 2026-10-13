export async function readBoundedBody(body, maxBytes) {
 if (!body || !Number.isSafeInteger(maxBytes) || maxBytes < 1) return { error: 'Invalid request', status: 400 };
 let reader;
 try { reader = body.getReader(); } catch { return { error: 'Invalid request', status: 400 }; }
 const chunks = [];
 let total = 0;
 try {
  for (;;) {
   const { done, value } = await reader.read();
   if (done) break;
   if (!(value instanceof Uint8Array)) return { error: 'Invalid request', status: 400 };
   total += value.byteLength;
   if (total > maxBytes) return { error: 'Payload too large', status: 413 };
   chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return { text: new TextDecoder('utf-8', { fatal: true }).decode(bytes) };
 } catch {
  return { error: 'Invalid request', status: 400 };
 } finally {
  try { await reader.cancel(); } catch { /* stream may already be closed */ }
  try { reader.releaseLock(); } catch { /* already released */ }
 }
}

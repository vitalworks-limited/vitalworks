import { NextRequest, NextResponse } from 'next/server';
import { parseInquiry, MAX_INQUIRY_BYTES, isJsonContentType } from '@/lib/inquiry-validation.mjs';
import { validateWebhookDestination } from '@/lib/webhook-destination.mjs';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
 const destination = process.env.INQUIRY_WEBHOOK_URL;
 if (!destination) return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
 const url = validateWebhookDestination(destination, process.env.INQUIRY_WEBHOOK_ALLOWED_HOST);
 if (!url) return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
 const origin = request.headers.get('origin');
 if (origin && origin !== new URL(request.url).origin) {
   return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
 }
 const contentType = request.headers.get('content-type') || '';
 if (!isJsonContentType(contentType)) return NextResponse.json({ error: 'JSON required' }, { status: 415 });
 const declaredLength = Number(request.headers.get('content-length') || 0);
 if (declaredLength > MAX_INQUIRY_BYTES) return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
 let raw: string;
 try {
   raw = await request.text();
 } catch {
   return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
 }
 const parsed = parseInquiry(raw);
 if ('spam' in parsed) return NextResponse.json({ ok: true }, { status: 202 });
 if ('error' in parsed) return NextResponse.json({ error: parsed.error }, { status: parsed.status });
 const payload = parsed.value;
 try {
   const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       ...(process.env.INQUIRY_WEBHOOK_TOKEN ? { Authorization: 'Bearer ' + process.env.INQUIRY_WEBHOOK_TOKEN } : {}),
     },
     body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
     cache: 'no-store',
     redirect: 'error',
     signal: AbortSignal.timeout(8000),
   });
   if (!response.ok) throw Error('Delivery failed');
   return NextResponse.json({ ok: true }, { status: 202, headers: { 'Cache-Control': 'no-store' } });
 } catch {
   return NextResponse.json({ error: 'Delivery unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
 }
}

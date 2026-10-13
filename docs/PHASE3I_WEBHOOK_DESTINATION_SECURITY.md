# Phase 3I — Inquiry Webhook Destination Controls

Date: 2026-10-13

## Committed changes

1. Added `INQUIRY_WEBHOOK_ALLOWED_HOST` to require an explicitly approved receiving host; absence fails closed with a 503 response.
2. Added shared `validateWebhookDestination` helper with TypeScript declaration and six dedicated regression tests.
3. Rejects HTTP, credentials, URL fragments, unexpected ports, host mismatch, localhost/local/internal hostnames, private/loopback/reserved IPv4 addresses, and IPv6 literals.
4. Existing `redirect: 'error'` remains enforced on webhook delivery.
5. Updated `.env.example` to document server-side inquiry secrets and host approval.

## Executed checks

- Local Node.js v22.16.0 verification of a copy of the committed `validateWebhookDestination` implementation: **6 passed, 0 failed**.
- Checks covered approved destinations, absent approval, host lookalikes, credentials/schemes, internal addresses, unexpected ports, and URL fragments.
- Repository's committed test file contains corresponding regression cases, but these were not run against a full git checkout.

## Security limitations

**An allowlisted hostname and public-looking literal URL do not eliminate DNS rebinding or DNS responses to private addresses.** For production, deploy via an egress gateway/proxy with DNS/IP restrictions, deny RFC1918/link-local/loopback and metadata ranges, and monitor/alert on denied requests. Keep the approved webhook host and token private in server configuration, validate the integration receiver, and enforce request rate limiting.

## Unresolved release gates

- Dependency resolution and committed package-lock.json; GitHub and npm registry DNS unavailable in the execution container.
- Full `npm ci && npm run verify` and real Next.js build.
- Webhook integration tests, rate limiting, privacy/retention requirements and security review.
- Browser accessibility and mobile testing; deployed Lighthouse performance/SEO metrics.
- Verified public company contacts and approved production site hostname.

**Status:** New URL-validation regression checks pass locally, but Phase 3I and the website remain **not production-certified**.

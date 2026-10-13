# Phase 3 — Inquiry service and release verification

## Implemented
- Responsive two-column corporate contact page, mobile single-column layout.
- Accessible labels, required fields, input lengths, status announcements and consent checkbox.
- Server-side validation and HTTPS webhook delivery adapter.
- Origin mismatch rejection, JSON size check, honeypot detection, bounded delivery timeout.
- No fabricated company email or telephone is published.
- No indexing on the placeholder hostname.

## Required production configuration
- `NEXT_PUBLIC_SITE_URL`: approved HTTPS website origin (no trailing slash).
- `INQUIRY_WEBHOOK_URL`: approved server-to-server HTTPS receiving endpoint.
- `INQUIRY_WEBHOOK_TOKEN`: optional bearer authentication token (server secret).
- Publish accurate controller/contact information and a reviewed privacy notice before enabling inquiries.

**Security/operations:** The basic form protections do not provide complete abuse prevention. Configure IP- and identity-aware rate limiting at the reverse proxy or edge, bot controls, audit/alerting, a tested delivery retry policy, encryption, retention/erasure policy, webhook source restrictions, and a compliant destination for personal data before production activation. Only configure webhook targets under organizational control.

## QA checks (not yet executed)
```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

Test UI at 360/390/768/1024/1440 pixel widths; keyboard navigation; mobile menu focus/close; request failure; consent and validation; malicious payloads; webhook downtime and timeout; mobile and desktop Lighthouse scores; sitemap; crawlability, canonical URLs; validated URL security and privacy.

## Open release blockers
1. External Git access is unavailable from the execution container: `Could not resolve host: github.com`. GitHub connector writes succeed, but a local executable checkout and dependency installation were not possible.
2. No live production URL provided for Lighthouse.
3. Inquiry delivery endpoint and public privacy notice not yet configured.
4. No measured build, accessibility or SEO passes. Targets must not be represented as results.

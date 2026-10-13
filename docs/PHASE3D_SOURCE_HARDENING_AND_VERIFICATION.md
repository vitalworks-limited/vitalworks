# Phase 3D — Source Hardening and Release Verification

## Changes shipped
1. Inquiry endpoint enforces the 12 KB request bound using actual UTF-8 payload bytes, not only an optional HTTP Content-Length header.
2. Solutions and Products desktop menu disclosure buttons now each have their own aria-controls target.
3. Added `scripts/smoke-check.mjs`, a dependency-free repository consistency test for required routes, SEO markers, navigation semantics, and PNG signatures.
4. Added `npm run smoke` and `npm run verify` scripts for local execution, with no reliance on paid GitHub Actions.

## Verification procedure
```bash
npm ci
npm run smoke
npm run typecheck
npm run lint
npm run build
```
Or use `npm run verify` after dependency installation.

For SEO production certification, deploy to the approved HTTPS domain and measure representative desktop/mobile routes through Lighthouse/PageSpeed, Google Search Console and structured-data validators. Track Core Web Vitals p75 and record actual metrics. Target SEO >= 95, Accessibility >=95, Best Practices >=95, Performance >=90; these are **targets, not measured scores**.

## Operational blockers
- Remote GitHub DNS resolution was unavailable in the execution container; no production build was run there.
- The inquiry webhook, rate limiting, privacy notice, and approved contact details remain release blockers.
- Mobile focus-management and real browser navigation behavior require automated browser testing; static source review is not a substitute.
- Brand identity and marketing copy require official final approval.

## Release rule
**Do not mark Phase 3D certified until the actual repository build, responsive browser accessibility tests, inquiry integration tests and measured SEO checks pass.**

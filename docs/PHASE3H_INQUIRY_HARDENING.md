# Phase 3H — Inquiry Boundary Hardening and Build Blockers

Date: 2026-10-13

## Changes committed to main

- Contact API now rejects non-JSON requests with 415 Unsupported Media Type.
- The webhook sender now sets `redirect: 'error'`, so downstream redirect responses are not automatically followed.
- The content-type check is a shared function with a TypeScript declaration.
- Two regression tests were added for valid JSON content types and invalid/fake content types.

## Execution evidence and limits

Container Node.js 22.16.0, npm 10.9.2.
`git ls-remote` failed to resolve github.com.
`npm ping` failed with EAI_AGAIN for registry.npmjs.org.
Consequently, these newly added tests have not been executed in a local checkout; no Next.js production build, TypeScript, lint, real browser, or Lighthouse results are claimed.

## Remaining release blockers
1. Generate and commit a genuine npm lockfile in a registry-enabled environment.
2. Run `npm ci && npm run verify` and fix any actual errors.
3. Provide and test the authorized HTTPS inquiry webhook, privacy notice, abuse/rate limiting and monitoring.
4. Validate navigation accessibility in real browsers, including focus/keyboard behavior at zoom levels.
5. Set approved HTTPS site URL, verify robots, metadata and sitemap, measure Lighthouse mobile and desktop scores.
6. Security review: the webhook destination must be restricted to a trusted endpoint under company control; disallow user-controlled endpoint configuration.

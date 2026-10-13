# Phase 3T — Bounded Request Reader Regression Fix

Date: 2026-10-13

## Changes
- `readBoundedBody` now catches an exception from `ReadableStream.getReader()` when an inbound request body has already been locked and returns a structured HTTP 400 error.
- Added a test for locked streams alongside the previous valid, oversized, UTF-8 and missing-stream cases.

## Executed verification
- Ran `node --test` on a local copy of the updated `src/lib/bounded-body.mjs` and `tests/bounded-body.test.mjs` using Node.js 22.16.0.
- Result: **6 tests passed, 0 failed**. This validates the copied bounded-body module, not the entire live GitHub checkout.

## Pending
- Generate and commit an authentic `package-lock.json` using a registry-enabled environment.
- Run `npm ci`, complete repository tests, TypeScript, ESLint and Next.js production build.
- Perform integrated contact endpoint testing, browser/a11y testing, and measured Lighthouse SEO audits before claiming production readiness.

# Vitalworks Website — Phase 3F: Executable Validation Increment

Date: 2026-10-13

## Executed evidence
- Local runtime: Node.js v22.16.0.
- Direct `git ls-remote` failed to resolve github.com in the execution container.
- `npm view next` failed with EAI_AGAIN for registry.npmjs.org. No dependency-backed Next.js build, TypeScript compile, ESLint run, browser test, or Lighthouse measurement was possible.
- Implemented the dependency-free `src/lib/inquiry-validation.mjs` validator, then ran `node --test tests/inquiry-validation.test.mjs` locally.
- **11/11 tests passed, 0 failed**. Coverage includes valid input, trimming, malformed JSON, non-object input, email format, required consent, subject allowlist, short and excessively long messages, field-length rejection, 12KB payload boundary and bot honeypot handling.
- The API endpoint now calls the tested validator directly; the previous implementation silently truncated overly long field values rather than consistently rejecting them.
- Added `npm test` and placed tests in the `npm run verify` workflow.
- Fixed dropdown aria-controls references when controlled regions are absent.

## Commands

```sh
npm test
npm ci
npm run verify
```

## Remaining blockers before release
1. Run `npm ci && npm run verify` with network connectivity and a valid package lockfile. If the repository lacks `package-lock.json`, generate and commit one using a compatible Node/npm runtime, then use `npm ci` for repeatability.
2. Perform actual route integration tests for /api/inquiries with a test-only, controlled webhook receiver. Add edge rate limiting and reject unapproved webhook destinations.
3. Validate keyboard navigation, Escape handling and screen-reader operation in real browsers.
4. Confirm production domain, public company contact details, privacy notices and inquiry delivery pipeline.
5. Run production Lighthouse audits and record SEO / performance / accessibility results.

## Certification status
Validation unit tests: PASS (11/11). Full production build: NOT RUN. End-to-end inquiries: NOT RUN. Lighthouse: NOT RUN. Production release: NOT CERTIFIED.

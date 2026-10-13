# Phase 3R — Release-launcher regression coverage

## Source changes
- Added `tests/verify-release.test.mjs`.
- The test constructs an isolated temporary project, copies the real release launcher and preflight modules, and executes the launcher's Node.js process without a lockfile.
- Expected result: nonzero exit and a specific missing-lockfile diagnostic, before any npm verification is launched.

## Status and limits
- The regression test is committed to `main`. Execution in the full checkout and the complete test suite still require validation.
- On 2026-10-13, `npm ping --fetch-retries=0 --fetch-timeout=5000` returned EAI_AGAIN for registry.npmjs.org.
- A genuine `package-lock.json` is absent from `main`, so `npm ci` remains blocked.
- No TypeScript, Next.js production build, browser automation or Lighthouse result is asserted.

## Release prerequisites
Use a network-enabled checkout to generate the authentic lockfile, run `npm ci`, then `npm run verify:release` with approved production settings. Keep publishing disabled until the application and content have passed browser, accessibility, privacy and measured SEO checks.

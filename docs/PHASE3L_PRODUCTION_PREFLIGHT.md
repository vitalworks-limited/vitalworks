# Phase 3L — Production preflight integration

Date: 2026-10-13

## Changes committed
- Production release preflight now calls the same `validateWebhookDestination` helper as the inquiry API. Environment variables existing is no longer sufficient: the approved HTTPS webhook host must validate successfully.
- Added release preflight regressions for HTTP-only and unapproved-host configurations.
- Retained fail-closed checks for the dependency lockfile and approved HTTPS website URL.

## Execution status
- Rechecked npm registry from Node.js 22 / npm 10: registry.npmjs.org returned `EAI_AGAIN`.
- No installed Next.js dependency was available in the execution container.
- Changes were inspected through the GitHub connector and committed to main.
- Newly added tests have **not** been executed against a checkout. No build, typecheck, lint, browser, Lighthouse, or complete inquiry delivery results are asserted.

## Release blockers
1. Generate an authentic `package-lock.json` using the registry, commit it, and use `npm ci`.
2. Run `npm run preflight && npm run verify` and save all command logs.
3. Perform live browser accessibility/navigation testing, end-to-end inquiry tests and rate limiting review.
4. Confirm official domain, approved corporate content, contact details and lawful privacy notice.
5. Measure Lighthouse desktop/mobile results and repair observed issues.

## Commands for a network-enabled operator

```sh
npm install --package-lock-only
npm ci
npm run preflight
npm test
npm run typecheck
npm run lint
npm run build
VITALWORKS_RELEASE=production npm run preflight
```

**Do not mark production certified until the actual commands and browser/SEO audits have passed.**

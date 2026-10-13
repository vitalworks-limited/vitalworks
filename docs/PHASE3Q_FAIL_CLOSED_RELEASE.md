# Phase 3Q — Fail-Closed Production Verification

The website now includes `npm run verify:release`, which calls `scripts/verify-release.mjs`. The launcher runs `checkRelease` with `VITALWORKS_RELEASE=production` explicitly set, even when that variable was not provided by the invoking shell. It aborts on failing preflight and otherwise runs `npm run verify` in the same environment. It supports Linux/macOS and Windows npm command names.

## Required sequence

1. Approve the actual HTTPS production origin and contact webhook configuration.
2. Use a network-enabled host to run `npm install --package-lock-only` and commit the generated lockfile.
3. Run `npm ci`.
4. Run `npm run verify:release` with the approved environment variables.
5. Complete real browser, accessibility, contact delivery and measured Lighthouse verification before publication.

The source is committed, but actual end-to-end Next.js build, Lighthouse and application deployment certification remain **unexecuted**. The missing lockfile is intentionally release-blocking; do not bypass the gate.

## Warning

`NEXT_PUBLIC_SITE_PUBLISHED=true` enables crawler indexing on deployed instances; do not set it until public release is approved and staging is validated.

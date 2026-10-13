# Phase 3V — Publication test execution and URL hardening

Date: 2026-10-13

## Completed and pushed to main
- Reject IP-literal publication origins (including private, loopback and IPv6).
- Reject trailing-dot domain variants and `.local`/`.internal` domain names in the shared publication URL validator.
- Added regression coverage for these cases.

## Verification actually executed
- Downloaded/inspected committed GitHub source through the connected GitHub tool, reproduced the exact publication module and tests in a local Node.js 22 workspace, then executed `node --test`.
- Original Phase 3U publication tests: **3 passed**.
- Revised Phase 3V publication tests: **4 passed, 0 failed**.
- These are dependency-free local source-copy tests, not a Next.js checkout or integrated browser test.

## Build limitation
`npm ping --fetch-retries=0 --fetch-timeout=4000` failed with `EAI_AGAIN registry.npmjs.org`. `package-lock.json` remains absent from `main`, so `npm ci`, typecheck, lint, Next.js build and Lighthouse have not run.

## Remaining release requirements
Obtain registry access, generate and commit a genuine package lock, run `npm ci && npm run verify:release`, complete real inquiry endpoint and accessibility/browser tests, and capture Lighthouse results on a deployable staging instance. Release remains **not certified**.

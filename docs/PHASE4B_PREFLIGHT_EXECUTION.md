# Phase 4B — Executed release-preflight regression verification

On 2026-10-13, ran 10 dependency-free Node.js 22 tests against a local reproduction of the current `checkRelease` preflight implementation and its publication and webhook helpers. Results: **10 passed, 0 failed**. Covered passing and failing lockfile metadata, dependency declarations, package resolution, SRI digest length, publication approval, local origin rejection, and webhook host mismatch.

The local fixture suite was assembled from source inspected through the GitHub connector, rather than a complete Git checkout. The passing results therefore verify those reproduced helper behaviors only. Two additional corresponding regression cases (lock version metadata and localhost publication origin) were committed in `tests/release-preflight.test.mjs`; the full committed test suite has **not** been executed in this phase.

Build blocker remains: registry.npmjs.org DNS unavailable in this execution environment; `package-lock.json` not committed. A successful Next.js installation, lint, typecheck, production build, browser accessibility test, contact integration test and Lighthouse report are still absent. Do not interpret these isolated tests as production certification.

**Required next step:** on a network-enabled machine or operational GitHub runner, generate a real package lock, commit it, run `npm ci && npm run verify`, and investigate actual build failures.

# Phase 3U — Publication and Release Gate Consistency

The website now uses a shared `src/lib/publication.mjs` validator to decide whether an origin is safe to index. `src/lib/site.ts` and `scripts/release-preflight.mjs` reference the same approved HTTPS origin format, eliminating inconsistent logic between sitemap/robots metadata and the release preflight.

Changes:
- Explicit `NEXT_PUBLIC_SITE_PUBLISHED=true` remains required for indexing.
- URL validation rejects HTTP, localhost, placeholder `.example`, embedded credentials, ports, path, query and fragment.
- Added dependency-free tests in `tests/publication.test.mjs`.
- Updated the isolated release launcher fixture to copy the new shared module.

Verification:
- Node 22 bounded-body tests from the previous phase were re-executed locally: **6/6 passed**.
- Newly committed publication tests and complete checkout suite have not been executed in this phase.
- npm registry still fails DNS lookup (`EAI_AGAIN`), so authentic package-lock generation, installation, production compilation and Lighthouse remain blocked.

Release remains **not certified** until `npm ci`, `npm run verify:release`, real browser checks, inquiry integration, accessibility audit and Lighthouse measurements pass.

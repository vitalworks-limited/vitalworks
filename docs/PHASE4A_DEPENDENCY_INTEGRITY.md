# Phase 4A — Dependency integrity validation hardening

## Committed changes
- The release preflight now verifies SRI digest encoding and byte length for SHA-256, SHA-384 and SHA-512 instead of merely checking the `sha512-`/`sha384-`/`sha256-` text prefix.
- The test fixture now uses a structurally valid 64-byte base64 digest, and a new regression case requires truncated digests to fail.
- Fixed the SRI whitespace-token regex during source inspection.

## Evidence and limitations
- Ran four isolated Node.js 22 digest sanity checks locally: **4/4 passed**. These reproduce the digest validation expression; they do not exercise the full repository preflight.
- The updated source and regression tests are committed to GitHub `main`, but the complete test suite is **not confirmed passing**.
- `npm ping` still fails to resolve registry.npmjs.org (`EAI_AGAIN`). No real lockfile, `npm ci`, Next.js build, Lighthouse or browser tests have been completed.
- This is format validation only: `npm ci` must verify actual package integrity against downloaded tarballs. Do not misinterpret matching SRI length as proof that a package was fetched or verified.

## Next action
Obtain a real npm lockfile through a connected runner, execute `npm ci && npm run verify`, inspect actual errors and logs, then finish staging browser, accessibility, contact integration and SEO audits. The website is not production-certified.

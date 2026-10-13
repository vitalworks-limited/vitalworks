# Phase 3S — Bounded Inquiry Request Streaming

## Implemented on main
- Replaced unbounded `request.text()` buffering in the inquiry POST endpoint with `readBoundedBody(request.body, MAX_INQUIRY_BYTES)`.
- Limits payload accumulation before complete buffering, including requests with absent or misleading Content-Length headers.
- Rejects malformed streams and invalid UTF-8, with bounded buffering of up to 12,000 bytes.
- Added TypeScript declaration, five dedicated Node regression test cases, and smoke-check file inventory updates.

## Remaining verification
- Run `npm test` and `npm run smoke` on a full checkout to confirm behavior.
- Build with `npm ci && npm run typecheck && npm run lint && npm run build` once a genuine npm registry-generated lockfile has been committed.
- Test HTTP streaming, early cancellation, slow-client timeouts and proxy limits in deployed staging.
- Conduct browser accessibility and Lighthouse testing; current scores are not measured.

The environment still cannot resolve registry.npmjs.org. No full build or end-to-end certification is claimed.

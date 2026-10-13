# Phase 3W — GitHub-hosted build verification and lockfile recovery

## New workflow
Added `.github/workflows/website-verification.yml`. It runs on pushes to `main`, pull requests and manual dispatch, on an Ubuntu runner with Node.js 22.

1. Check out the current source.
2. Resolve the dependency tree with `npm install --package-lock-only` only when a committed lockfile is missing.
3. Upload the **actual generated** `package-lock.json` as a workflow artifact named `npm-lockfile`.
4. Run reproducible installation with `npm ci`.
5. Run `npm run verify` (smoke tests, all Node unit tests, TypeScript, ESLint and Next.js production build).

Production site indexing stays disabled in verification: the placeholder `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_SITE_PUBLISHED=false` are intentional.

## Immediate follow-up
If GitHub Actions is enabled and a run succeeds, download the workflow's lockfile artifact, inspect it and commit it to `main`. The next run should use the committed lockfile unchanged. Do not claim any check passed from the existence of a workflow file alone.

## Remaining limitations
The local container continues to receive `EAI_AGAIN` for registry.npmjs.org. No local dependency installation or complete Next.js build was possible. Workflow execution and outputs must be confirmed in GitHub Actions; runner billing/permissions may prevent execution. Do not claim Lighthouse, browser accessibility, contact-webhook delivery or release readiness until separately tested.

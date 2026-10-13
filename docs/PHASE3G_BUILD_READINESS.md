# Phase 3G — Build-readiness findings

## Confirmed on main
- Missing `package-lock.json`. Consequently `npm ci` cannot succeed from the current repository state. Do not invent a lockfile.
- Missing TypeScript declaration for the ESM `inquiry-validation.mjs` import. A matching `.d.mts` declaration has been added.
- Added `next-env.d.ts` with conventional Next.js type references.

## Required action on a network-enabled workstation

```sh
node --version
npm --version
npm install --package-lock-only
git add package-lock.json
git commit -m "build: commit resolved npm dependency lockfile"
npm ci
npm run smoke
npm test
npm run typecheck
npm run lint
npm run build
```

Record actual versions, test logs and failures. Do not claim production certification without executing the build and browser checks.

## Caution
The validation implementation is written as ESM JavaScript and the declaration is deliberately a small handwritten contract. Ensure the runtime and declaration stay synchronized through tests. A future TypeScript conversion may be preferable once dependency-backed compilation is available.

## Launch quality gates
Confirm the actual inquiry receiver, GDPR/Uganda privacy requirements as applicable, abuse rate limiting, approved production hostname, search-console ownership, cross-browser navigation, verified SEO metadata and measured Lighthouse scores.

# Phase 3X — CI bootstrapping order correction

The hosted verification workflow now initializes Node.js without caching, generates the missing authentic npm lockfile, then enables npm cache against the generated file. The earlier workflow initialized cache before the lockfile existed and used `continue-on-error`, which could conceal setup failure. That is removed.

## Verification status
- Confirmed the workflow source and updated `.github/workflows/website-verification.yml` on `main` through the GitHub connector.
- The available workflow-run lookup only returns pull-request-triggered runs; it found none for the two prior push commits, which **does not prove the push workflow did or did not run**.
- No GitHub Actions logs, build results or lockfile artifact were available via this lookup.
- The npm registry still requires a network-enabled runner or development environment. The website is not production-certified.

## Follow-up
Inspect [GitHub Actions](https://github.com/vitalworks-limited/vitalworks/actions) directly for the workflow on `main`. If Actions is blocked by billing or repository policy, run `npm install --package-lock-only && npm ci && npm run verify` in a trusted connected checkout instead. Retrieve and commit the authentic lockfile, fix any actual test/build errors, and only then run staging browser, accessibility, contact and Lighthouse verification.

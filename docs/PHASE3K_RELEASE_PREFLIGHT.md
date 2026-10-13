# Phase 3K — Release gate completion

The repository now exposes `npm run preflight` and includes additional test cases for the release gate. It checks for a genuine package-lock file and verifies root manifest consistency. With `VITALWORKS_RELEASE=production`, it also requires a production site URL and inquiry configuration.

## Run in a dependency-enabled checkout

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

The actual lockfile must be resolved against the npm registry and committed; do not fabricate lockfile content. Production environment variables must be set before invoking the production preflight.

## Release limitations

Passing this preflight does not demonstrate correct runtime behavior or security of the configured webhook endpoint. DNS rebinding protections require egress controls. Tests and dependency-backed build must be run before certification. No Lighthouse scores have yet been measured.

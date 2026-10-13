# Vercel preview build verification — 13 October 2026

Baseline: `0fd4ef5f515d1e09185b2ee783be0dd5d04674e0`.

The first Vercel build failed because the client Header imported site.ts, which imported publication.mjs and Node net. Publication readiness now lives in a server-only module; browser-safe navigation data remains shared. Explicit environment properties also resolve the ProcessEnv TypeScript mismatch. Five JSX apostrophes and the ESLint anonymous export warning were corrected.

A genuine npm package-lock.json was generated using the npm registry. npm ci installed 311 packages. All 44 Node regression tests passed; smoke checks passed for 25 required files; TypeScript and ESLint passed; Next.js 15.5.27 completed an optimized production build and generated all 19 static pages. Autoprefixer emitted non-blocking start/end alignment compatibility warnings.

Vercel project: vitalworks, workspace vitalworks-limiteds-projects. NEXT_PUBLIC_SITE_PUBLISHED=false was configured for Production and Preview. The initial main deployment failed and served no production traffic. Deploy this fix branch as Preview. No custom production domain or inquiry receiver is configured. Browser verification and hosted build status must be checked separately. These results do not certify production publication or a Lighthouse score.

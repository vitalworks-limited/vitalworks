# Phase 3P — Explicit SEO publication gate

Changes on main:
- `NEXT_PUBLIC_SITE_PUBLISHED` defaults to false and must equal `true` to permit indexing.
- Root and page robots metadata, `robots.txt`, and sitemap output use the same authorization switch.
- The production preflight explicitly rejects deployment without that setting.
- `.env.example` documents the release switch; additional regression assertions were committed.

**Important:** This flag is a publication control, not proof of regulatory compliance, quality or search ranking. It should be enabled only after content approval, a successful production build, browser/accessibility checks, working inquiry delivery, a privacy notice, and verified SEO testing.

At this increment, the changes were committed via GitHub. The full Next.js build and Lighthouse audit remain unexecuted because registry access and dependency locking are unresolved. Actual tests of the newly changed switch still need to run in a dependency-enabled checkout.

For release: generate and commit a genuine `package-lock.json`, run `npm ci && npm run verify`, audit the staging deployment, obtain explicit approval, set `NEXT_PUBLIC_SITE_PUBLISHED=true`, then verify live `robots.txt`, `sitemap.xml`, page metadata and indexing.

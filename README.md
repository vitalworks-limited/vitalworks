# Vitalworks Limited — Corporate Website

**Purpose Driven.** A responsive corporate website for **Vitalworks Limited**, presenting the company, its technology capabilities, industry focus and product initiatives.

> **Release status:** Under active development. The repository is **not production-certified**. A genuine `package-lock.json`, successful dependency-backed build, integration testing, content approval, accessibility checks and measured SEO audits are still required. Do not treat a committed workflow or source-level check as evidence of a successful deployment.

## Overview

This repository contains the public-facing Vitalworks corporate website, built with **Next.js 15 (App Router), React 19, TypeScript and CSS**. It uses original Vitalworks branding, with a deep-navy and orange visual system. The intended experience is clear, accessible, responsive and straightforward to maintain.

### Website sections

| Route | Purpose |
| --- | --- |
| `/` | Corporate homepage and introduction |
| `/company` | Company positioning and approach |
| `/solutions` | Overview of six technology service areas |
| `/solutions/[slug]` | Individual service descriptions |
| `/products` | Product and platform initiatives |
| `/industries` | Sectors and use cases |
| `/insights` | Insights landing page |
| `/contact` | Inquiry form for business and partnership conversations |
| `/api/inquiries` | Server-side JSON inquiry submission endpoint |
| `/robots.txt`, `/sitemap.xml` | Search engine discovery controls |

The product names and editorial summaries in `src/lib/site.ts` should be **reviewed and explicitly approved** before being presented as launched or commercially available offerings. Do not publish invented customers, testimonials, certifications, results or contact information.

## Technology and architecture

- Next.js App Router with server-rendered corporate pages and an interactive React inquiry form.
- Site-wide navigation, shared metadata, corporate layout and responsive CSS.
- Original brand PNG assets in `public/brand/`.
- SEO metadata, canonical links, Open Graph previews, Organization structured data, robots and sitemap configuration.
- A server-side inquiry endpoint with input validation, a 12,000-byte streaming request limit, a honeypot and configurable approved HTTPS webhook delivery.
- Explicit publication control: non-approved environments remain no-index and omit public sitemap entries.

### Repository layout

```text
src/
  app/                   App Router pages, metadata, robots, sitemap and API
    api/inquiries/        Contact inquiry endpoint
    solutions/[slug]/     Service detail pages
  components/            Header, footer and inquiry form
  lib/                   Company content, SEO and validation helpers
public/brand/            Approved original corporate PNG artwork
scripts/                 Smoke checks, release preflight and verification
tests/                   Dependency-free Node.js regression tests
docs/                    Requirements, SEO and engineering phase reports
.github/workflows/       Hosted website verification workflow
```

## Getting started

**Prerequisites:** Node.js **22 recommended** (minimum supported by the package: Node.js 20.9), npm and access to the npm registry.

```bash
git clone https://github.com/vitalworks-limited/vitalworks.git
cd vitalworks
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

**Dependency reproducibility:** The repository currently lacks a committed, registry-generated `package-lock.json`. The first network-enabled installation must generate and commit one. After that, use `npm ci` for clean, reproducible installation. Do not create a lockfile manually or pretend that dependency-backed checks have run when they have not.

## Environment configuration

Start from `.env.example` and place local values in `.env.local`. Never commit secrets.

| Variable | Purpose | Publication notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute canonical website origin | Use a company-approved HTTPS origin in production, without path, query or fragment |
| `NEXT_PUBLIC_SITE_PUBLISHED` | Explicit indexing switch | Defaults to `false`; use `true` **only after release approval** |
| `INQUIRY_WEBHOOK_URL` | Approved HTTPS endpoint receiving inquiries | Server-side only; required for working submissions |
| `INQUIRY_WEBHOOK_ALLOWED_HOST` | Exact approved hostname for that endpoint | Server-side; must match the webhook destination |
| `INQUIRY_WEBHOOK_TOKEN` | Optional bearer credential for receiver authentication | Secret; use a secure secrets manager |

The placeholder domain in `.env.example` is intentional and **not a live production domain**.

### Publication control

Search indexing requires both a valid HTTPS origin and `NEXT_PUBLIC_SITE_PUBLISHED=true`. When unpublished, page metadata is marked no-index, robots disallows crawlers and sitemap entries are withheld. The production release preflight also requires explicit publication approval.

**Important:** A publication flag is not security, privacy, accessibility, build or SEO certification. Publishing must follow completed verification and editorial signoff.

## Developer commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Compile a production build |
| `npm run start` | Serve a successful production build |
| `npm run smoke` | Check key routes, source markers and PNG signatures |
| `npm test` | Run Node.js unit/regression tests |
| `npm run typecheck` | TypeScript validation |
| `npm run lint` | ESLint checks |
| `npm run preflight` | Validate lockfile and, when production mode is set, release settings |
| `npm run verify` | Smoke, tests, typecheck, lint and build |
| `npm run verify:release` | Require production preflight, then run the full verification chain |

For release verification, configure the **real approved** environment, ensure a genuine lockfile exists, then run:

```bash
npm ci
npm run verify:release
```

Do not set `NEXT_PUBLIC_SITE_PUBLISHED=true` on a public instance merely to make the preflight pass.

## Contact inquiry workflow

1. A visitor submits the form at `/contact` with their contact information, subject, message and consent.
2. `POST /api/inquiries` validates JSON content type, request size, field lengths, approved subjects, consent and a honeypot.
3. Request-body bytes are streamed under a strict 12 KB cap, including when `Content-Length` is absent or misleading.
4. The server validates the configured HTTPS webhook destination and exact allowed hostname.
5. On a successful upstream response, the endpoint reports accepted submission; unavailable or failed delivery returns an error.

**Security and operational limitations:** Destination validation alone is not sufficient protection against DNS rebinding or compromised DNS. Production infrastructure must enforce outbound egress restrictions and approved DNS/IP destinations. Add and verify request-rate controls, alerting, receiver authentication, retention policies, privacy disclosures, spam handling and operational ownership. Do not enter patient, financial-account or other sensitive records in the inquiry form.

## Branding and content governance

The logo and symbol assets reside in `public/brand/`, including primary/reversed marks and orange/navy symbols. Preserve original assets and brand proportions. Company identity and service content are centralized in `src/lib/site.ts`; review changes for factual accuracy before publication.

Publish only verified business details, client relationships, product status, statutory information and authorized legal/privacy notices. External integration URLs and secrets must remain outside the source code.

## CI and dependency lockfile recovery

The workflow `.github/workflows/website-verification.yml` is configured for pushes to `main`, pull requests and manual execution. It attempts to create a genuine lockfile if missing, uploads it as the `npm-lockfile` artifact, installs dependencies with `npm ci` and executes `npm run verify`.

The CI workflow also runs a **dependency-free Node regression job** (`node --test tests/*.test.mjs`) independently of npm installation. This makes basic security and validation regressions visible even if dependency resolution fails. Passing this job does **not** mean the Next.js production build passed.

**Workflow execution has not been independently confirmed.** GitHub Actions availability may depend on repository permissions and billing. An uploaded artifact is not automatically committed back to `main`. Inspect the run logs, retrieve the lockfile artifact, verify its contents and commit the authentic `package-lock.json` before treating dependency locking as complete.

See [GitHub Actions](https://github.com/vitalworks-limited/vitalworks/actions) and [CI bootstrap documentation](docs/PHASE3W_GITHUB_BUILD_BOOTSTRAP.md).

## Production release checklist

- [ ] Confirm approved production origin, DNS, TLS and hosting configuration.
- [ ] Generate, review and commit the genuine npm lockfile.
- [ ] Run `npm ci`, `npm run verify:release` and save actual passing logs.
- [ ] Resolve all reported TypeScript, lint, runtime and build failures.
- [ ] Verify desktop/mobile navigation, forms, keyboard/focus behavior and screen-reader basics in browsers.
- [ ] Verify inquiry delivery to an approved company-operated receiver, including failure handling and rate limiting.
- [ ] Approve published business descriptions, product claims, images, contact information and privacy notice.
- [ ] Verify canonical URLs, indexing controls, robots, sitemap, structured data and social previews on staging.
- [ ] Run and record real Lighthouse accessibility, performance, SEO and best-practices audits.
- [ ] Complete security/operational review, backup and rollback planning, then approve publication.

**Current state:** This checklist has **not** been completed. Do not describe the website as production-ready or SEO-certified until independently measured acceptance evidence exists.

## Project documentation

- [Website requirements](docs/WEBSITE_REQUIREMENTS.md)
- [SEO implementation](docs/SEO_IMPLEMENTATION.md)
- [Release preflight](docs/PHASE3Q_FAIL_CLOSED_RELEASE.md)
- [GitHub build bootstrap](docs/PHASE3W_GITHUB_BUILD_BOOTSTRAP.md)
- [CI bootstrap correction](docs/PHASE3X_CI_BOOTSTRAP_ORDER.md)

## Contributing and maintenance

Work from the latest repository baseline, make focused changes, add tests for behavior changes and keep documentation aligned with actual functionality. Protect company credentials, avoid unsupported marketing claims and record verification evidence before requesting a production release.

---

**Vitalworks Limited** · **Purpose Driven.**

*This README describes the implemented source and intended release process; it is not a declaration that production verification or deployment has succeeded.*

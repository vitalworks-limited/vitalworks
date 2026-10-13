# VITALWORKS LIMITED
## Corporate Website — Comprehensive Design, Content, Architecture and Implementation Requirements
**Version:** 1.0  
**Date:** 13 October 2026  
**Status:** Design and engineering specification; branding assets pending visual selection and approval  
**Audience:** Directors, branding team, UX designers, content editors, web engineers, QA and delivery partners

---

## 1. Executive mandate
Build a distinctive, production-grade, multipage corporate website for **VITALWORKS LIMITED**. The site must present the company as an established, credible technology engineering and product business with roots in Uganda and the capacity to serve regional and international markets. The visual language should be calm, confident, precise and memorable: no default SaaS aesthetic, no busy gradients, no identical card grids on every page, no artificial product screenshots or invented evidence.

The website must accomplish four things: (1) establish institutional trust; (2) explain actual services and sector competence; (3) make the product and research portfolio navigable; (4) convert qualified enquiries into conversations. It is a **corporate website**, not a single-product sales landing page and not a dashboard.

### 1.1 Definition of done
A person arriving on the website can understand **who Vitalworks is, what it does, which products and solutions exist, why to trust it, and how to contact it** within a few moments. The website offers consistent, accessible, responsive experiences across desktop, tablet and mobile. The corporate team can maintain content without code releases. All claims, partner logos, case studies and product availability statuses are approved and supportable.

### 1.2 Source-of-truth hierarchy
1. Legal identity and permitted company-object coverage: attached **VITALWORKS LIMITED MEMART Final 2025 v2**, particularly Memorandum pages 2–3. Registered in Uganda; private company limited by shares.
2. Company documents and portfolios: [Vitalworks corporate Drive folder](https://drive.google.com/drive/u/0/folders/1XaBtsrR_UZGgbe4eA78MULE_70TfYFwy), with subfolders **COMPANY DOCUMENTS**, **SOFTWARE PROJECTS**, **CONCEPTS**, **Proposals**, and file **VitalPortfolio.xlsx**.
3. Candidate official brand assets: [Vitalworks logo folder](https://drive.google.com/drive/u/0/folders/1dFBmMe4gIGNWG052JhpSsbvhyW55jU4i) containing numbered PNG files **1.png–14.png, 16.png, 17.png**; **15.png was not present in the returned folder listing**. These assets were inventoried but have *not been visually assessed or certified* in this specification.
4. Approved public company messaging, current product websites and signed-off project references; their readiness and accuracy must be reviewed by authorized stakeholders prior to publication.

**Important distinction:** A company object in the memorandum permits an area of activity; it does **not** prove that an associated offering is launched, marketed, certified, delivered or commercially available. Likewise, a project folder is not proof of product maturity, endorsement or deployment.

## 2. Audiences and outcomes
| Audience | Primary question | Ideal destination / action |
|---|---|---|
| Enterprise CTO / IT director | Can Vitalworks architect, build and operate dependable systems? | Capabilities, engineering approach, enquiry |
| Government / public-sector program | Has the company relevant health/data/public-service skills? | Industries, verified case studies, proposal request |
| SMEs and finance teams | Which products solve actual operational needs? | Products, demos and contact |
| Development partners and NGOs | Can Vitalworks deliver measurable systems and local capacity building? | Impact, case studies, partnership enquiry |
| Technology partners | Where can we integrate or collaborate? | Partnerships, interoperability, contact |
| Applicants / technical contributors | What does Vitalworks build and how can I engage? | Careers / opportunities, research |
| Media and procurement staff | Is legal, governance and company information available? | About, company profile, verified downloads |

## 3. Brand system and visual identity
### 3.1 Brand asset governance — mandatory
- Audit *every* supplied PNG for actual form, proportion, typography, trademark fidelity, resolution, background transparency, sharpness and rendering at 24px/32px/48px and full-header sizes.
- Select a **primary horizontal lockup** for white/light headers, a contrast-safe **inverse lockup** for dark backgrounds, a **symbol-only logo** for mobile/favicons and an **approved monochrome version** for documents and low-ink media. Derive each from genuinely authorized brand files, never by manually redrawing or inventing the symbol.
- Record logo filename, Google Drive file ID, dimensions, alpha channel, approved backgrounds, clear space, minimum display width and owner/approval date in `brand-assets-manifest.md`.
- Where no true source SVG exists, obtain it from the brand owner or commission faithful vector tracing subject to approval; do not promise that a PNG renamed `.svg` is vector artwork.
- Extract candidate palette values directly from the approved logo/brand guide and confirm them with the brand owner. **Do not hardcode conjectural 'official Vitalworks' colors.** Use neutral design tokens until approval.
- No stretched, recolored, distorted, cropped, bevelled, shadow-heavy, outlined or repeatedly wallpapered company logos. Brand assets appear at functional touchpoints, not as decoration.
- Obtain permission and accurate attribution before publishing any external company, NGO, government, client, platform or partner mark.

### 3.2 Art direction
- Signature: strong editorial composition, restrained high-quality type, meaningful whitespace, careful grid, crisp dividers and purposeful photographic/technical imagery.
- Mood: sophisticated, approachable, credible, warm enough for people-led stories, technical enough for engineers. Minimal means clear and useful, not empty or generic.
- Default pages: warm neutral/off-white canvas with charcoal text; any brand-accent colors come only from approved assets. Dark backgrounds are limited to selected hero or technical segments, not an obligatory black landing page.
- Avoid: purple/blue neon blobs, glassmorphism everywhere, heavy shadows, card-on-card nesting, pulsating gradients, gigantic rounded pills, emoji icons, 3D stock robots, glowing network globes, circuit-brain imagery, 'AI sparkle' symbols, excessive decorative lines and fake browser mockups.
- Visual rhythm: alternate concise text-led bands, broad image/case-study compositions, comparison/technical diagrams, product editorials and real proof sections. Do **not** repeat one layout pattern on all pages.
- Photography: authentic office, field implementation, teams, products and Ugandan/regional contexts with explicit consent; no misleading fake customer teams or fabricated deployment images.
- Technical graphics: custom architecture illustrations, data-flow diagrams, credible product visuals and subtle abstract geometry related to actual work; label diagrams and provide text equivalents.

### 3.3 Layout specification
- Responsive breakpoint strategy: compact mobile around 320–767px, tablet 768–1023px, desktop 1024–1439px, wide 1440px+, all tested beyond breakpoint edges.
- Content max width approximately 1200–1320px, with a deliberate editorial reading width around 65–75 characters. Use edge-to-edge sections sparingly.
- Desktop content gutters approximately 32–64px; mobile 20–24px; consistent but context-sensitive section spacing around 64–128px desktop and 48–80px mobile.
- Typographic hierarchy: distinctive but highly legible headline family and efficient reading UI/body family; license and subset fonts correctly. Suggested responsive H1 44–72px desktop / 34–44px mobile; body 16–18px; never achieve visual hierarchy only by lowering text contrast.
- Components: moderate radii (usually 6–12px), borders only where structurally useful, no default 4-card service dumps, no equal-height boxes where content lengths differ substantially.
- Adopt semantic color/type/space tokens: `--color-brand-primary`, `--color-brand-accent`, `--color-text-primary`, `--color-surface`, `--space-*`, etc. Actual brand values must be agreed before finalization.

### 3.4 Interaction principles
- Navigation and interactive controls must have recognizable states: normal, hover, focus-visible, active, disabled, loading, success and error.
- Motion should be subtle, functional, and comprehensible (typical 120–240ms); respect `prefers-reduced-motion`; never gate vital information behind animation.
- Scroll reveals only when justified; all content remains visible for reduced motion and non-JS fallback wherever feasible.
- Buttons and links describe their actual outcome ('Explore VitalReturns', 'Request a consultation'); avoid meaningless 'Learn more' repetition.
- Keep hover menus stable, accessible by keyboard and touch, and ensure the pointer can travel from trigger into submenu without loss of focus.

## 4. Global website navigation and information architecture
**Recommended maximum top-level navigation: six information groups plus a single primary CTA.** The logo returns Home. A secondary utility (search, language, portal access when applicable) must not crowd the primary header.

| Top-level | Primary destinations | Notes |
|---|---|---|
| **Company** | About Vitalworks; Our Approach; Leadership (approved); Governance & Trust; Careers; Partnerships | Keep corporate identity separate from product marketing |
| **Solutions** | Software Engineering; AI & Data; Systems Integration; Cloud & Infrastructure; Cybersecurity; Managed Services; Consulting & Training; R&D and Product Development | Services grouped by buyer needs, not legal clauses |
| **Products** | Products overview; individual published product detail pages; product status filters | Only validated product inventory; clear live/beta/research tags |
| **Industries** | Health & Public Services; Education; Financial Operations; Agriculture & Community; Enterprise & Other | Publish sector pages only with credible sector-specific substance |
| **Insights** | Case Studies; Research & Ideas; News & Updates; Resources | No empty 'blog' or unverified client claims |
| **Contact** | Contact; Request a Proposal; Schedule a Consultation; Partnerships enquiry | Inquiries should have appropriate, working destinations |
| **Right-side CTA** | **Talk to Vitalworks** | One prominent, non-aggressive action |

### 4.1 Menu behavior
Desktop header has the original logo at left, generously spaced six-level labels, and a single CTA at right. Dropdowns use light, readable, column-based lists with concise descriptions (not glossy mega-menu cards). Not all top-level categories need a mega menu. Use single-column for simple lists; two columns for Solutions/Products if necessary. Never auto-expand submenus across overlapping module regions. Keyboard: Enter/Space to toggle, Escape to dismiss, Tab to navigate, pointer click for touch laptops, visible focus ring, no hover-only functionality. Active route highlighted subtly. Sticky header may reduce height on scroll without becoming jumpy. Mobile menu is an accessible full-height disclosure with nested categories, clear close control and no horizontal overflow. Footer provides full navigation and legal links.

### 4.2 Route plan
```
/
/company
/company/about
/company/approach
/company/leadership
/company/governance
/company/careers
/company/partnerships
/solutions
/solutions/software-engineering
/solutions/ai-data
/solutions/systems-integration
/solutions/cloud-infrastructure
/solutions/cybersecurity
/solutions/managed-services
/solutions/consulting-training
/solutions/research-development
/products
/products/[slug]
/industries
/industries/health-public-services
/industries/education
/industries/financial-services
/industries/agriculture-community
/industries/enterprise
/insights
/insights/case-studies
/insights/case-studies/[slug]
/insights/articles/[slug]
/insights/resources
/contact
/contact/proposal
/contact/partnerships
/privacy
/cookies
/terms
/accessibility
/sitemap.xml
/robots.txt
```
Only published pages go into XML sitemaps/navigation. Hide unready destinations entirely instead of shipping dead links. Canonical URLs and redirects must be defined.

## 5. Homepage — carefully art-directed composition
**Homepage is not a wall of cards.** Each section must have a different editorial reason for existing.

1. **Navigation**: official logo, 6 information groups and CTA; comfortable header height; calm background; robust desktop/mobile behavior.
2. **Hero**: short credible proposition, one supporting paragraph, primary 'Explore Our Solutions' and secondary 'Talk to Us'; one bespoke technical/product or real-world image. Suggested *draft* headline: **'Technology engineered for meaningful progress.'** Suggested subline: 'We design, build and support digital platforms, enterprise systems and intelligent solutions for organizations with important work to do.' Messaging requires company approval.
3. **What we do**: concise 3–4 editorial capability pillars with meaningful one-sentence explanations; link to the complete Solutions taxonomy. Avoid reducing full business scope to only 3 services.
4. **Featured work or products**: a deliberately selected hero product with real interface imagery, followed by no more than two supporting features. Feature only verified offerings; do not claim launch, certifications or customers without approval.
5. **Engineering difference**: approach narrative from discovery and architecture to implementation, interoperability, monitoring and support; meaningful diagram or annotated steps instead of workflow cards.
6. **Industries**: 3–5 image-led or typography-led horizontal rows with concrete outcomes and distinct links; no icon grids.
7. **Proof and partnerships**: published case studies, references, verified impact numbers and authorized client/partner marks. If none are approved, replace with methodologies, delivery standards and an honest invitation to engage.
8. **Ideas and R&D**: one strong editorial preview of company research/new thinking; mark experimental concepts clearly.
9. **People/values**: human photograph or a short leadership statement when approved, not generic employee stock imagery.
10. **Final CTA**: purposeful consultation invitation on a calm background. Avoid duplicate 'Contact us' banners throughout the page.
11. **Footer**: company lockup, business description, five-column grouped links where screen permits, verified contact channels, address if approved, social profiles, copyright, policies.

### 5.1 Hero layout requirements
Use a split or asymmetrical layout rather than oversized center alignment by default. At large screens, headline/text area ~45–55% width and visual ~45–55%; image must be relevant and optimized. At mobile, copy and call to action appear first. Hero can include a genuine product interface or architecture montage *only if sourced from current approved material*. Keep the first viewport useful, not consumed by decorative empty space. The first CTA is visible without scrolling on common laptop displays whenever practical.

## 6. Page-family requirements
### 6.1 Company and About
Present mission, vision, history/timeline (dates verified), identity, operating principles, responsible technology, governance and real team. Explain the company's work in accessible language. Share approved company profile PDF if available. Keep directors' personal document identifiers, signature scans, personal addresses and private details from registration attachments **off public pages**. Where legally required, publish only the appropriate public business information and approved registry references.

### 6.2 Solutions index and individual service pages
Each service page follows: buyer problem → Vitalworks service scope → practical outcomes → delivery model → architecture/technical competencies → applicable sectors → verified illustrative work → consultation CTA. Never imply external certification or an active SOC, managed uptime guarantees or penetration-testing accreditation absent evidence. Solutions index should include the categories in §4 and a clear grouping by service need.

### 6.3 Products overview and individual products
Each listed product needs: official product name/brand, approved icon, accurate short positioning, intended audience, status (`Available`, `Pilot/Beta`, `In development`, `Research concept`, `Retired`), features with proof, screenshots or original renders labeled as such, integration information, supported geography/availability and precise CTA destination. Product listings should be CMS-managed and filterable by category or maturity if sufficiently numerous.

**Candidate inventory for verification** (source folders and existing development context, **not a statement of commercial availability**): VitalReturns, VitalSchools, VitalWills, VitalMonitor, VitalArchitect, VitalUX, VitalStudios / Lawer, VitalPay, VitalSACCO, VitalIntelligence, VitalVillage, VitalMetrics, VitalEMR, VitalHosting, VitalDock, VitalSDK, VitalSSO, VitalClimate, VitalCommunities, VitalAdmissions, VitalBI and other documented platforms. Product managers must reconcile this with `VitalPortfolio.xlsx`, official URLs and release evidence. Unreleased internal systems should not be marketed as publicly purchasable.

### 6.4 Industries
Lead with sector problems and capabilities rather than repeating the Solutions page. Example: health and public services covers interoperable information systems, HIS/DHIS2 solutions and public-interest data infrastructure as capabilities authorized by memorandum; mention specific engagements only if approved. Education, finance, agriculture/community and enterprise pages use appropriate language, evidence, outcome narratives and clear sector contact CTAs.

### 6.5 Insights / research / case studies
Three content types: (1) case study with client permissions and measurable outcomes; (2) thought-leadership article with author, date, references and review cycle; (3) resource such as company profile, technical brief or approved whitepaper. Case study format: challenge, constraints, engagement, architecture/approach, results, client permission status, confidentiality-safe visuals. Case studies must never show patient data, credentials, personal identifiers, proprietary client code or non-public infrastructure details.

### 6.6 Contact and lead capture
Accessible forms with name, verified business email, optional phone with country code, organization, inquiry type, summary and consent/notice; avoid collecting more data than necessary. Service inquiries may reveal relevant optional fields without making the form intimidating. Separate proposal, products/demo and partnerships workflows where operationally valuable. Server-side validation, rate limiting, CSRF protection where applicable, honeypot/risk controls, anti-spam without inaccessible CAPTCHAs, clear success/failure feedback, spam-safe delivery, data retention policy and routing to approved inbox/CRM. No 'submitted' message before backend success.

## 7. Key interaction and component inventory
- Primary and secondary buttons; accessible text link patterns; breadcrumbs; skip-to-content; header desktop dropdown/mobile disclosure; search suggestions if search is delivered; structured footer.
- Product/category filters and pagination with URL state (shareable); predictable 'clear all'; empty and error states.
- Evidence-based case-study selector; image gallery with keyboard navigation and alt text; optional comparison module only for meaningful product differences.
- Modal/dialog only for genuinely modal tasks; initial focus, Escape, backdrop policy and return focus must work.
- Contact/quote forms with inline validation, field descriptions, pending state, privacy messaging and confirmation reference.
- Consent manager only where required for non-essential cookies; do not block essential functionality; respect user preference.
- Optional light/dark UI only if both schemes are comprehensively branded and contrast-tested. Do not add mode-switching merely for novelty.
- Optional tasteful navigation progress, anchored section navigation and on-page tables of contents for long technical service pages.
- Search only if content depth justifies it; an empty search box is worse than no search.

## 8. Content architecture and governance
Use typed CMS collections for `Pages`, `Services`, `Products`, `Sectors`, `CaseStudies`, `Articles`, `TeamProfiles`, `BrandAssets`, `CTATargets`, `LegalPolicies`, `SEO`, and `Navigation`. Every public object requires stable slug, publication status, owner, date updated, SEO metadata and structured content fields. Products additionally require maturity, website URL and owner. Case studies require written permissions and disclosure review. Editors should preview drafts, schedule publish/unpublish, compare revisions and rollback. Formal approval roles: writer, reviewer, publisher and administrator. Never use a free-form rich-text field to recreate all layouts inconsistently.

**Copy guidelines:** write about real problems, demonstrated approaches and outcomes; avoid generic superlatives ('revolutionary', 'world-leading', 'cutting-edge') without support. Use Ugandan/UK English consistently according to editorial choice, with clear technical terminology and accessibility-oriented sentences. Every claim should have an owner and evidential basis. Public contact details and registered location must be confirmed independently rather than lifted from personal shareholder records.

## 9. Front-end engineering and architecture
### 9.1 Suggested architecture (non-prescriptive)
An SSR/SSG-capable framework such as Next.js or Astro is appropriate, with TypeScript, semantic HTML, modular components, optimized media, accessible interaction primitives and a headless CMS when needed. Choose based on existing Vitalworks hosting/tooling and editor needs; avoid overengineering a corporate website into microservices. Production deploy pipeline should support preview, test, staging and production, with rollback. API endpoints for enquiry forms must remain server-side with secrets outside browser bundles.

### 9.2 Engineering quality rules
- Structured design tokens and reusable foundations with page-specific compositions; component library should serve the brand, not make every page look identical.
- Content-driven routes validated at build/publish time; typed schemas; link checker; redirects and canonical policies.
- Images in modern formats (AVIF/WebP with fallbacks) and appropriately sized responsive variants; protect brand logo fidelity and transparency.
- Avoid unnecessary dependencies, massive icon packs, expensive animation libraries and client-side rendering of static content.
- Content Security Policy, secure headers, HTTPS, secure cookies and minimum-permission service accounts; log operational events without unnecessary personal data.
- Maintain dev/staging/prod environment isolation, encrypted backups where appropriate, and documented deployment/rollback procedures.
- Respect source licenses for fonts, photos, map tiles, icons and code.

## 10. Performance, accessibility, SEO and reliability acceptance targets
| Area | Requirement / target | Verification |
|---|---|---|
| Accessibility | WCAG 2.2 AA target; contrast at least 4.5:1 normal text, 3:1 large text; non-text contrast as applicable | Automated axe checks + manual keyboard and screen reader QA |
| Navigation | 100% keyboard reachable, escape dismiss, focus return, tap support; no overlapping submenus | Desktop/mobile browser suite |
| Core Web Vitals | LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at 75th percentile of real users where measured | RUM and field reports; lab diagnostics |
| Lighthouse | Aim ≥90 performance, ≥95 accessibility, ≥95 best practices and SEO on representative pages; scores not sole signoff | Recorded repeatable tests |
| Mobile | No horizontal scroll at 320px and above; visible text/controls and accessible targets | Real/mobile emulation at common widths |
| SEO | Unique title/description, canonical, OG/Twitter sharing, semantic headings, structured Organization/Article/Breadcrumb where valid | Metadata tests, Search Console monitoring |
| Forms | Correct destination, validation, CSRF/spam protections, confirmations and error recovery | End-to-end and abuse tests |
| Privacy | Approved privacy/cookie policies, consent for nonessential tracking and deletion/retention processes | Governance review |
| Security | TLS, dependency auditing, restricted admin, input validation, CSP and secure HTTP headers | Security review and non-production scans |
| Reliability | Health checks, observability, backup/restore for CMS content, rollback and incident owner | Staging recovery rehearsal |
| Browser | Recent Chrome, Edge, Safari and Firefox, iOS Safari and Android Chrome | Browser/device matrix |

**Accessibility notes:** WCAG is tested across actual user flows, not just colors. Check labels, landmarks, skip links, logical headings, focus visibility, reduced motion, error messaging, proper control names and touch targets. Avoid text baked into hero photos.

## 11. Search, discovery and analytics
Metadata strategy for all indexable routes, XML sitemap auto-generated from published pages, robots policies for nonpublic routes, meaningful URL names, internal linking between service/sector/product pages, structured data only for true facts and verified contact/business identity. Analytics must be privacy-conscious, configured with a measurement plan, and must not collect passwords, enquiry text or identifiable sensitive information. Track useful events such as consultation CTA clicks, successful form submissions, product navigation and resource downloads; report funnel conversion with reliable definitions. Preserve UTM parameters for lead attribution where lawful.

## 12. Trust, compliance and privacy
- Use **VITALWORKS LIMITED** for formal company identity; brand wordmark capitalization follows the approved logo. Do not call the company 'Vitalwork Limited' in legal copy.
- Corporate documents may confirm identity, but do not publish full MEMART or registry annexes containing private identity numbers, personal residences and signature specimens by default.
- State company registration identifiers only after checking the actual final certificate and relevant public disclosure requirements.
- Legal documents: privacy notice, cookie notice/manager when applicable, terms, copyright/licensing and accessibility statement reviewed by responsible personnel.
- No fabricated endorsements, logos, customer counts, revenue, certifications, uptime numbers or project outcomes.
- Published AI or health functionality must be described accurately, with proper limitations and confidentiality safeguards.

## 13. Design deliverables (required)
1. **Brand audit:** contact sheet of all 16 candidate logo variants, approved usage matrix, token palette with exact validated values, typography licenses, asset manifest and favicon set.
2. **Information architecture:** approved sitemap, desktop mega-menu/list-menu flows, mobile disclosures, footer link map, all route and CTA destinations.
3. **Wireframes:** full home and representative Company, Solution, Products index, Product detail, Industry, Case study, Article and Contact pages at mobile/desktop, including focus/empty/loading/error states.
4. **High-fidelity designs:** visual compositions with real approved company copy and imagery, fully annotated dimensions and interactions; mobile and desktop variants.
5. **Component contracts:** design-system primitives with tokens, props, accessibility, focus and motion guidance, plus responsive rules.
6. **Content model:** CMS schemas, content ownership, approval workflow, editorial style, proof/claims inventory, product maturity review and case-study permissions.
7. **Production repository:** implemented routes/components, validated content, tests, deployment configuration and documentation.
8. **QA evidence:** tested browsers/devices, accessibility report, performance report, security summary, link/form verification and open-issue list.
9. **Handover:** CMS editor guide, developer setup, environment variables documented without secrets, production rollback, monitoring, change process and 30/60/90-day content review schedule.

## 14. Implementation plan and release gates
### Phase 0 — Corporate and asset validation
- Inventory brand logos, visually compare all supplied variants, choose approved primary/inverse/mark versions and lock brand tokens.
- Inspect current `VitalPortfolio.xlsx`, relevant company folders and product owner input; establish what is live, pilot, future or private.
- Confirm business contacts, domain, social links, legal metadata, written case study permissions, mission and short positioning.
- **Exit gate:** signed-off brand kit, verified product register and content ownership; otherwise do not improvise visuals or commercial claims.

### Phase 1 — UX and editorial design
- Create structural sitemap and wireframes, responsive header/footer system, initial copy, unique visual rhythm and user journeys.
- Validate proposals with leadership and representative enterprise/public-sector visitors.
- **Exit gate:** approved wireframes and information architecture without empty destinations.

### Phase 2 — Visual design and components
- Apply approved colors/logos, original art direction, genuine product images and precise type/grid system. Cover states and accessibility in design files.
- **Exit gate:** approved desktop/mobile high-fidelity screens with reusable components and contrast checks.

### Phase 3 — Full build and content integration
- Implement pages, SEO, CMS, forms, integrations, responsive behavior, performance optimization, content governance and analytics.
- **Exit gate:** all promised visible controls work; no placeholder content, dead links, decorative buttons or nonfunctional UI.

### Phase 4 — Verification and launch
- Run a11y/keyboard/mobile/browser tests, automated and manual form tests, link/redirect audits, security scans, Core Web Vitals, content/legal review, search indexing checks, CMS restore and deployment rollback exercise.
- **Exit gate:** owners approve launch based on actual recorded evidence; track any permitted non-critical known issues.

### Phase 5 — Post-launch operations
- Review analytics and enquiries; update case studies/product statuses, tune performance and accessibility, publish only approved content and maintain dependencies.
- **Exit gate:** documented operational ownership and editorial calendar.

## 15. Mandatory anti-pattern rejection criteria
Reject any version that: uses a made-up or substituted Vitalworks logo; invents an 'official' palette; feels like a copy-paste AI SaaS template; uses repeated equal-sized boxes to fill the viewport; features excessive glow, gradients or dark-mode theatrics; buries clear navigation behind fashionable interaction; uses fake metrics, partner logos or credentials; has inaccessible hover-only menus; leaves empty/read-only pages or CTA buttons without actions; floods visitors with dozens of first-level navigation categories; mixes private internal R&D concepts with released products without statuses; exposes personal data from legal documents; or looks good only on one desktop screenshot.

## 16. Final acceptance checklist
- [ ] Primary logo and each responsive/inverse variant officially chosen and documented.
- [ ] Company name, location and legal details reviewed.
- [ ] Website positioning, mission, service scope and claims approved.
- [ ] Product portfolio reconciled with actual release status.
- [ ] Navigation hierarchy works for pointer, touch, keyboard and screen reader.
- [ ] Header/footer layouts feel balanced at mobile/tablet/laptop/wide resolutions.
- [ ] Home and page families avoid repetitive card-grid composition.
- [ ] All public pages have original relevant content and clear purposeful CTAs.
- [ ] Partners/case studies and outcomes have publishing approval.
- [ ] Forms are connected and verified end-to-end, including delivery failures.
- [ ] SEO/sitemap/canonicals/social cards complete.
- [ ] Security, accessibility, performance and mobile QA evidence collected.
- [ ] Editor and release/incident procedures handed over.
- [ ] No placeholders, broken links or unimplemented visible controls remain.

## 17. Open decisions that cannot be resolved from the inspected materials alone
1. **Primary logo and palette:** folder filenames were inventoried, but actual logo imagery has not been reviewed/approved here. A brand review must determine the exact selected versions and colors.
2. **Live product status:** candidate titles exist across source folders and ongoing work; a verified public product catalogue is needed. `VitalPortfolio.xlsx` was identified, not fully analyzed in this requirements pass.
3. **Domain/contact identity:** approved corporate email, phone, domain, registered operating contact address, and official social media links not verified from these sources.
4. **Proof/permissions:** current partner/client marks, project case studies, testimonials and measurable outcomes are not cleared by these source inventories.
5. **Audience emphasis:** leadership should approve relative priorities for public-sector procurement, enterprise engineering, software product discovery and recruitment.
6. **Platform choice:** hosting, CMS, preferred implementation framework, repository and authorized publishing workflow must be selected.

---

## Appendix A — Source register
- Uploaded company Memorandum and Articles: `VITALWORKS_LIMITED_MEMART_Final_2025_v2.pdf` (8 pages), Memorandum pp. 2–3 particularly relevant for company objectives.
- Corporate folder: https://drive.google.com/drive/u/0/folders/1XaBtsrR_UZGgbe4eA78MULE_70TfYFwy
- Company records subfolder: https://drive.google.com/drive/folders/1-LrO0XlhPeL_ffoJoPMpvCWOWLjUY2y8
- Software projects subfolder: https://drive.google.com/drive/folders/1JHaBAUd3NHdnlg4kLEUWGCIk7aQW2oEr
- Concepts subfolder: https://drive.google.com/drive/folders/1UNBPDLWWVB1jMcrA2NRYoCg9sdCjap6r
- VitalPortfolio workbook: https://docs.google.com/spreadsheets/d/1B_OEfSNh1Nd361erx1_XaiAgtmRpDW0K/edit
- Logo assets folder: https://drive.google.com/drive/u/0/folders/1dFBmMe4gIGNWG052JhpSsbvhyW55jU4i

**Document classification:** Corporate website planning document. Source registry PDFs may contain sensitive personal information and should be processed internally, not copied onto the public site.
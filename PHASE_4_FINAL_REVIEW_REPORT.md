# Phase 4 – Final Git Diff and Scope Review

**Date:** 2026-11-16 · **Base:** HEAD `c15448e50182702832d889a28676e0d9d7ad3b74` (`main`, level with `origin/main`)
**Mode:** review only. No source file was modified, staged or deleted during this review; the only new file is this report. Checks ran against the existing production build, which is newer than every source change (build 17:29:30; latest source change 17:28:56). The type check ran with `--incremental false`, so no build-info file was written.

**Verdict:** the working tree contains exactly the approved Phase 4 scope plus the pre-existing unrelated changes. No accidental Phase 1–3 regressions, dependency, environment, backend or WordPress-integration changes, robots changes, or contradictory redirects were found. Two risks need attention when committing (§3).

---

## 1. Phase 4 files

### 1.1 Modified (tracked): 27 Phase 4 files (29 including the 2 pre-existing package files)

| File | +/− | Purpose | Decision |
|---|---|---|---|
| `app/layout.tsx` | +5/−0 | `metadataBase` only; robots unchanged | C1/C3 |
| `app/page.tsx` | +3/−16 | Metadata via helper; Yoast robots override kept; fallback title "Grehasoft" | C1, H6 (unchanged), brand |
| `app/[slug]/page.tsx` | +6/−22 | Metadata via helper | C1, H1 |
| `app/[slug]/[child]/page.tsx` | +25/−2 | Adds `generateMetadata`; `normalizeSlug` moved to module scope; 404 logic unchanged | C1 |
| `app/about-us`, `awards-and-recognitions`, `brand-story`, `careers`, `contact-us`, `products`, `products/pms` `layout.tsx` | ~+6/−20…30 each | Yoast mapping replaced by `buildPageMetadata`, same title fallbacks (careers: "Grehasoft") | C1, H1, M1, brand |
| `app/blogs/page.tsx` | +54/−389 | Server page with real posts; placeholders removed; metadata and schema moved from the deleted layout | H2 |
| `app/blogs/[category]/[slug]/page.tsx` | +137/−146 | Server-rendered post, ISR, `notFound()`, metadata, BlogPosting | H2, M1 |
| `app/blogs/category/[slug]/page.tsx` | +2/−50 | Placeholder fallbacks removed; breadcrumb schema off | H2 |
| `app/portfolio/page.tsx` | +34/−2 | Metadata and schema moved from the deleted layout | C1 |
| `app/portfolio/[slug]/page.tsx` | +56/−424 | Server page, ISR, `notFound()`, description fallback (UI moved to a component) | H2-pattern, M3 |
| `app/services/page.tsx` | +1/−1 | Hub card link → `/website-redesign-services` | Route cleanup §3 |
| `components/PageHeader.tsx` | +34/−5 | BreadcrumbList JSON-LD; optional `titleTag` and `breadcrumbSchema` | H7/M4, M5 |
| `components/Navbar.tsx` | +3/−3 | Logo `alt="Grehasoft"` ×2 (plus one whitespace-only line, see §3) | L1 |
| `components/StickyScrollServices.tsx` | +3/−3 | Decorative `motion.h1` → `motion.div` | M5 |
| `components/service/branding/IntroSection.tsx` | +3/−2 | `h1` → `h2`, same classes | M5 |
| `lib/backend-api.ts` | +68/−0 | Strict helpers only; existing functions untouched | H2, C2 |
| `lib/wp-props.ts` | +41/−0 | Trim helpers for client props | H2 |
| `lib/internal-href.ts` | +63/−0 | `postCategories`, `postPath`; 51 new `LEGACY_PATHS` entries | H2, H5 |
| `lib/content/lead-generation.ts` | +2/−2 | URL from the central helper | C3 |
| `lib/lead-generation-schema.ts` | +12/−7 | BreadcrumbList node; `serializeJsonLd` re-exported | H7, C3 |
| `next.config.js` | +58/−0 | 51 permanent redirects (13 + 38); existing rules untouched | H5, route cleanup |

### 1.2 Added (untracked): 11 source files and 7 reports

| File | Purpose |
|---|---|
| `lib/seo.ts` | Site-URL guard, canonical/absolute URLs, `buildPageMetadata`, BreadcrumbList, text helpers |
| `proxy.ts` | Mixed-case → lowercase 308 (H3) |
| `app/sitemap.ts` | `/sitemap.xml` (C2) |
| `app/blogs/category/[slug]/layout.tsx` | Category metadata and real 404 |
| `app/services/layout.tsx`, `app/privacy/layout.tsx`, `app/terms/layout.tsx`, `app/sitemap/layout.tsx` | Approved metadata (H4). Privacy and Terms are marked as awaiting policy-owner confirmation. |
| `components/blog/BlogIndex.tsx` | Former `/blogs` client UI, props-driven |
| `components/portfolio/CaseStudyDetail.tsx` | Former portfolio detail client UI, props-driven |
| `tests/seo.test.ts` | 9 targeted tests |
| `PHASE_4_SEO_AUDIT_REPORT.md`, `PHASE_4_IMPLEMENTATION_REPORT.md`, `PHASE_4_METADATA_DRAFTS.md`, `PHASE_4_EDITORIAL_RECOMMENDATIONS.md`, `PHASE_4_REVIEW_FOLLOWUP.md`, `PHASE_4_ROUTE_CLEANUP_REPORT.md`, `PHASE_4_FINAL_REVIEW_REPORT.md` (this file) | Reports. 7 Phase 4 reports in total; the 8th untracked report, `PRODUCTION_WEBSITE_AUDIT_REPORT.md`, is pre-existing. |

The 3 temporary Phase 4 layouts were created and removed again during route cleanup, as approved. They were never tracked, so they don't appear in git.

### 1.3 Deleted (tracked): 59 files, all documented

| Group | Count | Files |
|---|---|---|
| Layouts whose metadata moved into pages | 4 | `app/blogs/layout.tsx`, `app/blogs/[category]/[slug]/layout.tsx`, `app/portfolio/layout.tsx`, `app/portfolio/[slug]/layout.tsx` |
| Legacy pages, first implementation | 14 | the 13 `*1` parent pages + `app/headless-development/page.tsx` |
| Legacy pages, route cleanup | 40 | 3 unresolved routes + 37 sub-routes (`branding-packages1`, `brochure-flyer-design1`, `business-card-design1`, `landing-page-design1`, `search-engine-marketing1`, `ecommerce-development1/*` ×5, `mobile-app-development1/*` ×6, `social-media-marketing1/*` ×6, `software-web-apps1/*` ×8, `technology-services1/*` ×5, `website-development1/*` ×2) |
| Redesign consolidation | 1 | `app/website-redesign/page.tsx` |

Check result: every deleted path is either one of the 4 documented layouts or a `page.tsx` under a legacy or redesign route. **No other file was deleted.** `app/services/page.tsx`, `app/brand-story/page1.tsx` and all components are intact.

---

## 2. Pre-existing unrelated changes (not Phase 4, preserved untouched)

| Item | State | Note |
|---|---|---|
| `package.json` | Modified | +1 line: `"framer-motion": "^14.13.0"`. Present before Phase 1. |
| `package-lock.json` | Modified | +60/−17: `framer-motion` 12.38.0 → 14.13.0 (`motion-dom`/`motion-utils` 14.x, new optional `remix` peer). Same size as at the start of Phase 4 (60/17). No install was run during Phase 4. |
| `.agents/` (2 files), `.claude/` (skills, 107 files) | Untracked | Tooling; not Phase 4 |
| `AGENTS.md`, `CLAUDE.md` | Untracked | Written by `next dev` |
| `PRODUCTION_WEBSITE_AUDIT_REPORT.md` | Untracked | Initial audit (password redacted) |
| `public/images/Layered Tech Ecosystem Orbit.png` | Untracked | Pre-existing asset |
| `skills-lock.json` | Untracked | Tooling |

**Not changed:**
- `.env.local` (gitignored; last modified Aug 13) and `.env.example`.
- `lib/api.ts`, `lib/axios.js`, `types/`, `wordpress/`.
- The NestJS backend `grehasoft-api/` (no changes).
- `WP_API_BASE`, `BACKEND_API_BASE` and `ENABLE_FALLBACK` in `lib/backend-api.ts`.
- `styles/`, `public/`, `tsconfig.json`, `next-env.d.ts`, `postcss.config.mjs`.
- No dependency was added or removed by Phase 4. `tsx`, used for the tests, was already a devDependency.

---

## 3. Unexpected or risky items

| # | Item | Severity | Detail and recommendation |
|---|---|---|---|
| R1 | **Untracked files that the tracked changes depend on** | **High at commit time** | Tracked files import untracked new files: `lib/seo.ts`, `proxy.ts`, `components/blog/BlogIndex.tsx`, `components/portfolio/CaseStudyDetail.tsx` and the 5 new layouts. A commit that stages only modified and deleted files would **break the build**. When committing, add the 11 source files in §1.2 by name. `tests/seo.test.ts` is optional but recommended. |
| R2 | **New runtime layer: `proxy.ts`** | Medium (deployment) | Runs on every page request except files and `/_next/`, in the Node runtime. Works under `next start`. Confirm on the staging host after deployment that `/SEO` → 308 `/seo` and that pages and assets are unaffected. |
| R3 | Navbar whitespace line | Cosmetic | A whitespace-only line inside the logo `<Link>` became an empty line during the alt-text edit. No effect on output. |
| R4 | Line-ending warnings | Cosmetic | Git warns "LF will be replaced by CRLF" for 13 files written with LF. `core.autocrlf=true` and the repository stores LF, so the diffs contain only real changes (verified with `--numstat`); there are no whole-file rewrites. |
| R5 | `/Seo/<x>` takes 2 hops | Low | The Phase 2 `/seo/:slug` rule (case-insensitive) runs before the lowercase proxy. The outcome is correct; documented. |
| R6 | `npm run lint` script is stale | Low (pre-existing) | `next lint` no longer exists in Next.js 16. The project's `lint` script fails independently of Phase 4. |
| R7 | `/sitemap.xml` will be live on staging after deployment | Low | It lists production URLs. Googlebot is blocked by staging `robots.txt` and the sitemap isn't referenced there, so indexing protection is unaffected. |
| R8 | Blog category archives still client-rendered | Low (known) | Out of scope for H2; canonical and real 404 added; excluded from the sitemap. |

**No accidental Phase 1–3 changes found:**
- **Phase 1:** `notFound()` and the backend-error handling in `app/[slug]` and `[child]` are unchanged; only their metadata blocks were replaced. `BackendHttpError` and the existing helpers in `lib/backend-api.ts` are untouched (0 removed lines). `app/not-found.tsx` is untouched. `/access` → 404.
- **Phase 2:** the 9 legacy redirects and the blog redirect family are unchanged (0 lines removed from `next.config.js`). `toInternalHref` and `servicePath` are unchanged (0 lines removed from `lib/internal-href.ts`). Breadcrumb hrefs are unchanged.
- **Phase 3:** CTA provider and layout fetch unchanged; `wp-props` trims unchanged (0 removed lines); ISR `revalidate = 300` and the empty `generateStaticParams` are kept on the service routes; `next/image` usages unchanged.
- **Runtime:** service, post and portfolio pages return `x-nextjs-cache: HIT`; the CTA is in the server HTML; the Phase 1–2 route suite passes except for 2 intended Phase 4 behaviour changes (§5).

---

## 4. Approved scope verification

| Decision source | Item | Verified |
|---|---|---|
| Implementation brief | C1/C3 central site URL and canonicals | `lib/seo.ts` guard rejects `cms.*`, `*.hostingersite.com` and non-https values. 119/119 pages have 1 canonical = `https://grehasoft.com` + lowercase path; 0 duplicate canonicals; 404s have none. |
| | C2 sitemap | 119 URLs, valid, all 200, **identical to the crawl** (0 differences), 104 with `lastmod` |
| | H1 og:url | Equals the canonical on 119/119; 0 CMS, www or staging hosts |
| | H2 blog | Real posts in server HTML; placeholders gone; unknown and wrong-category posts → 404; backend failures → 500 (fault suite 23/23, earlier) |
| | H3 mixed case | 308 to lowercase, query kept |
| | H6 robots | Unchanged (plan only) |
| | H7/M4 BreadcrumbList | 118 pages via `PageHeader` + 1 lead-generation page (all except `/`), valid |
| | M1, M3, M5, L1 | `og:type` set; portfolio fallback descriptions; one H1 per page (except 2 CMS-content cases); logo alt |
| | M2 OG image | Not implemented (no approved asset); nothing substituted |
| | M6, M7 | Instruction only; BreadcrumbList only |
| Metadata follow-up | 4 approved page metadata sets | Exact wording rendered; Privacy and Terms marked awaiting policy-owner confirmation; `/website-redesign` got none and is now redirected |
| | Brand fallbacks | `app/page.tsx`, `app/blogs/page.tsx`, `app/careers/layout.tsx` → "Grehasoft"; WordPress Site Title untouched |
| Route cleanup | 38 new redirects | All in `next.config.js` with exact approved destinations; each a single 308 hop → 200; query kept; trailing-slash variants don't loop (201/201 suite) |
| | 3 new 404s | magento, opencart, dynamic-website → branded 404, no canonical |
| | Redesign consolidation | `/website-redesign` → 308 `/website-redesign-services`; `/services` links directly; not in the sitemap; the only redesign URL in the crawl |

**Redirect definition review** (`next.config.js` loaded and analyzed):
- 67 rules, all `permanent: true` (308): 60 exact (9 Phase 2 + 13 Phase 4 + 38 route cleanup) and 7 pattern (the Phase 2 blog family).
- **Duplicate sources: 0.** Chains (a destination that is another redirect's source): **0.**
- Non-canonical destinations (uppercase or trailing slash): **0.** Sources that still have a page file: **0.**
- No exact source is captured by a pattern rule. The `/website-development/:slug` exclusion for `static-website|dynamic-website` still works.
- `LEGACY_PATHS` mirrors all 60 exact redirects (0 missing, 0 extra). No obsolete or contradictory definitions.
- Destinations: 2 static pages (`/contact-us`, `/awards-and-recognitions`) and 47 CMS service routes, all 200.

**Staging robots protection: unchanged.**
- Staging `robots.txt`: `User-agent: Googlebot / Disallow: /` and `User-agent: * / Allow: /`.
- Staging pages: `/` `noindex, follow`; `/seo` and `/blogs` `noindex, nofollow`.
- The local build emits the same robots meta.
- The diff contains no robots change except the `/blogs` `noindex, nofollow` values, moved verbatim from the deleted layout into the page.
- No `app/robots.*` or `public/robots.txt` exists. Nothing was deployed.

---

## 5. Test status (this review)

| Test | Result |
|---|---|
| `npx tsc --noEmit --incremental false` | **Pass** (exit 0) |
| `npm run build` | **Pass**, 0 warnings. Last run after the final code change, during route cleanup; not re-run here to avoid writing files. Build is newer than all sources. |
| Unit tests (`npx tsx --test tests/seo.test.ts`) | **9/9 pass** |
| Route cleanup suite (41 routes, query, loops, `/services` link, sitemap exclusions) | **201/201 pass** |
| SEO regression (119 pages + 404 probes) | **3,389/3,389 pass** |
| Crawl from `/` | 119 pages, all 200 |
| Sitemap vs crawl | 119 = 119, 0 differences |
| Phase 4 route suite | **382/383**. Exception: `/Seo/Unknown-Child` 2-hop chain (R5), expected and documented. |
| Phase 1–2 route suite | **48/50**. Exceptions: `/About-Us` (now 308 → `/about-us`, H3) and `/sitemap.xml` (now 200, C2). Both are intended Phase 4 changes. |
| ISR and CTA | `HIT` on service, post and portfolio pages; CTA in server HTML |
| Fault injection (backend failures ≠ 404) | 23/23 in the implementation run. No data-fetching code changed since. |

---

## 6. Remaining content-team and owner tasks (WordPress, not edited)

1. Fix the priority Yoast errors:
   - CRM portfolio title pasted twice.
   - `/linkedin` description paste error.
   - Grammar in the `/seo` and `/ios-app-development` descriptions.
   - Brand missing from the `/seo`, `/youtube-marketing` and `/api-development-integration` titles.
2. Enter meta descriptions for 7 portfolio items, and proper titles for `haleholidays` and `malayalamnewslive` (`PHASE_4_METADATA_DRAFTS.md` §2).
3. Change the in-content `<h1>` to Heading 2 in 2 posts. Add featured images to 18 posts.
4. Optional: apply the 45 title and 49 description shortenings (`PHASE_4_EDITORIAL_RECOMMENDATIONS.md`). Override the "- GrehaSoft" Yoast suffix per item if wanted (Site Title stays unchanged).
5. `/business-card-design`: add letterhead content or confirm the service, since `/services/visiting-cards-letter-heads` now redirects there.
6. `/website-redesign-services`: consider the 4 FAQ details from the removed static page (2–3-year refresh cycle, 301/URL-structure answer, tailored pricing, 4–8-week timeline) after owner confirmation.
7. Policy owner: confirm the `/privacy` and `/terms` metadata wording before production. The Terms copy names `www.grehasoft.com`.
8. Yoast on `cms.grehasoft.com`: turn off XML sitemaps and keep the site discouraged from indexing (implementation report §12.2).
9. The 99 pending ACF link fields (Phase 2).

**Owner decisions still open (code):**
- An approved default OG image (25 pages without one).
- WebPage schema for pages without ACF schema.
- The go-live robots plan (implementation report §12.1).
- The CTA/ISR freshness interaction, hero video re-encoding, and rotating the old `/access` password.

---

## 7. Exact Git status

```
Branch: main
HEAD:   c15448e50182702832d889a28676e0d9d7ad3b74   (## main...origin/main, in sync)
Staged: 0 files
Stash:  empty
Diff vs HEAD (tracked): 88 files changed, 711 insertions(+), 19116 deletions(-)
```

**Unstaged tracked changes (88):**
- **M (29):** the 27 Phase 4 files listed in §1.1 (`app/[slug]/[child]/page.tsx`, `app/[slug]/page.tsx`, `app/about-us/layout.tsx`, `app/awards-and-recognitions/layout.tsx`, `app/blogs/[category]/[slug]/page.tsx`, `app/blogs/category/[slug]/page.tsx`, `app/blogs/page.tsx`, `app/brand-story/layout.tsx`, `app/careers/layout.tsx`, `app/contact-us/layout.tsx`, `app/layout.tsx`, `app/page.tsx`, `app/portfolio/[slug]/page.tsx`, `app/portfolio/page.tsx`, `app/products/layout.tsx`, `app/products/pms/layout.tsx`, `app/services/page.tsx`, `components/Navbar.tsx`, `components/PageHeader.tsx`, `components/StickyScrollServices.tsx`, `components/service/branding/IntroSection.tsx`, `lib/backend-api.ts`, `lib/content/lead-generation.ts`, `lib/internal-href.ts`, `lib/lead-generation-schema.ts`, `lib/wp-props.ts`, `next.config.js`), plus the pre-existing `package.json` and `package-lock.json`.
- **D (59):** listed in §1.3.

**Untracked:**
- **Phase 4 (18):**
  - Source (11): `lib/seo.ts`, `proxy.ts`, `app/sitemap.ts`, `app/blogs/category/[slug]/layout.tsx`, `app/services/layout.tsx`, `app/privacy/layout.tsx`, `app/terms/layout.tsx`, `app/sitemap/layout.tsx`, `components/blog/BlogIndex.tsx`, `components/portfolio/CaseStudyDetail.tsx`, `tests/seo.test.ts`.
  - Reports (7): the `PHASE_4_*.md` files, including this one.
- **Pre-existing:** `.agents/`, `.claude/`, `AGENTS.md`, `CLAUDE.md`, `PRODUCTION_WEBSITE_AUDIT_REPORT.md`, `public/images/Layered Tech Ecosystem Orbit.png`, `skills-lock.json`.

**Confirmation:** nothing was staged, committed, pushed, merged or deployed during Phase 4 or this review. No reset, stash or clean was used. Unrelated working-tree changes are untouched.

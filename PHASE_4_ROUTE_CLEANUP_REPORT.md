# Phase 4 – Route Cleanup Report

**Date:** 2026-11-16 · **Source of decisions:** `PHASE_4_REVIEW_FOLLOWUP.md` §5–§7 (approved)
**Git:** branch `main` · HEAD `c15448e` (unchanged, level with `origin/main`) · **0 files staged** · all changes are unstaged in the working tree.
**Nothing was committed, pushed, merged or deployed.** No WordPress, Yoast, backend, `robots.txt`, robots metadata, indexing, `/privacy`/`/terms` wording or OG image change was made.

---

## 1. Implemented redirects (38 × 308)

These are 37 approved legacy redirects plus the `/website-redesign` consolidation. All are in `next.config.js` (`permanent: true` → 308) and are mirrored in `LEGACY_PATHS` in `lib/internal-href.ts`, which keeps CMS links to these paths normalized.

| # | Source | Destination | Verified |
|---|---|---|---|
| 1 | `/custom-development` | `/software-web-apps` | 308 → 200 |
| 2 | `/services/software-programming` | `/software-web-apps` | 308 → 200 |
| 3 | `/services/visiting-cards-letter-heads` | `/business-card-design` ⚠ partial coverage, see §6 | 308 → 200 |
| 4 | `/branding-packages1` | `/branding-packages` | 308 → 200 |
| 5 | `/brochure-flyer-design1` | `/brochure-flyer-design` | 308 → 200 |
| 6 | `/business-card-design1` | `/business-card-design` | 308 → 200 |
| 7 | `/landing-page-design1` | `/landing-page-design` | 308 → 200 |
| 8 | `/search-engine-marketing1` | `/search-engine-marketing` | 308 → 200 |
| 9 | `/ecommerce-development1/custom` | `/ecommerce-development` | 308 → 200 |
| 10 | `/ecommerce-development1/shopify` | `/shopify-development` | 308 → 200 |
| 11 | `/ecommerce-development1/woocommerce` | `/woocommerce-development` | 308 → 200 |
| 12 | `/mobile-app-development1/android` | `/android-app-development` | 308 → 200 |
| 13 | `/mobile-app-development1/bussiness-apps` | `/business-app-development` | 308 → 200 |
| 14 | `/mobile-app-development1/hybrid` | `/hybrid-app-development` | 308 → 200 |
| 15 | `/mobile-app-development1/ios` | `/ios-app-development` | 308 → 200 |
| 16 | `/mobile-app-development1/pwa` | `/progressive-web-app-development` | 308 → 200 |
| 17 | `/mobile-app-development1/utility-apps` | `/utility-app-development` | 308 → 200 |
| 18 | `/social-media-marketing1/facebook1` | `/facebook` | 308 → 200 |
| 19 | `/social-media-marketing1/instagram1` | `/instagram` | 308 → 200 |
| 20 | `/social-media-marketing1/linkedin1` | `/linkedin` | 308 → 200 |
| 21 | `/social-media-marketing1/pinterest1` | `/pinterest` | 308 → 200 |
| 22 | `/social-media-marketing1/twitter1` | `/twitter` | 308 → 200 |
| 23 | `/social-media-marketing1/youtube` | `/youtube-marketing` | 308 → 200 |
| 24 | `/software-web-apps1/api-integrations` | `/api-development-integration` | 308 → 200 |
| 25 | `/software-web-apps1/booking` | `/booking-system-development` | 308 → 200 |
| 26 | `/software-web-apps1/business-tools` | `/custom-business-software-development` | 308 → 200 |
| 27 | `/software-web-apps1/crm` | `/crm-software-development` | 308 → 200 |
| 28 | `/software-web-apps1/custom-web` | `/custom-web-app-development` | 308 → 200 |
| 29 | `/software-web-apps1/erp` | `/erp-software-development` | 308 → 200 |
| 30 | `/software-web-apps1/inventory` | `/inventory-management-software` | 308 → 200 |
| 31 | `/software-web-apps1/lms` | `/lms-development` | 308 → 200 |
| 32 | `/technology-services1/automation1` | `/workflow-automation` | 308 → 200 |
| 33 | `/technology-services1/backend1` | `/backend-development` | 308 → 200 |
| 34 | `/technology-services1/databases1` | `/database-development` | 308 → 200 |
| 35 | `/technology-services1/frontend1` | `/frontend-development` | 308 → 200 |
| 36 | `/technology-services1/server-cloud1` | `/server-cloud-solutions` | 308 → 200 |
| 37 | `/website-development1/static-website` | `/static-html-websites` | 308 → 200 |
| 38 | `/website-redesign` | `/website-redesign-services` | 308 → 200 |

The destinations are exactly those in the review report: lowercase, without a trailing slash, and each one a live 200 page. Every redirect is a single hop.

## 2. Implemented 404s (3)

| Route | Result |
|---|---|
| `/ecommerce-development1/magento` | 404, branded "Page Not Found \| Grehasoft" page, no canonical |
| `/ecommerce-development1/opencart` | 404, branded, no canonical |
| `/website-development1/dynamic-website` | 404, branded, no canonical |

These are implemented by deleting the page files. Next.js then serves the existing `app/not-found.tsx`. No redirect is configured for them.

**Totals, with the earlier Phase 4 work.** All 54 legacy routes (the audit's 17 plus 37 additional) are now resolved:
- 13 redirects in the first implementation, plus 37 now: **50 × 308**.
- `/headless-development` earlier, plus 3 now: **4 × 404**.
- Plus the `/website-redesign` consolidation.
- No legacy page file remains.

## 3. Website redesign consolidation

- `/website-redesign` → **308** → `/website-redesign-services`.
- The `/services` hub card ("Website Redesign", `app/services/page.tsx:65`) now links **directly** to `/website-redesign-services`, verified in the server HTML. Nothing on the site links to `/website-redesign` any more.
- `app/website-redesign/page.tsx` and its `layout.tsx` are removed. The content check before removal is in §6.
- `/website-redesign` is removed from `STATIC_PATHS` in `app/sitemap.ts`. The sitemap contains `/website-redesign-services` and not `/website-redesign`.
- **`/website-redesign-services` is now the only primary redesign URL.** It is the only redesign page in the crawl, the sitemap and the internal links.

## 4. Files

### Deleted: 44 files, all from the approved list

**41 page files**, all tracked, so all show as `D` in git:
- **The 3 unresolved routes:** `app/custom-development/page.tsx`, `app/services/software-programming/page.tsx`, `app/services/visiting-cards-letter-heads/page.tsx`
- **Design and marketing:** `app/{branding-packages1,brochure-flyer-design1,business-card-design1,landing-page-design1,search-engine-marketing1}/page.tsx`
- **eCommerce:** `app/ecommerce-development1/{custom,magento,opencart,shopify,woocommerce}/page.tsx`
- **Mobile apps:** `app/mobile-app-development1/{android,bussiness-apps,hybrid,ios,pwa,utility-apps}/page.tsx`
- **Social media:** `app/social-media-marketing1/{facebook1,instagram1,linkedin1,pinterest1,twitter1,youtube}/page.tsx`
- **Software:** `app/software-web-apps1/{api-integrations,booking,business-tools,crm,custom-web,erp,inventory,lms}/page.tsx`
- **Technology:** `app/technology-services1/{automation1,backend1,databases1,frontend1,server-cloud1}/page.tsx`
- **Website development:** `app/website-development1/{dynamic-website,static-website}/page.tsx`
- **Redesign:** `app/website-redesign/page.tsx`

**3 temporary layouts.** These were created earlier in Phase 4, were never tracked, and were removed as approved:
- `app/services/software-programming/layout.tsx`
- `app/services/visiting-cards-letter-heads/layout.tsx`
- `app/website-redesign/layout.tsx`

The now-empty folders were removed as well. No other file was deleted: before deletion I confirmed the folders held only these 44 files.

### Modified in this step
| File | Change |
|---|---|
| `next.config.js` | +38 permanent redirects (§1); existing redirects untouched |
| `lib/internal-href.ts` | +38 `LEGACY_PATHS` entries mirroring the redirects |
| `app/services/page.tsx` | Hub card `href` `/website-redesign` → `/website-redesign-services` (1 line) |
| `app/sitemap.ts` | `/website-redesign` removed from `STATIC_PATHS` |
| `app/careers/layout.tsx` | Fallback title `Careers - GrehaSoft` → `Careers - Grehasoft` (used only when the WordPress page can't be loaded) |
| `PHASE_4_ROUTE_CLEANUP_REPORT.md` | New (this report) |

## 5. Test results

All tests ran on a production build (`next build` + `next start`, port 3100) against the local NestJS backend, which reads the same CMS.

| Test | Result |
|---|---|
| `npx tsc --noEmit` | **Pass** (exit 0) |
| `npm run build` | **Pass**, 0 warnings. The route table now lists only real routes: no `*1`, legacy or `/website-redesign` routes remain. |
| Unit tests (`npx tsx --test tests/seo.test.ts`) | **9/9 pass** |
| **New route cleanup suite** (41 routes) | **201/201 pass**. It checks: each of the 38 redirects is one 308 hop to the exact destination, then 200; the query string is kept (`?utm_source=Test&x=1` passed through unchanged); destinations are lowercase with no trailing slash; trailing-slash variants (`/branding-packages1/`) reach 200 in ≤ 2 hops with no loop; the 3 404s show the branded page with no canonical; `/services` links to `/website-redesign-services` and not to `/website-redesign`; and the sitemap holds none of the 41 removed URLs. |
| SEO regression (canonical, `og:url`, `og:type`, robots, JSON-LD, BreadcrumbList, H1, 404 probes) | **3,389/3,389 pass** across 119 linked pages. All 119 have a title and a description. |
| Crawl from `/` | **119 pages, all 200.** It previously found 120; the only difference is that `/website-redesign` is gone. |
| Sitemap validation | **119 URLs**, valid XML, all 200, 104 with `lastmod`, identical to the crawl (0 differences) |
| Phase 4 route suite (earlier legacy routes, mixed case, sitemap) | **382/383**. See exception A. |
| Phase 1–2 route suite | **48/50**. See exception B. |

**Known exceptions, explained, not ignored:**
- **A. `/Seo/Unknown-Child`.** The suite expected a 308 straight to `/seo/unknown-child`. The actual chain is 308 `/blogs/seo/Unknown-Child` → 308 `/blogs/seo/unknown-child` → 404. Next.js runs `next.config.js` redirects before `proxy.ts`, and they match case-insensitively. So the existing Phase 2 blog redirect `/seo/:slug` fires first and keeps the original letter case, then the lowercase proxy runs. The result is correct (a real 404, no loop, 2 hops) and only affects mixed-case URLs under the old blog prefixes. Making it one hop would mean changing the Phase 2 blog redirects, which this step doesn't cover. The same exception was reported earlier in Phase 4.
- **B. Phase 1 expectations that Phase 4 changed on purpose.** `/About-Us` was expected to 404 and now gets a 308 to `/about-us` (approved lowercase normalization, H3). `/sitemap.xml` was expected to 404 and now returns the XML sitemap (approved C2). All other 48 Phase 1–2 checks pass, including the 9 Phase 2 redirects and the blog redirect family.

**Route and sitemap counts against the implementation report:**
- **Sitemap:** was 120, now **119** (`/website-redesign` removed, as specified in the review report §7).
- **Linked pages:** was 120, now **119**.
- **Legacy route files:** was 40 remaining, now **0**.

## 6. Unresolved issues and content-team follow-ups (WordPress, not edited)

1. **`/services/visiting-cards-letter-heads` → `/business-card-design` is a partial match.** Visiting cards are fully covered, but **letterheads are not mentioned on `/business-card-design`** (0 mentions in its CMS content). Letterheads only appear inside `/branding-packages`.
   - **Content team:** consider adding a short letterhead-design section or FAQ to the Business Card Design service in WordPress, or confirm the service is no longer offered.
2. **FAQ answers from the removed `/website-redesign` page that aren't on `/website-redesign-services`.** The CMS page has 10 FAQs that cover the topics in general, but these specifics existed only on the old page:
   - "Typically, websites should be refreshed every 2-3 years." (old "When should I consider a website redesign?")
   - "We use 301 redirects and maintain your URL structure…" (old SEO answer; the CMS FAQ says only that rankings are preserved "through proper planning")
   - "The cost varies based on the size of the site… We offer tailored packages to fit different budgets." (no pricing FAQ on the CMS page)
   - "A typical redesign project takes between 4 to 8 weeks…" (the CMS FAQ says only that the timeline depends on scope)

   **Content team:** add any of these that are still accurate as FAQ items in WordPress. They are business claims, so the owner should confirm them first.
3. **Earlier open items, unchanged:**
   - Default OG image (approved asset needed).
   - Seven portfolio descriptions and the priority Yoast corrections.
   - Policy-owner confirmation of the `/privacy` and `/terms` metadata.
   - Disabling the Yoast sitemap on `cms.grehasoft.com`.
   - The 99 Phase 2 ACF link fields.
   - The go-live robots plan.
   - The CTA/ISR freshness interaction, hero video re-encoding, and rotating the old `/access` password.

## 7. Git state

- **Branch:** `main`. **HEAD:** `c15448e`, level with `origin/main` (no local commits).
- **Staged:** 0 files.
- **Unstaged:**
  - 29 modified tracked files, including the pre-existing `package.json` and `package-lock.json`.
  - 59 tracked deletions: 18 from the earlier Phase 4 work and 41 from this step.
  - 23 untracked entries: Phase 4 sources, tests and reports, plus the pre-existing `.agents/`, `.claude/`, `AGENTS.md`, `CLAUDE.md`, `PRODUCTION_WEBSITE_AUDIT_REPORT.md`, `public/images/Layered Tech Ecosystem Orbit.png` and `skills-lock.json`, all preserved.
- `git diff --stat` across all tracked changes since HEAD: 88 files, +711 / −19,116. Most of this is the deleted legacy pages.

**Confirmation:** nothing was committed, pushed, merged or deployed, and nothing was staged. Staging remains `noindex` and Googlebot-blocked. Stopped here.

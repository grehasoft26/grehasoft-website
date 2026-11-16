# Phase 4 – SEO Implementation Report

**Branch:** `main` · **HEAD:** `c15448e` (unchanged) · **Date:** 2026-11-16
**State:** all changes are uncommitted in the working tree. Nothing is staged, committed, pushed or deployed.
**Inputs:** `PHASE_4_SEO_AUDIT_REPORT.md` and the approved Phase 4 implementation brief.

Companion documents:
- `PHASE_4_METADATA_DRAFTS.md`: titles and descriptions awaiting approval (H4, M3).
- `PHASE_4_EDITORIAL_RECOMMENDATIONS.md`: Yoast title and description rewrites and brand spelling (L2, L3).

**Pre-existing changes, preserved untouched:** `package.json`, `package-lock.json` (modified before Phase 4); `.agents/`, `.claude/`, `AGENTS.md`, `CLAUDE.md`, `PHASE_4_SEO_AUDIT_REPORT.md`, `PRODUCTION_WEBSITE_AUDIT_REPORT.md`, `public/images/Layered Tech Ecosystem Orbit.png`, `skills-lock.json` (untracked).

---

## 1. Completed fixes

| ID | Item | Status | Summary |
|---|---|---|---|
| C1 + C3 | Central site URL and canonicals | **Done** | New `lib/seo.ts`: `SITE_URL` from `NEXT_PUBLIC_SITE_URL`, default `https://grehasoft.com`. CMS hosts (`cms.*`), `*.hostingersite.com` and non-https values are rejected and fall back to production. `metadataBase` is set in the root layout. A self-referencing canonical is generated for every page route: lowercase, no query string, no trailing slash. It never comes from Yoast. The root layout sets no canonical, so 404s and unknown URLs never get one. Yoast titles, descriptions and images are kept. Lead-generation schema and canonical now use the helper. |
| C2 | XML sitemap | **Done** | New `app/sitemap.ts` → `/sitemap.xml`: 120 URLs, regenerated at most hourly. It uses strict data fetching, so a backend outage can't publish a truncated sitemap. See §5. |
| H1 | `og:url` | **Done** | `og:url` equals the canonical on all 120 linked pages. 0 `cms.`, `www.` or temporary hosts. |
| H2 | Blog server rendering and real 404s | **Done** | `/blogs` renders the 10 latest real posts on the server; the placeholder `DEFAULT_POSTS` are removed. Post pages are server-rendered with ISR (5 min), with their own metadata, `og:type=article` and BlogPosting schema. Unknown posts, and posts under a category they don't belong to, return a real 404. Unknown categories return 404. Backend failures return 500 and are never cached as 404. See §7. |
| H3 | Mixed-case URLs | **Done** | New `proxy.ts`: any page path with uppercase letters gets a 308 to its lowercase form, with the query string kept. Files (paths with a dot) and `/_next/` are excluded. No loops. Unknown routes still end in a real 404. |
| H4 | Five pages without metadata | **Partly done; text needs approval** | Each now has a server `layout.tsx` with canonical, `og:url`, `og:type` and Twitter card. Title and description drafts are in `PHASE_4_METADATA_DRAFTS.md` and have **not** been applied. |
| H5 | Legacy routes | **Done for 14 of 17; 3 need a decision** | 13 redirected with a 308 to their equivalent page, 1 now returns 404, 3 left unchanged as uncertain. See §4. |
| H6 | Robots ownership | **Plan only, nothing changed** | See §12.1. |
| H7 + M4 | BreadcrumbList JSON-LD | **Done** | Generated from the breadcrumb `PageHeader` already shows (119 pages) and from the lead-generation page's own visible breadcrumb. No visible UI change. Not added to pages without a visible breadcrumb (the homepage). |
| M1 | `og:type` | **Done** | `website` on 72 pages; `article` on 48 blog posts, with `article:published_time` and `article:modified_time` from WordPress. |
| M2 | Default OG image | **Blocked: approved asset needed** | No suitable branded image exists in `public/` (§13). Nothing was generated or substituted. |
| M3 | Portfolio descriptions | **Done (code fallback); CMS text drafted** | The Yoast description is used when present. Otherwise the item's ACF `short_desc` is used, cut to ≤160 characters. 8/8 portfolio pages now have a description. Drafts for Yoast are in the metadata drafts document. |
| M5 | H1 structure | **Done in code** | 118/120 pages have exactly one H1 in server HTML; previously 19 pages had 2 and 15 had 0. The other 2 are blog posts whose WordPress body contains its own `<h1>` (content fix, in the editorial report). |
| M6 | CMS sitemap | **Instruction only** | See §12.2. WordPress and Hostinger were not touched. |
| M7 | Missing structured data | **Partly done** | All 7 pages that had no JSON-LD now have BreadcrumbList. WebPage nodes were **not** added, because they need a confirmed name and description (H4 approval). Adding them would mean inventing properties. |
| L1 | Logo alt | **Done** | `alt="Grehasoft"` on the desktop and mobile navbar logo. |
| L2 + L3 | Editorial | **Report only** | `PHASE_4_EDITORIAL_RECOMMENDATIONS.md`: 45 titles, 49 descriptions, brand spelling and content errors. |

**Two additional fixes needed during testing:**
- **Blog index hydration error:** server-rendering real posts exposed invalid HTML in `BlogIndex`. A WordPress excerpt containing its own `<p>` was injected into a `<p>`. This caused React hydration error #418 and 4px of horizontal scroll at 390px. The wrapper is now a `<div>`, which looks the same under Tailwind's preflight reset.
- **Portfolio soft 404:** unknown portfolio slugs used to render "Loading..." with HTTP 200. They now return a real 404, as part of the server-rendering change.

---

## 2. Files changed

### New
| File | Purpose |
|---|---|
| `lib/seo.ts` | Site URL (with guard), `canonicalPath`, `absoluteUrl`, `buildPageMetadata` (Yoast → Next metadata, URL fields always generated), `buildBreadcrumbJsonLd`, `serializeJsonLd`, text helpers, `CLEAR_INHERITED_URL_METADATA` |
| `app/sitemap.ts` | `/sitemap.xml` |
| `proxy.ts` | Lowercase 308 redirects (Next 16 `proxy` convention, the former middleware) |
| `components/blog/BlogIndex.tsx` | The previous `/blogs` client UI, unchanged except: posts come in as props, placeholders removed, excerpt wrapper `<p>` → `<div>` |
| `components/portfolio/CaseStudyDetail.tsx` | The previous portfolio detail client UI, unchanged except: data comes in as props, and `PageHeader` title rendered as `<p>` (the project title is the H1) |
| `app/blogs/category/[slug]/layout.tsx` | Category metadata, and a real 404 for unknown categories |
| `app/services/layout.tsx`, `app/privacy/layout.tsx`, `app/terms/layout.tsx`, `app/sitemap/layout.tsx`, `app/website-redesign/layout.tsx` | Canonical and Open Graph for client pages with no metadata (H4) |
| `app/services/software-programming/layout.tsx`, `app/services/visiting-cards-letter-heads/layout.tsx` | Stop these two pending legacy pages inheriting the `/services` canonical |
| `tests/seo.test.ts` | 9 targeted tests (site URL guard, canonical normalization, metadata mapping, BreadcrumbList, paths, proxy) |

### Modified
| File | Change |
|---|---|
| `app/layout.tsx` | `metadataBase` only. Robots unchanged. |
| `app/page.tsx` | Metadata via `buildPageMetadata('/')`. Homepage robots from Yoast unchanged (H6). |
| `app/[slug]/page.tsx` | Metadata via helper (canonical `/{slug}`). |
| `app/[slug]/[child]/page.tsx` | Adds `generateMetadata` with the same parent check as the page. `normalizeSlug` moved to module scope. |
| `app/about-us`, `awards-and-recognitions`, `brand-story`, `careers`, `contact-us`, `products`, `products/pms` `layout.tsx` | Yoast mapping replaced by `buildPageMetadata` with the same title fallbacks. |
| `app/blogs/page.tsx` | Now a server page: real posts, metadata and schema (moved from the deleted layout), `revalidate = 300`. |
| `app/blogs/[category]/[slug]/page.tsx` | Now a server page: ISR, `notFound()`, metadata, schema, same markup. `PageHeader` title rendered as `<p>`. |
| `app/blogs/category/[slug]/page.tsx` | Placeholder fallbacks removed. BreadcrumbList off, because the category name is only known after the client fetch. |
| `app/portfolio/page.tsx` | Metadata and schema moved here from the deleted layout. |
| `app/portfolio/[slug]/page.tsx` | Now a server page: ISR, `notFound()`, metadata with description fallback, schema. |
| `components/PageHeader.tsx` | BreadcrumbList JSON-LD from the visible breadcrumb. Optional `titleTag` (`'h1'` by default) and `breadcrumbSchema` props. |
| `components/Navbar.tsx` | Logo `alt`. |
| `components/StickyScrollServices.tsx` | Decorative, `aria-hidden` background text: `motion.h1` → `motion.div`. |
| `components/service/branding/IntroSection.tsx` | `<h1>` → `<h2>`, same classes; the `PageHeader` title is the page's H1. |
| `lib/backend-api.ts` | Added strict helpers: `getAllPostsStrict`, `getLatestPostsStrict`, `getPostStrict`, `getCategoriesStrict`, `getPortfolioStrict`, `getPortfolioProjectStrict`, `getServicesListStrict`. Existing functions unchanged. |
| `lib/wp-props.ts` | `trimPostCards`, `trimPortfolioDetail`, `trimPortfolioRelated`. Each WordPress post object is about 65 KB; only rendered fields reach client components. |
| `lib/internal-href.ts` | `postCategories`, `postPath`. The 13 new legacy redirects are mirrored in `LEGACY_PATHS`. |
| `lib/content/lead-generation.ts`, `lib/lead-generation-schema.ts` | URLs from the central helper. BreadcrumbList node added to the existing graph. `serializeJsonLd` re-exported from `lib/seo.ts`. |
| `next.config.js` | 13 legacy 308 redirects added. Existing redirects untouched. |

### Deleted
| File | Reason |
|---|---|
| `app/blogs/layout.tsx`, `app/blogs/[category]/[slug]/layout.tsx`, `app/portfolio/layout.tsx`, `app/portfolio/[slug]/layout.tsx` | Their metadata and schema moved into the pages. As layouts, the `/blogs` and `/portfolio` canonical and schema were inherited by child pages and their 404s. |
| `app/{website-development1,seo1,digital-marketing1,mobile-app-development1,software-web-apps1,technology-services1,ecommerce-development1,social-media-marketing1,website-design1,branding-and-design1,ui-ux-design1,wordpress-development1,logo-design1}/page.tsx` | Replaced by 308 redirects (§4). The files would have been unreachable dead code. |
| `app/headless-development/page.tsx` | No equivalent page exists, so it now returns 404 (§4). |

`git diff --stat`: 46 tracked files, +628 / −9,133 lines. Most of the deletions are the 14 legacy pages.

---

## 3. Routes affected

| Route | Before | After |
|---|---|---|
| All 120 linked pages | Canonical on 2/79; `og:type` on 1/79 | Canonical and `og:url` on 120/120; `og:type` on 120/120 |
| `/blogs` | 7 placeholder posts in server HTML | 10 latest real posts in server HTML (7 shown as before) |
| `/blogs/{category}/{slug}` | Client-only; any slug → 200 with placeholder content | Server-rendered with ISR; unknown → 404; wrong category → 404 |
| `/blogs/category/{slug}` | Unknown category → 200 | Unknown → 404; canonical added |
| `/portfolio/{slug}` | Client-only; unknown → 200 "Loading..." | Server-rendered with ISR; unknown → 404 |
| Mixed-case URLs (`/SEO`, `/About-Us`, …) | 200 duplicates (services) or 404 (static) | 308 → lowercase |
| `/sitemap.xml` | 404 | 200 XML |
| 14 legacy routes | 200 | 13 → 308; 1 → 404 |

Build route table: `/blogs/[category]/[slug]` and `/portfolio/[slug]` changed from dynamic (ƒ) to ISR (●), like the service routes. `/sitemap.xml` is static with a 1-hour revalidate. A Proxy entry was added.

---

## 4. Redirect mapping (H5)

Equivalence was judged on each legacy page's own title and topic against the current page's title and H1 (data in the audit and in this run). All are single-hop 308s to a 200 page, verified locally.

| Legacy route | Legacy page title | Result | Destination title / H1 |
|---|---|---|---|
| `/website-development1` | Website Development Company in Kochi | **308 → `/website-development`** | Website Development Company in Kochi for Business Growth |
| `/seo1` | Best SEO Company in Kochi, Kerala | **308 → `/seo`** | One of the Best SEO Companies in Kochi, Kerala |
| `/digital-marketing1` | Digital Marketing Company in Kochi, Kerala | **308 → `/digital-marketing`** | Digital Marketing Company in Kochi, Kerala |
| `/mobile-app-development1` | Mobile App Development Kochi | **308 → `/mobile-app-development`** | Mobile App Development Company in Kochi, Kerala |
| `/software-web-apps1` | Software & Web App Development Kochi | **308 → `/software-web-apps`** | Best Software Development Company in Kochi, Kerala |
| `/technology-services1` | Technology Services Kochi | **308 → `/technology-services`** | Technology Services Company in Kochi, Kerala |
| `/ecommerce-development1` | eCommerce Development Services in Kochi | **308 → `/ecommerce-development`** | One of the Best eCommerce Development Companies in Kochi, Kerala |
| `/social-media-marketing1` | Social Media Marketing Kochi | **308 → `/social-media-marketing`** | One of the Best Social Media Marketing Agencies in Kochi, Kerala |
| `/website-design1` | Website Design Company in Kochi | **308 → `/website-design`** | Professional Website Design Company in Kochi, Kerala |
| `/branding-and-design1` | Branding & Logo Design Kochi | **308 → `/branding-and-graphic-design`** | Branding Agency in Kochi (title: "…Brand Strategy, Logo Design & Identity"); the same target Phase 2 uses for `/branding` |
| `/ui-ux-design1` | Best UI/UX Design Company in Kochi | **308 → `/ui-ux-design`** | UI/UX Design Company in Kochi, Kerala |
| `/wordpress-development1` | WordPress Website Development | **308 → `/wordpress-development`** | One of the Best WordPress Website Development Companies in Kochi, Kerala |
| `/logo-design1` | Best Logo Design Company in Kochi, Kerala | **308 → `/logo-design`** | One of the Best Logo Design Companies in Kochi, Kerala |
| `/headless-development` | Headless CMS Development (placeholder `picsum.photos` images) | **404** | No headless or CMS-architecture service exists |
| `/custom-development` | Custom Software Development Kochi | **Unchanged (needs decision)** | Could be `/software-web-apps` ("…Custom Software Solutions") or `/custom-business-software-development` ("Custom Business Tools…"). Not clearly equivalent to either. |
| `/services/software-programming` | Software Programming (placeholder template, `picsum.photos` images) | **Unchanged (needs decision)** | Closest: `/software-web-apps`. Generic topic, so not clearly equivalent. |
| `/services/visiting-cards-letter-heads` | Visiting Cards & Letter Heads | **Unchanged (needs decision)** | `/business-card-design` covers visiting cards, but its content never mentions letterheads (checked in the CMS data). Only partly equivalent. |

The three unchanged routes still return 200 with `noindex`. None of them is linked from the site or listed in the sitemap.

**Additional legacy routes found (not in the approved 17, unchanged):** 37 more sub-routes of the old static service pages also return 200 duplicates:
- `/branding-packages1`, `/brochure-flyer-design1`, `/business-card-design1`, `/landing-page-design1`, `/search-engine-marketing1`
- `/ecommerce-development1/{custom,magento,opencart,shopify,woocommerce}`
- `/mobile-app-development1/{android,bussiness-apps,hybrid,ios,pwa,utility-apps}`
- `/social-media-marketing1/{facebook1,instagram1,linkedin1,pinterest1,twitter1,youtube}`
- `/software-web-apps1/{api-integrations,booking,business-tools,crm,custom-web,erp,inventory,lms}`
- `/technology-services1/{automation1,backend1,databases1,frontend1,server-cloud1}`
- `/website-development1/{dynamic-website,static-website}`

Most have an obvious current equivalent (for example `/mobile-app-development1/android` → `/android-app-development`). A few don't: magento, opencart and dynamic-website have no current page. They are listed for a separate approval rather than redirected without one (§12).

**Existing redirects:** all 9 Phase 2 redirects and the blog redirect family are unchanged and re-verified (§11).

---

## 5. Sitemap (`/sitemap.xml`)

| Group | URLs | `lastmod` |
|---|---|---|
| Static pages | 16: `/`, `/about-us`, `/awards-and-recognitions`, `/brand-story`, `/careers`, `/contact-us`, `/services`, `/website-redesign`, `/lead-generation-services`, `/portfolio`, `/products`, `/products/pms`, `/blogs`, `/privacy`, `/terms`, `/sitemap` | Omitted: their content is partly in code, so there is no reliable date |
| Service pages | 48 (from `/services`, path built with the Phase 2 `servicePath()`) | WordPress `modified_gmt` |
| Portfolio | 8 | WordPress `modified_gmt` |
| Blog posts | 48 (canonical URL under the post's first category) | WordPress `modified_gmt` |
| **Total** | **120** (104 with `lastmod`) | |

**Validation (local build):**
- Valid `urlset` (sitemaps.org 0.9) with `application/xml`.
- 120 unique URLs, all `https://grehasoft.com`, lowercase, with no query strings.
- **All 120 return 200.**
- The sitemap is **exactly** the set of pages reachable by crawling the site from `/` (120 = 120, no differences).

**Excluded on purpose:**
- CMS, temporary and staging hosts.
- The deleted placeholder posts.
- 404s.
- All 17 audit legacy routes and the 37 additional legacy sub-routes.
- Redirect sources.
- Query-string and mixed-case variants.
- `/access`.
- Blog **category archives**: they are client-rendered (the post list loads in the browser), and Yoast marks them `noindex, follow` in WordPress.
- Internal CMS types (`hero-slide`, `clients`, `faq`, …).

**Caching:** regenerated at most every hour. The data comes from the strict helpers, so if the backend fails the regeneration fails and the last good sitemap keeps being served. No truncated sitemap can be cached.

**Not done (as instructed):** no `robots.txt` change and no Hostinger sitemap directive. On staging, `/sitemap.xml` will exist after deployment but is unreferenced. Googlebot is blocked by `robots.txt`, and the URLs point to production.

---

## 6. Canonical and Open Graph validation

Checked over the server HTML of all 120 linked pages, 17 legacy routes and 12 404 probes. **3,418 checks, 0 failures.**

| Check | Result |
|---|---|
| Exactly one `<link rel="canonical">` | 120/120 |
| Canonical = `https://grehasoft.com` + lowercase path | 120/120. The homepage renders as `https://grehasoft.com`, which Next normalizes; it is the same URL as `…/`. |
| Duplicate canonicals across pages | 0 |
| `og:url` = canonical | 120/120 |
| `og:url` on `cms.`, `www.`, `*.hostingersite.com` or localhost | **0** (before: 8 portfolio pages on `cms.`, real posts on `cms.`, `/website-design` on `www.`) |
| Non-production hosts in head URLs | 0, apart from `og:image` files on `cms.grehasoft.com/wp-content/uploads/` (the accepted media host) |
| `og:type` | `website` 72, `article` 48 |
| Twitter card | `summary_large_image` on 120/120; `twitter:image` wherever Yoast has an image (95/120) |
| Robots meta | Unchanged: `noindex, follow` on `/` (Yoast) and `noindex, nofollow` on every other page |
| 404 pages carry a canonical or `og:url` | 0 of 12 404 probes |
| `/seo?utm_source=x` | Canonical `https://grehasoft.com/seo` (query string removed) |
| Title present | 115/120 (the 5 H4 pages are pending approval) |
| Description present | 115/120 (same 5 pages); 8/8 portfolio pages now have one |

---

## 7. Blog server rendering results

| Check | Result |
|---|---|
| `/blogs` server HTML | 10 latest real posts loaded, 7 shown (featured + 3 recent + 3 trending, same layout); 7 links to real post URLs, all 200; 0 placeholder strings |
| Real post pages | 48 reachable by crawl, all 200 with the post title as the H1, the article body and Contents in server HTML, prev/next and related links |
| Post metadata | Yoast title and description, canonical and `og:url` on the frontend route, `og:type=article`, published and modified times |
| Post schema | ACF `schema_json` when valid (no post has one today), otherwise a generated BlogPosting: headline, url, dates, description, featured image when present, Organization author and publisher. Organization is used because posts are published from the company account. 48/48 valid. |
| Placeholder routes (`/blogs/uncategorized/efficiency-enhancements` etc.) | 404 |
| Unknown slug, wrong category, unknown category | 404, 404, 404 |
| Backend failure on a post (500, 502, connection down, malformed JSON) | 500 every time; the next request after recovery is 200, so no cached false 404 (§11) |
| Post list failure | Article still renders (200) without prev/next and related links |
| Browser | 0 console errors, 0 hydration errors, 0 broken images, no horizontal overflow at 390px or 1440px |

---

## 8. Structured data validation

Every JSON-LD block on the 120 linked pages was parsed and checked against Google's documented required properties. Rich Results Test can't be used while staging is blocked.

| Check | Result |
|---|---|
| Invalid JSON-LD blocks | 0 |
| Missing required properties | 0 |
| Duplicate node types on a page | 0 |
| URLs on non-production hosts | 0 (image files on the CMS uploads host only) |
| Node types (linked pages) | BreadcrumbList 119, Service 48, FAQPage 48, BlogPosting 48, WebPage 47, CollectionPage 4, AboutPage 2, Blog 1, ContactPage 1, SoftwareApplication 1, LocalBusiness 1 |
| BreadcrumbList | 119 pages (all except `/`, which has no visible breadcrumb). Positions are 1…n, the first item is the homepage, the last is the page's own canonical URL, names have no HTML entities, and duplicate consecutive crumbs collapse (Privacy and Terms list "Home" twice in the UI). One per page. |
| Pages without any JSON-LD | 0 (before: 7) |
| Blog index and portfolio schema leaking into child pages | Fixed: they are now page-level |
| Recommended-only gaps | 18 posts have no featured image, so their BlogPosting has no `image`: `top-seo-tools-every-marketer-should-use`, `low-cost-website-development-agency-in-kerala`, `why-you-should-consider-a-low-cost-website`, `what-to-look-for-in-a-digital-marketing-agency`, `web-designing-company-in-ernakulam`, `5-tips-to-tap-into-the-next-big-thing-in-digital-marketing`, `common-problems-with-website-development-you-need-to-know`, `digital-marketing-service`, `why-you-need-a-professional-web-development-company`, `best-e-commerce-website-design-services`, `best-seo-tools`, `different-type-of-facebook-ads-services`, and the 6 `app` category quote posts. Fix: add featured images in WordPress. No image was invented. |

---

## 9. Metadata draft report

Covered in `PHASE_4_METADATA_DRAFTS.md`:
- Title, description, OG title and OG description drafts for `/services`, `/privacy`, `/terms`, `/sitemap` and `/website-redesign`, written only from each page's own text, with no legal commitments or marketing claims.
- Yoast description drafts for the 7 portfolio items, from each item's `short_desc`.
- A flagged overlap between `/website-redesign` and `/website-redesign-services`.
- A note that the Terms page copy names `www.grehasoft.com`.

**Approval needed before the five page titles and descriptions are added in code.**

## 10. Editorial recommendation report

Covered in `PHASE_4_EDITORIAL_RECOMMENDATIONS.md`:
- 45 titles and 49 descriptions on the 72 non-post pages, each with current text, suggestion, URL and rationale. Suggestions use only existing wording; lengths were checked by script.
- Lengths for the 48 newly visible posts.
- Brand spelling: "Grehasoft" on 60 page titles, "GrehaSoft" on 19, the latter mostly from Yoast's site-name suffix.
- Content errors: the CRM portfolio title pasted twice, the `/linkedin` description paste error, grammar in `/seo` and `/ios-app-development`, 3 service titles without the brand, and 2 posts with an `<h1>` in the body.

Nothing was changed in WordPress.

---

## 11. Tests and build results

All tests ran against a production build (`next build` + `next start`, port 3100) using the local NestJS backend, which reads the same CMS. No forms were submitted.

| # | Test | Result |
|---|---|---|
| 1 | `npm run build` | **Pass**: 0 warnings (3 normal builds, the last after the final code change; plus 1 build against the fault-injection proxy) |
| 2 | `npx tsc --noEmit` | **Pass** (exit 0) |
| 3 | Existing tests | The project has no frontend test suite. `npm run lint` (`next lint`) fails because the command no longer exists in Next.js 16 ("Invalid project directory … lint"); the script is stale, not new breakage. |
| 4 | New targeted tests: `npx tsx --test tests/seo.test.ts` | **9/9 pass** (site URL guard, canonical normalization, metadata mapping and fallbacks, article fields, BreadcrumbList, text helpers, post and service paths, proxy redirect with query) |
| 5 | All linked pages | **120/120 return 200** (72 site pages + 48 real posts; the 7 placeholder posts are gone) |
| 6 | 17 legacy routes | **17/17 as mapped** (13 × 308 → 200 in one hop, 1 × 404, 3 unchanged) |
| 7 | Mixed-case | `/SEO`, `/Seo` → 308 `/seo`; `/Mobile-App-Development` → 308; query kept (`/SEO?utm_source=x&b=Y` → `/seo?utm_source=x&b=Y`); `/Not-A-Page` → 308 → 404; uppercase public files (`/Raji%20T%20Skariah_Article_2025.pdf`) untouched; percent-escapes untouched; `/SEO/` → 2 hops → 200; no loops. 1 expected difference from the scripted check: `/Seo/Unknown-Child` matches the existing Phase 2 `/seo/:slug` blog redirect first (config redirects run before the proxy and match case-insensitively), then the proxy lowercases it, ending in a 404 after 2 hops. |
| 8–9 | Canonical and `og:url` | §6 (3,418 checks, 0 failures) |
| 10 | Sitemap XML | §5: valid, 120 URLs, all 200, identical to the crawl |
| 11–13 | Blog server HTML, unknown post 404, post metadata | §7 |
| 14–15 | BreadcrumbList and JSON-LD | §8 |
| 16 | Five previously empty pages | Canonical, `og:url`, `og:type` and Twitter card present; title and description pending approval |
| 17 | Existing redirects (Phase 1–2 route suite, 50 checks) | **48/50 pass. The 2 differences are intended Phase 4 changes:** `/About-Us` was expected to 404 and now gets a 308 to `/about-us`; `/sitemap.xml` was expected to 404 and now returns 200. |
| 18 | Phase 1–3 regression | Fault injection (new, 23 scenarios, **23/23**): post and portfolio with backend 500, 502, connection down and malformed JSON → 500, never 404, then 200 after recovery; category with `/categories` failing → 500; genuine misses → 404 (cached 404 on repeat). ISR: service, post and portfolio pages `x-nextjs-cache: HIT`, `s-maxage=300`; unknown route 404 cached. CTA present in server HTML. Browser on 10 key pages × 390/1440px: 0 app console errors, 0 broken images, no horizontal overflow, 1 visible H1, 0 browser calls to `/home`. |

**Browser note:** `/contact-us` and `/blogs/category/seo` log "Failed to fetch" in the local test only. Their existing client-side fetches go to the local backend, whose CORS allows only `localhost:3000` (the test server is on 3100). On staging the same code calls `api.grehasoft.com` without errors.

**Not repeatable here:** ISR regeneration *after* a failure for an already-cached post or portfolio page. This needs the 5-minute window. It uses the same mechanism verified for service pages in Phase 3: a regeneration that throws keeps serving the last good page.

**Staging robots and indexing before/after:** the staging server was not touched. Staging `robots.txt` is still `User-agent: Googlebot / Disallow: /` + `User-agent: * / Allow: /`, and staging pages are still `noindex, nofollow`. The new build emits exactly the same robots meta as before: `/` = `noindex, follow` (Yoast), every other page `noindex, nofollow`. No `robots.ts` or `public/robots.txt` was created.

---

## 12. Remaining issues requiring approval

1. **H4 text:** approve the five page titles and descriptions (`PHASE_4_METADATA_DRAFTS.md` §1). Applying them is a code change in each `layout.tsx`.
2. **`/website-redesign` vs `/website-redesign-services`:** two linked pages on the same service.
3. **Three uncertain legacy routes** (§4): `/custom-development`, `/services/software-programming`, `/services/visiting-cards-letter-heads`. Choose a destination or 404 for each.
4. **37 additional legacy sub-routes** (§4; the count was 36 before correction): mapping now in `PHASE_4_REVIEW_FOLLOWUP.md`.
5. **M2 default share image:** supply an approved branded image, ideally 1200×630. 25 pages have no `og:image` or `twitter:image`: 14 site pages (`/services`, `/portfolio`, `/products`, `/careers`, `/blogs`, `/contact-us`, `/products/pms`, `/brand-story`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign`, `/awards-and-recognitions`, `/lead-generation-services`) and 11 blog posts.
6. **M7 WebPage schema** for the 5 H4 pages, `/about-us` and `/inventory-management-software`. Can be added from the approved H4 text, or entered as ACF `schema_json`.
7. **Brand spelling** (Grehasoft vs GrehaSoft), and aligning the two code fallbacks once decided.
8. **Go-live robots plan** (§12.1) and **CMS sitemap instruction** (§12.2).
9. **Open items from earlier phases:**
   - The CTA/ISR freshness interaction.
   - The 99 WordPress link fields.
   - Hero video re-encoding.
   - Rotating the old `/access` password, which is still in git history.

### 12.1 Go-live robots plan (H6, not implemented)

**Today:**
- `app/layout.tsx` hardcodes `robots: { index: false, follow: false }` for every page.
- `app/page.tsx` overrides it for `/` only, using Yoast's robots value (`noindex, follow` now).
- `/blogs` sets the same values as the root.
- `robots.txt` comes from Hostinger, not from this repository.

If only WordPress were switched to indexable, the homepage alone would become indexable and every other page would stay `noindex`.

**Recommended single switch, applied in one go-live change and never on staging:**
1. Add an environment flag, for example `NEXT_PUBLIC_ALLOW_INDEXING`. It would be `true` only in the production deployment and unset on staging.
2. Root layout: `robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false }`.
3. Remove the Yoast-driven override in `app/page.tsx` and the duplicate in `app/blogs/page.tsx`, so the root layout is the only owner. Optionally, per-page `noindex` could be kept for thin pages, such as blog category archives, which Yoast already marks `noindex`.
4. Move `robots.txt` into the app (`app/robots.ts`) at the same time, so it follows the same flag:
   - Staging: `Disallow: /`.
   - Production: allow, plus `Sitemap: https://grehasoft.com/sitemap.xml`.

   The Hostinger-level `robots.txt` must then be removed or aligned. That is a hosting change needing its own approval.
5. Go-live checklist:
   - Production env flag set.
   - Staging still `noindex` and blocked.
   - Production pages show `index, follow`.
   - `https://grehasoft.com/robots.txt` lists the sitemap.
   - Sitemap submitted in Search Console.
   - Old WordPress URLs on `grehasoft.com` mapped (a separate redirect audit).

### 12.2 CMS sitemap: instruction for the WordPress/Hostinger owner (M6, not done)

The goal is to stop `cms.grehasoft.com` advertising CMS URLs to crawlers while keeping it `noindex`.

1. WordPress admin on `cms.grehasoft.com` → **Yoast SEO → Settings → Site features → APIs → XML sitemaps** → switch **off** → Save. In older Yoast versions: *SEO → General → Features → XML sitemaps*.
2. Check that `https://cms.grehasoft.com/sitemap_index.xml` returns 404, or redirects to the homepage, which Yoast does when sitemaps are off.
3. Check that `https://cms.grehasoft.com/robots.txt` no longer contains the `Sitemap:` line. Yoast adds it only while sitemaps are on. If the file is a physical file on Hostinger, remove the line by hand.
4. **Keep** *Settings → Reading → "Discourage search engines from indexing this site"* ticked, so CMS pages keep their `noindex` meta. Don't change any other setting.
5. Don't change the per-type "Show in search results" settings yet. The frontend reads Yoast titles and descriptions from them.
6. Optional, separate approval: a server-level `X-Robots-Tag: noindex` header on `cms.grehasoft.com` HTML responses (not on `/wp-json/` or `/wp-content/uploads/`, which the site uses). This is deliberately not proposed for immediate action.

### Manual actions still required: WordPress and Hostinger summary

| Where | Action | Source |
|---|---|---|
| WordPress (Yoast) | Fix the CRM portfolio title, the `/linkedin` description, and the `/seo` and `/ios-app-development` description grammar | Editorial report |
| WordPress (Yoast) | Optional: apply the title and description shortenings | Editorial report |
| WordPress (Yoast) | Enter meta descriptions for 7 portfolio items, and proper titles for `haleholidays` and `malayalamnewslive` | Metadata drafts §2 |
| WordPress | Decide brand spelling; update *Site Title* if "Grehasoft" | Editorial report |
| WordPress | Change the `<h1>` inside 2 posts to Heading 2 | Editorial report |
| WordPress | Add featured images to 18 posts | §8 |
| WordPress | Optional: ACF `schema_json` for `/about-us` and `/inventory-management-software` | §12 (6) |
| WordPress (Yoast) | Turn off XML sitemaps on `cms.grehasoft.com` and keep the site discouraged from indexing | §12.2 |
| WordPress (ACF) | The 99 link fields from Phase 2 (still pending) | Phase 2 |
| Hostinger | Nothing now. At go-live: align or remove the hosting `robots.txt` per §12.1 (separate approval) | §12.1 |
| Hostinger (optional) | `X-Robots-Tag: noindex` on CMS HTML (separate approval) | §12.2 |

---

## 13. Items not implemented, and why

| Item | Why |
|---|---|
| M2 default OG image | `public/` has only the 262×48 header logo (`logo.png`), small logo variants, client logos and generic stock illustrations. None is a Grehasoft-branded share image. The brief forbids generating or substituting one. |
| H4 titles and descriptions | Approval required (drafts provided). |
| H6 go-live robots | Explicitly plan-only. |
| M6 CMS sitemap and `X-Robots-Tag` | WordPress and Hostinger changes; instruction provided. |
| M7 WebPage nodes | Need approved names and descriptions; BreadcrumbList was added in the meantime. |
| 3 uncertain and 37 additional legacy routes | No clearly equivalent destination, or outside the approved list. |
| Category archive server rendering | Out of scope for H2. Category pages keep their client-side search and filters, have canonicals and real 404s, and are excluded from the sitemap. Their BreadcrumbList is off because the category name only loads in the browser. |
| Hero fallback H1 | When the homepage has **no** hero slides, `Hero` renders a fallback `<h1>Grehasoft</h1>` next to the intro H1. This doesn't happen with the current CMS data, so it was left unchanged. |
| `next.config.js` image host fallback (`antiquewhite-swan-450844.hostingersite.com`) and `lib/internal-href.ts` temporary host | Not SEO URLs: an image allow-list fallback, and the Phase 2 link normalizer. Unchanged. |

---

## 14. Staging indexing remains blocked

Confirmed. No change was made to staging, Hostinger, `robots.txt` or any robots directive in code. Staging still serves `User-agent: Googlebot / Disallow: /` and `noindex` on its pages. When this work is deployed:
- The pages keep exactly the same robots meta.
- `/sitemap.xml` appears but is not referenced by `robots.txt`, and Googlebot remains blocked.
- Canonicals point to `https://grehasoft.com`, as the brief allows. Staging hosts are rejected by the site-URL guard.

## 15. Production was not deployed

Confirmed. Nothing was deployed to staging or production. No WordPress, Yoast, ACF, NestJS backend (`grehasoft-api/`) or hosting configuration was modified. Environment files are unchanged; `NEXT_PUBLIC_SITE_URL` is not set anywhere, so the production default applies.

## 16. No commits or pushes

Confirmed. HEAD is still `c15448e`, in sync with `origin/main`. Nothing is staged. All Phase 4 work, including this report, is in the working tree for review. When you approve it, stage it file by file; there is no need for `git add .`. Remember that `tests/`, `components/blog/`, `components/portfolio/` and the new `layout.tsx`, `sitemap.ts` and `proxy.ts` files are untracked.

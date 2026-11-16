# Phase 4 – SEO Audit Report

**Site audited:** https://aquamarine-herring-959948.hostingersite.com/ (staging, deployed from `c15448e`)
**Production domain:** https://grehasoft.com/
**Date:** 2026-11-16
**Mode:** Audit only. No application code, configuration, environment, robots.txt, sitemap, WordPress or backend changes were made. This report is the only file created.

**Git state at start (unchanged at end):** branch `main`, HEAD `c15448e` (*perf: optimize website caching and media delivery*), in sync with `origin/main`. Nothing staged. Pre-existing uncommitted items untouched: `package.json`, `package-lock.json`, `.agents/`, `.claude/`, `AGENTS.md`, `CLAUDE.md`, `PRODUCTION_WEBSITE_AUDIT_REPORT.md`, `public/images/Layered Tech Ecosystem Orbit.png`, `skills-lock.json`.

**Staging deployment confirmed:** staging serves Phases 1–3. An unknown URL returns 404, `/contact` returns 308 → `/contact-us`, `/access` returns 404, and service pages return `x-nextjs-cache: HIT` with `s-maxage=300`. The SEO output of staging and of a local build of the same commit is identical for all 97 audited URLs (§10).

---

## 1. Executive Summary

The site is **correctly blocked from indexing** on staging. The SEO data that exists is mostly sound: valid JSON-LD on 72 of 79 pages, production-domain URLs in every JSON-LD block, titles and descriptions supplied by Yoast on most pages, and Phases 1–3 still intact. However, several defects must be fixed **before go-live**, because they decide how Google will see the production site:

1. **Canonical tags are missing on 77 of 79 pages.** Most routes read `yoast_head_json.canonical`, but Yoast doesn't output a canonical while WordPress is set to `noindex`, so the field is always absent. Only `/` (which uses `og_url`) and `/lead-generation-services` (hardcoded) have one. Once WordPress becomes indexable, canonicals will appear, but with whatever URL Yoast generates. The frontend currently has no control over that.
2. **There is no XML sitemap for the frontend.** `/sitemap.xml` returns 404. The only XML sitemap is Yoast's on `cms.grehasoft.com`, and it lists CMS-domain URLs.
3. **The CMS domain leaks into SEO metadata.** All 8 portfolio detail pages have `og:url = https://cms.grehasoft.com/portfolio/<slug>/`, and real blog posts have `og:url = https://cms.grehasoft.com/<slug>/`. `/website-design` uses `https://www.grehasoft.com/…`, so the host is inconsistent.
4. **The blog index server-renders 7 placeholder posts** (`DEFAULT_POSTS`) that link to non-existent URLs. Those URLs return **200 with placeholder content** (soft 404s), and they inherit the blog index's title, description and schema, so these pages duplicate each other. The 10 real CMS posts are not in the server HTML at all.
5. **Service pages answer for any letter case** (`/SEO`, `/Seo`, `/Mobile-App-Development` all return 200 with identical content and no canonical), which creates duplicate URLs.
6. **5 linked pages have no `<title>`, description, Open Graph or Twitter data:** `/services`, `/privacy`, `/terms`, `/sitemap` and `/website-redesign`.
7. **17 legacy or unlinked routes still return 200** with no title (for example `/seo1` and `/custom-development`). These are duplicate-content candidates at go-live.

**Previous audit findings:** A (`brown-swan-943109`) is **resolved**; it doesn't appear anywhere. B (`VITE_SITE_URL`) is **obsolete**: the variable never existed in this Next.js repository, though a single site-URL configuration is still missing. C (robots) shows **staging unchanged and still blocked**, but **the WordPress host has changed**: it now allows all crawlers and advertises a sitemap. It is protected only by WordPress's `noindex` meta tag.

---

## 2. Previous Audit Findings

| Finding | Status | Evidence |
|---|---|---|
| **A – Temporary domain `brown-swan-943109.hostingersite.com` in SEO URLs** | **Resolved (not present)** | Not found in the full HTML of 97 staging URLs, in canonical/`og:url`/Twitter/JSON-LD values, in the CMS API responses (`/home`, `/services`, `/menus`, `/our-services`, `/portfolio`, `/project-gallery`, `/posts`, `/pages/*`), in env files, or in source. All 480 URLs inside JSON-LD use `https://grehasoft.com`. **Related, still open:** `cms.grehasoft.com` in `og:url` (§4, T3). Two other temporary domains remain only as non-SEO data: `mediumpurple-jackal-917517` (raw CMS link values in page payloads, never rendered as links: the 99 pending Phase 2 CMS fields) and `firebrick-cobra-583924` (one client's portfolio link). |
| **B – Missing `VITE_SITE_URL`** | **Obsolete; underlying gap partially present** | `VITE_SITE_URL` has never existed in this repository's history (`git log -S` finds nothing; the project has been Next.js since the initial commit, with no Vite config). It was replaced by nothing equivalent. There is **no `metadataBase`, no `NEXT_PUBLIC_SITE_URL`, and no central site-URL setting**. Every SEO URL comes from Yoast data, except `lib/content/lead-generation.ts:9` (`SITE_URL = 'https://grehasoft.com'`, hardcoded). Today 0 relative SEO URLs are rendered, so nothing resolves to `localhost`. But the production domain is not derived by the frontend at all; it depends on each Yoast field (see T3 and T1). |
| **C – robots.txt `User-agent: Googlebot / Disallow: /`** | **Staging: unchanged (still blocked).** **WordPress host: changed.** | Staging `robots.txt`: `User-agent: Googlebot / Disallow: /` and `User-agent: * / Allow: /` (served by Hostinger; the app has no `robots.ts` or `public/robots.txt`). All 97 staging URLs carry `noindex` (`/` = `noindex, follow`; the other 96 = `noindex, nofollow`). **`cms.grehasoft.com/robots.txt` now returns the Yoast default `User-agent: * / Disallow:` (allow all) plus `Sitemap: https://cms.grehasoft.com/sitemap_index.xml`.** The CMS pages themselves return 200 with `<meta name="robots" content="noindex, nofollow">`, so they are not indexable today. (For reference only: the current live `grehasoft.com` also serves a Yoast allow-all robots.txt. That is the existing production WordPress site, which is not part of this project.) |
| Earlier audit note "canonical only on the homepage" | **Corrected** | Two pages have canonicals: `/` and `/lead-generation-services`. The second existed before Phases 1–3. |

---

## 3. Page-by-Page Audit

97 URLs were audited: 79 reachable through links (all 200) plus 18 known legacy or unlinked routes. All URLs return 200 (404 handling is verified separately in §4/§10). Grouped results (linked pages only):

| Group | Pages | Title | Description | Canonical | og:url | og:image | JSON-LD | H1 (server HTML) |
|---|---|---|---|---|---|---|---|---|
| Home `/` | 1 | ✔ (70 chars) | ✔ (231 chars) | ✔ `https://grehasoft.com/` | ✔ | ✔ | LocalBusiness | 2 |
| Service pages (`/[slug]`) | 48 | ✔ all | ✔ all | ✖ 0/48 | ✔ grehasoft.com (47); `www.` on `/website-design` | ✔ | WebPage + Service + FAQPage (47); `/inventory-management-software` has none | 1 (29 pages), 2 (19 pages) |
| Static pages with layouts | 9 | ✔ | ✔ | ✖ except `/lead-generation-services` | ✔ | ✖ on 6 (Yoast has no image) | AboutPage / ContactPage / CollectionPage / SoftwareApplication; `/about-us` none | 1 |
| Static client pages without metadata: `/services`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign` | 5 | **✖ none** | **✖ none** | ✖ | ✖ | ✖ | ✖ none | 1 |
| Portfolio details `/portfolio/*` | 8 | ✔ (4 under 30 chars) | **✖ 7/8 missing** | ✖ | **✖ `cms.grehasoft.com/portfolio/<slug>/`** | ✔ | WebPage | **0** (client-rendered) |
| Blog index `/blogs` | 1 | ✔ | ✔ | ✖ | ✔ | ✖ | CollectionPage + Blog | 1 |
| Blog posts linked from `/blogs` (placeholders) | 7 | **✖ duplicate of `/blogs`** | **✖ duplicate of `/blogs`** | ✖ | **✖ `/blogs`** | ✖ | inherits the `/blogs` schema | **0** |
| Legacy/unlinked (`/seo1`, `/custom-development`, …) | 17 | ✖ none | ✖ | ✖ | ✖ | ✖ | – | – |

The complete per-URL table (all 97 URLs) is in **Appendix A**.

---

## 4. Technical SEO Findings

| ID | Finding | Evidence (staging) | Severity |
|---|---|---|---|
| T1 | **Canonical tag missing on 77/79 linked pages** | Yoast `yoast_head_json` has no `canonical` key for pages, services or portfolio (keys returned: `title, description, robots, og_*, twitter_*, schema`). The code reads `yoast?.canonical` in `app/[slug]/page.tsx:44`, `app/about-us/layout.tsx:23`, `app/portfolio/layout.tsx:23`, `app/portfolio/[slug]/layout.tsx:29`, `app/blogs/[category]/[slug]/layout.tsx:29`, `app/blogs/layout.tsx:24`, `app/products/layout.tsx:23` (and similar layouts). Only `app/page.tsx:43` (uses `og_url`) and `app/lead-generation-services/page.tsx:19,82` (hardcoded) emit one. | Critical (go-live) |
| T2 | **No frontend XML sitemap** | `/sitemap.xml` and `/sitemap_index.xml` return 404 (correct since Phase 1). No `app/sitemap.ts` exists. `app/sitemap/page.tsx` is an HTML site directory. The only XML sitemap is Yoast's on `cms.grehasoft.com` (17 sub-sitemaps, including internal types such as `hero-slide`, `clients`, `faq`, `elementor-hf`, `footer`), all with CMS-domain URLs. | Critical (go-live) |
| T3 | **CMS or `www` domain in `og:url`** | 8 portfolio details: `og:url = https://cms.grehasoft.com/portfolio/<slug>/` (from Yoast `og_url` for the portfolio post type; `app/portfolio/[slug]/layout.tsx:35`). Real blog posts: `https://cms.grehasoft.com/<slug>/` (`app/blogs/[category]/[slug]/layout.tsx:35`). `/website-design`: `https://www.grehasoft.com/…` (Yoast field on that service). | High |
| T4 | **Case-variant duplicate URLs on service routes** | `/SEO`, `/Seo` and `/Mobile-App-Development` return 200 with identical content, each cached separately by ISR, with no canonical. The backend matches slugs case-insensitively (`/api/v1/services/SEO` returns 200). Static routes are case-sensitive (`/About-Us` → 404). | High |
| T5 | **Blog soft 404s and duplicate pages** | `app/blogs/page.tsx:14` defines `DEFAULT_POSTS`, and line 146 renders them while `posts` is empty, which it always is in server HTML because posts load in the browser. Those 7 links lead to `/blogs/uncategorized/*`, which don't exist in the CMS. They return 200 because `app/blogs/[category]/[slug]/page.tsx:63` falls back to `DEFAULT_POST_DETAIL`, and the layout's `generateMetadata` returns `{}` (`layout.tsx:20`), so each one inherits the blog index's title, description, `og:url` and schema. Real posts exist (for example `/blogs/website-design/10-essential-tips-…` → 200 with its own title) but aren't linked in the server HTML. | High |
| T6 | **Legacy/unlinked routes return 200** | 17 URLs (`/website-development1`, `/seo1`, `/digital-marketing1`, `/mobile-app-development1`, `/software-web-apps1`, `/technology-services1`, `/ecommerce-development1`, `/social-media-marketing1`, `/website-design1`, `/branding-and-design1`, `/ui-ux-design1`, `/wordpress-development1`, `/logo-design1`, `/custom-development`, `/headless-development`, `/services/software-programming`, `/services/visiting-cards-letter-heads`). No title, `noindex, nofollow` today; they would be duplicate content once indexable. | High (go-live) |
| T7 | **Robots ownership is split** | `app/layout.tsx:70-72` hardcodes `robots: { index: false, follow: false }` for every page. `app/page.tsx:56-58` overrides it on the homepage from Yoast (`noindex, follow`). At go-live, the homepage would follow Yoast while every other page stays hardcoded `noindex`, unless both are changed together. | High (go-live checklist) |
| T8 | **CMS host is crawlable; protected only by meta `noindex`** | `cms.grehasoft.com/robots.txt` allows all crawlers and advertises the CMS sitemap. WordPress renders public pages (`/`, `/services/seo/`, `/about-us/`, `/portfolio/haleholidays/`, posts), all 200 with `noindex, nofollow` meta and no `X-Robots-Tag`. If WordPress's search-visibility setting is ever switched on, duplicate CMS pages would become indexable. | Medium |
| T9 | **No single site-URL configuration** | No `metadataBase` in `app/layout.tsx`, no site-URL env variable, and a hardcoded `SITE_URL` in `lib/content/lead-generation.ts:9`. The fallback image host in `next.config.js:3` is a temporary domain (`antiquewhite-swan-450844.hostingersite.com`), used only if `NEXT_PUBLIC_WORDPRESS_API_URL` is unset (it is set to `https://cms.grehasoft.com`). | Medium |
| T10 | Trailing slash, HTTP and query handling | `http://` → 301 https; `/seo/` → 308 `/seo`; `//seo` → 308 `/seo`; `/index.html` → 404; query strings (`/seo?utm_source=x`) render 200 **without** a canonical (resolved by fixing T1). Redirect chains are at most 2 hops (`http://…/contact` → https → `/contact-us`). | Low (fixed by T1) |
| T11 | Mobile and rendering | `<meta name="viewport" content="width=device-width, initial-scale=1">` on every page; `lang="en"` on all 97. Portfolio details and blog posts render their main content in the browser, so there's no H1 in the server HTML (Google renders JavaScript, but it's a weaker signal). | Medium |
| T12 | Performance (SEO-relevant) | From Phase 3 measurements: lab LCP is under about 1.2 s (p90) and CLS is 0. The remaining weight is the hero videos (about 5 MB on first visit). No new issues. | Low |

**Verified correct:** branded 404 pages with HTTP 404 (including unknown child routes and `/access`); no false 404s from backend failures (fault-injection suite 46/46, run locally on the same commit earlier today); the 9 Phase 2 redirects as single-hop 308s with no loops; staging `noindex` everywhere.

---

## 5. Structured Data Findings

Validated against Google's documented required and recommended properties for each type (JSON parse, required fields, BreadcrumbList positions, FAQ question/answer pairs, LocalBusiness `address`).

| Check | Result |
|---|---|
| JSON-LD blocks that fail to parse | **0** |
| Types present (nodes across linked pages) | Service 48, FAQPage 48, WebPage 47, CollectionPage 12, Blog 8, AboutPage 2, ContactPage 1, LocalBusiness 1 (home), SoftwareApplication 1 (`/products/pms`) |
| Missing required/recommended properties (validator) | **0 issues** (LocalBusiness has `name`, `address`, `geo`, `telephone`, `openingHoursSpecification`; Service has `name` and `provider`; FAQPage has `mainEntity` with answers) |
| Duplicate node types on one page | 0 |
| URLs on non-production hosts inside JSON-LD | **0** (all 480 use `https://grehasoft.com`) |
| JSON-LD URL matches the page | ✔ on all pages **except** the 7 placeholder blog posts and `/blogs/category/seo`, which carry the `/blogs` schema (consequence of T5) |
| Linked pages with no JSON-LD | 7: `/services`, `/about-us`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign`, `/inventory-management-software` (the ACF `schema_json` field is empty for the last one) |
| **BreadcrumbList** | **Not present anywhere**, although service pages show visible breadcrumbs. Yoast's own schema includes a BreadcrumbList, but with CMS-domain URLs (`https://cms.grehasoft.com/services/`), so it can't be used as-is. |
| Organization / WebSite | No standalone `Organization` or `WebSite` node. The business entity is the homepage `LocalBusiness` (`@id https://grehasoft.com/#localbusiness`), and service schemas reference it by `@id` without defining it on the page (valid JSON-LD; low priority). |
| Article/BlogPosting | None on blog posts; the real posts' ACF `schema_json` is empty or not set, and the placeholder posts inherit the blog index schema. |
| FAQPage note | Valid. Since 2023 Google shows FAQ rich results only for well-known government and health sites, so these won't produce rich results; they are not harmful. |

Source of all JSON-LD: the ACF `schema_json` field per page or service (`app/[slug]/page.tsx:92-102`, the `layout.tsx` files listed in Appendix B), plus `lib/lead-generation-schema.ts`. Yoast's `schema` graph is fetched but not used.

---

## 6. Image SEO Findings

| Finding | Affected | Severity |
|---|---|---|
| Header logo `<img src="/images/logo.png">` has **no `alt`** | every page (79/79), `components/Navbar.tsx:159` (desktop) and `:338` (mobile drawer) | Low |
| `alt=""` on the decorative blog illustration | `/blogs` (`blogs-trending-illustration.webp`) | Info (acceptable for decorative images) |
| Other images | All other server-rendered images have `alt` text (Phase 3 Step 5 checks confirmed 126/126 optimized images load with correct sizing) | ✔ |
| `og:image` / `twitter:image` missing | 21 pages: `/careers`, `/services`, `/products`, `/blogs`, `/contact-us`, `/portfolio`, `/products/pms`, `/brand-story`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign`, `/awards-and-recognitions`, `/lead-generation-services`, plus the 7 placeholder posts. No Yoast image is set and there is no frontend default. | Medium |
| `og:image` host | all `og:image` URLs are on `https://cms.grehasoft.com/wp-content/uploads/…` | Info (acceptable; images may be on a separate host) |
| Large images | addressed in Phase 3 Step 5 (no remaining original-size CMS image downloads on the measured pages) | ✔ |

---

## 7. Internal Linking Findings

| Check (staging) | Result |
|---|---|
| Pages reachable through links | 79, all 200, no redirects or soft 404s in the crawl **except** the 7 placeholder blog posts (T5) |
| Links to the 9 legacy/soft-404 targets | 0 |
| Protocol-relative (`//slug`) links | 0; all 47 audited breadcrumbs link to their own page |
| Rendered `<a>` links to `grehasoft.com`, temporary domains or `http://` | 0 (excluding one client portfolio site) |
| Broken internal link targets | 0 (all 79 unique internal targets return 200) |
| Links to placeholder content | 7 links from `/blogs` to `/blogs/uncategorized/*` (T5) |
| Real blog posts linked in server HTML | **0 of 10** (only reachable after client-side rendering) |
| Pending WordPress link fields | 99 ACF fields still hold absolute or temporary-domain URLs (unchanged since Phase 2). The frontend normalizes them (no visitor-facing defect), but the raw values remain in page data until the CMS is edited. |

---

## 8. Issues Requiring Approval

Per the rules for this phase, none of these have been changed. Each needs your explicit approval (some also need WordPress or content decisions):

1. **T1 – Canonical generation in the frontend** (canonical configuration). This also needs a decision on the canonical host (`https://grehasoft.com`, no trailing slash, matching the current URLs).
2. **T2 – A frontend XML sitemap** (`app/sitemap.ts`) and when to expose it. On staging it can exist without affecting indexing, since robots and `noindex` stay unchanged, but the sitemap reference in robots.txt is controlled by Hostinger.
3. **T9 – A single site-URL setting** (`metadataBase` plus an env variable). This is domain configuration.
4. **T3 – Forcing `og:url` to the production domain** in the frontend, or fixing the portfolio/post/website-design URLs in WordPress/Yoast.
5. **T4 – Lowercase redirect (or 404)** for mixed-case service URLs.
6. **T5 – Blog index server rendering and `notFound()` for unknown posts.** This changes what `/blogs` shows to crawlers; it also removes the placeholder posts.
7. **T6 – Removing or redirecting the 17 legacy routes.**
8. **Metadata text for the 5 pages without metadata** (`/services`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign`) and for the **7 portfolio details without a description**: who supplies the text (CMS/Yoast or code)?
9. **Default `og:image`** for pages without one (which image?).
10. **T7 – Go-live robots plan:** keep homepage robots under Yoast control or make it consistent with the layout. This is not to be changed until go-live is approved.
11. **T8 – WordPress host:** decide whether to disable Yoast XML sitemaps on `cms.grehasoft.com` and/or add `X-Robots-Tag: noindex` at the CMS server level (a WordPress/hosting change).
12. **BreadcrumbList JSON-LD** for pages with visible breadcrumbs (a new schema type, justified by the visible breadcrumb UI).
13. **Editorial:** 45 titles over 60 characters and 49 descriptions over 160 characters (Yoast content). This report doesn't rewrite them.

---

## 9. Recommended Implementation Plan

### Critical (before go-live)

| # | Issue | File / location | Current | Expected | Proposed fix | Impact | Risk |
|---|---|---|---|---|---|---|---|
| C1 | T1 canonical | `app/[slug]/page.tsx:44`, `app/[slug]/[child]/page.tsx` (none), `app/*/layout.tsx` (`canonical: yoast?.canonical`), `app/page.tsx:43` | 77/79 pages without canonical | Every indexable page has a self-referencing canonical on `https://grehasoft.com` | Add `metadataBase` (from one site-URL setting) in `app/layout.tsx` and set `alternates.canonical` to the route path in each `generateMetadata`. Keep Yoast as the fallback only for overrides. | Prevents duplicate-URL dilution (query strings, case variants) | Medium: affects every page's head; verify against staging |
| C2 | T2 sitemap | new `app/sitemap.ts` | 404 | XML sitemap of production URLs (static routes + 48 services + real portfolio and blog URLs) | Build from the route list and existing API helpers, cached like the other data | Enables discovery at launch | Low/Medium: must exclude legacy, placeholder and 404 URLs |
| C3 | T9 site URL | `app/layout.tsx`, `lib/content/lead-generation.ts:9` | No central setting | One `NEXT_PUBLIC_SITE_URL` (default `https://grehasoft.com`) | Introduce and use it in C1, C2 and lead-generation | Removes hardcoding | Low |

### High

| # | Issue | File / location | Current | Expected | Proposed fix | Impact | Risk |
|---|---|---|---|---|---|---|---|
| H1 | T3 og:url | `app/portfolio/[slug]/layout.tsx:35`, `app/blogs/[category]/[slug]/layout.tsx:35`, `app/[slug]/page.tsx:49` | `cms.`/`www.` hosts | production host + route path | Derive `openGraph.url` from the site URL and path (same helper as C1) | Correct social sharing and URL consistency | Low |
| H2 | T5 blog placeholders | `app/blogs/page.tsx:14,146`, `app/blogs/[category]/[slug]/page.tsx:63`, `layout.tsx:20` | 7 fake posts, soft 404s | Real posts in server HTML; unknown posts → 404 | Fetch posts server-side for the index; call `notFound()` in the post layout/page when the API returns no post (Phase 1 pattern) | Removes duplicate/thin pages, exposes the real posts | Medium: changes the blog page's initial content |
| H3 | T4 case duplicates | `app/[slug]/page.tsx`, `app/[slug]/[child]/page.tsx` | `/SEO` → 200 | `/SEO` → 308 `/seo` | `permanentRedirect()` to the lowercase path when `slug !== slug.toLowerCase()` | Removes duplicates | Low |
| H4 | 5 pages without metadata | `app/services`, `app/privacy`, `app/terms`, `app/sitemap`, `app/website-redesign` (client pages, no layout) | No title/description/OG/Twitter | Full metadata | Add a server `layout.tsx` with `metadata` (text to be supplied) | Titles in search results | Low |
| H5 | T6 legacy routes | `app/*1/…`, `app/custom-development`, `app/headless-development`, `app/services/software-programming`, `app/services/visiting-cards-letter-heads` | 200, no title | 301/308 to the live equivalents, or removed | Redirect map in `next.config.js` | Removes duplicate content | Low/Medium: confirm none are used |
| H6 | T7 robots plan | `app/layout.tsx:70-72`, `app/page.tsx:56-58` | Split ownership | One documented go-live switch | Decide the source (layout or Yoast) and change both together **at go-live only** | Avoids a partially indexable launch | Low (not on staging) |

### Medium

| # | Issue | Location | Proposed fix | Risk |
|---|---|---|---|---|
| M1 | `og:type` missing on 78 pages | all `generateMetadata` `openGraph` blocks | Add `type: 'website'` (or map Yoast `og_type`) | Low |
| M2 | `og:image`/`twitter:image` missing on 21 pages | layouts listed in §6 | Default site OG image fallback | Low |
| M3 | Portfolio details without description (7) | Yoast content / `app/portfolio/[slug]/layout.tsx:26` | Add Yoast descriptions, or fall back to the excerpt/ACF `short_desc` | Low |
| M4 | BreadcrumbList schema | service templates (visible breadcrumbs) | Emit BreadcrumbList with production URLs, using the Phase 2 `servicePath()` helper | Low |
| M5 | H1 structure | 19 service pages + home with 2 H1s; portfolio/blog details with 0 H1 in server HTML | Template-level heading fixes, plus server rendering of portfolio and blog details | Medium (visual templates) |
| M6 | T8 CMS host exposure | WordPress/hosting | Disable Yoast sitemaps on the CMS, add a server-level `X-Robots-Tag: noindex` | Low (WordPress change) |
| M7 | JSON-LD missing on 7 pages | ACF `schema_json` / layouts | Add appropriate WebPage schema (content-justified only) | Low |

### Low

| # | Issue | Location | Proposed fix |
|---|---|---|---|
| L1 | Logo without `alt` | `components/Navbar.tsx:159`, `:338` | `alt="Grehasoft"` |
| L2 | Title/description lengths (45 titles > 60 chars, 49 descriptions > 160 chars) | Yoast content | Editorial review in WordPress (not automated) |
| L3 | Brand spelling `GrehaSoft` vs `Grehasoft` in titles | portfolio titles (Yoast), `app/page.tsx:39` fallback | Standardize |
| L4 | Service `provider` references `#localbusiness` defined only on `/` | ACF `schema_json` | Optionally include an Organization node, or keep (valid) |
| L5 | FAQPage won't produce rich results (Google policy) | 48 service pages | Keep; no action needed |

---

## 10. Verification Results

All checks were read-only HTTP and browser checks. No forms were submitted.

| # | Check | Command / method | Result |
|---|---|---|---|
| 1 | Titles rendered | `seo-extract.mjs` over 97 URLs (server HTML) | 74/79 linked pages have a title; 5 missing (H4) |
| 2 | Meta descriptions | same | 67/79; 12 missing (H4, M3) |
| 3 | Canonical consistency | same | 2/79 present, 0 duplicates, 0 wrong hosts (T1) |
| 4 | Open Graph | same | `og:url` on 3 wrong hosts (T3); `og:type` missing on 78 (M1); `og:image` missing on 21 (M2) |
| 5 | Twitter | same | card/title missing on 5, image missing on 21 |
| 6 | JSON-LD validity | parse + validator per Google required properties | 0 invalid, 0 property issues, 0 non-production URLs |
| 7 | Breadcrumbs | Phase 2 link analysis | 47/47 visible breadcrumbs correct; no BreadcrumbList schema (M4) |
| 8 | Sitemap accessible | `curl` | `/sitemap.xml` 404 on staging (T2); CMS Yoast sitemap 200 |
| 9 | robots.txt unchanged | `curl` staging | `Googlebot Disallow: /` present (unchanged) |
| 10 | Staging noindex | `seo-extract.mjs` | 97/97 `noindex` |
| 11 | Unknown routes → branded 404 | `route-check.mjs` against **staging** | 50/50 PASS (404s, `/access`, valid pages, 9 redirects, blog redirect narrowing, no loops) |
| 12 | Backend failure ≠ false 404 | fault-injection suite (`isr-test.mjs`), local, same commit, run earlier today | 46/46 PASS (not repeatable on staging without fault injection) |
| 13 | Phases 1–3 on staging | headers + browser snapshot | ISR `HIT`/`MISS`, 404s cached as 404, CTA in server HTML, 0 browser `/home` requests, 0 broken images/console errors/failed requests |
| 14 | Staging vs local code | `seo-extract.mjs` on both | **97/97 URLs identical** (status, title, description, robots, canonical, OG, Twitter, lang, JSON-LD, H1 count) |
| 15 | Temporary domains | full-HTML scan of 97 URLs + CMS API scan + source/env grep | `brown-swan` 0; temporary domains not present in any SEO field |
| 16 | Case / slash / scheme handling | `curl` | see T4, T10 |

**Limitations:**
- Google's Rich Results Test and Search Console can't be used on a `noindex`, Googlebot-blocked staging site. Structured data was validated against Google's documented property requirements instead.
- Client-rendered content (portfolio and blog details) was assessed from the server HTML, which is what non-JavaScript crawlers see.
- Title and description length thresholds (60/160 characters) are common guidance, not hard limits.
- The production domain `grehasoft.com` currently serves the existing WordPress site; it was only read for comparison.

---

## Appendix A – Per-URL SEO Data (staging)

Columns: status · title length · description length · canonical · `og:url` host · `og:image` · `og:type` · Twitter card · JSON-LD types · H1 count in server HTML · images without alt. `—` = missing.

| URL | linked | status | title | desc | canonical | og:url host | og:image | og:type | tw:card | JSON-LD | H1 | img no alt |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | yes | 200 | 70 | 231 | ✔ | grehasoft.com | ✔ | — | summary_large_image | LocalBusiness | 2 | 1 |
| `/about-us` | yes | 200 | 76 | 197 | — | grehasoft.com | ✔ | — | summary_large_image | — | 1 | 1 |
| `/android-app-development` | yes | 200 | 60 | 207 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/api-development-integration` | yes | 200 | 66 | 235 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/awards-and-recognitions` | yes | 200 | 62 | 149 | — | grehasoft.com | — | — | summary_large_image | AboutPage | 1 | 1 |
| `/backend-development` | yes | 200 | 75 | 220 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/blogs` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 1 | 5 |
| `/blogs/uncategorized/cloud-performance` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/custom-api-sync` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/efficiency-enhancements` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/enterprise-security` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/inventory-management` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/rpa-automation` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/blogs/uncategorized/saas-architecture` | yes | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 0 | 1 |
| `/booking-system-development` | yes | 200 | 81 | 192 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/brand-story` | yes | 200 | 64 | 149 | — | grehasoft.com | — | — | summary_large_image | AboutPage | 1 | 1 |
| `/branding-and-graphic-design` | yes | 200 | 77 | 193 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/branding-packages` | yes | 200 | 64 | 208 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/brochure-flyer-design` | yes | 200 | 54 | 175 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/business-app-development` | yes | 200 | 83 | 248 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/business-card-design` | yes | 200 | 59 | 163 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/careers` | yes | 200 | 47 | 154 | — | grehasoft.com | — | — | summary | CollectionPage | 1 | 1 |
| `/contact-us` | yes | 200 | 47 | 151 | — | grehasoft.com | — | — | summary | ContactPage | 1 | 1 |
| `/crm-software-development` | yes | 200 | 76 | 209 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/custom-business-software-development` | yes | 200 | 62 | 194 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/custom-web-app-development` | yes | 200 | 63 | 207 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/database-development` | yes | 200 | 80 | 208 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/digital-marketing` | yes | 200 | 66 | 192 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/ecommerce-development` | yes | 200 | 73 | 185 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/erp-software-development` | yes | 200 | 76 | 208 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/facebook` | yes | 200 | 76 | 220 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/frontend-development` | yes | 200 | 75 | 189 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/graphic-design` | yes | 200 | 70 | 213 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/hybrid-app-development` | yes | 200 | 59 | 169 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/instagram` | yes | 200 | 82 | 224 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/inventory-management-software` | yes | 200 | 70 | 200 | — | grehasoft.com | ✔ | — | summary_large_image | — | 2 | 1 |
| `/ios-app-development` | yes | 200 | 48 | 229 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/landing-page-design` | yes | 200 | 74 | 212 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/lead-generation-services` | yes | 200 | 51 | 175 | ✔ | grehasoft.com | — | website | summary_large_image | Service, FAQPage | 1 | 1 |
| `/linkedin` | yes | 200 | 71 | 232 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/lms-development` | yes | 200 | 82 | 213 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/logo-design` | yes | 200 | 61 | 186 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/mobile-app-development` | yes | 200 | 76 | 166 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/pinterest` | yes | 200 | 78 | 257 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/portfolio` | yes | 200 | 59 | 152 | — | grehasoft.com | — | — | summary | CollectionPage | 1 | 1 |
| `/portfolio/exam-point-books-ebooks-and-video-learning-platform-for-publishers` | yes | 200 | 22 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/grehasoft-crm-sales-management-system` | yes | 200 | 120 | 250 | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/haleholidays` | yes | 200 | 24 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/human-rights-foundation-global-platform` | yes | 200 | 35 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/krysta-jewellery` | yes | 200 | 28 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/malayalamnewslive` | yes | 200 | 29 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/namkc-sunday-school-lms` | yes | 200 | 35 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/portfolio/seo-success-story-dr-harikumar-r-nair` | yes | 200 | 52 | — | — | cms.grehasoft.com | ✔ | — | summary_large_image | CollectionPage | 0 | 1 |
| `/privacy` | yes | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/products` | yes | 200 | 61 | 162 | — | grehasoft.com | — | — | summary | CollectionPage | 1 | 1 |
| `/products/pms` | yes | 200 | 55 | 155 | — | grehasoft.com | — | — | summary | CollectionPage, SoftwareApplication | 1 | 1 |
| `/progressive-web-app-development` | yes | 200 | 74 | 233 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/search-engine-marketing` | yes | 200 | 61 | 209 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/seo` | yes | 200 | 74 | 180 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/server-cloud-solutions` | yes | 200 | 74 | 185 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/services` | yes | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/shopify-development` | yes | 200 | 74 | 187 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/sitemap` | yes | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/social-media-marketing` | yes | 200 | 72 | 260 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/software-web-apps` | yes | 200 | 77 | 222 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/static-html-websites` | yes | 200 | 71 | 153 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/technology-services` | yes | 200 | 73 | 191 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/terms` | yes | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/twitter` | yes | 200 | 74 | 260 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/ui-ux-design` | yes | 200 | 65 | 210 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/utility-app-development` | yes | 200 | 74 | 143 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 2 | 1 |
| `/website-design` | yes | 200 | 67 | 186 | — | www.grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/website-development` | yes | 200 | 58 | 196 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/website-redesign` | yes | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/website-redesign-services` | yes | 200 | 59 | 218 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/woocommerce-development` | yes | 200 | 58 | 200 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/wordpress-development` | yes | 200 | 58 | 158 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/workflow-automation` | yes | 200 | 78 | 201 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/youtube-marketing` | yes | 200 | 83 | 73 | — | grehasoft.com | ✔ | — | summary_large_image | WebPage, Service, FAQPage | 1 | 1 |
| `/blogs/category/seo` | no | 200 | 46 | 127 | — | grehasoft.com | — | — | summary_large_image | Blog | 1 | 1 |
| `/branding-and-design1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/custom-development` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/digital-marketing1` | no | 200 | — | — | — | — | — | — | — | — | 2 | 1 |
| `/ecommerce-development1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/headless-development` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/logo-design1` | no | 200 | — | — | — | — | — | — | — | — | 2 | 1 |
| `/mobile-app-development1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/seo1` | no | 200 | — | — | — | — | — | — | — | — | 2 | 1 |
| `/services/software-programming` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/services/visiting-cards-letter-heads` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/social-media-marketing1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/software-web-apps1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/technology-services1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/ui-ux-design1` | no | 200 | — | — | — | — | — | — | — | — | 2 | 1 |
| `/website-design1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/website-development1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |
| `/wordpress-development1` | no | 200 | — | — | — | — | — | — | — | — | 1 | 1 |

## Appendix B – SEO source map

| Route | Metadata source | JSON-LD source |
|---|---|---|
| `/` | `app/page.tsx` `generateMetadata` ← `/home` `yoastMeta` (canonical from `og_url`; robots from Yoast) | `/home` `schemaJson` (ACF) |
| `/[slug]` (48 services) | `app/[slug]/page.tsx` `generateMetadata` ← `/services/:slug` `yoast_head_json` | ACF `schema_json` |
| `/[slug]/[child]` | no `generateMetadata` (inherits layout defaults); no child services exist in the CMS | — |
| `/about-us`, `/awards-and-recognitions`, `/brand-story`, `/careers`, `/contact-us`, `/portfolio`, `/products`, `/products/pms` | `app/<route>/layout.tsx` `generateMetadata` ← `/pages/<slug>` `yoast_head_json` | page ACF `schema_json` (layout) |
| `/portfolio/[slug]` | `app/portfolio/[slug]/layout.tsx` ← `/portfolio/:slug` `yoast_head_json` | portfolio ACF `schema_json` |
| `/blogs` | `app/blogs/layout.tsx` ← `/pages/1276` `yoast_head_json` | page ACF `schema_json` |
| `/blogs/[category]/[slug]` | `app/blogs/[category]/[slug]/layout.tsx` ← `/posts?slug=` `yoast_head_json`; returns `{}` when no post (inherits `/blogs`) | post ACF `schema_json` |
| `/lead-generation-services` | `app/lead-generation-services/page.tsx` ← page Yoast fields + hardcoded `CANONICAL` (`lib/content/lead-generation.ts`) | `lib/lead-generation-schema.ts` |
| `/services`, `/privacy`, `/terms`, `/sitemap`, `/website-redesign` | **none** (client pages, no layout) → root layout defaults only | none |
| all pages | `app/layout.tsx` root `metadata`: `icons`, `robots: { index: false, follow: false }` | — |
| robots.txt | Hostinger (not in this repository) | — |
| sitemap | none in the frontend; Yoast sitemap on `cms.grehasoft.com` | — |

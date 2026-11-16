# Phase 4 – Review Follow-up

**Branch:** `main` · **HEAD:** `c15448e` (unchanged) · **Date:** 2026-11-16
**State:** uncommitted working-tree changes only. Nothing is staged, committed, pushed or deployed. No WordPress, Yoast, Hostinger, backend, `robots.txt` or indexing change was made.

---

## 1. Approved metadata applied

The wording is exactly as drafted in `PHASE_4_METADATA_DRAFTS.md` §1. Verified in the server HTML of a production build:

| Route | `<title>` | `og:title` / `twitter:title` | Description (also OG and Twitter) |
|---|---|---|---|
| `/services` | Our Services - IT & Creative Solutions \| Grehasoft | Our Services - IT & Creative Solutions | Grehasoft combines custom software, digital marketing and visual branding services. Explore the full directory of our IT and creative services. |
| `/privacy` ⚠ | Privacy Policy \| Grehasoft | Privacy Policy | How Grehasoft collects, uses and safeguards your data when you visit our website or use our services, and how to contact us about this policy. |
| `/terms` ⚠ | Terms of Service \| Grehasoft | Terms of Service | The rules and regulations for using the Grehasoft website, covering intellectual property, restrictions, your content, warranties and liability. |
| `/sitemap` | Site Directory \| Grehasoft | Grehasoft Site Directory | A directory of Grehasoft's pages: company pages, web design, eCommerce, branding, software, mobile apps, marketing, technology and legal pages. |

⚠ **`/privacy` and `/terms` are awaiting policy-owner confirmation before production.** Each layout file carries the comment `AWAITING POLICY-OWNER CONFIRMATION before this is published to production.`

Unchanged on all four pages:
- Canonical `https://grehasoft.com/<route>`
- `og:url`
- `og:type=website`
- `robots` `noindex, nofollow`

**`/website-redesign`:** no metadata added, as instructed. It still has only its canonical, `og:url` and `og:type`, pending the decision in §6.

**Brand spelling.** `Grehasoft` is used in all new fallback metadata. The two code fallbacks named in the editorial report were aligned:
- `app/page.tsx`: homepage fallback title `"GrehaSoft"` → `"Grehasoft"`.
- `app/blogs/page.tsx`: blog fallback title `'Blogs | GrehaSoft'` → `'Blogs | Grehasoft'`.

Both apply only when Yoast returns no title. Today Yoast supplies both, so the rendered titles are unchanged. WordPress *Site Title* was not touched.

One more existing fallback uses the other spelling: `app/careers/layout.tsx` uses `"Careers - GrehaSoft"` when the WordPress careers page can't be loaded. It wasn't in the editorial report's list, so it is **not changed**. Tell me if it should be aligned too.

## 2. Exact files changed in this follow-up

| File | Change |
|---|---|
| `lib/seo.ts` | `buildPageMetadata` gets an optional `fallbackOgTitle` (used for OG and Twitter titles when Yoast has none; Yoast still wins) |
| `app/services/layout.tsx` | Approved title, OG title, description |
| `app/privacy/layout.tsx` | Approved title, OG title, description, plus the awaiting-confirmation comment |
| `app/terms/layout.tsx` | Approved title, OG title, description, plus the awaiting-confirmation comment |
| `app/sitemap/layout.tsx` | Approved title, OG title, description |
| `app/page.tsx` | Fallback title spelling |
| `app/blogs/page.tsx` | Fallback title spelling |
| `tests/seo.test.ts` | Assertions for `fallbackOgTitle`, including Yoast precedence |
| `PHASE_4_IMPLEMENTATION_REPORT.md` | Count corrected: 37 additional legacy sub-routes, not 36 (see §4) |
| `PHASE_4_REVIEW_FOLLOWUP.md` | This report |

No other files were touched. The earlier Phase 4 changes and the pre-existing untracked and modified files are preserved.

## 3. Build and TypeScript results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | **Pass** (exit 0) |
| `npm run build` | **Pass**, 0 warnings. The four pages are still static (5-minute revalidate). |
| `npx tsx --test tests/seo.test.ts` | **9/9 pass** |
| Phase 4 SEO regression (120 linked pages: canonical, `og:url`, `og:type`, robots, JSON-LD, BreadcrumbList, H1, 404 probes) | **3,418/3,418 pass** |
| Routes, legacy redirects, mixed case, sitemap | **384/385**. The one exception is the known, expected `/Seo/Unknown-Child` chain (Phase 2 redirect first, then lowercase, ending in a 404 after 2 hops), as reported before. |
| Pages with a title | 119/120 (only `/website-redesign` is pending) |

---

## 4. Route audit method

- **Legacy content:** read from each route's source file. The table shows the `PageHeader` title and description, the first headings, and the file size.
- **Destination content:** the server HTML of the current CMS-driven page (Yoast title and H1). Where coverage was in question, the destination's CMS content was searched for the topic keyword (counts below).
- **Recommendation rule:** a **308** only when the destination covers the same service. A **404** when no current page covers the topic. No destination was chosen just for being nearby.

**Common facts for all 40 routes:**
- Each returns 200 today with `noindex, nofollow`.
- None is linked from any page reachable on the site; the only reference is from one legacy page to another.
- None is in `/sitemap.xml`.
- Nearly all use `picsum.photos` or `images.unsplash.com` placeholder images.
- They are hand-coded static copies of services that now come from WordPress.

**Count correction:** there are **37** additional legacy sub-routes, not 36. The approved 17 plus 37 makes 54 legacy route files. The implementation report has been corrected.

---

## 5. Three unresolved legacy routes

| Route | Existing content | Candidate destination(s) and comparison | Recommendation |
|---|---|---|---|
| `/custom-development` | "Custom Software Development Kochi". "Building unique, high-performance digital solutions that solve your specific business challenges. Expert custom developers in Kerala." Sections: Innovative Custom Development in Kochi / Why Choose Custom Development? / The Development Journey / FAQ. 269 lines. | **`/software-web-apps`**: title "Software Development Company in Kochi \| **Custom Software Solutions**"; "custom software" appears 11× in its CMS content; it is the hub for all custom software. `/custom-business-software-development` is narrower (internal business tools; "custom software" 2×). `/custom-web-app-development` is narrower (web apps only). | **308 → `/software-web-apps`** |
| `/services/software-programming` | "Software Programming". "We develop high-quality, efficient, and scalable software solutions that solve real-world problems." One section: "Expert Software Programming Services". 84-line placeholder template. | **`/software-web-apps`**: same general software-development topic ("software" 68×, "programming" 2×). `/custom-business-software-development` is narrower ("programming" 0×). | **308 → `/software-web-apps`**. The legacy page is a thin generic stub. The `/services/…` path looks like an old WordPress service URL, so a redirect keeps any existing links working. |
| `/services/visiting-cards-letter-heads` | "Visiting Cards & Letter Heads". "We create professional and impactful visiting cards and letterheads that represent your brand identity." One section. 84-line placeholder template. | **`/business-card-design`**: H1 "Professional Business Card Design Kochi"; "visiting card" 10×, "letterhead" 0×. `/branding-packages` mentions letterheads (4×) but is a broader package page with no visiting-card content. | **308 → `/business-card-design`**. Visiting cards are the main subject and are fully covered there. Letterheads are covered only inside branding packages; this is a partial match, so approve with that limitation in mind. |

---

## 6. Full mapping of the 37 additional legacy sub-routes

Legacy title and description are from the page source. The destination title is the current Yoast title and H1.

### Branding, design and marketing (5)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/branding-packages1` | "Best Branding Packages Company in Kochi, Kerala". Brand identity packages. Sections: What Makes Our Branding Packages in Kochi Stand Out / Complete Brand Ecosystems / Branding Packages We Offer. | `/branding-packages` | "Branding Packages in Kochi \| Brand Identity Services"; H1 "One of the Best Branding Packages Companies in Kochi, Kerala" | **308** |
| `/brochure-flyer-design1` | "Professional Brochure & Flyer Design Kochi". Print and digital collateral. | `/brochure-flyer-design` | "Brochure Design Companies in Kochi, Kerala"; H1 "Brochure Design Company in Kochi, Kerala"; covers brochures and flyers | **308** |
| `/business-card-design1` | "Professional Business Card Design Kochi". Custom visiting cards. | `/business-card-design` | H1 "Professional Business Card Design Kochi" (identical heading) | **308** |
| `/landing-page-design1` | "Landing Page Design Services". "Custom landing page design and development crafted to maximize your conversions." 84-line stub. | `/landing-page-design` | "One of the Best Landing Page Design Companies in Kochi, Kerala" | **308** |
| `/search-engine-marketing1` | "SEM Services Kochi". Google Ads management and PPC. Sections: Drive Instant Traffic with Google Ads / Our SEM Expertise / The PPC Workflow. | `/search-engine-marketing` | "Google Ads Agency in Kochi, Kerala \| SEM Services"; Google Ads, PPC, Search, Display… | **308** |

### eCommerce (5)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/ecommerce-development1/custom` | "Custom E-Commerce Development". "Scalable, tailor-made digital storefronts built from scratch…" 85-line stub. | `/ecommerce-development` | "eCommerce Development Company in Kochi \| **Custom Online Stores**"; the description names "custom eCommerce solutions"; "custom" 63× | **308** |
| `/ecommerce-development1/magento` | "Magento E-Commerce". "Enterprise-grade Magento architecture…" Section: "Scale With Adobe Commerce". | none | `/ecommerce-development` mentions Magento **0×**. No Magento service exists. | **404** |
| `/ecommerce-development1/opencart` | "OpenCart Development". "Lightweight yet powerful open-source e-commerce solutions…" | none | `/ecommerce-development` mentions OpenCart **0×**. No OpenCart service exists. | **404** |
| `/ecommerce-development1/shopify` | "Shopify Store Development". Sections: Expert Shopify Solutions / Key Benefits / Development Process. | `/shopify-development` | H1 "One of the Best Shopify Store Development Companies in Kochi, Kerala" | **308** |
| `/ecommerce-development1/woocommerce` | "WooCommerce Store Development". Sections: Expert WooCommerce Solutions / Services / Process. | `/woocommerce-development` | H1 "One of the Best WooCommerce Store Development Companies in Kochi, Kerala" | **308** |

### Mobile apps (6)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/mobile-app-development1/android` | "Android App Development Kochi". Native Android apps. | `/android-app-development` | H1 "Android App Development Company in Kochi, Kerala" | **308** |
| `/mobile-app-development1/bussiness-apps` | "Business & Service Apps". Custom business mobile apps. 60-line stub. | `/business-app-development` | H1 "Business Application Development Company in Kochi, Kerala"; covers mobile and web business apps | **308** |
| `/mobile-app-development1/hybrid` | "Hybrid App Development Kochi". Cross-platform with Flutter. | `/hybrid-app-development` | H1 "Hybrid App Development Company in Kochi, Kerala"; Flutter and React Native | **308** |
| `/mobile-app-development1/ios` | "iOS App Development Kochi". Native iPhone and iPad apps. | `/ios-app-development` | H1 "Best iOS App Development Company in Kochi, Kerala" | **308** |
| `/mobile-app-development1/pwa` | "PWA Development Kochi". Installable PWAs. | `/progressive-web-app-development` | H1 "Progressive Web App Development Company in Kochi, Kerala" | **308** |
| `/mobile-app-development1/utility-apps` | "Custom Utility Apps". 60-line stub. | `/utility-app-development` | H1 "Utility App Development Company in Kochi, Kerala"; title "… \| Custom Utility Apps" | **308** |

### Social media (6)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/social-media-marketing1/facebook1` | "Facebook Marketing". "Expert Facebook Marketing". | `/facebook` | H1 "Facebook & Meta Ads Agency in Kochi, Kerala" | **308** |
| `/social-media-marketing1/instagram1` | "Instagram Marketing". | `/instagram` | H1 "One of the Best Instagram Ads Agencies in Kochi, Kerala" | **308** |
| `/social-media-marketing1/linkedin1` | "LinkedIn Marketing". | `/linkedin` | H1 "LinkedIn Ads Agency in Kochi, Kerala" | **308** |
| `/social-media-marketing1/pinterest1` | "Pinterest Marketing". | `/pinterest` | H1 "Pinterest Marketing Services in Kochi, Kerala" | **308** |
| `/social-media-marketing1/twitter1` | "Twitter (X) Marketing". | `/twitter` | H1 "Twitter (X) Marketing Services in Kochi, Kerala" | **308** |
| `/social-media-marketing1/youtube` | "YouTube Marketing". | `/youtube-marketing` | H1 "One of the Best YouTube Marketing Services in Kochi, Kerala". This is also where Phase 2 sends `/youtube`. | **308** |

### Software and web apps (8)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/software-web-apps1/api-integrations` | "API Integrations Kochi". Custom API integration. | `/api-development-integration` | H1 "API Integration Services Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/booking` | "Booking Systems Kochi". Appointments and reservations. | `/booking-system-development` | H1 "Booking System Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/business-tools` | "Custom Business Tools Kochi". | `/custom-business-software-development` | H1 "Custom Business Tools Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/crm` | "CRM Systems". Custom CRM. | `/crm-software-development` | H1 "CRM Software Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/custom-web` | "Custom Web Applications". | `/custom-web-app-development` | H1 "Custom Web Application Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/erp` | "ERP Solutions". Custom ERP. | `/erp-software-development` | H1 "ERP Software Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/inventory` | "Inventory Management Kochi". | `/inventory-management-software` | H1 "Best Inventory Management Software Development Company in Kochi, Kerala" | **308** |
| `/software-web-apps1/lms` | "LMS Platforms Kochi". Custom LMS. | `/lms-development` | H1 "LMS Development Company in Kochi, Kerala" | **308** |

### Technology services (5)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/technology-services1/automation1` | "Workflow Automation Kochi". | `/workflow-automation` | H1 "Workflow Automation Company in Kochi, Kerala" | **308** |
| `/technology-services1/backend1` | "Backend Development Kochi". | `/backend-development` | H1 "Backend Development Company in Kochi, Kerala" | **308** |
| `/technology-services1/databases1` | "Database Solutions Kochi". Design, management, optimization. | `/database-development` | H1 "Database Development Company in Kochi, Kerala"; title "… \| Database Design & Management" | **308** |
| `/technology-services1/frontend1` | "Frontend Development Kochi". | `/frontend-development` | H1 "Frontend Development Company in Kochi, Kerala" | **308** |
| `/technology-services1/server-cloud1` | "Server & Cloud Solutions Kochi". | `/server-cloud-solutions` | H1 "Best Server & Cloud Solutions Company in Kochi, Kerala" | **308** |

### Website development (2)
| Legacy route | Legacy content | Destination | Destination content | Rec. |
|---|---|---|---|---|
| `/website-development1/dynamic-website` | "Dynamic Website Development". "Building interactive, database-driven websites…" Sections: Powerful and Interactive Dynamic Sites / Features of Dynamic Websites / Our Dynamic Solutions / WordPress Websites. | none | `/website-development` (general) mentions "dynamic" **0×**. No dynamic-website service exists. Phase 2 also found `/website-development/dynamic-website` has no page (404). | **404** |
| `/website-development1/static-website` | "Static HTML Websites". Fast, secure, cost-effective static sites. | `/static-html-websites` | H1 "One of the Best Static Website Development Companies in Kochi, Kerala". Phase 2 already redirects `/website-development/static-website` here. | **308** |

**Summary of the 37:** **34 × 308**, **3 × 404** (`/ecommerce-development1/magento`, `/ecommerce-development1/opencart`, `/website-development1/dynamic-website`).

**With the 3 unresolved routes:** 37 × 308 and 3 × 404 across all 40 remaining legacy routes.

**Proposed implementation, not done:**
- Add the 308s to `next.config.js` and `LEGACY_PATHS`.
- Delete the 40 legacy page files. The 3 404 routes need no redirect; deleting the files is enough.
- Remove the two temporary `layout.tsx` files under `/services/…`.
- Re-run the route and sitemap suites.

---

## 7. `/website-redesign` vs `/website-redesign-services`

| | `/website-redesign` | `/website-redesign-services` |
|---|---|---|
| Source | Hand-coded static page (`app/website-redesign/page.tsx`, client component) | CMS-driven service page (WordPress `services` item, ISR) |
| H1 | Website Redesign Services in Kochi | One of the Best Website Redesign Companies in Kochi, Kerala |
| Title / description | None (pending) | Yoast title and description (description 218 chars; shortening suggested in the editorial report) |
| Body (server HTML) | ~610 words. Give Your Website a Fresh New Life / Why Redesign Your Website? (4 benefits) / The Redesign Journey (4 steps) / FAQ (4 questions) | ~2,000 words. Why Choose Grehasoft / Our Website Redesign Services (8 services: complete, UI/UX, responsive, SEO, performance, rebranding, CRO, CMS) / Signs Your Website Needs a Redesign / Local expertise / Strategy / 7-step process / Technical stack / Industries / FAQ |
| Structured data | BreadcrumbList only | Service + FAQPage + WebPage (ACF) + BreadcrumbList |
| Linked from | `/services` (service hub card, `app/services/page.tsx:65`) | `/sitemap` (HTML site directory) |
| In `/sitemap.xml` | Yes | Yes |
| Editable by the content team | No (code) | Yes (WordPress/Yoast) |

**Analysis.** Both pages target the same intent: website redesign services in Kochi. The CMS page covers everything the static page does (benefits, process, FAQ) and much more, has proper metadata and schema, and follows the same pattern as the other 48 service pages. Keeping both splits signals between two near-duplicate URLs.

**Recommendation: make `/website-redesign-services` the primary URL.**
1. `/website-redesign` → **308** → `/website-redesign-services`.
2. Change the `/services` hub card link (`app/services/page.tsx:65`) to `/website-redesign-services`, so the site never links to a redirect.
3. Remove `app/website-redesign/page.tsx` and its `layout.tsx`, and drop `/website-redesign` from `STATIC_PATHS` in `app/sitemap.ts`. The sitemap goes from 120 to 119 URLs.
4. Optional CMS follow-up: if any FAQ answers on the static page should be kept, the content team can add them to the WordPress page.

Not implemented; awaiting approval. If you'd rather keep `/website-redesign` as primary, the alternative is to redirect the CMS page to it instead. That would make the only redesign page non-editable, so I don't recommend it.

---

## 8. Remaining CMS and go-live actions

### WordPress content team (recommendations only, nothing was edited)
| Action | Reference |
|---|---|
| Enter Yoast meta descriptions for 7 portfolio items | `PHASE_4_METADATA_DRAFTS.md` §2 |
| Give `haleholidays` and `malayalamnewslive` proper titles | Metadata drafts §2 |
| Fix the CRM portfolio SEO title (two titles pasted together) | Editorial report: priority errors |
| Fix the `/linkedin` description ("…best LinkGrow your business…") | Editorial report |
| Fix grammar in the `/seo` and `/ios-app-development` descriptions | Editorial report |
| Add the brand to the `/seo`, `/youtube-marketing` and `/api-development-integration` titles | Editorial report |
| Change the in-content `<h1>` to Heading 2 in 2 posts | Editorial report |
| Add featured images to 18 posts | Implementation report §8 |
| Optional: apply the 45 title and 49 description shortenings | Editorial report |
| Brand spelling in Yoast-generated titles ("- GrehaSoft" suffix): override per item if wanted. Site Title stays unchanged, as instructed. | Editorial report |
| Turn off Yoast XML sitemaps on `cms.grehasoft.com` and keep it discouraged from indexing | Implementation report §12.2 |
| 99 pending ACF link fields | Phase 2 |

### Policy owner
- Confirm the `/privacy` and `/terms` metadata wording, and the page copy, before production. The Terms copy names `www.grehasoft.com`.

### Decisions still needed (code changes; none implemented)
1. Approve the 40 legacy-route recommendations (§5–§6).
2. Approve the `/website-redesign` consolidation (§7).
3. Default share image (approved branded asset, about 1200×630). 25 pages still have no `og:image`. No image was generated or substituted.
4. WebPage schema for the H4 pages, `/about-us` and `/inventory-management-software`. The four approved texts now make this possible for `/services`, `/privacy`, `/terms` and `/sitemap`.
5. Optional: align the `app/careers/layout.tsx` fallback spelling.
6. Earlier open items:
   - The CTA/ISR freshness interaction.
   - Hero video re-encoding.
   - Rotating the old `/access` password (still in git history).

### Go-live (not done; separate approval)
- Single robots owner behind a production-only flag, plus `app/robots.ts` listing `https://grehasoft.com/sitemap.xml`. Retire or align the Hostinger `robots.txt` (implementation report §12.1).
- Confirm staging stays `noindex` and Googlebot-blocked; it is today: `robots.txt` `Googlebot Disallow: /`, pages `noindex`.
- Submit the sitemap in Search Console and audit old WordPress URLs on `grehasoft.com` for redirects.

---

**Stopped here.** No redirects, deletions, CMS edits or other unapproved changes were made.

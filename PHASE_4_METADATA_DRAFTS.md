# Phase 4 – Metadata Drafts (H4 + M3)

**Status: drafts for approval. Nothing here has been published.** No WordPress/Yoast field was edited, and these titles and descriptions have not been added to the code.

**Sources:** each draft is written only from text already on that page (headings, intro copy, breadcrumb labels) or, for portfolio items, from the item's own ACF `short_desc`. No new services, figures, rankings, legal commitments or marketing claims were added. Character counts are in brackets.

---

## 1. Five pages without metadata

These five routes are client-rendered pages with no WordPress page behind them. Phase 4 added a server `layout.tsx` to each, which now outputs the **canonical URL, `og:url`, `og:type` and Twitter card**. The title and description are still empty until you approve them.

**Where approved text goes.** These pages have no Yoast fields, so the approved title and description would be added to each page's `app/<route>/layout.tsx`, as `title` / `fallbackTitle` and `description` / `fallbackDescription` in the existing `buildPageMetadata` call. The alternative is to create matching WordPress pages and read their Yoast fields, which is a larger change. OG title and description default to the title and description unless a separate value is approved.

### `/services`
Page content used: H1 "Comprehensive IT & Creative Solutions"; breadcrumb "Our Services"; intro "We combine precision-engineered custom software, high-converting digital marketing, and beautiful visual branding packages…"; section "Service Hub Directory".

| Field | Draft |
|---|---|
| Title | Our Services - IT & Creative Solutions \| Grehasoft (50) |
| Description | Grehasoft combines custom software, digital marketing and visual branding services. Explore the full directory of our IT and creative services. (143) |
| OG title | Our Services - IT & Creative Solutions (38) |
| OG description | Same as description |

### `/privacy`
Page content used: H1 "Privacy Policy"; intro "This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services"; sections Information We Collect, How We Use Your Information, Data Security, Changes, Contact Us.

| Field | Draft |
|---|---|
| Title | Privacy Policy \| Grehasoft (26) |
| Description | How Grehasoft collects, uses and safeguards your data when you visit our website or use our services, and how to contact us about this policy. (142) |
| OG title | Privacy Policy (14) |
| OG description | Same as description |

The description repeats the page's own scope statement and adds no legal commitments. Have the policy owner confirm it is still accurate before publishing.

### `/terms`
Page content used: H1 "Terms of Service"; intro "These terms and conditions outline the rules and regulations for the use of Grehasoft's Website"; sections Intellectual Property Rights, Restrictions, Your Content, No Warranties, Limitation of Liability, Contact Us.

| Field | Draft |
|---|---|
| Title | Terms of Service \| Grehasoft (28) |
| Description | The rules and regulations for using the Grehasoft website, covering intellectual property, restrictions, your content, warranties and liability. (144) |
| OG title | Terms of Service (16) |
| OG description | Same as description |

Note for the content owner: the Terms intro names the site as "www.grehasoft.com", while the confirmed production domain is `grehasoft.com`. This is page copy, not metadata, and was not changed.

### `/sitemap`
Page content used: H1 "Grehasoft Site Directory"; heading "Platform Directory Index"; section groups Core Corporate Pages, Web Design & Creative Media, eCommerce Solution Engines, Branding & Visual Artistry, Enterprise Software Solutions, Mobile App Development, Search Ranking & Marketing, Technology & Cloud Staging, Operational Support & Legal.

| Field | Draft |
|---|---|
| Title | Site Directory \| Grehasoft (26) |
| Description | A directory of Grehasoft's pages: company pages, web design, eCommerce, branding, software, mobile apps, marketing, technology and legal pages. (143) |
| OG title | Grehasoft Site Directory (24) |
| OG description | Same as description |

### `/website-redesign`
Page content used: H1 "Website Redesign Services in Kochi"; intro "Transform your outdated website into a modern, high-performance digital asset. Expert website revamp and UI/UX refresh services in Kerala."

| Field | Draft |
|---|---|
| Title | Website Redesign Services in Kochi \| Grehasoft (46) |
| Description | Transform your outdated website into a modern, high-performance digital asset. Expert website revamp and UI/UX refresh services in Kerala. (138) |
| OG title | Website Redesign Services in Kochi (34) |
| OG description | Same as description |

**Decision needed:** this static page overlaps the CMS-driven service page `/website-redesign-services` ("…website redesign companies in Kochi, Kerala…"). Both are linked and both are in the sitemap. Consider choosing one: redirect the other to it, or keep both with clearly different content. Until then each has its own self-referencing canonical.

---

## 2. Portfolio descriptions (M3)

Seven of the eight portfolio items have no Yoast meta description (`grehasoft-crm-sales-management-system` has one).

**Already implemented (no CMS change):** when Yoast has no description, the page now falls back to the item's own ACF `short_desc`, as plain text cut at a word boundary to 160 characters with an ellipsis. Yoast always takes precedence once a description is entered.

**Recommended:** enter a proper Yoast meta description for each item. The drafts below shorten each item's `short_desc` to its first point. They use no wording that isn't in `short_desc` apart from connecting words, and they leave out superlatives such as "a leading hepatologist".

| Portfolio URL | Current fallback (auto, from `short_desc`) | Draft Yoast meta description |
|---|---|---|
| `/portfolio/seo-success-story-dr-harikumar-r-nair` | Grehasoft partnered with Dr. Harikumar R Nair, a leading hepatologist in Kochi, to strengthen his online presence and improve visibility in highly competitive… | SEO case study: Grehasoft strengthened the online presence of Dr. Harikumar R Nair, a hepatologist in Kochi, improving visibility in healthcare search results. (159) |
| `/portfolio/namkc-sunday-school-lms` | Grehasoft developed the NAMKC Sunday School LMS, a comprehensive web-based learning platform designed to support faith-based education for children across… | Grehasoft developed the NAMKC Sunday School LMS, a web-based learning platform with grade-wise courses, interactive lessons and assessments for children. (153) |
| `/portfolio/exam-point-books-ebooks-and-video-learning-platform-for-publishers` | Grehasoft developed Exam Point, a modern mobile learning platform designed for publishers, educational institutions, and digital learners. The application… | Grehasoft developed Exam Point, a mobile learning platform for publishers and educational institutions with ebooks, video lessons and exam preparation. (151) |
| `/portfolio/haleholidays` | Grehasoft developed a responsive and visually engaging tourism platform for Hale Holidays, focused on Kerala Ayurveda tourism, holiday packages, wellness… | Grehasoft developed a responsive tourism platform for Hale Holidays, covering Kerala Ayurveda tourism, holiday packages, wellness travel and enquiries. (151) |
| `/portfolio/malayalamnewslive` | Grehasoft developed a modern and scalable Malayalam digital news platform for Malayalam News Live, designed to deliver real-time news updates, multimedia… | Grehasoft developed a scalable Malayalam digital news platform for Malayalam News Live, delivering real-time news updates and multimedia content. (145) |
| `/portfolio/human-rights-foundation-global-platform` | Grehasoft developed a fully responsive and content-driven humanitarian organization website for Human Rights Foundation Global. The platform focuses on… | Grehasoft developed a responsive, content-driven website for Human Rights Foundation Global, focused on awareness, campaigns, donations and volunteers. (151) |
| `/portfolio/krysta-jewellery` | Krysta Jewellery required a premium e-commerce website that reflects elegance, trust, and a seamless online shopping experience. We designed and developed a… | A custom WordPress jewellery e-commerce website for Krysta Jewellery, designed by Grehasoft for luxury presentation and a seamless shopping experience. (151) |

Two portfolio **titles** also need attention in Yoast. `haleholidays` and `malayalamnewslive` use the raw slug as their title ("haleholidays - GrehaSoft"). See PHASE_4_EDITORIAL_RECOMMENDATIONS.md for this and for the brand spelling.

---

## 3. Approval checklist

- [ ] Approve or edit the five page drafts (§1). I will then add them to each route's `layout.tsx`. Code change only, no CMS edit.
- [ ] Decide on `/website-redesign` vs `/website-redesign-services`.
- [ ] Enter the seven portfolio descriptions in Yoast (§2). This is a WordPress edit for the content team. The code fallback stays in place either way.

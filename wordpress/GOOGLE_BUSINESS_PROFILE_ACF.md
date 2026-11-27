# Google Business Profile Optimization: WordPress ACF setup

How the `/google-business-profile` page content is managed in WordPress.

```
WordPress page (ACF fields) → WP REST API → NestJS GET /api/v1/pages/:slug → lib/adapters/google-business-profile-acf.ts → GoogleBusinessProfileTemplate
```

| File | Purpose |
|---|---|
| `acf-json/group_google_business_profile_service.json` | ACF field group "Google Business Profile Service Page" (`group_google_business_profile_service`) |
| `content/google-business-profile-page-content.json` | All field values, shaped as a WP REST request body: `{ "acf": { … } }` |

Both JSON files were generated from `lib/content/google-business-profile.ts`, the approved page copy. Mapping the content JSON with the adapter reproduces the local content exactly; `tests/google-business-profile-acf.test.ts` checks this on every run.

**Status:** nothing has been imported or created in WordPress. Until the page exists and its ACF data is valid, the route renders the local content.

---

## 1. Environment

The page uses the same setup as the Lead Generation and AI Marketing pages (see `LEAD_GENERATION_ACF.md`, section 1):

- **ACF Free 6.8.11.** There is no Repeater, Flexible Content, Gallery or Clone field.
- **Native ACF REST support.**
- **Existing endpoint.** NestJS already provides `GET /api/v1/pages/:slug`, so the backend needs no change.

The page slug is `google-business-profile`. No page with that slug exists yet: NestJS returns 404 and `wp/v2/pages?slug=google-business-profile` returns `[]`.

---

## 2. Field group design

- **Tabs:** 10 in page order. The nine page sections are Hero, Local visibility, Services, Process, Eligible businesses, Why choose, SEO strategy, FAQ and Final CTA; the tenth tab is SEO.
- **One Group field per tab,** named after the TypeScript property in snake_case. For example, `whyChoose` becomes `why_choose`, and the Final CTA tab holds the `enquiry` group.
- **Field types:** `tab`, `group`, `text`, `textarea` and `select`, all available in ACF Free. There are no `url`, `image` or `file` fields. Field keys start with `field_gbp_`.
- **Repeated content without a Repeater:**
  - **Numbered sub-groups** hold structured items. The adapter reads them in number order and skips empty slots.
  - **Numbered paragraph fields** (`paragraph_1`, `paragraph_2`, …) hold section paragraphs.
  - A **one-entry-per-line** textarea holds the three hero preview labels.
  - **Link-syntax** textareas, written as `[link text](/url)`, hold the SEO strategy paragraphs.
- **Slots:** each section has its current item count plus spare slots.

  | Slots | Used | Spare |
  |---|---|---|
  | `visibility.paragraph_1…3` | 3 | 0 (paragraph 3 is optional) |
  | `services.item_1…12` | 8 | 4 |
  | `process.step_1…8` | 4 | 4 |
  | `eligible.item_1…10` | 5 | 5 |
  | `why_choose.point_1…8` | 5 | 3 |
  | `seo_strategy.paragraph_1…4` | 3 | 1 |
  | `faq.item_1…15` | 8 | 7 |
  | `seo.service.area_1…6` | 4 | 2 |

- **Required fields:**
  - Section fields and slot 1 of each section are marked required.
  - Spare slots are optional.
  - The adapter rejects a partly filled slot, which makes the page fall back to its local content.
- **Selects** use `allow_null`. In the REST response, an empty select comes back as `""`.
  - `icon` has 18 choices, matching `GbpIcon` and `components/service/google-business-profile/icons.ts`.
  - The area `type` choices are `City`, `AdministrativeArea`, `Country` and `Text`. `Text` outputs the name as plain text in the schema, for example "International markets".
  - A select on its own doesn't count as content: a slot with only an icon chosen is treated as empty.
- **Totals:** 284 fields, with 135 values filled.

### Values that stay in code (not in ACF)
| Value | Source | Why |
|---|---|---|
| Canonical URL and Open Graph URL (`https://grehasoft.com/google-business-profile`, no trailing slash) | the route (`buildPageMetadata`) and `seo.canonical` in the local content | The canonical is owned by the frontend |
| Schema provider (`https://grehasoft.com/#localbusiness`, Grehasoft, `https://grehasoft.com/`) | local content | It must match the business node defined on the homepage |
| Section anchor ids (`services`, `enquiry`, `enquiry-form`) | local content | Buttons and links depend on them |
| The whole enquiry form: labels, validation messages, subject prefix `Google Business Profile audit enquiry`, source label `Google Business Profile page` | local content | The values feed email subjects and inbox filtering |
| Robots | root layout | Staging stays noindex |

There is no `schema_json` field in this group. If the generic group on the page exposes one, the route ignores it. JSON-LD (Service, BreadcrumbList and FAQPage) is always built in code from the same fields that render on the page, so the FAQ schema and the visible FAQ always match.

---

## 3. Field mapping

`n` is a slot number. Each field's path in the REST response (`acf.…`) is the same as in the content file.

### Hero (`hero`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `hero.title` | `title` | text | `acf.hero.title` |
| `hero.titleAccent` | `title_accent` (optional; must appear in the title) | text | `acf.hero.title_accent` |
| `hero.lead` | `lead` | textarea | `acf.hero.lead` |
| `hero.primaryCta` / `.secondaryCta` | `primary_cta`, `secondary_cta` → `label`, `href` | group → text | `acf.hero.*_cta.*` |
| `hero.phone` / `.whatsapp` | `phone`, `whatsapp` → `label`, `href` | group → text | `acf.hero.phone.*`, `acf.hero.whatsapp.*` |
| `hero.visualLabels` | `visual_labels` (exactly 3 lines) | textarea | `acf.hero.visual_labels` |

### Local visibility (`visibility`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `visibility.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.visibility.*` |
| `visibility.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (both required) | textarea | `acf.visibility.paragraph_*` |
| `visibility.paragraphs[2]` | `paragraph_3` (optional; shown as a highlighted callout) | textarea | `acf.visibility.paragraph_3` |

### Services (`services`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `services.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.services.*` |
| `services.items[n].icon` / `.title` / `.description` | `item_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.services.item_n.*` |
| `services.id` | in code | | |

### Process (`process`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `process.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.process.*` |
| `process.steps[n].title` / `.description` | `step_n` → `title`, `description` | group → text, textarea | `acf.process.step_n.*` |

Step titles keep the full heading, for example "Step 1 — Review Your Existing Profile". The page shows the number as a badge and keeps the "Step 1 — " text for screen readers.

### Eligible businesses (`eligible`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `eligible.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.eligible.*` |
| `eligible.items[n].*` | `item_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.eligible.item_n.*` |

### Why choose (`why_choose`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `whyChoose.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.why_choose.*` |
| `whyChoose.points[n].*` | `point_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.why_choose.point_n.*` |

### SEO strategy (`seo_strategy`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `seoStrategy.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.seo_strategy.*` |
| `seoStrategy.paragraphs[n]` (RichText) | `paragraph_1` (required) … `paragraph_4` | textarea (link syntax) | `acf.seo_strategy.paragraph_*` |

### FAQ (`faq`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `faq.title` | `title` | text | `acf.faq.title` |
| `faq.items[n].question` / `.answer` | `item_n` → `question`, `answer` | group → text, textarea | `acf.faq.item_n.*` |

The visible FAQ and the FAQPage structured data are both built from these fields.

### Final CTA (`enquiry`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `enquiry.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.enquiry.*` |
| `enquiry.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.enquiry.paragraph_*` |
| `enquiry.primaryCta`, `.secondaryCta` | `primary_cta`, `secondary_cta` → `label`, `href` | group → text | `acf.enquiry.*_cta.*` |
| `enquiry.id`, `.formId`, `.form` | in code | | |

The FAQ section's button reuses the hero's primary button.

### SEO (`seo`)
| TypeScript property | ACF field | Type | REST path |
|---|---|---|---|
| `seo.title` | `title` | text | `acf.seo.title` |
| `seo.description` | `description` | textarea | `acf.seo.description` |
| `seo.breadcrumbLabel` | `breadcrumb_label` | text | `acf.seo.breadcrumb_label` |
| `seo.service.name`, `.serviceType`, `.description` | `service` → `name`, `service_type`, `description` | group → text, text, textarea | `acf.seo.service.*` |
| `seo.service.areaServed[n]` | `area_n` → `type`, `name` | group → select, text | `acf.seo.service.area_n.*` |
| `seo.canonical`, `seo.service.provider*` | in code | | |

**The page title and meta description come from this ACF tab, not from Yoast,** the same as on the AI Marketing page. If the ACF data is unavailable or invalid, the local content is used instead. Yoast values on the WordPress page don't affect the frontend.

---

## 4. Link rules

These rules apply to every `href` field and to every `[text](url)` link in the SEO strategy paragraphs. These links are allowed:

- **Site-relative paths** with a single leading `/`, such as `/seo`. Protocol-relative links (`//host`) are rejected.
- **In-page anchors that exist on this page:** `#enquiry-form`, `#enquiry` or `#services`. Any other `#anchor` is rejected.
- **Full links:** `https://` or `http://`, `tel:` and `mailto:`.

Any other link, such as `javascript:` or `data:`, makes the page fall back to its local content. The link syntax only works in the SEO strategy paragraphs; elsewhere it shows as literal text.

---

## 5. Content rules

Editors must keep the compliance wording:

- **No promised outcomes.** The page must not promise a ranking, a number of leads, a verification result or a reinstatement result.
- **Review responses, not review management.** Grehasoft guides review responses. It doesn't promote fake reviews or offer incentives for reviews.
- **Eligibility caveats stay.** Keep the statements that each business and location must meet Google's requirements.

`tests/google-business-profile.test.ts` checks these rules against the local content. Once the copy is edited in WordPress, keeping these rules is the editor's responsibility.

---

## 6. Import and population procedure

**Nothing below has been done.** Each step needs approval.

1. **Create the page as a draft:**
   - In WordPress, go to Pages → Add New.
   - Enter the title `Google Business Profile Optimization` and set the slug to `google-business-profile`.
   - Click **Save draft**. Do not publish.
   - Note the page ID from the edit URL (`post.php?post=<ID>`).
2. **Import the field group:** go to ACF → Tools → Import Field Groups, choose `acf-json/group_google_business_profile_service.json`, and click Import.
3. **Set the location rule:**
   - Open the imported group. Under Location, set **Page is equal to Google Business Profile Optimization**.
   - Confirm **Show in REST API** is on, then save.
   - Do this before filling any values. The exported rule `page == 0` matches no page, so the group can't attach anywhere until it's changed.
4. **Fill the fields,** using either method.
   - **A. REST API (recommended).** Use an editor account's Application Password:
     ```bash
     curl -X POST "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>" \
       -u "<username>:<application-password>" \
       -H "Content-Type: application/json" \
       --data @wordpress/content/google-business-profile-page-content.json
     ```
     The request contains only `acf`, so the page title, slug, status and body are not touched.
   - **B. Manual.** Copy each value from the content JSON into the matching field.
5. **Leave the generic `schema_json` field empty.** The route ignores it, and the structured data is built in code.
6. **Verify the draft** with an authenticated request (drafts are not in the public REST API):
   ```bash
   curl -u "<username>:<application-password>" \
     "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>?context=edit&_fields=id,slug,status,acf"
   ```
   Then confirm the mapping:
   - Save the response's `acf` object as `{ "acf": … }`.
   - Map it with `mapGoogleBusinessProfileAcf`, as in `tests/google-business-profile-acf.test.ts`.
   - Confirm the result deep-equals `googleBusinessProfileContent`.
7. **Publish only after review.**
   - Publishing makes the page visible through the public REST API, and so to NestJS.
   - It also renders the page on the CMS domain, which must stay noindex.
8. **Menu:** add the item under Services → SEO & Digital Marketing (2367), with the label "Google Business Profile Optimization". Use the relative URL `/google-business-profile`, with no CMS domain and no trailing slash. This is a separate step.

---

## 7. Adapter and route

- **Adapter:** `lib/adapters/google-business-profile-acf.ts` exports `mapGoogleBusinessProfileAcf(acf): GoogleBusinessProfileContent | null`.
  - It reuses the Lead Generation field readers, as the AI Marketing adapter does.
  - **All or nothing:** the first missing or invalid field returns `null` and logs `[Google Business Profile ACF] <field> …; using local content.`
- **Route:** `app/google-business-profile/page.tsx` makes one cached `getPage('google-business-profile')` call per render. `generateMetadata` and the page share it.
  - The route uses the mapped content when it is valid.
  - Otherwise it renders the complete local content. This covers an API error, a missing page, `acf: []` and any invalid field.
  - It exports `revalidate = 60`, as the Lead Generation route does. Without it, Next.js keeps the WordPress response in its data cache for a year, so edits would only appear after a deploy.
- **Caching:** NestJS caches pages for 10 minutes and the route regenerates every 60 seconds, so edits take up to about 11 minutes to appear.

---

## 8. Limitations

- **Fixed slots** (see section 2). Adding more items than the slots allow means adding fields to the group; the adapter needs no change.
- **Fixed section order,** set by `GoogleBusinessProfileTemplate`.
- **Choices are tied to code.** A new icon or area type needs a frontend change first.
- **One invalid field hides all WordPress content:** the whole page falls back to the local content. Check the server log warning to find the field.
- **Drafts are invisible** to the public REST API and to NestJS.
- **Fallback drift:** once editors change the copy in WordPress, the local fallback becomes stale. Re-sync it after major content changes.

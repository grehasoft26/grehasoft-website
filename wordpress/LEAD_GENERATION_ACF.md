# Lead Generation Services: WordPress ACF setup

How the `/lead-generation-services` page content moves from the local frontend data file into WordPress.

```
WordPress page (ACF fields) → WP REST API → NestJS GET /api/v1/pages/:slug → Next.js adapter → LeadGenerationTemplate
```

| File | Purpose |
|---|---|
| `acf-json/group_lead_generation_service.json` | ACF field group "Lead Generation Service Page" (`group_lead_generation_service`) |
| `content/lead-generation-page-content.json` | All field values, shaped as a WP REST request body: `{ "acf": { … } }` |

Both JSON files were generated from `lib/content/lead-generation.ts`. Converting the content file back through the reference adapter (section 6) reproduces the frontend content exactly, so nothing is missing or added.

---

## 1. Environment facts (checked 2026-11-13)

| Item | Finding |
|---|---|
| ACF | **ACF Free 6.8.11** (`/wp-content/plugins/advanced-custom-fields/`). ACF Pro is not installed, so there is no Repeater, Flexible Content, Gallery or Clone |
| ACF REST | Native ACF REST support. There is no `acf/v3` namespace, so the "ACF to REST API" plugin is not installed. Pages already expose an `acf` object for groups with **Show in REST API** enabled |
| Theme | Kadence (parent theme) |
| Page slug | `lead-generation-services`. No page or `services` post with this slug exists yet |
| Backend | NestJS already serves `GET /api/v1/pages/:slug` (calls `/wp-json/wp/v2/pages?slug=…`). No backend change is needed |

---

## 2. Field group design

- **10 tabs** in page order: Hero, Partner, Solutions, Process, Metrics, Why choose, Overseas, FAQ, Enquiry, SEO.
- Each tab holds **one Group field** named after the TypeScript property in snake_case (`whyChoose` → `why_choose`).
- **Field types used:** `tab`, `group`, `text`, `textarea`, `url`, `select`. All are in ACF Free.
- **Repeated content without Repeater:**
  - **Numbered sub-groups** for structured items: `solution_1…6`, `step_1…7`, `stage_1…4`, `metric_1…6`, `point_1…4`, `item_1…12`, `card_1…3`, `area_1…3`. The adapter reads them in number order and skips empty slots, so it doesn't depend on a fixed count.
  - **One entry per line** textareas for plain string lists: dropdown options, overseas checklist, alternate service names.
  - **Link syntax** textareas, `[link text](/url)`, for the six passages that contain inline links: solutions intro, three follow-up lines, solutions closing, privacy note.
- **Selects mirror the TypeScript unions:** `icon` (12 choices, `LeadIcon`), `stage` / `stage_id` (`FunnelStageId`), area `type` (`City`, `AdministrativeArea`, `Country`).
- **Required fields** match the TypeScript type. Only these are optional: `paragraph_2`, solution `point_*`, solution `follow_up`.
- **Totals:** 401 fields (10 tabs, 102 groups, 289 value fields). 235 values are filled; 54 are deliberately empty optional slots (52 unused solution-point fields and 2 empty follow-up lines).

### Why not a JSON textarea for lists?
A single JSON textarea per list (for example all 12 FAQs) would be shorter to define. But one stray quote breaks the whole section, and ACF can't validate it. Numbered fields give editors labelled inputs and per-field required checks. The cost is a longer field group and a fixed number of slots.

---

## 3. Field mapping

`n` and `m` are slot numbers. The JSON / REST path is identical in the content file and in the REST response (`acf.…`).

### Hero (`hero`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `hero.title` | `title` | text | `acf.hero.title` |
| `hero.lead` | `lead` | textarea | `acf.hero.lead` |
| `hero.body` | `body` | textarea | `acf.hero.body` |
| `hero.primaryCta.label` / `.href` | `primary_cta` → `label`, `href` | group → text, text | `acf.hero.primary_cta.label` / `.href` |
| `hero.secondaryCta.*` | `secondary_cta` → `label`, `href` | group → text | `acf.hero.secondary_cta.*` |
| `hero.phone.*` | `phone` → `label`, `href` | group → text | `acf.hero.phone.*` |
| `hero.whatsapp.*` | `whatsapp` → `label`, `href` | group → text | `acf.hero.whatsapp.*` |

CTA links are `text` fields rather than `url` fields, because `url` validation rejects `#anchors`, `/relative` paths and `tel:` links.

### Partner (`partner`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `partner.eyebrow` | `eyebrow` | text | `acf.partner.eyebrow` |
| `partner.title` | `title` | text | `acf.partner.title` |
| `partner.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` | textarea | `acf.partner.paragraph_1`, `paragraph_2` |
| `partner.cards[n].icon` | `card_n` → `icon` | group → select | `acf.partner.card_n.icon` |
| `partner.cards[n].title` / `.description` | `card_n` → `title`, `description` | text, textarea | `acf.partner.card_n.title` / `.description` |

### Solutions (`solutions`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `solutions.id` | `anchor_id` | text | `acf.solutions.anchor_id` |
| `solutions.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.solutions.eyebrow`, `.title` |
| `solutions.intro` (RichText) | `intro` | textarea (link syntax) | `acf.solutions.intro` |
| `solutions.indexLabel` | `index_label` | text | `acf.solutions.index_label` |
| `solutions.closing` (RichText) | `closing` | textarea (link syntax) | `acf.solutions.closing` |
| `solutions.items[n].id` | `solution_n` → `anchor_id` | text | `acf.solutions.solution_n.anchor_id` |
| `solutions.items[n].icon` | `solution_n` → `icon` | select | `acf.solutions.solution_n.icon` |
| `solutions.items[n].title`, `.body` | `title`, `body` | text, textarea | `acf.solutions.solution_n.title` / `.body` |
| `solutions.items[n].points[m].title` / `.description` | `point_m` → `title`, `description` | group → text, textarea | `acf.solutions.solution_n.point_m.*` |
| `solutions.items[n].followUp` (RichText, optional) | `follow_up` | textarea (link syntax) | `acf.solutions.solution_n.follow_up` |
| `solutions.items[n].schemaName` / `.schemaDescription` | `schema_name`, `schema_description` | text, textarea | `acf.solutions.solution_n.schema_*` |

### Process (`process`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `process.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.process.*` |
| `process.stepLabel` | `step_label` | text | `acf.process.step_label` |
| `process.steps[n].title` / `.description` | `step_n` → `title`, `description` | group → text, textarea | `acf.process.step_n.*` |

There is no step-number field: the number is the slot position (`step_1` = Step 1), the same way the frontend numbers steps by array order.

### Metrics (`metrics`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `metrics.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.metrics.*` |
| `metrics.stages[n].id` | `stage_n` → `stage_id` | group → select | `acf.metrics.stage_n.stage_id` |
| `metrics.stages[n].label` / `.description` | `label`, `description` | text | `acf.metrics.stage_n.*` |
| `metrics.items[n].title` / `.description` | `metric_n` → `title`, `description` | group → text, textarea | `acf.metrics.metric_n.*` |
| `metrics.items[n].stage` | `metric_n` → `stage` | select | `acf.metrics.metric_n.stage` |

### Why choose (`why_choose`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `whyChoose.title`, `.intro` | `title`, `intro` | text, textarea | `acf.why_choose.*` |
| `whyChoose.points[n].icon` / `.title` / `.description` | `point_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.why_choose.point_n.*` |

### Overseas (`overseas`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `overseas.title`, `.body` | `title`, `body` | text, textarea | `acf.overseas.*` |
| `overseas.commitmentsTitle` | `commitments_title` | text | `acf.overseas.commitments_title` |
| `overseas.commitments[]` | `commitments` | textarea (one per line) | `acf.overseas.commitments` |

The document's overseas section has no CTA of its own, so none was added.

### FAQ (`faq`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `faq.title` | `title` | text | `acf.faq.title` |
| `faq.items[n].question` / `.answer` | `item_n` → `question`, `answer` | group → text, textarea | `acf.faq.item_n.*` |

### Enquiry (`enquiry`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `enquiry.id`, `.formId` | `anchor_id`, `form_anchor_id` | text | `acf.enquiry.anchor_id`, `.form_anchor_id` |
| `enquiry.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.enquiry.*` |
| `enquiry.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` | textarea | `acf.enquiry.paragraph_*` |
| `enquiry.primaryCta.*`, `.secondaryCta.*` | `primary_cta`, `secondary_cta` → `label`, `href` | group → text | `acf.enquiry.*_cta.*` |
| `enquiry.form.name.label` (and `company`, `phone`, `email`) | `form` → `name_label` (and `company_label`, `phone_label`, `email_label`) | text | `acf.enquiry.form.*_label` |
| `enquiry.form.market.label` / `.placeholder` / `.options[]` | `form` → `market` → `label`, `placeholder`, `options` | group → text, text, textarea (one per line) | `acf.enquiry.form.market.*` |
| `enquiry.form.goal.*` | `form` → `goal` → same fields | group | `acf.enquiry.form.goal.*` |
| `enquiry.form.details.label` | `details_label` | text | `acf.enquiry.form.details_label` |
| `enquiry.form.optionalLabel` | `optional_label` | text | `acf.enquiry.form.optional_label` |
| `enquiry.form.submitLabel` / `.submittingLabel` | `submit_label`, `submitting_label` | text | `acf.enquiry.form.submit*_label` |
| `enquiry.form.privacy` (RichText) | `privacy` | textarea (link syntax) | `acf.enquiry.form.privacy` |
| `enquiry.form.successMessage` / `.errorMessage` | `success_message`, `error_message` | textarea | `acf.enquiry.form.*_message` |
| `enquiry.form.validation.nameRequired` (and 4 more) | `validation` → `name_required`, `phone_required`, `phone_invalid`, `email_required`, `email_invalid` | group → text | `acf.enquiry.form.validation.*` |
| `enquiry.form.subjectPrefix` / `.sourceLabel` | `subject_prefix`, `source_label` | text | `acf.enquiry.form.*` |

The form has no input placeholders; the only placeholders are the two dropdown placeholder options. The `name.label`-style objects are flattened to `name_label` so editors don't have to open single-field groups.

### SEO (`seo`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `seo.title`, `.description` | `title`, `description` | text, textarea | `acf.seo.title`, `.description` |
| `seo.canonical` | `canonical` | url | `acf.seo.canonical` |
| `seo.breadcrumbLabel` | `breadcrumb_label` | text | `acf.seo.breadcrumb_label` |
| `seo.service.name`, `.serviceType`, `.description` | `service` → `name`, `service_type`, `description` | group → text, text, textarea | `acf.seo.service.*` |
| `seo.service.alternateName[]` | `alternate_names` | textarea (one per line) | `acf.seo.service.alternate_names` |
| `seo.service.areaServed[n].type` / `.name` | `area_n` → `type`, `name` | group → select, text | `acf.seo.service.area_n.*` |
| `seo.service.providerId` / `.providerName` / `.providerUrl` | `provider_id`, `provider_name`, `provider_url` | url, text, url | `acf.seo.service.provider_*` |

**Open Graph:** the page derives its OG title, description and URL from `seo.title`, `seo.description` and `seo.canonical`. It has no OG image today, so no OG-specific field was added.

**Structured data:** `lib/lead-generation-schema.ts` builds the Service and FAQPage JSON-LD from `seo.service`, `solutions.title`, each solution's `schema_name` / `schema_description`, and the 12 FAQ items. Because the FAQ JSON-LD is generated from the same fields that render on the page, the two always match word for word.

---

## 4. Import and population procedure

Nothing below has been done. Each step needs approval.

1. **Create the page as a draft.** In WordPress, go to Pages → Add New, enter title `Lead Generation Services`, set the slug to `lead-generation-services`, and click **Save draft** (do not publish). Note the page ID from the edit URL (`post.php?post=<ID>`).
2. **Import the field group.** Go to ACF → Tools → Import Field Groups, choose `acf-json/group_lead_generation_service.json`, and click Import. ACF Free includes this tool.
3. **Set the location rule.** Open the imported group. Under Location, set **Page is equal to Lead Generation Services**. Under Settings, confirm **Show in REST API** is on. Save.
   - The exported rule is `page == 0` on purpose: it matches no page, so the group can't attach anywhere until it's pointed at the new page.
   - Alternatively, replace `"value": "0"` with the page ID before importing.
4. **Fill the fields,** using either option:
   - **A. REST API (recommended; no plugin needed).**
     1. Create an Application Password for an editor or admin account under Users → Profile → Application Passwords. This is built into WordPress.
     2. Run:
        ```bash
        curl -X POST "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>" \
          -u "<username>:<application-password>" \
          -H "Content-Type: application/json" \
          --data @wordpress/content/lead-generation-page-content.json
        ```
     ACF writes the `acf` object into the fields. The request contains only `acf`, so the page title, slug, status and body are not touched.
   - **B. Manual.** Copy each value from the content JSON into the matching field in the page editor. Field labels follow the JSON keys.
5. **Yoast.** Optionally copy the SEO title and meta description into the Yoast box so WordPress's own output matches. Yoast fields can't be written through the default REST API. The frontend reads SEO values from the ACF `seo` group, not from Yoast (see section 6).
6. **Verify.** While the page is a draft it is **not** in the public REST API. Check it with an authenticated request:
   ```bash
   curl -u "<username>:<application-password>" \
     "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>?context=edit&_fields=id,slug,status,acf"
   ```
   Then run the same round-trip comparison against the live response.
7. **Publish only after review.** Publishing makes the page visible through the public REST API (and therefore NestJS). It also renders the page with the Kadence theme at `cms.grehasoft.com/lead-generation-services/`; keep the CMS domain noindexed, as the existing services are.

**Local JSON (theme `acf-json/`) is not recommended here.** Kadence is a parent theme, so files placed in it are deleted by theme updates. Local JSON would need a child theme or a `acf/settings/load_json` filter, both of which are code changes needing approval.

---

## 5. REST API response example

Request: `GET https://cms.grehasoft.com/wp-json/wp/v2/pages?slug=lead-generation-services&_fields=id,slug,status,acf`. This works once the page is published; drafts need authentication. Excerpt, with real values except `id`, which WordPress assigns when the page is created:

```json
[
  {
    "id": 0,
    "slug": "lead-generation-services",
    "status": "publish",
    "acf": {
      "hero": {
        "title": "Lead Generation Agency in Kochi, Kerala – for Qualified Business Leads",
        "lead": "Reach relevant prospects and turn interest into business enquiries.",
        "primary_cta": { "label": "Book a Lead Strategy Call", "href": "#enquiry-form" }
      },
      "solutions": {
        "anchor_id": "solutions",
        "intro": "Choose the support your business needs, from a focused paid campaign to a broader acquisition strategy. We recommend [digital marketing](/digital-marketing) channels and deliverables based on your goals, resources and sales process.",
        "solution_3": {
          "anchor_id": "b2b-lead-generation",
          "icon": "briefcase",
          "title": "B2B Lead Generation",
          "point_1": { "title": "", "description": "" },
          "follow_up": "Explore our [LinkedIn marketing services](/linkedin)."
        }
      },
      "metrics": {
        "metric_1": { "title": "Lead Volume", "description": "Total valid calls, forms, and WhatsApp inquiries.", "stage": "enquiries" }
      },
      "overseas": {
        "commitments": "Time-zone communication\nFull ad account access\nTransparent reporting\nInstant lead handover"
      },
      "faq": {
        "item_3": {
          "question": "What is a qualified lead?",
          "answer": "A qualified lead is a genuine customer enquiry that meets your specific sales criteria—such as the right location, budget, project need, and buying timeline. …"
        }
      }
    }
  }
]
```

How ACF's native REST support returns values:
- groups are nested objects;
- select fields return the stored value;
- textareas return the raw string (`new_lines` is off, so no `<br>` is added);
- empty fields return `""`.

A page with no saved values returns `"acf": []`, and the adapter must treat that as "no content". Through NestJS the same page object arrives inside the standard envelope: `GET /api/v1/pages/lead-generation-services` → `{ "success": true, "data": { …page, "acf": {…} } }`.

---

## 6. Future Next.js adapter (Phase 2, not implemented)

The template keeps receiving `LeadGenerationContent`; only the data source changes.

1. Add `lib/content/lead-generation-acf.ts` exporting `mapLeadGenerationAcf(acf): LeadGenerationContent | null`. Its rules are:
   - **Numbered slots** become arrays, in number order, skipping slots whose title, question or label is empty.
   - **One-per-line fields:** split on new lines, trim, and drop blank lines.
   - **Link syntax:** `[text](href)` becomes a `{ text, href }` segment and the surrounding text becomes string segments.
   - **Optional fields:** `points` and `followUp` are included only when non-empty, as in the local data.
   - **Selects:** `icon`, `stage` and `stage_id` are checked against the TypeScript unions; any unknown value falls back to the local content.
   - **Empty `acf`:** if `acf` is `[]` or a required section is missing, return `null`.

   The scratch generator that produced these files contains a working reference version of this mapping. Its output deep-equals `lib/content/lead-generation.ts`.
2. In `app/lead-generation-services/page.tsx`:
   - Fetch `getPage('lead-generation-services')` (already in `lib/backend-api.ts`).
   - Map it with `mapLeadGenerationAcf`, falling back to `leadGenerationContent` when the result is `null`.
   - Switch `metadata` to `generateMetadata` so SEO values come from the same object.
3. **Keep SEO in ACF, not Yoast.** WordPress page permalinks end in `/`, so Yoast's `og_url` will be `https://grehasoft.com/lead-generation-services/`. The frontend serves the URL without the slash and redirects the slash version, so the canonical must come from `acf.seo.canonical`.
4. **Caching:** NestJS caches pages for 10 minutes, so edits appear within that window.

Keeping the existing static route (rather than moving the page into `app/[slug]`) is the simplest path. A WordPress *page* is not part of the `services` post type that `app/[slug]` reads.

---

## 7. Limitations and manual steps

- **Fixed slots:** 6 solutions (6 points each), 7 steps, 4 stages, 6 metrics, 4 benefits, 12 FAQs, 3 cards, 3 served areas. Adding a 13th FAQ means adding a field to the group; the adapter needs no change.
- **Section order is fixed** by `LeadGenerationTemplate`. ACF Free has no Flexible Content for reordering.
- **Editors must use the `[text](/url)` link syntax** in the six link-capable fields. In other fields it would show as literal text (the validator rejects it there).
- **Icon and funnel-stage choices are tied to code.** A new icon needs a frontend change first.
- **Required fields** inside groups block saving while they are empty.
- **The location rule needs the page ID** (import step 3).
- **Drafts are invisible** to the public REST API and to NestJS.

### Content to confirm before publishing
- **"10+ Years of Proven Industry Expertise" and "100+ Happy Clients around the world"** come from the copy section of the document. The document's own notes say these figures are unverified. Grehasoft must confirm them, or replace them with the document's suggested alternatives.
- **FAQs 1, 5, 10 and 11 use the wording from the document's FAQPage schema,** chosen so the page and the schema match. FAQ 11 omits the unverified "many of our clients" overseas claim.
- **The LinkedIn link (`/linkedin`)** is kept because that page exists. The document's notes say to omit LinkedIn until its offering is confirmed.
- **"AI Search Visibility Services"** is plain text, because no such page exists.
- **Interface labels not in the document:** the funnel stage labels and descriptions, "Agreed before launch", "Solutions on this page", the dropdown placeholders, the submitting label, the error and validation messages, "Contact now", "Chat on WhatsApp", the subject prefix and the source label.
- **Canonical** is `https://grehasoft.com/lead-generation-services` (no trailing slash), matching the URL the frontend serves with HTTP 200. The document specifies a trailing slash, which this frontend redirects.

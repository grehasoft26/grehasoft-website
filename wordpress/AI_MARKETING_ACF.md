# AI Marketing Services: WordPress ACF setup

How the `/ai-marketing-service-agency` page content moves from the local frontend data file into WordPress.

```
WordPress page (ACF fields) → WP REST API → NestJS GET /api/v1/pages/:slug → lib/adapters/ai-marketing-acf.ts → AiMarketingTemplate
```

| File | Purpose |
|---|---|
| `acf-json/group_ai_marketing_service.json` | ACF field group "AI Marketing Service Page" (`group_ai_marketing_service`) |
| `content/ai-marketing-page-content.json` | All field values, shaped as a WP REST request body: `{ "acf": { … } }` |

Both JSON files were generated from `lib/content/ai-marketing.ts`. Mapping the content JSON with the adapter reproduces the local content exactly; `tests/ai-marketing-acf.test.ts` checks this on every run.

**Status:** nothing has been imported or created in WordPress. Until the page exists and its ACF data is valid, the route renders the local content.

---

## 1. Environment

Same environment as the Lead Generation page (see `LEAD_GENERATION_ACF.md`, section 1):

- ACF Free 6.8.11, so there is no Repeater, Flexible Content, Gallery or Clone.
- Native ACF REST support.
- The NestJS endpoint `GET /api/v1/pages/:slug` already exists. No backend change is needed.

The page slug is `ai-marketing-service-agency`, and no page with that slug exists yet.

---

## 2. Field group design

- **11 tabs** in page order: Hero, Discovery, Search visibility, Content, Video, Connected, Process, Why choose, FAQ, Enquiry, SEO.
- Each tab holds **one Group field** named after the TypeScript property in snake_case (`searchVisibility` → `search_visibility`).
- **Field types used:** `tab`, `group`, `text`, `textarea`, `url`, `select`. All are in ACF Free. Field keys start with `field_ams_`.
- **Repeated content without Repeater:**
  - **Numbered sub-groups** hold structured items. The adapter reads them in number order and skips empty slots.
  - **One entry per line** textareas hold plain string lists: hero capabilities and the service types.
  - **Link syntax** textareas, `[link text](/url)`, hold the four Connected Marketing follow-up lines.
- **Slots:** each section has its current item count plus spare slots.

  | Slots | Used | Spare |
  |---|---|---|
  | `discovery.card_1…8` | 5 | 3 |
  | `search_visibility.item_1…6` | 4 | 2 |
  | `content_creation.item_1…6` | 3 | 3 |
  | `video.item_1…6` | 3 | 3 |
  | `connected.item_1…6` | 3 | 3 |
  | `process.step_1…8` | 5 | 3 |
  | `why_choose.point_1…6` | 4 | 2 |
  | `faq.item_1…12` | 7 | 5 |
  | `seo.service.area_1…3` | 3 | 0 |

- **Required fields:**
  - Section fields and slot 1 of each section are marked required in ACF.
  - Spare slots are not marked required, so the page can be saved with them empty.
  - The adapter rejects a **partly filled** slot, which makes the page fall back to its local content.
- **Selects** use `allow_null`, so empty spare slots store `null`.
  - `icon`: 12 choices, matching `AiIcon`.
  - Area `type`: `City`, `AdministrativeArea`, `Country`.
  - `video_type`: `video/mp4`, `video/webm`.
  - A select on its own doesn't count as content: a slot with only an icon chosen is treated as empty.
- **Totals:** 309 fields (11 tabs, 81 groups, 217 value fields), with 147 values filled.

### Values that stay in code (not in ACF)
| Value | Source |
|---|---|
| Route path, canonical URL, Open Graph URL | `lib/content/ai-marketing.ts` (`seo.path`) via `buildPageMetadata` |
| Provider organisation and all JSON-LD | `lib/ai-marketing-schema.ts` (Service provider `@id` from the Lead Generation content) |
| Section anchor ids (`search-visibility`, `enquiry`, `enquiry-form`) | local content |
| Process step label ("Step") | local content |
| The whole enquiry form: labels, the six Main Goal options, validation messages, subject prefix `AI marketing enquiry`, source label `AI marketing services page` | local content (shared with Lead Generation) |

There is no `schema_json` field. If a generic group on the page exposes one, the adapter ignores it. JSON-LD is always built in code from the same fields that render on the page, so the FAQ schema and the visible FAQ always match.

---

## 3. Field mapping

`n` is a slot number. The JSON / REST path is the same in the content file and in the REST response (`acf.…`).

### Hero (`hero`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `hero.title` | `title` | text | `acf.hero.title` |
| `hero.body` | `body` | textarea | `acf.hero.body` |
| `hero.capabilities[]` | `capabilities` | textarea (one per line) | `acf.hero.capabilities` |
| `hero.primaryCta.label` / `.href` | `primary_cta` → `label`, `href` | group → text, text | `acf.hero.primary_cta.*` |
| `hero.secondaryCta.*` | `secondary_cta` → `label`, `href` | group → text | `acf.hero.secondary_cta.*` |
| `hero.contact.*` | `contact` → `label`, `href` | group → text | `acf.hero.contact.*` |
| `hero.whatsapp.*` | `whatsapp` → `label`, `href` | group → text | `acf.hero.whatsapp.*` |

### Discovery (`discovery`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `discovery.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.discovery.*` |
| `discovery.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.discovery.paragraph_*` |
| `discovery.coverTitle` | `cover_title` | text | `acf.discovery.cover_title` |
| `discovery.cover[n].icon` / `.title` / `.description` | `card_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.discovery.card_n.*` |

### Search visibility (`search_visibility`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `searchVisibility.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.search_visibility.*` |
| `searchVisibility.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.search_visibility.paragraph_*` |
| `searchVisibility.items[n].icon` / `.title` | `item_n` → `icon`, `title` | group → select, text | `acf.search_visibility.item_n.*` |
| `searchVisibility.items[n].paragraphs[0]`, `[1]` | `item_n` → `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.search_visibility.item_n.paragraph_*` |
| `searchVisibility.id` | in code | | |

### Content (`content_creation`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `contentCreation.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.content_creation.*` |
| `contentCreation.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.content_creation.paragraph_*` |
| `contentCreation.items[n].title` / `.description` | `item_n` → `title`, `description` | group → text, textarea | `acf.content_creation.item_n.*` |
| `contentCreation.closing` | `closing` | textarea | `acf.content_creation.closing` |

### Video (`video`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `video.eyebrow`, `.title`, `.body` | `eyebrow`, `title`, `body` | text, text, textarea | `acf.video.*` |
| `video.items[n].title` / `.description` | `item_n` → `title`, `description` | group → text, textarea | `acf.video.item_n.*` |
| `video.cta.*` | `cta` → `label`, `href` | group → text | `acf.video.cta.*` |
| `video.asset.src` | `asset` → `video_url` | group → url | `acf.video.asset.video_url` |
| `video.asset.type` | `asset` → `video_type` | select | `acf.video.asset.video_type` |
| `video.asset.title` | `asset` → `video_title` | text | `acf.video.asset.video_title` |
| `video.asset.poster` (optional) | `asset` → `poster_url` | url | `acf.video.asset.poster_url` |
| `video.asset.captions.src` / `.label` / `.srcLang` (optional) | `asset` → `captions_url`, `captions_label`, `captions_lang` | url, text, text | `acf.video.asset.captions_*` |

**The video is optional and is not supplied.** All asset fields are empty in the content JSON, so no player is shown. Rules:

- **Empty:** when every asset text field is empty, there is no video. A `video_type` chosen on its own is ignored.
- **Required once any field is filled:** `video_url`, `video_type` and `video_title`.
- **Hosts:** video, poster and captions URLs must be `https://` URLs on `cms.grehasoft.com` (the Media Library) or `grehasoft.com`.
- **Captions:** fill all three caption fields or none. `captions_lang` is a language code such as `en` or `en-IN`.
- **Playback:** the player is click-to-play, with no autoplay.

### Connected (`connected`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `connected.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.connected.*` |
| `connected.items[n].title` / `.description` | `item_n` → `title`, `description` | group → text, textarea | `acf.connected.item_n.*` |
| `connected.items[n].followUp` (RichText) | `item_n` → `follow_up` | textarea (link syntax) | `acf.connected.item_n.follow_up` |
| `connected.closing` | `closing` | textarea | `acf.connected.closing` |

### Process (`process`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `process.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.process.*` |
| `process.steps[n].title` / `.description` | `step_n` → `title`, `description` | group → text, textarea | `acf.process.step_n.*` |
| `process.stepLabel` | in code | | |

The step number is the slot position (`step_1` = Step 1).

### Why choose (`why_choose`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `whyChoose.eyebrow`, `.title`, `.intro` | `eyebrow`, `title`, `intro` | text, text, textarea | `acf.why_choose.*` |
| `whyChoose.points[n].icon` / `.title` / `.description` | `point_n` → `icon`, `title`, `description` | group → select, text, textarea | `acf.why_choose.point_n.*` |

### FAQ (`faq`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `faq.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.faq.*` |
| `faq.items[n].question` / `.answer` | `item_n` → `question`, `answer` | group → text, textarea | `acf.faq.item_n.*` |

### Enquiry (`enquiry`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `enquiry.eyebrow`, `.title` | `eyebrow`, `title` | text | `acf.enquiry.*` |
| `enquiry.paragraphs[0]`, `[1]` | `paragraph_1`, `paragraph_2` (optional) | textarea | `acf.enquiry.paragraph_*` |
| `enquiry.primaryCta.*`, `.secondaryCta.*` | `primary_cta`, `secondary_cta` → `label`, `href` | group → text | `acf.enquiry.*_cta.*` |
| `enquiry.id`, `.formId`, `.form` | in code | | |

### SEO (`seo`)
| TypeScript property | ACF field | Type | JSON / REST path |
|---|---|---|---|
| `seo.title` | `title` | text | `acf.seo.title` |
| `seo.description` | `description` | textarea | `acf.seo.description` |
| `seo.breadcrumbLabel` | `breadcrumb_label` | text | `acf.seo.breadcrumb_label` |
| `seo.service.name`, `.description` | `service` → `name`, `description` | group → text, textarea | `acf.seo.service.*` |
| `seo.service.serviceType[]` | `service` → `service_types` | textarea (one per line) | `acf.seo.service.service_types` |
| `seo.service.areaServed[n].type` / `.name` | `area_n` → `type`, `name` | group → select, text | `acf.seo.service.area_n.*` |
| `seo.path` | in code | | |

**The page title and meta description come from this ACF tab, not from Yoast.** The local content is used when the ACF data is unavailable or invalid. Any Yoast values on the WordPress page don't affect the frontend.

The canonical URL, Open Graph URL, robots rules and organisation identity are all set in code.

---

## 4. Link rules

These rules apply to every `href` field and every `[text](url)` link in a link-syntax field. Allowed links:

- **Site-relative paths:** a single leading `/`, such as `/seo`. Protocol-relative `//host` is rejected.
- **In-page anchors that exist on this page:** `#enquiry-form`, `#enquiry` or `#search-visibility`. Any other `#anchor` is rejected.
- **Full links:** `https://` or `http://`, `tel:` and `mailto:` links.

Anything else, such as `javascript:` or `data:`, makes the page fall back to its local content. Use the link syntax only in the Connected follow-up lines; elsewhere it shows as literal text.

---

## 5. Import and population procedure

**Nothing below has been done.** Each step needs approval.

1. **Create the page as a draft.**
   - In WordPress, go to Pages → Add New.
   - Enter the title `AI Marketing Services` and set the slug to `ai-marketing-service-agency`.
   - Click **Save draft**. Do not publish.
   - Note the page ID from the edit URL (`post.php?post=<ID>`).
2. **Import the field group.** Go to ACF → Tools → Import Field Groups, choose `acf-json/group_ai_marketing_service.json`, and click Import.
3. **Set the location rule.**
   - Open the imported group. Under Location, set **Page is equal to AI Marketing Services**.
   - Confirm **Show in REST API** is on, then save.
   - The exported rule `page == 0` matches no page, so the group can't attach anywhere before this step.
4. **Fill the fields,** using either option:
   - **A. REST API (recommended).** Use an Application Password for an editor account, then run:
     ```bash
     curl -X POST "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>" \
       -u "<username>:<application-password>" \
       -H "Content-Type: application/json" \
       --data @wordpress/content/ai-marketing-page-content.json
     ```
     The request contains only `acf`, so the page title, slug, status and body are not touched.
   - **B. Manual.** Copy each value from the content JSON into the matching field. Field labels follow the JSON keys.
5. **Verify the draft** with an authenticated request. Drafts are not in the public REST API.
   ```bash
   curl -u "<username>:<application-password>" \
     "https://cms.grehasoft.com/wp-json/wp/v2/pages/<ID>?context=edit&_fields=id,slug,status,acf"
   ```
   Save the response's `acf` object as `{ "acf": … }`. Map it with `mapAiMarketingAcf` (as in `tests/ai-marketing-acf.test.ts`) and confirm that it deep-equals `aiMarketingContent`.
6. **Publish only after review.** Publishing makes the page visible through the public REST API and therefore through NestJS. Keep the CMS domain noindexed.

Adding the page to the Services mega-menu is a separate step, not part of this setup.

---

## 6. Adapter and route

- **Adapter:** `lib/adapters/ai-marketing-acf.ts` exports `mapAiMarketingAcf(acf): AiMarketingContent | null`.
  - It reuses the Lead Generation field readers (`lib/adapters/lead-generation-acf.ts`). They are exported, and their behaviour is unchanged.
  - **All or nothing:** the first missing or invalid field returns `null` and logs `[AI marketing ACF] <field> …; using local content.`
- **Route:** `app/ai-marketing-service-agency/page.tsx` makes one cached `getPage('ai-marketing-service-agency')` call per render, shared by `generateMetadata` and the page.
  - The route uses the mapped content when it is valid.
  - Otherwise it renders the complete local content. This covers an API error, a missing page, `acf: []` and any invalid field.
  - The route has no `revalidate` export of its own. It keeps the regeneration period it had before the integration (5 minutes in the build output).
- **Caching:** NestJS caches pages for 10 minutes, and the route regenerates every 5 minutes. Edits can therefore take up to about 15 minutes to appear.

---

## 7. Limitations

- **Fixed slots** (see section 2). Adding more items than the slots allow means adding fields to the group; the adapter needs no change.
- **Section order is fixed** by `AiMarketingTemplate`.
- **Choices are tied to code.** A new icon, area type or video format needs a frontend change first.
- **One invalid field hides all WordPress content:** the whole page falls back to the local content. Check the server log warning to find the field.
- **Drafts are invisible** to the public REST API and to NestJS.

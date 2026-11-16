import {
  EmbeddedServicePost,
  ProjectGalleryItem,
  YoastHeadJson,
} from '@/types/wordpress';
import { CTA_FIELDS } from '@/lib/cta-data';

// Props passed to client components are serialized into every page's HTML.
// WordPress REST objects carry Yoast SEO blobs (yoast_head, yoast_head_json),
// _links and other fields those components never read, so pages pass them
// through these helpers to keep only the fields each component uses.
// Page-level SEO is unaffected: it is built server-side from yoastMeta.

type WPList = any[] | null | undefined;

const pick = (source: any, keys: readonly string[]) => {
  const fields: Record<string, any> = {};
  for (const key of keys) {
    if (source?.[key] !== undefined) fields[key] = source[key];
  }
  return fields;
};

// Only the og_image URL fields; used as an image fallback, not for SEO.
const ogImages = (yoast: any): YoastHeadJson | undefined =>
  Array.isArray(yoast?.og_image)
    ? { og_image: yoast.og_image.map((img: any) => pick(img, ['width', 'height', 'url', 'type'])) }
    : undefined;

const featuredMedia = (item: any, withSizes = false) => {
  const media = item?._embedded?.['wp:featuredmedia'];
  if (!Array.isArray(media)) return undefined;
  return media.map((m: any) => ({
    source_url: m?.source_url,
    ...(withSizes && m?.media_details?.sizes?.large?.source_url
      ? { media_details: { sizes: { large: { source_url: m.media_details.sizes.large.source_url } } } }
      : {}),
  }));
};

/** Clients / ClientsCarouselSection: id, title, logo URL, website URL. */
export const trimClients = (clients: WPList) =>
  (clients || []).map((client) => ({
    id: client?.id,
    title: { rendered: client?.title?.rendered ?? '' },
    featured_image_url: client?.featured_image_url,
    acf: { website_url: client?.acf?.website_url },
  }));

/** StickyScrollServices: id, ACF text fields, featured image (Yoast og_image fallback). */
export const trimOurServices = (services: WPList) =>
  (services || []).map((service) => ({
    id: service?.id,
    acf: service?.acf,
    _embedded: { 'wp:featuredmedia': featuredMedia(service) },
    yoast_head_json: ogImages(service?.yoast_head_json),
  }));

/** Portfolio cards: title, slug, category filter, subtitle and "large" card image. */
export const trimPortfolioProjects = (projects: WPList) =>
  (projects || []).map((project) => ({
    id: project?.id,
    slug: project?.slug,
    title: { rendered: project?.title?.rendered ?? '' },
    portfolio_category: project?.portfolio_category,
    acf: pick(project?.acf, ['title', 'subtitle']),
    _embedded: { 'wp:featuredmedia': featuredMedia(project, true) },
  }));

const PORTFOLIO_DETAIL_ACF = [
  'subtitle', 'hero_subtitle', 'main_title', 'short_desc', 'challenge', 'solution',
  'service_1', 'service_2', 'service_3', 'service_4', 'service_5',
  'language', 'duration', 'system', 'live_site_url',
  'result_1', 'result_2', 'result_3', 'result_4',
] as const;

/** Portfolio detail page: the ACF fields it renders and the featured image. */
export const trimPortfolioDetail = (project: any) => ({
  id: project?.id,
  title: { rendered: project?.title?.rendered ?? '' },
  acf: pick(project?.acf, PORTFOLIO_DETAIL_ACF),
  _embedded: { 'wp:featuredmedia': featuredMedia(project) },
});

/** "Related works" cards on the portfolio detail page. */
export const trimPortfolioRelated = (projects: WPList) =>
  (projects || []).map((project) => ({
    id: project?.id,
    slug: project?.slug,
    title: { rendered: project?.title?.rendered ?? '' },
    _embedded: { 'wp:featuredmedia': featuredMedia(project) },
  }));

/** Blog cards: title, excerpt, date, author name, featured image and categories. */
export const trimPostCards = (posts: WPList) =>
  (posts || []).map((post) => ({
    id: post?.id,
    slug: post?.slug,
    date: post?.date,
    title: { rendered: post?.title?.rendered ?? '' },
    excerpt: { rendered: post?.excerpt?.rendered ?? '' },
    _embedded: {
      author: (post?._embedded?.author || []).map((a: any) => ({ name: a?.name })),
      'wp:featuredmedia': featuredMedia(post),
      'wp:term': [
        (post?._embedded?.['wp:term']?.[0] || []).map((t: any) => pick(t, ['id', 'name', 'slug', 'taxonomy'])),
      ],
    },
  }));

/** Portfolio category filter buttons. */
export const trimPortfolioCategories = (categories: WPList) =>
  (categories || []).map((category) => ({ id: category?.id, name: category?.name }));

/** ProjectGallery: typed as ProjectGalleryItem, so the shape is checked by TypeScript. */
export const trimProjectGallery = (items: WPList): ProjectGalleryItem[] =>
  (items || []).map((item) => ({
    id: item?.id,
    slug: item?.slug,
    title: { rendered: item?.title?.rendered ?? '' },
    acf: {
      short_description: item?.acf?.short_description,
      related_service_page: item?.acf?.related_service_page,
      related_service: item?.acf?.related_service,
      live_website: item?.acf?.live_website,
    },
    yoast_head_json: ogImages(item?.yoast_head_json),
    _embedded: {
      'wp:featuredmedia': featuredMedia(item),
      'acf:post': Array.isArray(item?._embedded?.['acf:post'])
        ? item._embedded['acf:post'].map(
            (post: any): EmbeddedServicePost => ({
              id: post?.id,
              slug: post?.slug,
              type: post?.type,
              link: post?.link,
              title: { rendered: post?.title?.rendered ?? '' },
              featured_media: post?.featured_media,
            })
          )
        : undefined,
    },
  }));

/** Products (PMS section): only the pms_* fields of the home ACF group. */
export const trimProducts = (products: any) =>
  products ? pick(products, Object.keys(products).filter((key) => key.startsWith('pms_'))) : products;

const AWARDS_FIELDS = [
  'section_tag', 'section_title', 'highlight_text', 'awards_label', 'awards_count',
  'card1_title', 'card1_year', 'card2_title', 'card2_year',
  'card3_title', 'card3_year', 'card4_title', 'card4_year',
  'awards_media',
] as const;

/** Awards section fields of the home ACF group. */
export const trimAwards = (awards: any) => (awards ? pick(awards, AWARDS_FIELDS) : awards);

/** CTABottomSection fields of the home ACF group. */
export const trimCta = (cta: any) => (cta ? pick(cta, CTA_FIELDS) : cta);

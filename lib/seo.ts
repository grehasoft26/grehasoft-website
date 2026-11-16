import type { Metadata } from 'next';

const DEFAULT_SITE_URL = 'https://grehasoft.com';

// Hosts that must never become canonical or social-sharing URLs: the WordPress
// CMS and the temporary Hostinger staging/preview domains.
const BLOCKED_SITE_HOSTS = [/^cms\./i, /\.hostingersite\.com$/i];

/** Origin from NEXT_PUBLIC_SITE_URL, falling back to production for missing, invalid or blocked values. */
export function resolveSiteUrl(value: string | undefined = process.env.NEXT_PUBLIC_SITE_URL): string {
  const configured = value?.trim();
  if (!configured) return DEFAULT_SITE_URL;

  try {
    const url = new URL(configured);
    if (url.protocol !== 'https:' || BLOCKED_SITE_HOSTS.some((host) => host.test(url.hostname))) {
      console.warn(`[SEO] Ignoring NEXT_PUBLIC_SITE_URL "${configured}"; using ${DEFAULT_SITE_URL}.`);
      return DEFAULT_SITE_URL;
    }
    return url.origin;
  } catch {
    console.warn(`[SEO] Invalid NEXT_PUBLIC_SITE_URL "${configured}"; using ${DEFAULT_SITE_URL}.`);
    return DEFAULT_SITE_URL;
  }
}

/** Production origin used for every canonical, og:url, sitemap and JSON-LD URL. No trailing slash. */
export const SITE_URL = resolveSiteUrl();

/**
 * Normalizes a route path the way the site serves it: no query or hash,
 * single slashes, lowercase, and no trailing slash (except the homepage).
 */
export function canonicalPath(path: string): string {
  const pathname = (path || '/').split(/[?#]/)[0];
  return `/${pathname.split('/').filter(Boolean).join('/')}`.toLowerCase();
}

/** Absolute production URL for a route path. */
export function absoluteUrl(path: string = '/'): string {
  const normalized = canonicalPath(path);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
};

/** Decodes the HTML entities WordPress puts in rendered titles and excerpts. */
export function decodeEntities(text: string): string {
  return (text || '').replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return ENTITIES[entity.toLowerCase()] ?? match;
  });
}

/** Plain-text summary of an HTML fragment, cut at a word boundary. */
export function plainTextExcerpt(html: string, maxLength = 160): string {
  const text = decodeEntities((html || '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > maxLength * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.–-]+$/, '')}…`;
}

interface YoastImage {
  url?: string;
  width?: number;
  height?: number;
}

interface PageSeoOptions {
  /** Route path of the page; becomes the canonical and og:url. */
  path: string;
  /** yoast_head_json of the WordPress object, when there is one. */
  yoast?: any;
  fallbackTitle?: string;
  fallbackDescription?: string;
  /** Open Graph title when it differs from the page title and Yoast has none. */
  fallbackOgTitle?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

const text = (value: unknown) => (typeof value === 'string' && value.trim() ? value.trim() : undefined);

/**
 * Builds page metadata from Yoast fields. Yoast keeps ownership of titles,
 * descriptions and images; the canonical and og:url are always generated from
 * the route on the production domain (Yoast omits the canonical while WordPress
 * is noindex, and its og_url points at the CMS host for some content types).
 * Robots directives are deliberately not set here.
 */
export function buildPageMetadata({
  path,
  yoast,
  fallbackTitle,
  fallbackDescription,
  fallbackOgTitle,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageSeoOptions): Metadata {
  const url = absoluteUrl(path);
  const title = text(yoast?.title) ?? text(fallbackTitle);
  const description = text(yoast?.description) ?? text(fallbackDescription);
  const images = (Array.isArray(yoast?.og_image) ? (yoast.og_image as YoastImage[]) : [])
    .filter((img) => text(img?.url))
    .map((img) => ({ url: img.url as string, width: img.width, height: img.height }));

  const ogTitle = text(yoast?.og_title) ?? text(fallbackOgTitle) ?? title;
  const ogDescription = text(yoast?.og_description) ?? description;
  const twitterTitle = text(yoast?.twitter_title) ?? ogTitle;
  const twitterDescription = text(yoast?.twitter_description) ?? ogDescription;

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      ...(ogTitle ? { title: ogTitle } : {}),
      ...(ogDescription ? { description: ogDescription } : {}),
      ...(images.length ? { images } : {}),
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      ...(twitterTitle ? { title: twitterTitle } : {}),
      ...(twitterDescription ? { description: twitterDescription } : {}),
      ...(images.length ? { images: images.map((img) => img.url) } : {}),
    },
  };
}

/**
 * Clears URL metadata inherited from a parent layout, for child routes that
 * must not claim the parent's canonical or og:url.
 */
export const CLEAR_INHERITED_URL_METADATA: Metadata = {
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList JSON-LD with production URLs; consecutive duplicate URLs are collapsed. */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const unique = items.filter(
    (item, index) => index === 0 || canonicalPath(item.path) !== canonicalPath(items[index - 1].path)
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: unique.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: decodeEntities(item.name).trim(),
      item: absoluteUrl(item.path),
    })),
  };
}

/** Serializes JSON-LD for a script tag, escaping `<` as recommended by the Next.js JSON-LD guide. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

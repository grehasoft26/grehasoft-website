// WordPress stores many links as absolute URLs on the production or temporary
// domains; keep them on the current site. Exact host match only, so client
// sites and other subdomains (cms., api.) are left untouched.
const SITE_HOSTS = new Set([
  'grehasoft.com',
  'www.grehasoft.com',
  'mediumpurple-jackal-917517.hostingersite.com',
]);

// Legacy paths that no longer exist, mapped to their current routes.
// Mirrored by permanent redirects in next.config.js.
const LEGACY_PATHS: Record<string, string> = {
  '/contact': '/contact-us',
  '/branding': '/branding-and-graphic-design',
  '/branding/logo-design': '/logo-design',
  '/branding/packages': '/branding-packages',
  '/branding/business-cards': '/business-card-design',
  '/branding/ui-ux': '/ui-ux-design',
  '/youtube': '/youtube-marketing',
  '/about-us/awards-and-recognitions': '/awards-and-recognitions',
  '/website-development/static-website': '/static-html-websites',
};

/**
 * Normalizes a CMS link for use in an href: site URLs become relative paths,
 * trailing slashes are dropped and legacy paths are mapped to current routes.
 * Anything else (external URLs, mailto:, tel:, #anchors) is returned unchanged.
 */
export function toInternalHref(href: string): string {
  if (!href) return href;

  let path = href;
  try {
    const url = new URL(href);
    if (!SITE_HOSTS.has(url.hostname)) return href;
    path = `${url.pathname}${url.search}${url.hash}`;
  } catch {
    // Not an absolute URL: only plain paths are normalized below.
    if (!href.startsWith('/') || href.startsWith('//')) return href;
  }

  const match = path.match(/^([^?#]*)(.*)$/);
  let pathname = match?.[1] || '/';
  const rest = match?.[2] || '';

  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');
  pathname = LEGACY_PATHS[pathname] || pathname;

  return `${pathname}${rest}`;
}

/**
 * Builds the path of a service page from its ACF slugs, using only non-empty
 * segments (slugs may be empty or carry their own leading/trailing slashes).
 */
export function servicePath(
  parentSlug?: string,
  customSlug?: string,
  fallbackSlug?: string
): string {
  const segments = [parentSlug, customSlug || fallbackSlug]
    .flatMap((s) => (s || '').split('/'))
    .filter(Boolean);

  return `/${segments.join('/')}`;
}

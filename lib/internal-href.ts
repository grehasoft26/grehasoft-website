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
  '/website-development1': '/website-development',
  '/seo1': '/seo',
  '/digital-marketing1': '/digital-marketing',
  '/mobile-app-development1': '/mobile-app-development',
  '/software-web-apps1': '/software-web-apps',
  '/technology-services1': '/technology-services',
  '/ecommerce-development1': '/ecommerce-development',
  '/social-media-marketing1': '/social-media-marketing',
  '/website-design1': '/website-design',
  '/branding-and-design1': '/branding-and-graphic-design',
  '/ui-ux-design1': '/ui-ux-design',
  '/wordpress-development1': '/wordpress-development',
  '/logo-design1': '/logo-design',
  '/custom-development': '/software-web-apps',
  '/services/software-programming': '/software-web-apps',
  '/services/visiting-cards-letter-heads': '/business-card-design',
  '/branding-packages1': '/branding-packages',
  '/brochure-flyer-design1': '/brochure-flyer-design',
  '/business-card-design1': '/business-card-design',
  '/landing-page-design1': '/landing-page-design',
  '/search-engine-marketing1': '/search-engine-marketing',
  '/ecommerce-development1/custom': '/ecommerce-development',
  '/ecommerce-development1/shopify': '/shopify-development',
  '/ecommerce-development1/woocommerce': '/woocommerce-development',
  '/mobile-app-development1/android': '/android-app-development',
  '/mobile-app-development1/bussiness-apps': '/business-app-development',
  '/mobile-app-development1/hybrid': '/hybrid-app-development',
  '/mobile-app-development1/ios': '/ios-app-development',
  '/mobile-app-development1/pwa': '/progressive-web-app-development',
  '/mobile-app-development1/utility-apps': '/utility-app-development',
  '/social-media-marketing1/facebook1': '/facebook',
  '/social-media-marketing1/instagram1': '/instagram',
  '/social-media-marketing1/linkedin1': '/linkedin',
  '/social-media-marketing1/pinterest1': '/pinterest',
  '/social-media-marketing1/twitter1': '/twitter',
  '/social-media-marketing1/youtube': '/youtube-marketing',
  '/software-web-apps1/api-integrations': '/api-development-integration',
  '/software-web-apps1/booking': '/booking-system-development',
  '/software-web-apps1/business-tools': '/custom-business-software-development',
  '/software-web-apps1/crm': '/crm-software-development',
  '/software-web-apps1/custom-web': '/custom-web-app-development',
  '/software-web-apps1/erp': '/erp-software-development',
  '/software-web-apps1/inventory': '/inventory-management-software',
  '/software-web-apps1/lms': '/lms-development',
  '/technology-services1/automation1': '/workflow-automation',
  '/technology-services1/backend1': '/backend-development',
  '/technology-services1/databases1': '/database-development',
  '/technology-services1/frontend1': '/frontend-development',
  '/technology-services1/server-cloud1': '/server-cloud-solutions',
  '/website-development1/static-website': '/static-html-websites',
  '/website-redesign': '/website-redesign-services',
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

/** Category terms of a WordPress post (from `_embed`), in WordPress order. */
export function postCategories(post: any): { name: string; slug: string }[] {
  const terms = post?._embedded?.['wp:term']?.[0];
  return Array.isArray(terms) ? terms.filter((t: any) => t?.taxonomy === 'category' && t?.slug) : [];
}

/** Frontend URL of a blog post; its first category is the canonical one. */
export function postPath(post: any): string {
  const category = postCategories(post)[0]?.slug || 'uncategorized';
  return `/blogs/${category}/${post?.slug}`;
}

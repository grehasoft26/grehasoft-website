import type { MetadataRoute } from 'next';
import { getAllPostsStrict, getPortfolioStrict, getServicesListStrict } from '@/lib/backend-api';
import { postPath, servicePath } from '@/lib/internal-href';
import { absoluteUrl } from '@/lib/seo';

// Regenerated at most hourly. Data comes from the strict helpers, so a backend
// failure fails the regeneration (the last good sitemap keeps being served)
// instead of publishing a truncated sitemap.
export const revalidate = 3600;

// Public frontend pages that are not driven by a CMS list. Legacy routes,
// redirects, placeholder content, 404s and blog category archives (client-rendered,
// noindex in Yoast) are deliberately not listed.
const STATIC_PATHS = [
  '/',
  '/about-us',
  '/awards-and-recognitions',
  '/brand-story',
  '/careers',
  '/contact-us',
  '/services',
  '/lead-generation-services',
  '/ai-marketing-service-agency',
  '/portfolio',
  '/products',
  '/products/pms',
  '/blogs',
  '/privacy',
  '/terms',
  '/sitemap',
];

/** WordPress *_gmt timestamps carry no zone suffix; they are UTC. */
const gmtDate = (value: unknown) =>
  typeof value === 'string' && value ? new Date(`${value}Z`) : undefined;

const published = (item: any) => !item?.status || item.status === 'publish';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, projects, posts] = await Promise.all([
    getServicesListStrict(),
    getPortfolioStrict(),
    getAllPostsStrict(),
  ]);

  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({ url: absoluteUrl(path) }));

  const dynamicEntries = [
    ...services
      .filter(published)
      .map((s: any) => ({ path: servicePath(s.acf?.parent_slug, s.acf?.custom_slug, s.slug), modified: s.modified_gmt })),
    ...projects
      .filter((p: any) => published(p) && p?.slug)
      .map((p: any) => ({ path: `/portfolio/${p.slug}`, modified: p.modified_gmt })),
    ...posts
      .filter((p: any) => published(p) && p?.slug)
      .map((p: any) => ({ path: postPath(p), modified: p.modified_gmt })),
  ];

  for (const { path, modified } of dynamicEntries) {
    if (path === '/') continue; // a CMS item without a usable slug
    const lastModified = gmtDate(modified);
    entries.push({ url: absoluteUrl(path), ...(lastModified ? { lastModified } : {}) });
  }

  // One entry per URL (absoluteUrl already lowercases and strips query strings).
  const seen = new Set<string>();
  return entries.filter((entry) => !seen.has(entry.url) && seen.add(entry.url));
}

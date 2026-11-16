import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

// The page is a client component, so its metadata lives here.
// Title and description approved in Phase 4 (PHASE_4_METADATA_DRAFTS.md).
export const metadata: Metadata = buildPageMetadata({
  path: '/sitemap',
  fallbackTitle: 'Site Directory | Grehasoft',
  fallbackOgTitle: 'Grehasoft Site Directory',
  fallbackDescription:
    "A directory of Grehasoft's pages: company pages, web design, eCommerce, branding, software, mobile apps, marketing, technology and legal pages.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

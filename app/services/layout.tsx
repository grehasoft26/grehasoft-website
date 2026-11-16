import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

// The page is a client component, so its metadata lives here.
// Title and description approved in Phase 4 (PHASE_4_METADATA_DRAFTS.md).
export const metadata: Metadata = buildPageMetadata({
  path: '/services',
  fallbackTitle: 'Our Services - IT & Creative Solutions | Grehasoft',
  fallbackOgTitle: 'Our Services - IT & Creative Solutions',
  fallbackDescription:
    'Grehasoft combines custom software, digital marketing and visual branding services. Explore the full directory of our IT and creative services.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

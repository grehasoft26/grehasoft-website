import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

// The page is a client component, so its metadata lives here.
// Wording approved in Phase 4 (PHASE_4_METADATA_DRAFTS.md), kept exactly as drafted.
// AWAITING POLICY-OWNER CONFIRMATION before this is published to production.
export const metadata: Metadata = buildPageMetadata({
  path: '/terms',
  fallbackTitle: 'Terms of Service | Grehasoft',
  fallbackOgTitle: 'Terms of Service',
  fallbackDescription:
    'The rules and regulations for using the Grehasoft website, covering intellectual property, restrictions, your content, warranties and liability.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

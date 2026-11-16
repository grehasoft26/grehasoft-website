import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

// The page is a client component, so its metadata lives here.
// Wording approved in Phase 4 (PHASE_4_METADATA_DRAFTS.md), kept exactly as drafted.
// AWAITING POLICY-OWNER CONFIRMATION before this is published to production.
export const metadata: Metadata = buildPageMetadata({
  path: '/privacy',
  fallbackTitle: 'Privacy Policy | Grehasoft',
  fallbackOgTitle: 'Privacy Policy',
  fallbackDescription:
    'How Grehasoft collects, uses and safeguards your data when you visit our website or use our services, and how to contact us about this policy.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

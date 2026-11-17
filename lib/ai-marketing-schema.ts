import type { AiMarketingContent } from '@/types/ai-marketing';
import { leadGenerationContent } from '@/lib/content/lead-generation';
import { absoluteUrl, buildBreadcrumbJsonLd } from '@/lib/seo';

// The organisation identity already used by the Lead Generation Service schema,
// so both service pages point to the same provider.
const PROVIDER = leadGenerationContent.seo.service;

/**
 * Builds the Service + FAQPage + BreadcrumbList JSON-LD graph for the AI Marketing
 * page from the same content the page renders, so structured data matches the
 * visible copy (FAQ answers word for word).
 */
export function buildAiMarketingJsonLd(content: AiMarketingContent) {
  const { seo, faq } = content;
  const pageUrl = absoluteUrl(seo.path);
  const serviceId = `${pageUrl}#service`;

  // Mirrors the visible hero breadcrumb: Home > {breadcrumbLabel}.
  const { '@context': _context, ...breadcrumb } = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: seo.breadcrumbLabel, path: seo.path },
  ]);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...breadcrumb, '@id': `${pageUrl}#breadcrumb` },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: seo.service.name,
        url: pageUrl,
        description: seo.service.description,
        serviceType: seo.service.serviceType,
        provider: {
          '@type': 'Organization',
          '@id': PROVIDER.providerId,
          name: PROVIDER.providerName,
          url: PROVIDER.providerUrl,
        },
        areaServed: seo.service.areaServed.map((area) => ({
          '@type': area.type,
          name: area.name,
        })),
        mainEntityOfPage: { '@id': pageUrl },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        isPartOf: { '@id': pageUrl },
        about: { '@id': serviceId },
        mainEntity: faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

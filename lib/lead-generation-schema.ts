import type { LeadGenerationContent } from '@/types/lead-generation';

/**
 * Builds the Service + FAQPage JSON-LD graph from the same content the page renders,
 * so structured data always matches the visible copy word for word.
 */
export function buildLeadGenerationJsonLd(content: LeadGenerationContent) {
  const { seo, solutions, faq } = content;
  const pageUrl = seo.canonical;
  const serviceId = `${pageUrl}#service`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': serviceId,
        name: seo.service.name,
        alternateName: seo.service.alternateName,
        serviceType: seo.service.serviceType,
        url: pageUrl,
        description: seo.service.description,
        provider: {
          '@type': 'Organization',
          '@id': seo.service.providerId,
          name: seo.service.providerName,
          url: seo.service.providerUrl,
        },
        areaServed: seo.service.areaServed.map((area) => ({
          '@type': area.type,
          name: area.name,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: solutions.title,
          itemListElement: solutions.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: item.schemaName,
              description: item.schemaDescription,
            },
          })),
        },
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

/** Serialises JSON-LD for a script tag, escaping `<` as recommended by the Next.js JSON-LD guide. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

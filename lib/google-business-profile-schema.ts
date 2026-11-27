import type { GbpAreaServed, GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { buildBreadcrumbJsonLd } from '@/lib/seo';

export { serializeJsonLd } from '@/lib/seo';

/** A place object for typed areas, plain text for the rest ("International markets"). */
function areaServed(area: GbpAreaServed) {
  return typeof area === 'string' ? area : { '@type': area.type, name: area.name };
}

/**
 * Builds the Service + BreadcrumbList + FAQPage JSON-LD graph from the same content the page renders,
 * so structured data always matches the visible copy word for word.
 *
 * The Service node is the one in the content document. Its URLs use the canonical without a trailing
 * slash, and its provider points at the homepage's LocalBusiness node (the only Grehasoft business node
 * defined on the site). There is deliberately no OfferCatalog: the document does not define one.
 */
export function buildGoogleBusinessProfileJsonLd(content: GoogleBusinessProfileContent) {
  const { seo, faq } = content;
  const pageUrl = seo.canonical;
  const serviceId = `${pageUrl}#service`;

  // Mirrors the visible hero breadcrumb: Home > {breadcrumbLabel}.
  const { '@context': _context, ...breadcrumb } = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: seo.breadcrumbLabel, path: new URL(pageUrl).pathname },
  ]);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': serviceId,
        name: seo.service.name,
        serviceType: seo.service.serviceType,
        url: pageUrl,
        description: seo.service.description,
        provider: {
          '@type': 'LocalBusiness',
          '@id': seo.service.providerId,
          name: seo.service.providerName,
          url: seo.service.providerUrl,
        },
        areaServed: seo.service.areaServed.map(areaServed),
      },
      { ...breadcrumb, '@id': `${pageUrl}#breadcrumb` },
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

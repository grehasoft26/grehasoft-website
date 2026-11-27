import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, CENTRED_HEADING_CLASS } from './headingStyles';
import GbpFaqAccordion from './GbpFaqAccordion';

interface Props {
  faq: GoogleBusinessProfileContent['faq'];
}

/**
 * GBP FAQ: centred gradient heading and the WordPress questions as a single-expansion accordion
 * (GbpFaqAccordion, native <details>) in two columns from 1024px (in order, left to right then down).
 *
 * The visible questions and answers are the same `faq.items` the FAQPage JSON-LD is built from, so
 * the schema always matches the page. In the two-column layout every closed card has the height of a
 * two-line question, so rows line up; cards align to the top of their row, so opening one does not
 * stretch its neighbour.
 */
export default function GbpFaqSection({ faq }: Props) {
  return (
    <section aria-labelledby="gbp-faq-title" className="bg-white py-8 md:py-10">
      <div className="container-custom">
        <h2 id="gbp-faq-title" className={`${CENTRED_HEADING_CLASS} text-center`} style={BRAND_HEADING_GRADIENT}>
          {faq.title}
        </h2>

        <div className="mt-6 grid items-start gap-2.5 md:mt-7 lg:grid-cols-2 lg:gap-3">
          <GbpFaqAccordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}

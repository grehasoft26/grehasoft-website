import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, CENTRED_HEADING_CLASS, EYEBROW_CLASS } from './headingStyles';
import ServicesCarousel from './ServicesCarousel';

interface Props {
  services: GoogleBusinessProfileContent['services'];
}

/**
 * The service areas as an auto-sliding carousel (ServicesCarousel), in their WordPress order. Every card,
 * including those with compliance statements (verification, reviews, multi-location eligibility), is
 * in the server HTML and reachable with the arrows, dots, keyboard or swipe.
 */
export default function ProfileServicesSection({ services }: Props) {
  return (
    <section
      id={services.id}
      aria-labelledby="gbp-services-title"
      className="scroll-mt-20 bg-gray-50 py-9 md:py-11"
    >
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-4xl text-center md:mb-7">
          <p className={`mb-3 ${EYEBROW_CLASS}`}>{services.eyebrow}</p>
          <h2 id="gbp-services-title" className={CENTRED_HEADING_CLASS} style={BRAND_HEADING_GRADIENT}>
            {services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[56rem] text-base leading-relaxed text-gray-600 md:text-lg">
            {services.intro}
          </p>
        </div>

        <ServicesCarousel items={services.items} label={services.title} />
      </div>
    </section>
  );
}

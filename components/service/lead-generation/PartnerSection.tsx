import type { LeadGenerationContent } from '@/types/lead-generation';
import SectionHeading from './SectionHeading';
import { leadIcons } from './icons';

interface Props {
  partner: LeadGenerationContent['partner'];
}

export default function PartnerSection({ partner }: Props) {
  return (
    <section aria-labelledby="lead-partner-title" className="section-padding bg-white">
      <div className="container-custom grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="lead-partner-title" eyebrow={partner.eyebrow} title={partner.title} />

          <div className="mt-8 max-w-[65ch] space-y-6 text-lg leading-relaxed text-gray-600">
            {partner.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className="divide-y divide-gray-200 rounded-box-lg border border-gray-100 bg-gray-50 lg:col-span-5">
          {partner.cards.map((card) => {
            const Icon = leadIcons[card.icon];

            return (
              <li key={card.title} className="flex gap-5 p-7 md:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-box-sm border border-gray-100 bg-white text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-dark">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

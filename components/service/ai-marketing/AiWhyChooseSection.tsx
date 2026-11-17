import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';
import { aiIcons } from './icons';

interface Props {
  whyChoose: AiMarketingContent['whyChoose'];
}

export default function AiWhyChooseSection({ whyChoose }: Props) {
  return (
    <section aria-labelledby="ai-why-title" className="section-padding bg-gray-50">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="ai-why-title" eyebrow={whyChoose.eyebrow} title={whyChoose.title} intro={whyChoose.intro} />
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {whyChoose.points.map((point) => {
            const Icon = aiIcons[point.icon];

            return (
              <li key={point.title} className="rounded-box-lg bg-white p-7 shadow-[0_4px_20px_rgba(5,4,74,0.05)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-[color-mix(in_oklab,var(--color-accent),black_32%)]">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-dark">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import type { LeadGenerationContent } from '@/types/lead-generation';
import SectionHeading from './SectionHeading';
import { leadIcons } from './icons';

interface Props {
  whyChoose: LeadGenerationContent['whyChoose'];
}

export default function WhyChooseSection({ whyChoose }: Props) {
  return (
    <section aria-labelledby="lead-why-title" className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading
          id="lead-why-title"
          title={whyChoose.title}
          intro={whyChoose.intro}
          className="lg:col-span-5"
        />

        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {whyChoose.points.map((point) => {
            const Icon = leadIcons[point.icon];

            return (
              <li key={point.title} className="border-t-2 border-primary pt-6">
                <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-dark">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{point.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

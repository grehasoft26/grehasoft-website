import type { LeadGenerationContent } from '@/types/lead-generation';
import RichText from './RichText';
import SectionHeading from './SectionHeading';
import SolutionsAccordion from './SolutionsAccordion';

interface Props {
  solutions: LeadGenerationContent['solutions'];
}

export default function SolutionsSection({ solutions }: Props) {
  return (
    <section
      id={solutions.id}
      aria-labelledby="lead-solutions-title"
      className="section-padding scroll-mt-20 bg-gray-50"
    >
      <div className="container-custom">
        <SectionHeading
          id="lead-solutions-title"
          eyebrow={solutions.eyebrow}
          title={solutions.title}
          intro={<RichText value={solutions.intro} />}
          className="mb-14 max-w-3xl"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Accordion first in the source; on desktop the closing card moves to the left column. */}
          <div className="lg:order-2 lg:col-span-8">
            <SolutionsAccordion items={solutions.items} />
          </div>

          <div className="lg:order-1 lg:col-span-4">
            <div className="rounded-[2.5rem] bg-dark p-8 md:p-12 lg:sticky lg:top-28 lg:p-10">
              <p className="text-lg leading-relaxed text-white/80">
                <RichText
                  value={solutions.closing}
                  linkClassName="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

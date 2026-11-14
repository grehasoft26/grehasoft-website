import type { LeadGenerationContent } from '@/types/lead-generation';
import SectionHeading from './SectionHeading';

interface Props {
  process: LeadGenerationContent['process'];
}

export default function ProcessSection({ process }: Props) {
  return (
    <section aria-labelledby="lead-process-title" className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="lead-process-title"
            eyebrow={process.eyebrow}
            title={process.title}
            intro={process.intro}
            className="lg:sticky lg:top-28"
          />
        </div>

        <ol className="lg:col-span-7">
          {process.steps.map((step, i) => {
            const number = i + 1;
            const isLast = number === process.steps.length;

            return (
              <li key={step.title} className={`relative pl-20 ${isLast ? '' : 'pb-10 md:pb-12'}`}>
                {isLast ? null : (
                  <span aria-hidden="true" className="absolute top-16 bottom-2 left-7 w-px bg-gray-200" />
                )}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-box-sm bg-primary text-lg font-black text-white"
                >
                  {String(number).padStart(2, '0')}
                </span>

                <h3 className="pt-3 text-xl font-bold leading-snug text-dark">
                  <span className="sr-only">
                    {process.stepLabel} {number}:{' '}
                  </span>
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

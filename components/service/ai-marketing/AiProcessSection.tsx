import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';

interface Props {
  process: AiMarketingContent['process'];
}

export default function AiProcessSection({ process }: Props) {
  return (
    <section aria-labelledby="ai-process-title" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="ai-process-title" eyebrow={process.eyebrow} title={process.title} intro={process.intro} />
        </div>

        {/* Vertical timeline on small screens, five columns joined by a line on large screens. */}
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 lg:block"
          />
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span
                aria-hidden="true"
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-white ring-8 ring-white"
              >
                {i + 1}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-lg font-bold leading-snug text-dark">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {process.stepLabel} {i + 1} —
                  </span>{' '}
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

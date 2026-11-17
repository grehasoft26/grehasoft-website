import { Lightbulb } from 'lucide-react';
import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';

interface Props {
  contentCreation: AiMarketingContent['contentCreation'];
}

export default function ContentCreationSection({ contentCreation }: Props) {
  return (
    <section aria-labelledby="ai-content-title" className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="ai-content-title" eyebrow={contentCreation.eyebrow} title={contentCreation.title} />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
              {contentCreation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="space-y-6">
            {contentCreation.items.map((item, i) => (
              <li key={item.title} className="rounded-box-lg border-l-4 border-primary bg-gray-50 p-7 md:p-8">
                <p aria-hidden="true" className="text-sm font-black tracking-widest text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-dark">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 flex gap-4 rounded-box-lg bg-accent/10 p-6 text-base font-medium leading-relaxed text-dark md:p-7">
            <Lightbulb aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[color-mix(in_oklab,var(--color-accent),black_32%)]" />
            <span>{contentCreation.closing}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

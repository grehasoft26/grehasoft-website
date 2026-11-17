import { Plus } from 'lucide-react';
import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';

interface Props {
  faq: AiMarketingContent['faq'];
}

export default function AiFaqSection({ faq }: Props) {
  return (
    <section aria-labelledby="ai-faq-title" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="ai-faq-title" eyebrow={faq.eyebrow} title={faq.title} />
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold leading-snug text-dark md:text-lg">{item.question}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-primary transition-colors group-open:border-primary group-open:bg-primary group-open:text-white motion-reduce:transition-none">
                  <Plus
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  />
                </span>
              </summary>
              <p className="pb-6 pr-14 leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

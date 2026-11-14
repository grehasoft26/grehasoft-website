import { ChevronDown } from 'lucide-react';
import type { CtaLink, LeadGenerationContent } from '@/types/lead-generation';

interface Props {
  faq: LeadGenerationContent['faq'];
  cta: CtaLink;
}

export default function FaqSection({ faq, cta }: Props) {
  return (
    <section aria-labelledby="lead-faq-title" className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2
              id="lead-faq-title"
              className="text-3xl font-black leading-tight text-dark md:text-4xl"
            >
              {faq.title}
            </h2>
            <a href={cta.href} className="btn-primary mt-8">
              {cta.label}
            </a>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-box-sm border border-gray-100 bg-gray-50 transition-colors open:border-primary/20 open:bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-box-sm p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold leading-snug text-dark md:text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

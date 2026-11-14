import { CircleCheck } from 'lucide-react';
import type { LeadGenerationContent } from '@/types/lead-generation';
import SectionHeading from './SectionHeading';

interface Props {
  overseas: LeadGenerationContent['overseas'];
}

export default function OverseasSection({ overseas }: Props) {
  return (
    <section aria-labelledby="lead-overseas-title" className="section-padding bg-gray-50">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="lead-overseas-title" title={overseas.title} />
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-gray-600">{overseas.body}</p>
        </div>

        <div className="rounded-box-lg border border-gray-100 bg-white p-8 md:p-10 lg:col-span-5">
          <h3 className="mb-6 text-lg font-bold text-dark">{overseas.commitmentsTitle}</h3>
          <ul className="space-y-4">
            {overseas.commitments.map((commitment) => (
              <li key={commitment} className="flex items-center gap-3 font-medium text-dark">
                <CircleCheck
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-[color-mix(in_oklab,var(--color-accent),black_32%)]"
                />
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

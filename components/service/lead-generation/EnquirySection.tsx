import Link from 'next/link';
import type { FlexibleEnquiryContent } from '@/types/lead-generation';
import EnquiryForm from './EnquiryForm';
import SectionHeading from './SectionHeading';

interface Props {
  enquiry: FlexibleEnquiryContent;
}

export default function EnquirySection({ enquiry }: Props) {
  return (
    <section
      id={enquiry.id}
      aria-labelledby="lead-enquiry-title"
      className="section-padding scroll-mt-20 bg-gray-50"
    >
      <div className="container-custom">
        <div className="relative grid gap-10 overflow-hidden rounded-box-lg bg-dark p-4 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
          />

          <div className="relative px-2 pt-4 sm:p-0">
            <SectionHeading
              id="lead-enquiry-title"
              tone="dark"
              eyebrow={enquiry.eyebrow}
              title={enquiry.title}
            />

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
              {enquiry.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-5">
              <a href={enquiry.primaryCta.href} className="btn-primary py-4 text-base">
                {enquiry.primaryCta.label}
              </a>
              <Link
                href={enquiry.secondaryCta.href}
                className="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                {enquiry.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div
            id={enquiry.formId}
            className="relative scroll-mt-28 rounded-box-lg bg-white p-5 sm:p-8"
          >
            <EnquiryForm content={enquiry.form} />
          </div>
        </div>
      </div>
    </section>
  );
}

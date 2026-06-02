'use client';

import { ChevronDown } from 'lucide-react';

interface Props {
  acf: any;
}

export default function FAQSection({ acf }: Props) {

  const faq = acf?.branding?.faq_section || {};

  const faqs = [
    {
      q: faq?.faq1_question,
      a: faq?.faq1_answer,
    },
    {
      q: faq?.faq2_question,
      a: faq?.faq2_answer,
    },
    {
      q: faq?.faq3_question,
      a: faq?.faq3_answer,
    },
    {
      q: faq?.faq4_question,
      a: faq?.faq4_answer,
    },
    {
      q: faq?.faq5_question,
      a: faq?.faq5_answer,
    },
    {
      q: faq?.faq6_question,
      a: faq?.faq6_answer,
    },
    {
      q: faq?.faq7_question,
      a: faq?.faq7_answer,
    },
    {
      q: faq?.faq8_question,
      a: faq?.faq8_answer,
    },
    {
      q: faq?.faq9_question,
      a: faq?.faq9_answer,
    },
    {
      q: faq?.faq10_question,
      a: faq?.faq10_answer,
    },
    {
      q: faq?.faq11_question,
      a: faq?.faq11_answer,
    },
    {
      q: faq?.faq12_question,
      a: faq?.faq12_answer,
    },
  ].filter((item) => item.q && item.a);

  if (!faq?.faq_title) return null;

  return (

    <section className="section-padding bg-gray-50">

      <div className="container-custom">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-1 text-center md:text-left">

            {faq?.faq_tag && (

              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {faq.faq_tag}
              </span>

            )}

            <h2 className="text-4xl font-black text-dark mb-6 leading-tight">
              {faq.faq_title}
            </h2>

            {faq?.faq_description && (

              <p className="text-gray-500 mb-8">
                {faq.faq_description}
              </p>

            )}

            {/* TIP BOX */}
            <div className="p-8 bg-dark rounded-3xl text-white">

              {faq?.faq_tip_tag && (

                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">
                  {faq.faq_tip_tag}
                </p>

              )}

              {faq?.faq_tip_text && (

                <p className="text-lg italic font-medium">
                  "{faq.faq_tip_text}"
                </p>

              )}

            </div>

          </div>

          {/* FAQ LIST */}
          <div className="lg:col-span-2 space-y-4">

            {faqs.map((item, i) => (

              <details
                key={i}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >

                <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-primary transition-colors">

                  <span className="text-sm md:text-base pr-4">
                    {item.q}
                  </span>

                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" />

                </summary>

                <div className="px-6 pb-6 text-gray-500 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-sm">
                  {item.a}
                </div>

              </details>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}
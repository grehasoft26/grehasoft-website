'use client';

import { ArrowRight } from 'lucide-react';

interface Props {
  acf: any;
}

export default function SeoCaseStudiesSection({ acf }: Props) {
  const data =
    acf?.digital_marketing?.seo_case_studies || {};

  if (!data?.section_title) return null;

  const caseStudies = [
    {
      image: data.case_study_1_image,
      title: data.case_study_1_title,
      description: data.case_study_1_description,
    },
    {
      image: data.case_study_2_image,
      title: data.case_study_2_title,
      description: data.case_study_2_description,
    },
    {
      image: data.case_study_3_image,
      title: data.case_study_3_title,
      description: data.case_study_3_description,
    },
  ].filter((item) => item.title);

  return (
    <section className="section-padding bg-white border-b border-gray-100">
      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto mb-20">

          {data?.section_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {data.section_tag}
            </span>
          )}

          <h2 className="text-4xl font-black text-dark mb-6">
            {data.section_title}
          </h2>

          {data?.section_description && (
            <p className="text-gray-600">
              {data.section_description}
            </p>
          )}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">

          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between"
            >
              <div>

                {cs.image && (
                  <div className="aspect-[4/4] rounded-[1.0rem] overflow-hidden mb-6 bg-gray-50 border border-gray-100  relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-black text-dark leading-snug group-hover:text-primary transition-colors duration-300">
                  {cs.title}
                </h3>

                {cs.description && (
                  <p className="text-gray-500 mt-4 text-xs md:text-sm leading-relaxed font-sans font-medium">
                    {cs.description}
                  </p>
                )}

              </div>

              {/* <div className="pt-6 border-t border-gray-100/60 mt-6 flex items-center gap-2 text-primary group-hover:text-dark font-bold text-xs transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div> */}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
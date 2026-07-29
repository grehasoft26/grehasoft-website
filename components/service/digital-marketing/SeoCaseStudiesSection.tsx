'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { commonSwiperConfig } from '@/lib/swiperConfig';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  acf: any;
}

export default function SeoCaseStudiesSection({ acf }: Props) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const data = acf?.digital_marketing?.seo_case_studies || {};

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

  // Graceful Empty State Handling
  if (caseStudies.length === 0) {
    return (
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom text-center py-16">
          <p className="text-gray-500 font-medium">No SEO Case Studies Available.</p>
        </div>
      </section>
    );
  }

  // Duplicate slides for smooth infinite loop if we have very few projects
  let slides = [...caseStudies];
  if (caseStudies.length > 0) {
    while (slides.length < 6) {
      slides = [...slides, ...caseStudies];
    }
  }

  return (
    <section className="section-padding bg-white border-b border-gray-100 overflow-hidden">
      <div className="container-custom relative">

        {/* HEADER */}
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

        {/* SWIPER CAROUSEL WRAPPER */}
        <div className="relative w-full group/swiper px-0 lg:px-14">
          
          {/* Left Arrow Button */}
          <button
            ref={setPrevEl}
            aria-label="Previous slide"
            className="absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Slider Container */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            {...commonSwiperConfig}
            navigation={{
              prevEl,
              nextEl,
            }}
            pagination={{
              el: '.seo-case-studies-pagination-dots',
              clickable: true,
            }}
            onInit={(swiper: SwiperClass) => {
              // Bind custom arrow refs to Swiper navigation safely
              const navParams = swiper.params.navigation;
              if (navParams && typeof navParams === 'object') {
                const customNav = navParams as { prevEl?: unknown; nextEl?: unknown };
                customNav.prevEl = prevEl;
                customNav.nextEl = nextEl;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="w-full"
          >
            {slides.map((cs, i) => (
              <SwiperSlide key={`${cs.title}-${i}`} className="!h-auto flex">
                <div className="group flex flex-col justify-between w-full h-full">
                  <div>
                    {cs.image && (
                      <div className="aspect-[4/4] rounded-[1.0rem] overflow-hidden mb-6 bg-gray-50 border border-gray-100 relative">
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
                      <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed font-sans font-medium">
                        {cs.description}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow Button */}
          <button
            ref={setNextEl}
            aria-label="Next slide"
            className="absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

        </div>

        {/* Clickable Pagination Dots below Swiper container */}
        <div className="seo-case-studies-pagination-dots flex justify-center items-center gap-1.5 mt-8 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:mx-1.5 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:cursor-pointer" />

      </div>
    </section>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { ProjectGalleryItem } from '@/types/wordpress';
import { commonSwiperConfig } from '@/lib/swiperConfig';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectGalleryProps {
  projects: ProjectGalleryItem[];
}

interface ServiceRelation {
  slug: string;
  title: string;
}

/**
 * Resolves the project image based on the following priority:
 * 1. Embedded featured media source URL
 * 2. Yoast SEO Open Graph image URL
 * 3. Local fallback image path
 */
function getProjectImage(project: ProjectGalleryItem): string {
  const featuredMediaUrl = project._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featuredMediaUrl) {
    return featuredMediaUrl;
  }

  const yoastOgImageUrl = project.yoast_head_json?.og_image?.[0]?.url;
  if (yoastOgImageUrl) {
    return yoastOgImageUrl;
  }

  return '/images/fallback.jpg';
}

/**
 * Resolves the related service slug and title from either:
 * - Direct Post Object returned in ACF
 * - Embedded post object list matched by post ID
 */
function resolveServiceRelation(project: ProjectGalleryItem): ServiceRelation | null {
  const acf = project.acf || {};
  const relatedId = acf.related_service_page || acf.related_service;
  if (!relatedId) {
    return null;
  }

  if (typeof relatedId === 'object' && relatedId !== null) {
    return {
      slug: relatedId.post_name,
      title: relatedId.post_title,
    };
  }

  if (typeof relatedId === 'number' || typeof relatedId === 'string') {
    const targetId = Number(relatedId);
    const embeddedPosts = project._embedded?.['acf:post'] || [];
    const found = embeddedPosts.find((post) => post.id === targetId);
    if (found) {
      return {
        slug: found.slug,
        title: found.title?.rendered?.replace(/<[^>]+>/g, '') || 'Service',
      };
    }
  }

  return null;
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  // Graceful Empty State Handling
  if (!projects || projects.length === 0) {
    return (
      <section className="section-padding bg-white border-t border-b border-gray-100">
        <div className="container-custom text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-dark mb-2">No Projects Found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            No projects available.
          </p>
        </div>
      </section>
    );
  }

  // Duplicate slides for smooth infinite loop if we have very few projects
  let slides = [...projects];
  if (projects.length > 0) {
    while (slides.length < 6) {
      slides = [...slides, ...projects];
    }
  }

  return (
    <section className="section-padding bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="container-custom relative">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Project Gallery
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Custom <span className="text-primary">Client Solutions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Explore the diversity of projects we have successfully designed, built, and launched.
          </p>
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
              el: '.project-gallery-pagination-dots',
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
            {slides.map((project, index) => {
              const imageSrc = getProjectImage(project);
              const relation = resolveServiceRelation(project);
              const acf = project.acf || {};
              const titleText = project.title?.rendered?.replace(/<[^>]+>/g, '') || 'Untitled Project';

              return (
                <SwiperSlide key={`${project.id}-${index}`} className="!h-auto flex">
                  <div className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full w-full">
                    {/* IMAGE CONTAINER */}
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-50">
                      <Image
                        src={imageSrc}
                        alt={titleText}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain  transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* CONTENT AREA */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* SERVICE CATEGORY BADGE */}
                      {relation && (
                        <div className="mb-3 self-start">
                          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                            {relation.title}
                          </span>
                        </div>
                      )}

                      {/* TITLE */}
                      <h3 className="text-xl font-bold text-dark mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                        {relation ? (
                          <Link
                            href={`/${relation.slug}`}
                            className="hover:underline decoration-primary decoration-2 underline-offset-4"
                          >
                            {titleText}
                          </Link>
                        ) : (
                          titleText
                        )}
                      </h3>

                      {/* SHORT DESCRIPTION */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {acf.short_description || 'No description available for this project.'}
                      </p>

                      {/* VIEW SERVICE LINK */}
                      {(relation || acf.live_website) && (
                        <div className="mt-4 pt-4 border-t border-gray-150 flex items-center justify-between">
                          {relation ? (
                            <Link
                              href={`/${relation.slug}`}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300 group/link"
                            >
                              View Service
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                          ) : (
                            <span />
                          )}

                          {acf.live_website && (
                            <a
                              href={acf.live_website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-primary transition-colors duration-300"
                            >
                              Visit Website ↗
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
        <div className="project-gallery-pagination-dots flex justify-center items-center gap-1.5 mt-8 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:mx-1.5 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:cursor-pointer" />
      </div>
    </section>
  );
}

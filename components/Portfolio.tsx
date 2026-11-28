"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Plus,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import { getPortfolio, getPortfolioCategories } from "@/lib/backend-api";

export default function Portfolio({
  isFullPage = false,
  showFilters = true,
  initialProjects = [],
  initialCategories = [],
  headingSize = 'default',
}: {
  /** 'home': the homepage section heading scale (28 / 36 / 40px). Other pages keep the default. */
  headingSize?: 'default' | 'home';
  isFullPage?: boolean;
  showFilters?: boolean;
  initialProjects?: any[];
  initialCategories?: any[];
}) {
  const [projects, setProjects] = useState<any[]>(initialProjects);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [activeCategory, setActiveCategory] =
    useState("All");

  const isHome = headingSize === 'home';
  const [loading, setLoading] = useState(initialProjects.length === 0);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  // FETCH DATA
  useEffect(() => {
    if (initialProjects && initialProjects.length > 0) {
      setProjects(initialProjects);
      setCategories(initialCategories);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const [portfolioData, categoryData] = await Promise.all([
          getPortfolio(),
          getPortfolioCategories()
        ]);

        console.log("Portfolio Data:", portfolioData);
        console.log("Category Data:", categoryData);

        setProjects(portfolioData);
        setCategories(categoryData);
      } catch (error) {
        console.error("❌ Portfolio Error:", error);
        setProjects([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialProjects, initialCategories]);

  // LOADING
  if (loading) {
    return (
      <section className="section-padding text-center">
        <p>Loading portfolio...</p>
      </section>
    );
  }

  // NO DATA
  if (!projects || projects.length === 0) {
    return (
      <section className="section-padding text-center">
        <p>No portfolio items found</p>
      </section>
    );
  }

  // TITLE
  const getTitle = (item: any) => {
    if (
      item?.title?.rendered &&
      item.title.rendered !== ""
    ) {
      return item.title.rendered.replace(
        /<[^>]+>/g,
        ""
      );
    }

    if (
      item?.acf?.title &&
      item.acf.title !== ""
    ) {
      return item.acf.title;
    }

    return "No Title";
  };

  // FILTERED PROJECTS
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) =>
          item.portfolio_category?.includes(
            Number(activeCategory)
          )
        );

  return (
    <section className={isFullPage ? "py-10 md:py-12 bg-gray-50" : "section-padding bg-gray-50"}>
      {/* The full portfolio page uses tighter vertical padding (40 / 48px); the homepage keeps section-padding. */}
      <div className="container-custom">
        {/* HEADER */}
        {/* Homepage instance: a two-row grid. Row 1 holds the eyebrow + H2 on the left and the controls on the right,
            bottom-aligned with the H2 (from lg); row 2 is the description spanning the full width so it can sit on two
            balanced lines. DOM order (heading, description, controls) keeps the natural stacking on smaller screens,
            with the controls right-aligned as before. Other pages keep the original header. */}
        <div
          className={
            isHome
              ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-10 mb-9 md:mb-10"
              : "flex flex-col md:flex-row items-end justify-between mb-8 md:mb-10 gap-8"
          }
        >
          {isHome ? (
            <>
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-5">
                <Sparkles aria-hidden="true" className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  Our Portfolio
                </span>
              </p>

              {/* Homepage H2 scale (28 / 36 / 40px) with the brand gradient. */}
              <h2
                className="w-fit max-w-full text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight leading-[1.15] pb-1 text-balance bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Featured Case Studies
              </h2>
            </div>

            <p className="lg:col-span-2 mt-2.5 sm:mt-3 max-w-[44rem] lg:max-w-[64rem] text-base md:text-lg leading-relaxed text-text-gray text-pretty lg:text-balance">
              Explore selected projects across SEO, CRM, LMS, mobile applications, website development and <span className="whitespace-nowrap">e-commerce</span>. Each case study highlights the business requirement, solution and digital work delivered by the Grehasoft team.
            </p>
            </>
          ) : (
            <div className="max-w-2xl xl:max-w-none">
              {/* Full portfolio page: from xl the heading may use the width beside the arrows (one line at 48px). */}
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                 our portfolio
                </span>
              </div>

              <h2
                className="w-fit max-w-full text-4xl md:text-5xl font-bold leading-[1.15] pb-1.5 text-balance bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Case Studies of Our Successful Projects
              </h2>
            </div>
          )}

          <div
            className={
              isHome
                ? "flex items-center gap-4 justify-self-end mt-6 lg:mt-0 lg:col-start-2 lg:row-start-1 lg:self-end"
                : "flex items-center gap-4"
            }
          >
            {!isFullPage && (
              <Link
                href="/portfolio"
                className="btn-primary flex items-center"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}

            {/* ARROWS */}
      <div className="flex items-center gap-2 md:gap-3">
  <button
    ref={setPrevEl}
    className="
      portfolio-prev
      w-10 h-10
      md:w-12 md:h-12
      rounded-full
      border border-gray-300
      flex items-center justify-center
      hover:bg-primary
      hover:text-white
      transition-all duration-300
      bg-white
    "
  >
    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
  </button>

  <button
    ref={setNextEl}
    className="
      portfolio-next
      w-10 h-10
      md:w-12 md:h-12
      rounded-full
      border border-gray-300
      flex items-center justify-center
      hover:bg-primary
      hover:text-white
      transition-all duration-300
      bg-white
    "
  >
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
  </button>
</div>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        {showFilters && (
          <div className="flex flex-wrap gap-4 mb-8 md:mb-10">
            <button
              onClick={() =>
                setActiveCategory("All")
              }
              className={`
                px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  activeCategory === "All"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-dark hover:bg-primary hover:text-white"
                }
              `}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategory(category.id)
                }
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-white border border-gray-200 text-dark hover:bg-primary hover:text-white"
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* SWIPER */}
        <Swiper
          modules={isFullPage ? [Navigation, Grid] : [Navigation]}
          grid={isFullPage ? { rows: 2, fill: "row" } : undefined}
          navigation={{
            prevEl,
            nextEl,
          }}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevEl;
            swiper.params.navigation.nextEl = nextEl;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={30}
          watchOverflow={true}
          loop={isFullPage ? filteredProjects.length > 6 : filteredProjects.length > 3}
          className={isFullPage ? "h-[550px] sm:h-[630px] lg:h-[710px] w-full" : "w-full"}
          breakpoints={
            isFullPage
              ? {
                  320: {
                    slidesPerView: 1,
                    grid: { rows: 2, fill: "row" },
                  },
                  768: {
                    slidesPerView: 2,
                    grid: { rows: 2, fill: "row" },
                  },
                  1200: {
                    slidesPerView: 3,
                    grid: { rows: 2, fill: "row" },
                  },
                }
              : {
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }
          }
        >
          {filteredProjects.map((item, index) => {
            const media =
              item._embedded?.[
                "wp:featuredmedia"
              ]?.[0];

            // Cards render well under 1024px wide, so the "large" size is enough
            const image =
              media?.media_details?.sizes?.large?.source_url ||
              media?.source_url ||
              "/images/fallback.jpg";

            const acf = item.acf || {};

            return (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`
                    group
                    relative
                    rounded-box-lg
                    overflow-hidden
                    shadow-xl
                    ${isFullPage ? "h-full" : "h-[260px] sm:h-[300px] lg:h-[340px]"}
                    bg-white
                    border border-gray-100
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  `}
                >
                  {/* IMAGE */}
                  <Image
                    src={image}
                    alt={item.title.rendered}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 400px"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                     bg-primary/50 md:bg-primary/80

                      opacity-100
                      md:opacity-0
                      md:group-hover:opacity-100

                      transition duration-500
                      flex flex-col items-center justify-center
                      text-center p-6

                      z-20
                    "
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                      <Plus className="text-primary w-6 h-6" />
                    </div>

                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="
                        inline-block
                        bg-white
                        text-primary
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        relative
                        z-50
                        pointer-events-auto
                      "
                    >
                      View Case Study
                    </Link>
                  </div>

                  {/* BOTTOM */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-10">
                    <span className="text-green-400 text-[11px] uppercase tracking-[2px] font-semibold">
                      {acf.subtitle ||
                        "Web Development"}
                    </span>

                    <h3 className="text-xl font-bold text-white leading-tight mt-1 drop-shadow-lg">
                      {getTitle(item)}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
import axiosInstance from "@/lib/axios";

export default function Portfolio({
  isFullPage = false,
  showFilters = true,
  initialProjects = [],
  initialCategories = [],
}: {
  isFullPage?: boolean;
  showFilters?: boolean;
  initialProjects?: any[];
  initialCategories?: any[];
}) {
  const [projects, setProjects] = useState<any[]>(initialProjects);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [activeCategory, setActiveCategory] =
    useState("All");

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

        const [portfolioRes, categoryRes] = await Promise.allSettled([
          axiosInstance.get('/wp-json/wp/v2/portfolio?_embed'),
          axiosInstance.get('/wp-json/wp/v2/portfolio_category')
        ]);

        const portfolioData = portfolioRes.status === 'fulfilled' ? portfolioRes.value.data : [];
        const categoryData = categoryRes.status === 'fulfilled' ? categoryRes.value.data : [];

        console.log("Portfolio Data:", portfolioData);
        console.log("Category Data:", categoryData);

        setProjects(Array.isArray(portfolioData) ? portfolioData : []);
        setCategories(Array.isArray(categoryData) ? categoryData : []);
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
               our portfolio
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Case Studies of Our{" "}
              <span className="text-primary">
                Successful Projects
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
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
          <div className="flex flex-wrap gap-4 mb-14">
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
            const image =
              item._embedded?.[
                "wp:featuredmedia"
              ]?.[0]?.source_url ||
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
                    rounded-[2rem]
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
                  <img
                    src={image}
                    alt={item.title.rendered}
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
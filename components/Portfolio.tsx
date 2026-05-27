"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function Portfolio({ isFullPage = false, showFilters = true }) {

  const [projects, setProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  useEffect(() => {

    const fetchData = async () => {

      try {

        // PORTFOLIO
        const portfolioRes = await fetch(
          `${API}/portfolio?_embed`
        );

        const portfolioData = await portfolioRes.json();

        // CATEGORIES
        const categoryRes = await fetch(
          `${API}/portfolio_category`
        );

        const categoryData = await categoryRes.json();

        console.log("✅ Portfolio:", portfolioData);
        console.log("✅ Categories:", categoryData);

        setProjects(portfolioData);
        setCategories(categoryData);

      } catch (error) {

        console.error("❌ Error:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, []);

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

      return item.title.rendered.replace(/<[^>]+>/g, "");

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

            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 block">
              OUR PORTFOLIO
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Case Studies of Our{" "}
              <span className="text-primary">
                Successful Projects
              </span>
            </h2>

          </div>

          {!isFullPage && (

            <Link
              href="/portfolio"
              className="btn-primary flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

          )}

        </div>

        {/* CATEGORY FILTERS */}
        {showFilters && (
        <div className="flex flex-wrap gap-4 mb-14">

          <button
            onClick={() => setActiveCategory("All")}
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

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((item, index) => {

            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]
                ?.source_url ||
              "/images/fallback.jpg";

            const acf = item.acf || {};

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  relative
                  rounded-[2rem]
                  overflow-hidden
                  shadow-xl
                  h-[260px]
                  sm:h-[300px]
                  lg:h-[340px]
                  bg-white
                  border border-gray-100
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
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

                {/* HOVER */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">

                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">

                    <Plus className="text-primary w-6 h-6" />

                  </div>

                  <span className="text-white/80 text-xs uppercase tracking-widest">

                    {acf.subtitle || "Web Development"}

                  </span>

                  <h3 className="text-xl font-bold text-white mt-2 mb-4">

                    {getTitle(item)}

                  </h3>

                  <div
  className="
    opacity-100 translate-y-0
    md:opacity-0 md:translate-y-4
    md:group-hover:opacity-100
    md:group-hover:translate-y-0
    transition-all duration-300
  "
>
  <Link
    href={`/portfolio/${item.slug}`}
    className="bg-white text-primary px-5 py-2 rounded-full text-sm font-semibold inline-block"
  >
    View Case Study
  </Link>
</div>

                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">

                  <span className="text-green-400 text-[11px] uppercase tracking-[2px] font-semibold">

                    {acf.subtitle || "Web Development"}

                  </span>

                  <h3 className="text-xl font-bold text-white leading-tight mt-1 drop-shadow-lg">

                    {getTitle(item)}

                  </h3>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}
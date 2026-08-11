"use client";

import { useEffect, useState, useRef } from "react";
import axios from "@/lib/axios";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyScrollServices({ initialServices = [] }: { initialServices?: any[] }) {
  const [services, setServices] = useState<any[]>(initialServices);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(initialServices.length === 0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.06, 0.1, 0]
  );

  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setServices(initialServices);
      setLoading(false);
      setError(false);
      return;
    }

    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "/wp-json/wp/v2/ourservices?_embed"
        );
        setServices(Array.isArray(res.data) ? res.data : []);
        setError(false);
      } catch (err) {
        console.error("Error loading services in StickyScrollServices:", err);
        setServices([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [initialServices]);

  // Sync scroll restoration index on load
  useEffect(() => {
    if (!services || services.length === 0) return;
    const currentScroll = scrollYProgress.get();
    const initialIndex = Math.max(0, Math.min(
      services.length - 1,
      Math.floor(currentScroll * services.length)
    ));
    setActiveIndex(initialIndex);
  }, [services, scrollYProgress]);

  useEffect(() => {
    if (!services || services.length === 0) return;
    return scrollYProgress.on("change", (latest) => {
      const index = Math.max(0, Math.min(
        services.length - 1,
        Math.floor(latest * services.length)
      ));
      setActiveIndex(index);
    });
  }, [scrollYProgress, services]);



  const service = services[activeIndex] || {};
  const acf = service?.acf || {};

  const image =
    service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    service?.yoast_head_json?.og_image?.[0]?.url ||
    "";

  return (
    
   <div ref={containerRef} className="h-[220vh] xl:h-[300vh]">
       
    <div
  className="
    sticky
    top-0
    min-h-[700px]
    xl:h-screen
    flex
    items-start
    xl:items-center
    pt-16
    xl:pt-0
    bg-white
    overflow-hidden
  "
>
        {loading ? (
          <div className="container-custom relative z-10 w-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
              <p className="text-gray-500 font-semibold">Loading Services...</p>
            </div>
          </div>
        ) : error || services.length === 0 ? (
          <div className="container-custom relative z-10 w-full flex items-center justify-center">
            <p className="text-text-gray font-semibold">Services currently unavailable</p>
          </div>
        ) : (
          <>
            {/* MAIN CONTAINER */}
            <div className="container-custom relative z-10 w-full">
          
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            {/* LEFT */}
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-accent text-xs sm:text-sm mb-4">
                SERVICE {acf?.service_tag}
              </span>

              <h3
                className="
                  text-[24px]
                  sm:text-[34px]
                  md:text-[44px]
                  lg:text-[54px]

                  font-bold
                  text-[#0b0b45]

                  mb-5
                  leading-[1.05]

                  break-words
                "
              >
               <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> {acf?.hero_title}</span>
              </h3>

              <p
                className="
                  text-gray-600
                  text-base
                  sm:text-lg

                  leading-relaxed

                  mb-8
                  max-w-2xl
                "
              >
                {acf?.description}
              </p>

              <a
                href={acf?.button_link || "#"}
                className="
                  inline-flex items-center gap-2

                  px-6 sm:px-8
                  py-3 sm:py-4

                  rounded-full
                  text-white
                  text-sm sm:text-base
                  font-medium

                  bg-primary

                  transition-all duration-300

                  hover:bg-green-600
                  hover:scale-105
                  hover:shadow-lg hover:shadow-blue-200
                "
              >
                {acf?.button_text || "Get Started"} →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end relative z-10">
              <img
  key={image}
  src={image}
  alt={acf?.hero_title || "Service"}
  className="
    w-[240px]
    sm:w-[320px]
    md:w-[420px]
    lg:w-[500px]
    max-w-full
    h-auto
  "
/>
            </div>
          </div>
        </div>

        {/* BACKGROUND TEXT */}
 <motion.h1
  style={{ opacity: bgOpacity }}
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2

    text-[20px]
    sm:text-[50px]
    md:text-[70px]
    lg:text-[90px]
    xl:text-[130px]

    font-bold
    text-[#0b0b45]

    tracking-[2px]
    sm:tracking-[6px]
    md:tracking-[10px]

    blur-[1px]
    pointer-events-none
    select-none
    z-0
    text-center
    leading-none
  "
>
  <span>{acf?.background_text?.split(" ")[0]}</span>

  <br className="md:block xl:hidden" />

  <span>{acf?.background_text?.split(" ").slice(1).join(" ")}</span>
</motion.h1>
          </>
        )}
      </div>
    </div>
  );
}
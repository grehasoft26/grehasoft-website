"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyScrollServices() {
  const [services, setServices] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get(
        "https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/ourservices?_embed"
      );
      setServices(res.data);
    };

    fetchServices();
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        services.length - 1,
        Math.floor(latest * services.length)
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress, services]);

  const service = services[activeIndex] || {};
  const acf = service?.acf || {};

  const image =
    service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    service?.yoast_head_json?.og_image?.[0]?.url ||
    "";

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.06, 0.1, 0]
  );

  return (
    <div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center bg-white overflow-hidden">
        
        {/* MAIN CONTAINER */}
        <div className="container-custom relative z-10 w-full">
          
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            {/* LEFT */}
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-accent text-xs sm:text-sm mb-4">
                SERVICE {acf?.service_tag}
              </span>

              <h2
                className="
                  text-[34px]
                  sm:text-[44px]
                  md:text-[54px]
                  lg:text-[64px]

                  font-bold
                  text-[#0b0b45]

                  mb-5
                  leading-[1.05]

                  break-words
                "
              >
                {acf?.hero_title}
              </h2>

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

                  bg-black

                  transition-all duration-300

                  hover:bg-blue-600
                  hover:scale-105
                  hover:shadow-lg hover:shadow-blue-200
                "
              >
                {acf?.button_text || "Get Started"} →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end relative z-10">
              {image && (
                <motion.img
                  key={image}
                  src={image}
                  className="
                    w-[240px]
                    sm:w-[320px]
                    md:w-[420px]
                    lg:w-[500px]

                    max-w-full
                    h-auto
                  "
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: [0, -15, 0],
                    rotate: [0, 1.5, -1.5, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              )}
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
            md:text-[80px]
            lg:text-[100px]
            xl:text-[130px]

            font-bold
            text-[#0b0b45]

            tracking-[2px]
            sm:tracking-[6px]
            md:tracking-[12px]

            blur-[1px]

            whitespace-pre-line
            lg:whitespace-nowrap

            pointer-events-none
            select-none

            z-0

            px-4
            text-center
            leading-none

            max-w-full
            overflow-hidden
          "
        >
          {typeof window !== "undefined" && window.innerWidth < 768
            ? acf?.background_text?.replace(" ", "\n")
            : acf?.background_text}
        </motion.h1>
      </div>
    </div>
  );
}
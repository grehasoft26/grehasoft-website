"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useScroll , useTransform} from "framer-motion";

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
        "https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/services?_embed"
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
    service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const bgOpacity = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [0.06, 0.1, 0] // 👈 smooth fade in & out
);

  return (
    <div ref={containerRef} className="h-[300vh]">
      
      <div className="sticky top-0 h-screen flex items-center bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm mb-4">
              SERVICE {acf?.service_tag}
            </span>

            <h2 className="text-6xl font-bold text-[#0b0b45] mb-4 leading-tight">
              {acf?.hero_title}
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              {acf?.description}
            </p>

            <a
              href={acf?.button_link || "#"}
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-full
                text-white font-medium
                
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
          <div className="flex justify-center">
            {image && (
              <motion.img
  key={image}
  src={image}
  className="w-[420px]"

  initial={{ opacity: 0, y: 40 }}
  animate={{
    opacity: 1,
    y: [0, -15, 0],        // 👈 floating up & down
    rotate: [0, 1.5, -1.5, 0], // 👈 subtle tilt
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

        {/* BACKGROUND TEXT */}
       <motion.h1
  style={{ opacity: bgOpacity }}
  className="
    absolute top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 

    text-[60px] md:text-[130px]   /* perfect size */
    font-bold 
    text-[#0b0b45]

    tracking-widest               /* spaced letters */
    blur-[1px]                    /* soft watermark */

    whitespace-nowrap
    pointer-events-none
    select-none
    z-0
  "
>
  {acf?.background_text}
</motion.h1>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState, useRef } from "react";
import { getOurServices } from "@/lib/backend-api";
import { motion, useScroll, useTransform, MotionConfig } from "framer-motion";
import SectionDivider from "./SectionDivider";

// Scroll distance given to each service while the panel is pinned
const SCROLL_PER_SERVICE_VH = 30;
const transition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };
const offsetY = 16;

// Image deck: springs keep card movement smooth when scrolling reverses mid-transition
const cardSpring = { type: "spring" as const, stiffness: 220, damping: 30, mass: 0.9 };

// Position of an image card relative to the active one (0 = front, 1-2 = peeking behind)
const getCardLayer = (depth: number) => {
  if (depth < 0) return { opacity: 0, y: 48, scale: 1.02, shade: 0 };
  if (depth === 0) return { opacity: 1, y: 0, scale: 1, shade: 0 };
  if (depth === 1) return { opacity: 1, y: -24, scale: 0.92, shade: 0.35 };
  if (depth === 2) return { opacity: 1, y: -44, scale: 0.84, shade: 0.55 };
  return { opacity: 0, y: -60, scale: 0.78, shade: 0.7 };
};

const getImage = (service: any) =>
  service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
  service?.yoast_head_json?.og_image?.[0]?.url ||
  "";

function ServiceText({ acf }: { acf: any }) {
  return (
    <>
      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-accent text-xs sm:text-sm mb-4">
        SERVICE {acf?.service_tag}
      </span>

      <h3
        className="
          text-[22px]
          sm:text-[32px]
          md:text-[42px]
          lg:text-[48px]

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
          line-clamp-4
          max-lg:[@media(max-height:680px)]:line-clamp-3
          lg:line-clamp-none
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
    </>
  );
}

function BackgroundText({ text }: { text?: string }) {
  return (
    <>
      <span>{text?.split(" ")[0]}</span>

      <br className="md:block xl:hidden" />

      <span>{text?.split(" ").slice(1).join(" ")}</span>
    </>
  );
}

const backgroundTextClasses = `
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
`;

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
        const res = await getOurServices();
        setServices(Array.isArray(res) ? res : []);
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

  // Map scroll progress to a service; also syncs the index on load / scroll restoration
  useEffect(() => {
    if (!services || services.length === 0) return;
    const toIndex = (progress: number) =>
      Math.max(0, Math.min(services.length - 1, Math.floor(progress * services.length)));

    setActiveIndex(toIndex(scrollYProgress.get()));
    return scrollYProgress.on("change", (latest) => {
      setActiveIndex(toIndex(latest));
    });
  }, [scrollYProgress, services]);

  const hasServices = !loading && !error && services.length > 0;
  const acf = services[activeIndex]?.acf || {};

  // Pinned scroll length scales with the number of services
  const pinHeight = `calc(100vh + ${services.length * SCROLL_PER_SERVICE_VH}vh)`;

  return (
    // reducedMotion="user" drops the slide for reduced-motion users at animation time,
    // so server and client render identical markup
    <MotionConfig reducedMotion="user">
    <div
      ref={containerRef}
      className="relative h-[var(--pin-height)]"
      style={hasServices ? ({ "--pin-height": pinHeight } as React.CSSProperties) : undefined}
    >
      {loading ? (
        <div className="container-custom relative z-10 w-full flex items-center justify-center min-h-[400px] py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-gray-500 font-semibold">Loading Services...</p>
          </div>
        </div>
      ) : !hasServices ? (
        <div className="container-custom relative z-10 w-full flex items-center justify-center min-h-[400px] py-12">
          <p className="text-text-gray font-semibold">Services currently unavailable</p>
        </div>
      ) : (
        <>
          {/* Pinned panel, services crossfade with scroll progress.
              Below lg the deck keeps its 3:2 size and the text takes the height left above it. */}
          <div className="flex sticky top-0 h-svh lg:h-screen items-stretch lg:items-center pt-20 pb-6 lg:py-8 bg-white overflow-hidden">
            <div className="container-custom relative z-10 w-full h-full lg:h-auto">
              <div className="grid h-full lg:h-auto grid-cols-1 grid-rows-[minmax(0,1fr)_auto] lg:grid-rows-none lg:grid-cols-[5fr_6fr] gap-5 lg:gap-10 xl:gap-12 lg:items-center">
                {/* LEFT: all text blocks share one grid cell so height never jumps */}
                <div className="relative z-10 grid min-h-0">
                  {services.map((item, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="[grid-area:1/1] self-center"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : offsetY }}
                        transition={transition}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                        aria-hidden={!isActive}
                        inert={!isActive}
                      >
                        <ServiceText acf={item?.acf || {}} />
                      </motion.div>
                    );
                  })}
                </div>

                {/* RIGHT: layered image deck; images stay mounted, avoiding reload flashes.
                    On short phones the top edge is clipped so the peeking cards can't cover the CTA. */}
                <div className="relative z-10 grid grid-rows-[minmax(0,1fr)] lg:grid-rows-none w-full max-w-xl lg:max-w-none mx-auto min-h-0 pt-8 lg:pt-12 max-lg:[@media(max-height:680px)]:pt-0 max-lg:[@media(max-height:680px)]:[clip-path:inset(0_-48px_-48px_-48px)]">
                  {services.map((item, i) => {
                    const depth = i - activeIndex;
                    const layer = getCardLayer(depth);
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="[grid-area:1/1] relative origin-top min-h-0 pointer-events-none"
                        style={{ zIndex: depth < 0 ? services.length + 1 : services.length - depth }}
                        initial={false}
                        animate={{ opacity: layer.opacity, y: layer.y, scale: layer.scale }}
                        transition={cardSpring}
                        aria-hidden={depth !== 0}
                      >
                        <img
                          src={getImage(item)}
                          alt={item?.acf?.hero_title || "Service"}
                          loading="lazy"
                          className="
                            block
                            w-full
                            h-auto
                            aspect-[3/2]
                            max-h-[62vh]
                            object-cover
                            rounded-[20px]
                            shadow-xl
                          "
                        />
                        <motion.div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-[20px] bg-white pointer-events-none"
                          initial={false}
                          animate={{ opacity: layer.shade }}
                          transition={cardSpring}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* BACKGROUND TEXT */}
            <motion.h1
              aria-hidden="true"
              style={{ opacity: bgOpacity }}
              className={backgroundTextClasses}
            >
              <BackgroundText text={acf?.background_text} />
            </motion.h1>
          </div>
        </>
      )}

      <SectionDivider
        type="diagonal"
        color="#0753f6"
        height={30}
      />
    </div>
    </MotionConfig>
  );
}

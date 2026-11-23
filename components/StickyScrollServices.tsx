"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { getOurServices } from "@/lib/backend-api";
import { toInternalHref } from "@/lib/internal-href";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionConfig } from "motion/react";
import SectionDivider from "./SectionDivider";
import ServiceThumbnailRail from "./home/ServiceThumbnailRail";

/*
 * Home "Our Services" showcase.
 *  - md and up: the panel is pinned while the page scrolls through it; scroll progress picks the
 *    active service (image, text and thumbnail change together). lg+: image | divider rail | text;
 *    md: image, horizontal rail, text.
 *  - Below md: no pinning, the six services are stacked and fade in as they enter the viewport.
 * Both layouts are rendered and switched with CSS, so server and client markup always match.
 */

// Scroll distance given to each service while the panel is pinned
const SCROLL_PER_SERVICE_VH = 30;
const textTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };
const imageTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };
const offsetY = 16;

const getImage = (service: any) =>
  service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
  service?.yoast_head_json?.og_image?.[0]?.url ||
  "";

function ServiceTitle({ title }: { title?: string }) {
  return (
    <h3 className="mb-4 break-words text-[28px] font-bold leading-[1.08] text-[#0b0b45] sm:text-[34px] lg:text-[36px] xl:text-[44px]">
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-primary text-transparent">{title}</span>
    </h3>
  );
}

function ServiceText({ acf, clampOnShortTablets = false }: { acf: any; clampOnShortTablets?: boolean }) {
  return (
    <>
      {/* The tag badge only shows once a tag is set in WordPress (all are empty today). */}
      {acf?.service_tag && (
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs text-accent sm:text-sm">
          SERVICE {acf.service_tag}
        </span>
      )}

      <ServiceTitle title={acf?.hero_title} />

      <p
        className={`mb-7 text-base leading-relaxed text-[#444444] xl:text-[17px] ${
          clampOnShortTablets ? "max-lg:[@media(max-height:700px)]:line-clamp-5" : ""
        }`}
      >
        {acf?.description}
      </p>

      <a
        href={toInternalHref(acf?.button_link || "#")}
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

/** Fades a mobile service in once it scrolls into view. Only items below the fold on load are
 *  held, and only when JavaScript runs with motion allowed, so content is never left hidden. */
function RevealOnScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Hidden (desktop) or already on screen: show as is.
    const rect = el.getBoundingClientRect();
    if (rect.height === 0 || rect.top < window.innerHeight) return;

    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setHeld(false);
          observer?.disconnect();
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(el);
      setHeld(true);
    } catch {
      setHeld(false);
    }
    return () => observer?.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none ${
        held ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

export default function StickyScrollServices({ initialServices = [] }: { initialServices?: any[] }) {
  const [services, setServices] = useState<any[]>(initialServices);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(initialServices.length === 0);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rail progress: reaches thumbnail i exactly when service i becomes the midpoint of its scroll
  // segment, so the fill and the active thumbnail agree. Bound to the DOM, no React re-render.
  const count = services.length;
  const railFill = useTransform(scrollYProgress, (v) =>
    Math.min(1, Math.max(0, (v * count - 0.5) / Math.max(count - 1, 1))),
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

  // Thumbnail navigation: scroll the page to the middle of that service's scroll segment.
  const goToService = (index: number) => {
    const container = containerRef.current;
    if (!container || services.length === 0) return;
    const top = container.getBoundingClientRect().top + window.scrollY;
    const travel = container.offsetHeight - window.innerHeight;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // "instant", not "auto": <html> has scroll-smooth, which "auto" would inherit.
    window.scrollTo({ top: top + ((index + 0.5) / services.length) * travel, behavior: reduce ? "instant" : "smooth" });
  };

  const hasServices = !loading && !error && services.length > 0;

  // Pinned scroll length scales with the number of services (md and up only)
  const pinHeight = `calc(100vh + ${services.length * SCROLL_PER_SERVICE_VH}vh)`;

  const railServices = services.map((item, i) => ({
    key: item?.id ?? i,
    title: item?.acf?.hero_title || "Service",
    image: getImage(item),
  }));

  return (
    // reducedMotion="user" drops the slide/scale for reduced-motion users at animation time,
    // so server and client render identical markup
    <MotionConfig reducedMotion="user">
    <div
      ref={containerRef}
      className="relative md:h-[var(--pin-height)]"
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
          {/* ---------- md and up: pinned split showcase ---------- */}
          <div className="sticky top-0 flex h-svh items-stretch overflow-hidden bg-white pt-20 pb-6 max-md:hidden lg:h-screen lg:items-center lg:py-8">
            <div className="container-custom relative z-10 h-full w-full lg:h-auto">
              <div className="grid h-full grid-rows-[auto_auto_minmax(0,1fr)] gap-6 lg:h-auto lg:grid-cols-[minmax(0,1.3fr)_44px_minmax(0,1fr)] lg:grid-rows-none lg:items-center lg:gap-10 xl:gap-14">
                {/* Image stage: every image stays mounted and crossfades (no reload flashes). */}
                <div className="relative h-[38svh] w-full overflow-hidden rounded-[28px] bg-[#EEF1F8] shadow-[0_30px_60px_-36px_rgba(5,4,74,0.45)] ring-1 ring-[#05044A]/[0.06] lg:h-[clamp(320px,70vh,660px)]">
                  {services.map((item, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="absolute inset-0"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.04 }}
                        transition={imageTransition}
                        style={{ zIndex: isActive ? 2 : 1 }}
                        aria-hidden={!isActive}
                      >
                        <Image
                          src={getImage(item) || "/images/fallback.jpg"}
                          alt={item?.acf?.hero_title || "Service"}
                          fill
                          sizes="(max-width: 1023px) 92vw, 50vw"
                          className="object-cover"
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider rail with thumbnails: vertical on lg+, horizontal row on tablets */}
                <div className="lg:h-[clamp(320px,70vh,660px)] lg:py-2">
                  <ServiceThumbnailRail services={railServices} activeIndex={activeIndex} fill={railFill} onSelect={goToService} />
                </div>

                {/* Text: all blocks share one grid cell so height never jumps */}
                <div className="relative z-10 grid min-h-0">
                  {services.map((item, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="[grid-area:1/1] self-start lg:self-center"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : offsetY }}
                        transition={textTransition}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                        aria-hidden={!isActive}
                        inert={!isActive}
                      >
                        <ServiceText acf={item?.acf || {}} clampOnShortTablets />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ---------- below md: stacked services, no pinning ---------- */}
          <div className="container-custom space-y-14 bg-white py-14 md:hidden">
            {services.map((item, i) => (
              <RevealOnScroll key={item?.id ?? i}>
                <article>
                  <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden rounded-[22px] bg-[#EEF1F8] shadow-[0_24px_48px_-30px_rgba(5,4,74,0.45)] ring-1 ring-[#05044A]/[0.06]">
                    <Image
                      src={getImage(item) || "/images/fallback.jpg"}
                      alt={item?.acf?.hero_title || "Service"}
                      fill
                      sizes="92vw"
                      className="object-cover"
                    />
                  </div>
                  <ServiceText acf={item?.acf || {}} />
                </article>
              </RevealOnScroll>
            ))}
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

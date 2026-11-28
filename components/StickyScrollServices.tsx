"use client";

import { useEffect, useState, useRef, type TouchEvent } from "react";
import { getOurServices } from "@/lib/backend-api";
import { toInternalHref } from "@/lib/internal-href";
import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import SectionDivider from "./SectionDivider";
import ServiceThumbnailRail from "./home/ServiceThumbnailRail";
import styles from "./KochiIntroSection.module.css";

/*
 * Home "Our Services" showcase.
 *  - Natural-height responsive slider shared across desktop, tablet, and mobile.
 *  - Desktop (lg+): centered horizontal thumbnail navigation at the top, followed by a two-column
 *    layout (layered service image cards left, service content right).
 *  - Tablet (md): centered horizontal thumbnail navigation at the top, followed by image and text.
 *  - Mobile (< md): compact single-service slider (image → heading → description → CTA
 *    → horizontal circular thumbnail navigation) with left/right touch swipe support.
 *  - Shared 4000ms autoplay pauses outside viewport, on thumbnail rail hover, on keyboard focus
 *    within the rail (:focus-visible), and when prefers-reduced-motion is enabled.
 */

const AUTOPLAY_INTERVAL_MS = 4000;
const SWIPE_THRESHOLD_PX = 40;
const textTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };
const offsetY = 16;
const cardTransition = { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const };

/*
 * Layered card stage (adapted from the 21st.dev Circular Testimonials layout): the active service image is
 * the front card; the previous and next services sit behind it, shifted out to each side and up, scaled to
 * 85% with a slight 3D turn. Every other card is hidden behind the front one. Offsets are percentages of the
 * card itself, so the stack scales with the stage at every breakpoint. Reduced motion (MotionConfig "user")
 * drops the movement and keeps the opacity change.
 */
type CardPose = { x: string; y: string; scale: number; rotateY: number; opacity: number; zIndex: number };
function cardPose(index: number, active: number, count: number): CardPose {
  const offset = (index - active + count) % count;
  if (offset === 0) return { x: "0%", y: "0%", scale: 1, rotateY: 0, opacity: 1, zIndex: 3 };
  if (offset === 1) return { x: "16%", y: "-13%", scale: 0.85, rotateY: -14, opacity: 1, zIndex: 2 };
  if (offset === count - 1) return { x: "-16%", y: "-13%", scale: 0.85, rotateY: 14, opacity: 1, zIndex: 2 };
  return { x: "0%", y: "-6%", scale: 0.78, rotateY: 0, opacity: 0, zIndex: 1 };
}

const getImage = (service: any) =>
  service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
  service?.yoast_head_json?.og_image?.[0]?.url ||
  "";

function ServiceTitle({ title }: { title?: string }) {
  return (
    <h3 className="mb-3 break-words text-2xl font-bold leading-[1.1] sm:mb-4 sm:text-[1.75rem] lg:text-[2rem]">
      <span className={styles.gradientText}>{title}</span>
    </h3>
  );
}

function ServiceText({ acf }: { acf: any }) {
  return (
    <div className="flex h-full flex-col">
      {/* The tag badge only shows once a tag is set in WordPress (all are empty today). */}
      {acf?.service_tag && (
        <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs text-accent sm:mb-4 sm:py-2 sm:text-sm">
          SERVICE {acf.service_tag}
        </span>
      )}

      <ServiceTitle title={acf?.hero_title} />

      <p className="max-w-[36rem] text-[15px] leading-relaxed text-[#444444] sm:text-base">
        {acf?.description}
      </p>

      {/* At least 24px below the description; from lg pinned to the bottom of the shared text cell. */}
      <div className="pt-5 sm:pt-6 lg:mt-auto">
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

          bg-gradient-to-r from-[#3B82F6] to-[#0753F6]
          shadow-[0_10px_24px_-12px_rgba(7,83,246,0.6)]

          transition-all duration-300

          hover:from-[#2563EB] hover:to-[#0644D0]
          hover:scale-105
          hover:shadow-[0_14px_28px_-12px_rgba(7,83,246,0.7)]
        "
      >
        {/* Horizontal blue gradient (light #3B82F6 to deep #0753F6), deepening slightly on hover. */}
        {acf?.button_text || "Get Started"}
      </a>
      </div>
    </div>
  );
}

export default function StickyScrollServices({ initialServices = [] }: { initialServices?: any[] }) {
  const [services, setServices] = useState<any[]>(initialServices);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(initialServices.length === 0);

  const [isInView, setIsInView] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const touchRef = useRef<{ startX: number; startY: number; lastX: number; lastY: number } | null>(null);

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

  // Keep activeIndex within bounds if service count changes
  useEffect(() => {
    if (services.length > 0 && activeIndex >= services.length) {
      setActiveIndex(0);
    }
  }, [services.length, activeIndex]);

  // Respect prefers-reduced-motion and disable autoplay when enabled
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Pause autoplay when the showcase is outside the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hasServices = !loading && !error && services.length > 0;
  const shouldAutoplay =
    hasServices &&
    services.length > 1 &&
    isInView &&
    !isHovered &&
    !isFocused &&
    !prefersReducedMotion;

  // Single shared autoplay interval across desktop, tablet, and mobile
  useEffect(() => {
    if (!shouldAutoplay) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [shouldAutoplay, services.length, timerResetKey]);

  const handleSelect = (index: number) => {
    if (services.length === 0) return;
    const clamped = ((index % services.length) + services.length) % services.length;
    setActiveIndex(clamped);
    setTimerResetKey((k) => k + 1);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
    };
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!touchRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchRef.current.lastX = touch.clientX;
    touchRef.current.lastY = touch.clientY;
  };

  const handleTouchEnd = () => {
    const state = touchRef.current;
    touchRef.current = null;
    if (!state || services.length <= 1) return;
    const deltaX = state.lastX - state.startX;
    const deltaY = state.lastY - state.startY;
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      handleSelect(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
    }
  };

  const handleTouchCancel = () => {
    touchRef.current = null;
  };

  const railServices = services.map((item, i) => ({
    key: item?.id ?? i,
    title: item?.acf?.hero_title || "Service",
    image: getImage(item),
  }));

  return (
    // reducedMotion="user" drops the slide/scale for reduced-motion users at animation time,
    // so server and client render identical markup
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} aria-label="Our Services" className="relative bg-white">
        {loading ? (
          <div className="container-custom relative z-10 flex min-h-[400px] w-full items-center justify-center py-12">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
              <p className="font-semibold text-gray-500">Loading Services...</p>
            </div>
          </div>
        ) : !hasServices ? (
          <div className="container-custom relative z-10 flex min-h-[400px] w-full items-center justify-center py-12">
            <p className="font-semibold text-text-gray">Services currently unavailable</p>
          </div>
        ) : (
          <div className="py-12 sm:py-16 md:pt-8 md:pb-16 lg:pt-8 lg:pb-20">
            <div
              className="container-custom relative z-10 w-full touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
            >
              <div className="grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-x-12 lg:gap-y-7 xl:gap-x-16 xl:gap-y-8">
                {/* Horizontal thumbnail navigation: top on tablet/desktop (md+), bottom on mobile (< md) */}
                <div className="order-3 px-2 py-3 md:order-1 lg:col-span-2 lg:mb-1">
                  <div
                    className="mx-auto w-full max-w-xl lg:max-w-2xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocusCapture={(e) => {
                      if ((e.target as HTMLElement)?.matches?.(":focus-visible")) {
                        setIsFocused(true);
                      }
                    }}
                    onBlurCapture={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setIsFocused(false);
                      }
                    }}
                  >
                    <ServiceThumbnailRail
                      services={railServices}
                      activeIndex={activeIndex}
                      onSelect={handleSelect}
                    />
                  </div>
                </div>

                {/* Image stage: layered service cards (see cardPose). Every image stays mounted, so changing service
                    never reloads an image. The stage keeps the previous aspect ratios; the cards sit inside it with
                    room above and to the sides for the background cards, so nothing overflows. */}
                <div className="order-1 relative aspect-[3/2] w-full [perspective:1000px] sm:aspect-[16/10] md:order-2 lg:aspect-[4/3]">
                  {/* Soft brand glow behind the stack */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-[18%] bottom-[4%] rounded-full bg-[radial-gradient(closest-side,rgba(7,83,246,0.16),rgba(26,183,40,0.08),transparent)] blur-2xl" />
                  {services.map((item, i) => {
                    const isActive = i === activeIndex;
                    const pose = cardPose(i, activeIndex, services.length);
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="absolute inset-x-[9%] top-[13%] bottom-0 overflow-hidden rounded-[18px] sm:inset-x-[11%] lg:inset-x-[9%] bg-[#EEF1F8] ring-1 ring-[#05044A]/[0.08] shadow-[0_24px_48px_-28px_rgba(5,4,74,0.55)] [backface-visibility:hidden] [transform-style:preserve-3d] sm:rounded-[24px]"
                        initial={false}
                        animate={{ x: pose.x, y: pose.y, scale: pose.scale, rotateY: pose.rotateY, opacity: pose.opacity }}
                        transition={cardTransition}
                        style={{ zIndex: pose.zIndex }}
                        aria-hidden={!isActive}
                      >
                        <Image
                          src={getImage(item) || "/images/fallback.jpg"}
                          alt={item?.acf?.hero_title || "Service"}
                          fill
                          sizes="(max-width: 1023px) 80vw, 40vw"
                          className="object-cover"
                        />
                        {/* Background cards are slightly dimmed so the front card reads first */}
                        <motion.div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[#05044A]"
                          initial={false}
                          animate={{ opacity: isActive ? 0 : 0.18 }}
                          transition={cardTransition}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Text: all blocks share one grid cell (as tall as the longest), so neither the section height nor the
                    heading/CTA positions jump between services; the cell is vertically centred on the image. */}
                <div className="order-2 relative z-10 grid min-h-0 md:order-3">
                  {services.map((item, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <motion.div
                        key={item?.id ?? i}
                        className="[grid-area:1/1] h-full"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : offsetY }}
                        transition={textTransition}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                        aria-hidden={!isActive}
                        inert={!isActive}
                      >
                        <ServiceText acf={item?.acf || {}} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <SectionDivider
          type="diagonal"
          color="#0753f6"
          height={30}
        />
      </section>
    </MotionConfig>
  );
}

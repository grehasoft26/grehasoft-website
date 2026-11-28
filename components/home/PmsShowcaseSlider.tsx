'use client';

import { useCallback, useEffect, useRef, useState, type FocusEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectFade, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

/** Mock-data screenshots of Grehasoft PMS, in display order. All are roughly 2:1 (1881–1918 x 936–975 px). */
const SLIDES = [
  {
    src: '/images/pms-showcase/01-company-overview-dashboard-mock.webp',
    title: 'Company Overview',
    alt: 'Grehasoft PMS company overview dashboard showing project, task and client metrics with sample data',
  },
  {
    src: '/images/pms-showcase/02-company-projects-mock.webp',
    title: 'Projects',
    alt: 'Grehasoft PMS company projects screen listing projects and their progress with sample data',
  },
  {
    src: '/images/pms-showcase/03-client-management-mock.webp',
    title: 'Client Management',
    alt: 'Grehasoft PMS client management screen listing clients and their details with sample data',
  },
  {
    src: '/images/pms-showcase/04-invoices-finance-mock.webp',
    title: 'Invoices & Finance',
    alt: 'Grehasoft PMS invoices and finance screen showing invoices and payment status with sample data',
  },
  {
    src: '/images/pms-showcase/05-financial-dashboard-mock.webp',
    title: 'Financial Dashboard',
    alt: 'Grehasoft PMS financial dashboard with revenue, expense and cash-flow charts using sample data',
  },
  {
    src: '/images/pms-showcase/06-live-monitor-mock.webp',
    title: 'Live Monitor',
    alt: 'Grehasoft PMS live monitor showing real-time workforce activity and status counts with sample data',
  },
  {
    src: '/images/pms-showcase/07-hr-document-automation-mock.webp',
    title: 'HR Document Automation',
    alt: 'Grehasoft PMS HR document automation screen for generating employee documents with sample data',
  },
  {
    src: '/images/pms-showcase/08-backup-system-mock.webp',
    title: 'Backup System',
    alt: 'Grehasoft PMS backup system screen showing backup status and history with sample data',
  },
] as const;

const AUTOPLAY_DELAY = 4500;
const SPEED = 600;

interface Props {
  /** `sizes` hint for the screenshots, matching the column the slider sits in. */
  sizes?: string;
}

/**
 * PMS product screenshots as a fading slideshow in a fixed 2:1 frame (so changing slides never shifts layout).
 * Each screenshot is shown whole (object-contain on white).
 *
 * Autoplay is one managed timer, as in ServicesCarousel: every (re)schedule clears the previous timeout first.
 * - The next slide 4.5s after the last change; arrows, dots, swipe and arrow keys navigate at once and restart it.
 * - Paused while the pointer is over the slideshow and while its controls have keyboard focus; resumes after.
 * - Off for prefers-reduced-motion (and slide changes are then instant). Swipe and arrow keys come from Swiper.
 */
export default function PmsShowcaseSlider({ sizes = '(max-width: 1023px) 100vw, 480px' }: Props) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverRef = useRef(false);
  const keyboardFocusRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  /** Clear any pending advance, then schedule one (unless paused or reduced motion). */
  const schedule = useCallback(
    (delay: number) => {
      clearTimer();
      if (reducedMotionRef.current || hoverRef.current || keyboardFocusRef.current) return;
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        // slideNext fires onSlideChange, which schedules the next advance.
        swiperRef.current?.slideNext();
      }, delay);
    },
    [clearTimer],
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      reducedMotionRef.current = query.matches;
      setReducedMotion(query.matches);
      if (query.matches) clearTimer();
      else schedule(AUTOPLAY_DELAY);
    };
    apply();
    query.addEventListener('change', apply);
    return () => {
      query.removeEventListener('change', apply);
      clearTimer();
    };
  }, [clearTimer, schedule]);

  /** Arrows and dots: navigate now; automatic sliding resumes after the full delay. */
  const navigate = (move: (swiper: SwiperClass) => void) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    move(swiper);
    schedule(AUTOPLAY_DELAY);
  };

  const handleMouseEnter = () => {
    hoverRef.current = true;
    clearTimer();
  };
  const handleMouseLeave = () => {
    hoverRef.current = false;
    schedule(AUTOPLAY_DELAY);
  };
  // Keyboard focus inside the slideshow pauses; mouse focus (from a click) does not.
  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).matches(':focus-visible')) {
      keyboardFocusRef.current = true;
      clearTimer();
    }
  };
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
    if (keyboardFocusRef.current) {
      keyboardFocusRef.current = false;
      schedule(AUTOPLAY_DELAY);
    }
  };

  const current = SLIDES[active];
  const arrowClass =
    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Grehasoft PMS screenshots"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Frame: a thin glass border around a fixed 2:1 white panel. */}
      <div className="rounded-box-lg border border-white/10 bg-white/5 p-1 shadow-2xl sm:p-1.5 lg:p-2">
        <div className="overflow-hidden rounded-box-sm bg-white">
          <Swiper
            modules={[EffectFade, Keyboard, A11y]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={reducedMotion ? 0 : SPEED}
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous screenshot',
              nextSlideMessage: 'Next screenshot',
              slideLabelMessage: '{{index}} of {{slidesLength}}',
            }}
            className="aspect-[2/1] w-full touch-pan-y"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActive(swiper.realIndex);
              // Every change (automatic, arrows, dots, swipe, arrow keys) restarts the timer.
              schedule(AUTOPLAY_DELAY);
            }}
          >
            {SLIDES.map((slide, index) => (
              <SwiperSlide key={slide.src} className="!h-full bg-white">
                <div className="relative h-full w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes={sizes}
                    // The first slide is visible on load; the rest load lazily as the frame nears the viewport.
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Caption and controls */}
      <p className="mt-3 text-center text-sm font-medium text-white/80">
        <span className="text-accent">{String(active + 1).padStart(2, '0')}</span>
        <span className="text-white/40"> / {String(SLIDES.length).padStart(2, '0')}</span>
        <span className="mx-2 text-white/25" aria-hidden="true">·</span>
        {current.title}
      </p>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => navigate((swiper) => swiper.slidePrev())}
          className={arrowClass}
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </button>

        <div className="flex items-center">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show screenshot ${index + 1}: ${slide.title}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => navigate((swiper) => swiper.slideToLoop(index))}
              // 24px-tall hit area around each visible dot.
              className="group flex h-6 items-center justify-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  index === active ? 'w-5 bg-accent' : 'w-2 bg-white/30 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => navigate((swiper) => swiper.slideNext())}
          className={arrowClass}
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

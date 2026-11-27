'use client';

import { useCallback, useEffect, useRef, useState, type FocusEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import type { GbpIconItem } from '@/types/google-business-profile';
import { gbpIcons } from './icons';

import 'swiper/css';

interface Props {
  items: GbpIconItem[];
  /** Accessible name for the carousel region. */
  label: string;
}

// Card tints cycle pale blue → soft cyan → light green, each with a matching icon gradient and top accent.
const TINTS = [
  {
    card: 'bg-gradient-to-br from-[#eef4ff] via-white to-white',
    icon: 'bg-gradient-to-br from-dark via-primary to-primary',
    bar: 'from-primary to-[#4d8bff]',
  },
  {
    card: 'bg-gradient-to-br from-[#e8fafe] via-white to-white',
    icon: 'bg-gradient-to-br from-primary to-[#22b8e6]',
    bar: 'from-[#22b8e6] to-[#0b9fd0]',
  },
  {
    card: 'bg-gradient-to-br from-[#ecfaef] via-white to-white',
    icon: 'bg-gradient-to-br from-[#0b9fd0] to-accent',
    bar: 'from-accent to-[#22b8e6]',
  },
];

const AUTOPLAY_DELAY = 4000;
const SPEED = 600;

/**
 * Service cards as a looping carousel: 1 card on phones, 2 from 768px. Every card is in the server
 * HTML; Swiper only adds the loop copies in the browser.
 *
 * Autoplay is one managed timer (not Swiper's autoplay module), so there is never more than one
 * pending advance: every (re)schedule clears the previous timeout first.
 * - Normal rhythm: the next slide 4s after the last change (600ms transition).
 * - Arrow or dot click, swipe or arrow keys: navigate at once and restart the 4s timer from there,
 *   so automatic sliding resumes 4s later. Each further click resets it again; manual navigation
 *   never stops autoplay.
 * - Paused while the pointer is over the cards, and while the controls have keyboard focus (tabbing);
 *   a mouse click on an arrow does not pause. Never runs for prefers-reduced-motion.
 */
export default function ServicesCarousel({ items, label }: Props) {
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
        // slideNext fires onSlideChange, which schedules the next 4s advance.
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

  /** Arrows and dots: navigate now; automatic sliding resumes 4s later. */
  const navigate = (move: (swiper: SwiperClass) => void) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    keyboardFocusRef.current = false;
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
  // Keyboard focus on the controls pauses; mouse focus (from a click) does not.
  const handleControlsFocus = (event: FocusEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).matches(':focus-visible')) {
      keyboardFocusRef.current = true;
      clearTimer();
    }
  };
  const handleControlsBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
    if (keyboardFocusRef.current) {
      keyboardFocusRef.current = false;
      schedule(AUTOPLAY_DELAY);
    }
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      {/* Hovering the cards pauses autoplay (the controls below are outside this wrapper). */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          modules={[Keyboard, A11y]}
          loop
          speed={reducedMotion ? 0 : SPEED}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{ enabled: true, prevSlideMessage: 'Previous service', nextSlideMessage: 'Next service' }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 20 } }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
            // Every change (automatic, arrows, dots, swipe, arrow keys) restarts the 4s timer.
            schedule(AUTOPLAY_DELAY);
          }}
          className="!overflow-hidden !px-px !py-1"
        >
          {items.map((item, i) => {
            const Icon = gbpIcons[item.icon];
            const tint = TINTS[i % TINTS.length];

            return (
              <SwiperSlide key={item.title} className="!h-auto">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-box-lg border border-[#e3eaf7] p-5 shadow-[0_10px_26px_-20px_rgba(5,4,74,0.35)] md:p-6 ${tint.card}`}
                >
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tint.bar}`} />
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-box-sm text-white shadow-[0_8px_16px_-8px_rgba(7,83,246,0.7)] ${tint.icon}`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="min-w-0 text-[1.0625rem] font-bold leading-snug text-dark md:text-lg">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-gray-600 md:text-base">{item.description}</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        className="mt-5 flex items-center justify-center gap-4 md:mt-6"
        onFocus={handleControlsFocus}
        onBlur={handleControlsBlur}
      >
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => navigate((swiper) => swiper.slidePrev())}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show service ${i + 1}: ${item.title}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => navigate((swiper) => swiper.slideToLoop(i))}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none ${
                i === active ? 'w-7 bg-gradient-to-r from-primary to-accent' : 'w-2.5 bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next service"
          onClick={() => navigate((swiper) => swiper.slideNext())}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

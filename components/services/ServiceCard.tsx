'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { motion, type MotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ServiceArt from './ServiceArt';
import { TONE_CLASSES, themeFor, type DeckService } from './serviceTheme';
import { serviceIcon, serviceVisual } from './serviceVisuals';

interface ServiceCardProps {
  service: DeckService;
  isFront: boolean;
  /** Depth darkening, 0 on the front card. */
  shade: number;
  reducedMotion: boolean;
  /** Cancels navigation when the click ends a drag. */
  onCtaClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** Horizontal parallax of the card visual (front card only); moves slower than the card. */
  artShift?: MotionValue<number>;
}

/** Glass service card. The front card shows the full description and CTA; side cards only the name. */
export default function ServiceCard({ service, isFront, shade, reducedMotion, onCtaClick, artShift }: ServiceCardProps) {
  const { icon: Icon, tone } = themeFor(service.categoryId);
  const toneClasses = TONE_CLASSES[tone];
  const visual = serviceVisual(service.href, service.categoryId, service.indexInCategory, tone);
  const ServiceIcon = serviceIcon(service.href);
  const reveal = (delay: number) =>
    reducedMotion ? { duration: 0 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay: isFront ? delay : 0 };

  return (
    <div className="@container group/card relative h-full w-full select-none overflow-hidden rounded-[22px] border border-white/[0.14] bg-[linear-gradient(162deg,#141c7c_0%,#0b0c60_52%,#06054a_100%)] shadow-[0_40px_70px_-30px_rgba(5,4,74,0.55),0_14px_28px_-18px_rgba(5,4,74,0.45),inset_0_1px_0_rgba(255,255,255,0.16)]">
      {/* Light: a soft tone glow in the corner and a fine top sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22%] -right-[24%] aspect-square w-[78%] rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${toneClasses.glow}, transparent 68%)` }}
      />
      {/* Per-service abstract visual (glows, seeded motif, glass icon tile), weighted to the lower right */}
      <ServiceArt visual={visual} icon={ServiceIcon} isFront={isFront} reducedMotion={reducedMotion} shift={artShift} />

      {/* Readability: navy over the text area at the top and left, fading out toward the visual */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,5,74,0.96)_0%,rgba(6,5,74,0.9)_40%,rgba(6,5,74,0.74)_56%,rgba(6,5,74,0.28)_74%,rgba(6,5,74,0.12)_88%,rgba(6,5,74,0.45)_100%)]"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,74,0.55)_0%,rgba(6,5,74,0.15)_55%,transparent_100%)]" />

      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative flex h-full flex-col p-[8cqw]">
        <div className="flex items-center gap-3">
          <span className={`flex aspect-square w-[15cqw] items-center justify-center rounded-[4cqw] ${toneClasses.chip}`}>
            <Icon className="h-[52%] w-[52%]" strokeWidth={2} aria-hidden="true" />
          </span>
        </div>

        <p className={`mt-[9cqw] flex items-center gap-2 text-[clamp(10px,3.5cqw,12px)] font-semibold uppercase tracking-[0.14em] ${toneClasses.text}`}>
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneClasses.dot}`} aria-hidden="true" />
          <span className="truncate">{service.categoryName}</span>
        </p>

        <h3
          className={`mt-[3.5cqw] text-[clamp(20px,8.6cqw,30px)] font-bold leading-[1.08] tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(6,5,74,0.85)]`}
        >
          {service.name}
        </h3>

        <motion.p
          initial={false}
          animate={{ opacity: isFront ? 1 : 0, y: isFront ? 0 : 14 }}
          transition={reveal(0.12)}
          className={`mt-[5cqw] text-[clamp(13px,4.7cqw,15.5px)] leading-relaxed ${
            'text-white/85 [text-shadow:0_1px_14px_rgba(6,5,74,0.95),0_0_2px_rgba(6,5,74,0.9)]'
          }`}
        >
          {service.desc}
        </motion.p>

        <div className="mt-auto pt-[6cqw]">
          {isFront ? (
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={reveal(0.28)}>
              <Link
                href={service.href}
                draggable={false}
                onClick={onCtaClick}
                className={`group/cta inline-flex h-12 items-center gap-3 rounded-full pr-2 pl-5 text-[15px] font-semibold text-white ring-1 ring-white/20 transition-colors duration-300 hover:bg-primary hover:ring-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                  'bg-[#06054a]/75'
                }`}
              >
                Explore Service
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 group-hover/cta:bg-white/20" aria-hidden="true">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span className="sr-only">: {service.name}</span>
              </Link>
            </motion.div>
          ) : (
            <span aria-hidden="true" className="block h-px w-[30%] bg-white/15" />
          )}
        </div>
      </div>

      {/* Depth shade for cards behind the front card */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[22px] bg-[#020127]"
        initial={false}
        animate={{ opacity: shade }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  );
}

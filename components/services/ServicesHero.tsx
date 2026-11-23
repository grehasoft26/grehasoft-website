'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import {
  animate,
  motion,
  MotionConfig,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Cloud,
  Code2,
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { buildBreadcrumbJsonLd, serializeJsonLd } from '@/lib/seo';
import ShinyButton from '@/components/ui/shiny-button';
import styles from './ServicesHero.module.css';

/**
 * Services page hero: editorial headline on the left, an animated "digital ecosystem"
 * on the right (browser, phone, insight cards and the six service categories).
 *
 * Rendering rules:
 * - All text is server-rendered and visible without JavaScript. Entrance motion is CSS
 *   (mask reveal, pop-in, drift); motion/react only adds pointer parallax and the count-up.
 * - The H1 keeps the page's SEO heading; the large headline is a styled paragraph.
 * - The ecosystem is decorative (aria-hidden); the categories are listed in the directory below.
 */

export interface ServicesHeroCategory {
  id: string;
  name: string;
}

interface ServicesHeroProps {
  categories: ServicesHeroCategory[];
  serviceCount: number;
  /** In-page anchor of the service directory. */
  directoryId: string;
}

const HEADING = 'Comprehensive IT & Creative Solutions';
const DESCRIPTION =
  'From powerful websites to intelligent digital solutions, we transform ideas into meaningful digital experiences that help businesses grow.';
const HEADLINE: { text: string; outline?: boolean; accentStop?: boolean }[] = [
  { text: 'We build' },
  { text: 'digital', outline: true },
  { text: 'experiences' },
  { text: 'that matter', accentStop: true },
];
const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
];

type Tone = 'blue' | 'green';

/** Ecosystem placement per category id (stage percent), parallax depth and drift timing. */
const CATEGORY_LAYOUT: Record<string, { icon: LucideIcon; x: number; y: number; depth: number; fd: number; d: number; tone: Tone }> = {
  'web-dev': { icon: Globe, x: 4, y: 7, depth: 10, fd: 6.2, d: 1.0, tone: 'blue' },
  marketing: { icon: TrendingUp, x: 40, y: 1, depth: 13, fd: 5.4, d: 1.1, tone: 'green' },
  branding: { icon: Palette, x: 75, y: 58, depth: 8, fd: 6.8, d: 1.2, tone: 'blue' },
  mobile: { icon: Smartphone, x: 62, y: 85, depth: 12, fd: 5.8, d: 1.3, tone: 'green' },
  software: { icon: Code2, x: 23, y: 87, depth: 9, fd: 6.5, d: 1.4, tone: 'blue' },
  tech: { icon: Cloud, x: 0, y: 45, depth: 14, fd: 5.2, d: 1.5, tone: 'green' },
};
const CARD_WIDTH = 25;
const CARD_HEIGHT = 9;
const CORE = { x: 47, y: 48 };

// Gauge: 30 ticks on a 200° arc, coloured blue → green. Computed identically on server and client.
const TICKS = Array.from({ length: 30 }, (_, i) => {
  const angle = ((190 - (200 / 29) * i) * Math.PI) / 180;
  const point = (r: number) => [50 + r * Math.cos(angle), 50 - r * Math.sin(angle)].map((n) => n.toFixed(2));
  const t = i / 29;
  const mix = (a: number, b: number) => Math.round(a + (b - a) * t);
  return { from: point(33), to: point(41), color: `rgb(${mix(7, 26)}, ${mix(83, 183)}, ${mix(246, 40)})` };
});

const easeOutCubic = [0.33, 1, 0.68, 1] as const;
/** Share of the artwork that must be on screen for its entrance to play (phones load it below the fold). */
const ART_REVEAL_RATIO = 0.35;

export default function ServicesHero({ categories, serviceCount, directoryId }: ServicesHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  // Pointer position in [-1, 1], spring-smoothed. Stays at 0 unless parallax is enabled.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.7 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.7 });

  // Count-up: starts at the real value so server and client render the same text.
  const count = useMotionValue(serviceCount);
  const countText = useTransform(count, (v) => String(Math.round(v)).padStart(2, '0'));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pause CSS loops while the hero is off-screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) delete section.dataset.offscreen;
      else section.dataset.offscreen = '';
    });
    observer.observe(section);

    let stopCount: (() => void) | undefined;
    const startCount = () => {
      count.set(0);
      const controls = animate(count, serviceCount, { duration: 1.4, ease: easeOutCubic, delay: 1.1 });
      stopCount = () => controls.stop();
    };

    // Artwork entrance: plays on load when the artwork is already on screen (desktop). When it starts
    // below the fold (phones), hold it from the first frame until it scrolls into view, then play it
    // once. The hold is only applied after the observer is running, so a failure leaves it playing.
    let artObserver: IntersectionObserver | undefined;
    const art = artRef.current;
    if (!reduceMotion) {
      let held = false;
      if (art && 'IntersectionObserver' in window) {
        const rect = art.getBoundingClientRect();
        const visible = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
        // Never ask for more of the artwork than the viewport can show.
        const needed = Math.min(ART_REVEAL_RATIO, (window.innerHeight / Math.max(rect.height, 1)) * 0.9);
        if (rect.height > 0 && visible / rect.height < needed) {
          try {
            artObserver = new IntersectionObserver(
              (entries) => {
                if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= needed)) return;
                artObserver?.disconnect();
                artObserver = undefined;
                delete section.dataset.artPending;
                startCount();
              },
              { threshold: needed },
            );
            artObserver.observe(art);
            section.dataset.artPending = '';
            // Rewind anything that already started before hydration; the CSS hold keeps it at frame 0.
            for (const animation of art.getAnimations({ subtree: true })) animation.currentTime = 0;
            count.set(0);
            held = true;
          } catch {
            artObserver?.disconnect();
            artObserver = undefined;
            delete section.dataset.artPending;
          }
        }
      }
      if (!held) startCount();
    }

    // Pointer parallax: desktop mice only, never on touch or with reduced motion.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let removePointer: (() => void) | undefined;
    if (finePointer && !reduceMotion) {
      const onMove = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        const rect = section.getBoundingClientRect();
        pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      };
      const onLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
      };
      section.addEventListener('pointermove', onMove, { passive: true });
      section.addEventListener('pointerleave', onLeave);
      removePointer = () => {
        section.removeEventListener('pointermove', onMove);
        section.removeEventListener('pointerleave', onLeave);
      };
    }

    return () => {
      observer.disconnect();
      artObserver?.disconnect();
      delete section.dataset.artPending;
      stopCount?.();
      removePointer?.();
      count.set(serviceCount);
    };
  }, [count, pointerX, pointerY, serviceCount]);

  const placedCategories = categories.filter((category) => CATEGORY_LAYOUT[category.id]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        aria-labelledby="services-hero-title"
        className={`${styles.hero} relative isolate overflow-hidden text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbJsonLd(BREADCRUMB)) }}
        />

        <div className={styles.backdrop} aria-hidden="true">
          <div className={styles.grid} />
        </div>

        <div className="container-custom relative grid items-center gap-12 pt-32 pb-16 sm:pt-36 lg:min-h-[min(100svh,940px)] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,1fr)] lg:gap-8 lg:pt-32 lg:pb-20">
          {/* ------------------------------ copy ------------------------------ */}
          <div className="relative z-10 min-w-0">
            <nav aria-label="Breadcrumb" className={`${styles.slide} mb-7 text-sm font-medium text-white/60`} style={{ '--d': '0s' } as CSSProperties}>
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <Link href="/services" aria-current="page" className="text-accent">
                    Our Services
                  </Link>
                </li>
              </ol>
            </nav>

            <h1
              id="services-hero-title"
              className={`${styles.slide} inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] py-2 pr-4 pl-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/85 sm:text-[13px] sm:tracking-[0.16em]`}
              style={{ '--d': '0.05s' } as CSSProperties}
            >
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className={`${styles.pulse} absolute inset-0 rounded-full bg-accent/60`} />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              {HEADING}
            </h1>

            <p className="mt-6 text-[clamp(2.5rem,11vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] lg:text-[clamp(3.4rem,5.9vw,5.75rem)]">
              {HEADLINE.map((line, index) => (
                <span key={line.text} className={styles.line}>
                  <span
                    className={`${styles.lineInner} ${line.outline ? styles.outline : ''}`}
                    style={{ '--i': index } as CSSProperties}
                  >
                    {line.text}
                    {line.accentStop && <span className="text-accent">.</span>}
                  </span>
                </span>
              ))}
            </p>

            <p
              className={`${styles.slide} mt-7 max-w-[34rem] text-base leading-relaxed text-white/70 sm:text-lg`}
              style={{ '--d': '0.45s' } as CSSProperties}
            >
              {DESCRIPTION}
            </p>

            <div
              className={`${styles.slide} mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4`}
              style={{ '--d': '0.55s' } as CSSProperties}
            >
              {/* Glossy brand-blue pill; same size as before (the gleam border's 1px is taken from the padding). */}
              <ShinyButton
                href={`#${directoryId}`}
                fillBackground="linear-gradient(180deg, #2A6CFB 0%, #185EF8 46%, #0753F6 54%, #0546D6 100%)"
                insetColor="rgba(255,255,255,0.16)"
                // Effects tuned so the white label keeps ≥4.5:1 against the fill while the sheen moves.
                accentColor="#5B8CFF"
                accentSoftColor="#DCE8FF"
                sheenOpacity={0.35}
                speckleOpacity={0.15}
                className="group inline-flex h-14 items-center justify-center rounded-full py-0 pr-[7px] pl-[27px] text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-10px_18px_rgba(5,4,74,0.28),inset_0_0_0_1px_rgba(255,255,255,0.14),0_18px_40px_-16px_rgba(7,83,246,0.9),0_0_26px_-8px_rgba(7,83,246,0.6)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-10px_18px_rgba(5,4,74,0.22),inset_0_0_0_1px_rgba(255,255,255,0.2),0_22px_46px_-14px_rgba(7,83,246,1),0_0_38px_-6px_rgba(61,126,255,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                contentClassName="inline-flex items-center gap-3 [text-shadow:0_1px_1px_rgba(5,4,74,0.35)]"
              >
                Explore Services
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8FB2FF]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/25 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                  <ArrowDown className="h-4 w-4" />
                </span>
              </ShinyButton>
              <Link
                href="/contact-us"
                className={`${styles.glass} group inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ------------------------------ ecosystem ------------------------------ */}
          <div ref={artRef} className="relative mx-auto w-full max-w-[560px] lg:max-w-[640px]" aria-hidden="true">
            <div className={`${styles.stage} ${styles.stageIn}`}>
              <Layer x={springX} y={springY} depth={-4} className="absolute inset-0">
                <Orbits categories={placedCategories} />
              </Layer>

              {/* Code panel behind the browser */}
              <Layer x={springX} y={springY} depth={4} className={styles.place} style={place(12, 19, 30)}>
                <div className={`${styles.float} ${styles.glassDark} ${styles.tilt} rounded-[3cqw] p-[2.2cqw]`} style={floatVars(0.55, 7, 5)}>
                  <CodeLines />
                </div>
              </Layer>

              {/* Browser: website preview with analytics */}
              <Layer x={springX} y={springY} depth={6} rotate={4} className={styles.place} style={place(17, 27, 58)}>
                <div className={`${styles.pop} ${styles.glassDark} ${styles.tilt} aspect-[58/39] overflow-hidden rounded-[2.6cqw]`} style={{ '--d': '0.45s' } as CSSProperties}>
                  <BrowserWindow />
                </div>
              </Layer>

              {/* Phone */}
              <Layer x={springX} y={springY} depth={12} className={styles.place} style={place(60, 41, 17)}>
                <div className={`${styles.float} ${styles.glassDark} ${styles.tilt} aspect-[9/18.5] rounded-[3.2cqw] p-[1cqw]`} style={{ ...floatVars(0.75, 6.4, 6), '--ry': '-14deg', '--rx': '4deg' } as CSSProperties}>
                  <PhoneScreen />
                </div>
              </Layer>

              {/* Insight gauge */}
              <Layer x={springX} y={springY} depth={10} className={styles.place} style={place(70, 11, 28)}>
                <div className={`${styles.float} ${styles.glass} rounded-[3cqw] p-[2.4cqw]`} style={floatVars(0.85, 5.6, 6)}>
                  <Gauge countText={countText} disciplines={placedCategories.length} />
                </div>
              </Layer>

              {/* Growth chart (hidden on phones to keep the composition light) */}
              <Layer x={springX} y={springY} depth={9} className={`${styles.place} max-sm:hidden`} style={place(5, 61, 26)}>
                <div className={`${styles.float} ${styles.glass} rounded-[3cqw] p-[2.2cqw]`} style={floatVars(0.95, 6.9, 5)}>
                  <GrowthChart />
                </div>
              </Layer>

              {/* The six service categories on the outer ring */}
              {placedCategories.map((category) => {
                const layout = CATEGORY_LAYOUT[category.id];
                const Icon = layout.icon;
                return (
                  <Layer
                    key={category.id}
                    x={springX}
                    y={springY}
                    depth={layout.depth}
                    className={`${styles.place} ${styles.categoryPlace}`}
                    style={place(layout.x, layout.y, CARD_WIDTH)}
                  >
                    <div
                      className={`${styles.float} ${styles.glass} flex items-center gap-[1.6cqw] rounded-[2.4cqw] p-[1.4cqw] max-sm:aspect-square max-sm:justify-center max-sm:rounded-full`}
                      style={floatVars(layout.d, layout.fd, 6)}
                    >
                      <span
                        className={`flex aspect-square w-[6cqw] shrink-0 items-center justify-center rounded-[1.6cqw] max-sm:w-[7cqw] ${
                          layout.tone === 'green'
                            ? 'bg-accent/20 text-[#5be06a] shadow-[0_0_24px_-4px_rgba(26,183,40,0.7)]'
                            : 'bg-primary/30 text-[#8fb2ff] shadow-[0_0_24px_-4px_rgba(7,83,246,0.8)]'
                        }`}
                      >
                        <Icon className="h-[55%] w-[55%]" strokeWidth={2} />
                      </span>
                      <span className={`${styles.cardName} font-semibold text-white/90 max-sm:hidden`}>{category.name}</span>
                    </div>
                  </Layer>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottomEdge} aria-hidden="true" />
      </section>
    </MotionConfig>
  );
}

/* ------------------------------ helpers ------------------------------ */

function place(x: number, y: number, w: number): CSSProperties {
  return { '--x': x, '--y': y, '--w': w } as CSSProperties;
}

function floatVars(delay: number, duration: number, amplitude: number): CSSProperties {
  return { '--d': `${delay}s`, '--fd': `${duration}s`, '--amp': `${amplitude}px` } as CSSProperties;
}

/** A layer that drifts with the pointer by `depth` px (and optionally tilts). */
function Layer({
  x,
  y,
  depth,
  rotate = 0,
  className,
  style,
  children,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  depth: number;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const translateX = useTransform(x, (v) => v * depth);
  const translateY = useTransform(y, (v) => v * depth);
  const rotateY = useTransform(x, (v) => v * rotate);
  const rotateX = useTransform(y, (v) => v * -rotate * 0.8);
  return (
    <motion.div
      className={className}
      style={{
        ...style,
        x: translateX,
        y: translateY,
        ...(rotate ? { rotateX, rotateY, transformPerspective: 1200 } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}

/** Orbit rings, travelling nodes and data lines from the core to each category card. */
function Orbits({ categories }: { categories: ServicesHeroCategory[] }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" fill="none">
      <defs>
        <radialGradient id="sh-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0753f6" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#0753f6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0753f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sh-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fb2ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5be06a" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <ellipse cx={CORE.x} cy={CORE.y + 2} rx="34" ry="30" fill="url(#sh-core-glow)" />

      {/* Rings, flattened into a tilted orbit */}
      <g transform="rotate(-14 50 50)">
        <ellipse cx="50" cy="50" rx="46" ry="38" stroke="rgba(255,255,255,0.09)" strokeWidth="0.25" />
        <ellipse cx="50" cy="50" rx="36" ry="29" stroke="rgba(143,178,255,0.14)" strokeWidth="0.25" strokeDasharray="0.6 1.4" />
        <g transform="translate(50 50) scale(1 0.826) translate(-50 -50)">
          <g className={styles.spin} style={{ '--sd': '46s' } as CSSProperties}>
            <circle cx="96" cy="50" r="0.9" fill="#8fb2ff" />
            <circle cx="96" cy="50" r="2.4" fill="#0753f6" opacity="0.35" />
          </g>
          <g className={styles.spinReverse} style={{ '--sd': '70s' } as CSSProperties}>
            <circle cx="4" cy="50" r="0.8" fill="#5be06a" />
            <circle cx="4" cy="50" r="2.2" fill="#1ab728" opacity="0.3" />
          </g>
        </g>
      </g>

      {/* Data lines from the core to every category card */}
      {categories.map((category) => {
        const layout = CATEGORY_LAYOUT[category.id];
        const tx = layout.x + CARD_WIDTH / 2;
        const ty = layout.y + CARD_HEIGHT / 2;
        const cx = (CORE.x + tx) / 2 + (ty - CORE.y) * 0.18;
        const cy = (CORE.y + ty) / 2 - (tx - CORE.x) * 0.18;
        return (
          <path
            key={category.id}
            d={`M${CORE.x} ${CORE.y} Q${cx.toFixed(2)} ${cy.toFixed(2)} ${tx} ${ty}`}
            stroke="url(#sh-line)"
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeDasharray="1 2.5"
            className={`${styles.flow} max-sm:hidden`}
          />
        );
      })}
    </svg>
  );
}

function CodeLines() {
  const rows = [
    ['#8fb2ff', 22, '#ffffff', 30],
    ['#5be06a', 14, '#ffffff', 44],
    ['#ffffff', 10, '#8fb2ff', 36],
    ['#c4b5fd', 26, '#ffffff', 20],
    ['#8fb2ff', 18, '#5be06a', 28],
  ] as const;
  return (
    <div>
      <div className={`${styles.micro} mb-[1.4cqw] flex items-center justify-between font-semibold text-white/50`}>
        <span>app.tsx</span>
        <span className="text-[#5be06a]">&lt;/&gt;</span>
      </div>
      <div className="space-y-[1.1cqw]">
        {rows.map(([c1, w1, c2, w2], i) => (
          <div key={i} className="flex gap-[1cqw]" style={{ paddingLeft: `${(i % 3) * 2.2}cqw` }}>
            <span className="h-[0.9cqw] rounded-full opacity-80" style={{ width: `${w1}%`, background: c1 }} />
            <span className="h-[0.9cqw] rounded-full opacity-30" style={{ width: `${w2}%`, background: c2 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowserWindow() {
  const bars = [46, 70, 58, 88, 64, 96];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-[0.8cqw] border-b border-white/10 px-[1.8cqw] py-[1.3cqw]">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="h-[1cqw] w-[1cqw] rounded-full bg-white/25" />
        ))}
        <span className={`${styles.micro} ml-[1.6cqw] rounded-full bg-white/[0.07] px-[1.6cqw] py-[0.4cqw] text-white/55`}>grehasoft.com</span>
      </div>

      <div className="grid flex-1 grid-cols-[1.25fr_1fr] gap-[2cqw] p-[2.2cqw]">
        {/* Website preview */}
        <div className="flex flex-col justify-between">
          <div className="space-y-[1.2cqw]">
            <span className="block h-[1.4cqw] w-[78%] rounded-full bg-white/85" />
            <span className="block h-[1.4cqw] w-[56%] rounded-full bg-white/85" />
            <span className="block h-[0.8cqw] w-[88%] rounded-full bg-white/25" />
            <span className="block h-[0.8cqw] w-[70%] rounded-full bg-white/25" />
          </div>
          <div className="flex items-center gap-[1cqw]">
            <span className="h-[3cqw] w-[11cqw] rounded-full bg-primary shadow-[0_0_20px_-2px_rgba(7,83,246,0.9)]" />
            <span className="h-[3cqw] w-[8cqw] rounded-full border border-white/25" />
          </div>
          <div className="grid grid-cols-3 gap-[1cqw]">
            {['#0753f6', '#1ab728', '#8fb2ff'].map((c) => (
              <span key={c} className="aspect-[4/3] rounded-[1cqw] bg-white/[0.06] p-[0.8cqw]">
                <span className="block h-[1.6cqw] w-[1.6cqw] rounded-[0.5cqw]" style={{ background: c }} />
              </span>
            ))}
          </div>
        </div>

        {/* Analytics panel */}
        <div className="flex flex-col rounded-[1.6cqw] bg-white/[0.05] p-[1.6cqw]">
          <span className={`${styles.micro} font-semibold text-white/60`}>Traffic</span>
          <div className="mt-auto flex h-[55%] items-end gap-[0.9cqw]">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`${styles.grow} flex-1 rounded-t-[0.5cqw] ${i === bars.length - 1 ? 'bg-accent' : 'bg-primary/80'}`}
                style={{ height: `${h}%`, '--i': i } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[2.4cqw] bg-[#070a5c] p-[1.3cqw]">
      <span className="mx-auto mb-[1.4cqw] h-[1cqw] w-[5cqw] rounded-full bg-black/50" />
      <span className="h-[0.9cqw] w-[60%] rounded-full bg-white/80" />
      <span className="mt-[0.8cqw] h-[0.6cqw] w-[40%] rounded-full bg-white/25" />
      <div className="mt-[1.6cqw] rounded-[1.2cqw] bg-gradient-to-br from-primary to-[#3b7bff] p-[1.2cqw]">
        <svg viewBox="0 0 40 16" className="w-full">
          <path d="M1 13 C 8 12, 10 6, 17 8 S 28 12, 39 3" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-[1.6cqw] space-y-[1cqw]">
        {['#1ab728', '#8fb2ff', '#ffffff'].map((c) => (
          <div key={c} className="flex items-center gap-[1cqw]">
            <span className="h-[2.2cqw] w-[2.2cqw] shrink-0 rounded-[0.7cqw]" style={{ background: c, opacity: 0.85 }} />
            <span className="h-[0.7cqw] flex-1 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around pt-[1cqw]">
        {[0, 1, 2, 3].map((dot) => (
          <span key={dot} className={`h-[1cqw] w-[1cqw] rounded-full ${dot === 0 ? 'bg-accent' : 'bg-white/25'}`} />
        ))}
      </div>
    </div>
  );
}

function Gauge({ countText, disciplines }: { countText: MotionValue<string>; disciplines: number }) {
  return (
    <div>
      <div className={`${styles.micro} flex items-center justify-between font-semibold uppercase tracking-[0.12em] text-white/60`}>
        <span>Service insights</span>
        <span className={`${styles.pulse} h-[1.2cqw] w-[1.2cqw] rounded-full bg-accent`} />
      </div>
      <div className="relative mt-[1cqw]">
        <svg viewBox="0 0 100 62" className="w-full">
          {TICKS.map((tick, i) => (
            <line
              key={i}
              x1={tick.from[0]}
              y1={tick.from[1]}
              x2={tick.to[0]}
              y2={tick.to[1]}
              strokeWidth="2.4"
              strokeLinecap="round"
              className={styles.tick}
              style={{ '--c': tick.color, '--i': i } as CSSProperties}
            />
          ))}
        </svg>
        <div className="absolute inset-x-0 bottom-[6%] text-center">
          <motion.span className={`${styles.gaugeValue} block font-bold text-white`}>{countText}</motion.span>
          <span className={`${styles.micro} block font-medium text-white/60`}>Services</span>
        </div>
      </div>
      <div className="mt-[1.4cqw] grid grid-cols-2 gap-[1.2cqw] border-t border-white/10 pt-[1.4cqw]">
        <div>
          <span className="block text-[clamp(11px,2.4cqw,15px)] font-bold tabular-nums text-white">{String(disciplines).padStart(2, '0')}</span>
          <span className={`${styles.micro} text-white/55`}>Disciplines</span>
        </div>
        <div>
          <span className="block text-[clamp(11px,2.4cqw,15px)] font-bold text-white">Custom</span>
          <span className={`${styles.micro} text-white/55`}>Solutions</span>
        </div>
      </div>
    </div>
  );
}

function GrowthChart() {
  const line = 'M2 32 C 12 31, 16 23, 26 25 S 42 31, 51 21 S 68 11, 77 15 S 90 7, 98 4';
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className={`${styles.micro} font-semibold uppercase tracking-[0.12em] text-white/60`}>Growth analytics</span>
        <span className={`${styles.micro} rounded-full bg-accent/20 px-[1.2cqw] py-[0.3cqw] font-semibold text-[#5be06a]`}>Live</span>
      </div>
      <svg viewBox="0 0 100 40" className="mt-[1.2cqw] w-full overflow-visible">
        <defs>
          <linearGradient id="sh-chart-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0753f6" />
            <stop offset="100%" stopColor="#1ab728" />
          </linearGradient>
          <linearGradient id="sh-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0753f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0753f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${line} L98 40 L2 40 Z`} fill="url(#sh-chart-fill)" />
        <path d={line} pathLength={1} stroke="url(#sh-chart-stroke)" strokeWidth="1.8" strokeLinecap="round" className={styles.draw} />
        <circle cx="98" cy="4" r="2" fill="#1ab728" className={styles.pulse} />
      </svg>
      <span className={`${styles.micro} mt-[0.8cqw] block text-white/50`}>Search · Social · Ads</span>
    </div>
  );
}

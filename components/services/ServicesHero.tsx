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
import { ArrowDown, ArrowUpRight, ChevronRight } from 'lucide-react';
import { buildBreadcrumbJsonLd, serializeJsonLd } from '@/lib/seo';
import ShinyButton from '@/components/ui/shiny-button';
import styles from './ServicesHero.module.css';

/**
 * Services page hero: editorial headline on the left, an animated "service ecosystem" on the right:
 * a central dashboard (with the live service count) on a glowing pedestal, ringed by the nine core
 * services, each drawn as a small 3D-style object with its heading.
 *
 * Layout (the H1 headline needs ~775px to stay on two lines at 52px):
 * - 1280px and up: text and illustration side by side. The illustration column is
 *   min(31rem, 100vw − 55rem), which leaves the text column ≥ 784px.
 * - 1024–1279px: the text column is `display: contents`, so the H1 spans the full width; the lead
 *   and buttons sit beside the illustration below it.
 * - Below 1024px: stacked, illustration under the buttons.
 *
 * Rendering rules:
 * - All text is server-rendered and visible without JavaScript. Entrance motion is CSS
 *   (mask reveal, pop-in, drift); motion/react only adds pointer parallax and the count-up.
 * - The illustration is decorative (aria-hidden); the nine services are also in a visually
 *   hidden list for assistive technology.
 */

export interface ServicesHeroCategory {
  id: string;
  name: string;
}

interface ServicesHeroProps {
  /** Directory categories (kept for the page's API; the illustration shows the nine core services). */
  categories?: ServicesHeroCategory[];
  serviceCount: number;
  /** In-page anchor of the service directory. */
  directoryId: string;
}

const HEADING = 'Comprehensive IT & Creative Solutions';
const DESCRIPTION =
  'From powerful websites to intelligent digital solutions, we transform ideas into meaningful digital experiences that help businesses grow.';
const WHATSAPP_URL = `https://wa.me/918921540183?text=${encodeURIComponent(
  "Hi Grehasoft, I'm interested in discussing a project. Could you please assist me?",
)}`;
const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
];

type Tone = 'blue' | 'green' | 'brand';
type ObjectKind = 'web' | 'ecommerce' | 'software' | 'mobile' | 'seo' | 'marketing' | 'social' | 'ads' | 'branding';

/**
 * The nine services around the dashboard. x/y: centre of the object tile in stage percent;
 * depth: pointer-parallax px; d/fd: entrance delay and drift duration. Build services are blue,
 * growth services green, branding uses the full brand gradient.
 */
const SERVICES: { name: string; kind: ObjectKind; tone: Tone; x: number; y: number; depth: number; d: number; fd: number }[] = [
  { name: 'Website Design & Development', kind: 'web', tone: 'blue', x: 16, y: 10, depth: 10, d: 0.95, fd: 6.2 },
  { name: 'Custom Software Development', kind: 'software', tone: 'blue', x: 50, y: 7, depth: 13, d: 1.0, fd: 5.6 },
  { name: 'Mobile App Development', kind: 'mobile', tone: 'blue', x: 84, y: 10, depth: 11, d: 1.05, fd: 6.6 },
  { name: 'E-Commerce Development', kind: 'ecommerce', tone: 'blue', x: 14, y: 40, depth: 14, d: 1.1, fd: 5.9 },
  { name: 'SEO Services', kind: 'seo', tone: 'green', x: 86, y: 40, depth: 12, d: 1.15, fd: 6.4 },
  { name: 'Graphic Design & Branding', kind: 'branding', tone: 'brand', x: 14, y: 69, depth: 9, d: 1.2, fd: 6.9 },
  { name: 'Google Ads & PPC', kind: 'ads', tone: 'green', x: 86, y: 69, depth: 13, d: 1.25, fd: 5.7 },
  { name: 'Digital Marketing', kind: 'marketing', tone: 'green', x: 36, y: 84, depth: 10, d: 1.3, fd: 6.3 },
  { name: 'Social Media Marketing', kind: 'social', tone: 'green', x: 64, y: 84, depth: 12, d: 1.35, fd: 6.0 },
];

/** Where the connector lines start (centre of the dashboard). */
const CORE = { x: 50, y: 45 };

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

export default function ServicesHero({ serviceCount, directoryId }: ServicesHeroProps) {
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

        <div className="relative mx-auto w-full max-w-[1380px] px-4 pt-28 pb-14 sm:px-6 sm:pt-32 lg:px-8 lg:pt-28 lg:pb-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 xl:grid-cols-[minmax(0,1fr)_min(31rem,calc(100vw-55rem))] xl:items-center xl:gap-8">
            {/* ------------------------------ left column: breadcrumb, heading, copy, CTAs ------------------------------ */}
            {/* 1024–1279px: `contents`, so the breadcrumb and H1 span the full width and the copy sits beside the art. */}
            <div className="relative z-10 flex min-w-0 flex-col lg:contents xl:flex">
              <nav aria-label="Breadcrumb" className={`${styles.slide} relative z-10 text-sm font-medium text-white/60 lg:col-span-12`} style={{ '--d': '0s' } as CSSProperties}>
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

              {/* One H1 for the page: the pill (keyword label) and the large headline, read as
                  "Comprehensive IT & Creative Solutions: We build digital experiences that matter".
                  The headline uses the site heading scale (36 / 48 / 52px); the pill keeps its own size. */}
              <h1
                id="services-hero-title"
                className="relative z-10 flex flex-col text-4xl font-bold uppercase leading-[1.06] tracking-[-0.035em] text-white md:text-5xl lg:col-span-12 lg:text-[3.25rem] lg:leading-[1.05]"
              >
                <span
                  className={`${styles.slide} mt-5 inline-flex self-start items-center gap-2.5 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.06] py-2 pr-3 pl-2.5 text-[11px] font-semibold leading-normal uppercase tracking-[0.07em] text-white/85 max-[349px]:gap-2 max-[349px]:pr-2.5 max-[349px]:pl-2 max-[349px]:text-[10.5px] max-[349px]:tracking-[0.05em] sm:mt-6 sm:gap-3 sm:whitespace-normal sm:pr-4 sm:pl-3 sm:text-[13px] sm:tracking-[0.16em] lg:mt-7 xl:mt-8`}
                  style={{ '--d': '0.05s' } as CSSProperties}
                >
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className={`${styles.pulse} absolute inset-0 rounded-full bg-accent/60`} />
                    <span className="relative h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {HEADING}
                </span>
                <span className="sr-only">: </span>

                <span className="mt-5 block sm:mt-6 lg:mt-8">
                  <span className={styles.line}>
                    <span className={styles.lineInner} style={{ '--i': 0 } as CSSProperties}>
                      We build digital experiences
                    </span>
                  </span>
                  <span className={styles.line}>
                    <span className={styles.lineInner} style={{ '--i': 1 } as CSSProperties}>
                      that matter
                    </span>
                  </span>
                </span>
              </h1>

              <div className="relative z-10 lg:col-span-7 lg:self-start">
                <p
                  className={`${styles.slide} mt-5 max-w-[34rem] text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg lg:mt-7 xl:mt-8`}
                  style={{ '--d': '0.35s' } as CSSProperties}
                >
                  {DESCRIPTION}
                </p>

                <div
                  className={`${styles.slide} mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 lg:mt-9 xl:mt-10`}
                  style={{ '--d': '0.45s' } as CSSProperties}
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.glass} group inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* ------------------------------ right column: service ecosystem ------------------------------ */}
            <div className="min-w-0 lg:col-span-5 lg:self-start xl:col-span-1 xl:self-auto">
              {/* The nine services for assistive technology (the illustration itself is decorative). */}
              <ul className="sr-only" aria-label="Our core services">
                {SERVICES.map((service) => (
                  <li key={service.name}>{service.name}</li>
                ))}
              </ul>

              <div ref={artRef} className="relative mx-auto w-full max-w-[358px] sm:max-w-[540px] lg:max-w-none" aria-hidden="true">
                <div className={`${styles.stage} ${styles.stageIn}`}>
                  {/* Pedestal, orbit rings and connector lines */}
                  <Layer x={springX} y={springY} depth={-4} className="absolute inset-0">
                    <Orbits />
                  </Layer>

                  {/* Central dashboard */}
                  <Layer x={springX} y={springY} depth={6} rotate={3} className={styles.place} style={place(28, 27, 44)}>
                    <div className={`${styles.pop} ${styles.glassDark} ${styles.sheen} ${styles.tilt} aspect-[4/3] overflow-hidden rounded-[2.6cqw]`} style={{ '--d': '0.45s' } as CSSProperties}>
                      <Dashboard />
                    </div>
                  </Layer>

                  {/* Live service count */}
                  <Layer x={springX} y={springY} depth={11} className={styles.place} style={place(56, 50, 19)}>
                    <div className={`${styles.float} ${styles.glass} ${styles.sheen} rounded-[2.6cqw] p-[1.8cqw]`} style={floatVars(0.85, 5.6, 5)}>
                      <Gauge countText={countText} />
                    </div>
                  </Layer>

                  {/* Growth trend */}
                  <Layer x={springX} y={springY} depth={9} className={styles.place} style={place(26, 52, 17)}>
                    <div className={`${styles.float} ${styles.glass} ${styles.sheen} rounded-[2.6cqw] p-[1.6cqw]`} style={floatVars(0.95, 6.8, 5)}>
                      <GrowthChart />
                    </div>
                  </Layer>

                  {/* The nine services */}
                  {SERVICES.map((service) => (
                    <Layer key={service.name} x={springX} y={springY} depth={service.depth} className={styles.node} style={{ '--x': service.x, '--y': service.y } as CSSProperties}>
                      <div className={`${styles.float} flex flex-col items-center`} style={floatVars(service.d, service.fd, 5)}>
                        <div className={`${styles.tile} ${styles.sheen} ${TONE_CLASS[service.tone]}`}>
                          <ServiceObject kind={service.kind} />
                        </div>
                        <span className={styles.label}>{service.name}</span>
                      </div>
                    </Layer>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomEdge} aria-hidden="true" />
      </section>
    </MotionConfig>
  );
}

const TONE_CLASS: Record<Tone, string> = {
  blue: styles.toneBlue,
  green: styles.toneGreen,
  brand: styles.toneBrand,
};

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

const TONE_STROKE: Record<Tone, string> = { blue: 'url(#sh-line-blue)', green: 'url(#sh-line-green)', brand: 'url(#sh-line-brand)' };

/** Pedestal under the dashboard, tilted orbit rings with travelling nodes, and a connector to every service. */
function Orbits() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" fill="none" preserveAspectRatio="none">
      <defs>
        <radialGradient id="sh-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0753f6" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#0753f6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0753f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sh-pedestal" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3d7bff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#0753f6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#05044a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sh-pedestal-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0753f6" stopOpacity="0" />
          <stop offset="35%" stopColor="#8fb2ff" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#5be06a" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#1ab728" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sh-line-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fb2ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8fb2ff" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="sh-line-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5be06a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5be06a" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="sh-line-brand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fb2ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#5be06a" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Ambient core glow */}
      <ellipse cx={CORE.x} cy={CORE.y + 4} rx="36" ry="32" fill="url(#sh-core-glow)" />

      {/* Orbit rings, flattened into a tilted plane */}
      <g transform="rotate(-10 50 48)">
        <ellipse cx="50" cy="48" rx="45" ry="40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.25" />
        <ellipse cx="50" cy="48" rx="38" ry="33" stroke="rgba(143,178,255,0.16)" strokeWidth="0.25" strokeDasharray="0.6 1.4" />
        <ellipse cx="50" cy="48" rx="30" ry="26" stroke="rgba(91,224,106,0.12)" strokeWidth="0.2" strokeDasharray="0.3 1.2" />
        <g transform="translate(50 48) scale(1 0.889) translate(-50 -48)">
          <g className={styles.spin} style={{ '--sd': '46s', transformOrigin: '50px 48px' } as CSSProperties}>
            <circle cx="95" cy="48" r="0.9" fill="#8fb2ff" />
            <circle cx="95" cy="48" r="2.4" fill="#0753f6" opacity="0.35" />
          </g>
          <g className={styles.spinReverse} style={{ '--sd': '68s', transformOrigin: '50px 48px' } as CSSProperties}>
            <circle cx="12" cy="48" r="0.8" fill="#5be06a" />
            <circle cx="12" cy="48" r="2.2" fill="#1ab728" opacity="0.3" />
          </g>
          <g className={styles.spin} style={{ '--sd': '82s', transformOrigin: '50px 48px' } as CSSProperties}>
            <circle cx="50" cy="15" r="0.6" fill="#ffffff" opacity="0.8" />
          </g>
        </g>
      </g>

      {/* Connector from the core to every service */}
      {SERVICES.map((service) => {
        const cx = (CORE.x + service.x) / 2 + (service.y - CORE.y) * 0.16;
        const cy = (CORE.y + service.y) / 2 - (service.x - CORE.x) * 0.16;
        return (
          <path
            key={service.name}
            d={`M${CORE.x} ${CORE.y} Q${cx.toFixed(2)} ${cy.toFixed(2)} ${service.x} ${service.y}`}
            stroke={TONE_STROKE[service.tone]}
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeDasharray="1 2.4"
            className={styles.flow}
          />
        );
      })}

      {/* Glowing pedestal under the dashboard */}
      <ellipse cx="50" cy="70" rx="27" ry="6.5" fill="url(#sh-pedestal)" />
      <ellipse cx="50" cy="70" rx="24" ry="5.2" stroke="url(#sh-pedestal-rim)" strokeWidth="0.45" />
      <ellipse cx="50" cy="70" rx="18" ry="3.8" stroke="rgba(143,178,255,0.35)" strokeWidth="0.25" strokeDasharray="0.8 1" className={styles.flow} />
      <ellipse cx="50" cy="70.6" rx="11" ry="2.2" fill="#8fb2ff" opacity="0.18" />
    </svg>
  );
}

/** Central dashboard: browser chrome, website preview, traffic bars, ring chart and trend line. */
function Dashboard() {
  const bars = [42, 64, 52, 80, 60, 92, 74];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-[0.8cqw] border-b border-white/10 px-[1.8cqw] py-[1.2cqw]">
        {['#ff6b6b', '#ffd166', '#5be06a'].map((c) => (
          <span key={c} className="h-[0.9cqw] w-[0.9cqw] rounded-full" style={{ background: c, opacity: 0.75 }} />
        ))}
        <span className="ml-[1.4cqw] h-[1.6cqw] flex-1 rounded-full bg-white/[0.07]" />
        <span className="h-[1.6cqw] w-[4cqw] rounded-full bg-primary/40" />
      </div>

      <div className="grid flex-1 grid-cols-[1.3fr_1fr] gap-[1.6cqw] p-[1.8cqw]">
        {/* Website preview + traffic bars */}
        <div className="flex flex-col gap-[1.4cqw]">
          <div className="rounded-[1.2cqw] bg-gradient-to-br from-primary/45 via-primary/20 to-transparent p-[1.4cqw]">
            <span className="block h-[1.2cqw] w-[70%] rounded-full bg-white/85" />
            <span className="mt-[0.9cqw] block h-[0.7cqw] w-[88%] rounded-full bg-white/30" />
            <span className="mt-[0.6cqw] block h-[0.7cqw] w-[60%] rounded-full bg-white/30" />
            <span className="mt-[1.2cqw] block h-[2.2cqw] w-[9cqw] rounded-full bg-primary shadow-[0_0_16px_-2px_rgba(7,83,246,0.9)]" />
          </div>
          <div className="flex flex-1 items-end gap-[0.7cqw] rounded-[1.2cqw] bg-white/[0.04] p-[1.2cqw]">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`${styles.grow} flex-1 rounded-t-[0.5cqw] ${i === bars.length - 2 ? 'bg-gradient-to-t from-accent to-[#5be06a]' : 'bg-gradient-to-t from-primary to-[#5b8cff]'}`}
                style={{ height: `${h}%`, '--i': i } as CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Ring chart + KPI rows */}
        <div className="flex flex-col gap-[1.4cqw]">
          <div className="flex items-center justify-center rounded-[1.2cqw] bg-white/[0.04] p-[1.2cqw]">
            <svg viewBox="0 0 40 40" className="w-[68%]">
              <circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.1)" strokeWidth="5" fill="none" />
              <circle cx="20" cy="20" r="14" stroke="#0753f6" strokeWidth="5" fill="none" strokeDasharray="52 88" strokeLinecap="round" transform="rotate(-90 20 20)" />
              <circle cx="20" cy="20" r="14" stroke="#1ab728" strokeWidth="5" fill="none" strokeDasharray="26 88" strokeDashoffset="-56" strokeLinecap="round" transform="rotate(-90 20 20)" />
              <circle cx="20" cy="20" r="7.5" fill="rgba(255,255,255,0.06)" />
            </svg>
          </div>
          {[['#0753f6', 78], ['#1ab728', 58], ['#8fb2ff', 44]].map(([c, w]) => (
            <div key={c as string} className="flex items-center gap-[0.9cqw]">
              <span className="h-[1.4cqw] w-[1.4cqw] shrink-0 rounded-[0.4cqw]" style={{ background: c as string }} />
              <span className="h-[0.7cqw] rounded-full bg-white/25" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gauge({ countText }: { countText: MotionValue<string> }) {
  return (
    <div className="relative">
      <span className={`${styles.pulse} absolute top-0 right-0 h-[1cqw] w-[1cqw] rounded-full bg-accent`} />
      <svg viewBox="0 0 100 62" className="w-full">
        {TICKS.map((tick, i) => (
          <line
            key={i}
            x1={tick.from[0]}
            y1={tick.from[1]}
            x2={tick.to[0]}
            y2={tick.to[1]}
            strokeWidth="2.6"
            strokeLinecap="round"
            className={styles.tick}
            style={{ '--c': tick.color, '--i': i } as CSSProperties}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-[2%] text-center">
        <motion.span className={`${styles.gaugeValue} block font-bold text-white`}>{countText}</motion.span>
        <span className={`${styles.gaugeCaption} block font-medium text-white/65`}>Services</span>
      </div>
    </div>
  );
}

function GrowthChart() {
  const line = 'M2 32 C 12 31, 16 23, 26 25 S 42 31, 51 21 S 68 11, 77 15 S 90 7, 98 4';
  return (
    <svg viewBox="0 0 100 40" className="w-full overflow-visible">
      <defs>
        <linearGradient id="sh-chart-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0753f6" />
          <stop offset="100%" stopColor="#1ab728" />
        </linearGradient>
        <linearGradient id="sh-chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0753f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0753f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[10, 20, 30].map((y) => (
        <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
      ))}
      <path d={`${line} L98 40 L2 40 Z`} fill="url(#sh-chart-fill)" />
      <path d={line} pathLength={1} stroke="url(#sh-chart-stroke)" strokeWidth="2" strokeLinecap="round" className={styles.draw} />
      <circle cx="98" cy="4" r="2.4" fill="#1ab728" className={styles.pulse} />
    </svg>
  );
}

/* ------------------------------ service objects (64×64, light from the top-left) ------------------------------ */

function ServiceObject({ kind }: { kind: ObjectKind }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full overflow-visible" fill="none">
      {OBJECTS[kind]}
    </svg>
  );
}

const OBJECTS: Record<ObjectKind, ReactNode> = {
  // Browser window with a page layout, image block and pointer
  web: (
    <>
      <defs>
        <linearGradient id="sh-o-web" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d2a8f" />
          <stop offset="100%" stopColor="#0a0d5e" />
        </linearGradient>
        <linearGradient id="sh-o-web-img" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
      </defs>
      <path d="M10 15h46a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10" fill="#050a3f" transform="translate(2 2)" opacity="0.7" />
      <rect x="6" y="13" width="50" height="36" rx="4" fill="url(#sh-o-web)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      <path d="M6 17a4 4 0 0 1 4-4h42a4 4 0 0 1 4 4v3H6z" fill="rgba(255,255,255,0.12)" />
      <circle cx="10.5" cy="16.6" r="1" fill="#ff6b6b" />
      <circle cx="14" cy="16.6" r="1" fill="#ffd166" />
      <circle cx="17.5" cy="16.6" r="1" fill="#5be06a" />
      <rect x="11" y="25" width="20" height="3.4" rx="1.7" fill="#fff" opacity="0.92" />
      <rect x="11" y="31" width="15" height="2.2" rx="1.1" fill="#fff" opacity="0.4" />
      <rect x="11" y="35" width="18" height="2.2" rx="1.1" fill="#fff" opacity="0.3" />
      <rect x="11" y="40" width="11" height="4.6" rx="2.3" fill="#0753f6" />
      <rect x="35" y="24.5" width="16" height="19" rx="2.4" fill="url(#sh-o-web-img)" />
      <path d="M37 41l4-5 3 3 2.5-3 3 5z" fill="#fff" opacity="0.55" />
      <circle cx="46.5" cy="29" r="1.8" fill="#fff" opacity="0.7" />
      <path d="M44 42.5l0 9.5 2.6-2.4 1.9 4.2 1.8-0.8-1.9-4.1 3.5-0.2z" fill="#fff" stroke="#05044a" strokeWidth="0.8" strokeLinejoin="round" />
    </>
  ),
  // 3D shopping bag with a price tag and a product card behind
  ecommerce: (
    <>
      <defs>
        <linearGradient id="sh-o-bag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
        <linearGradient id="sh-o-bag-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0546d6" />
          <stop offset="100%" stopColor="#032c8f" />
        </linearGradient>
      </defs>
      <rect x="34" y="10" width="20" height="26" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" transform="rotate(10 44 23)" />
      <rect x="37" y="13" width="14" height="10" rx="1.6" fill="#8fb2ff" opacity="0.45" transform="rotate(10 44 23)" />
      <path d="M22 24c0-6 3.4-10 7-10s7 4 7 10" stroke="#cfe0ff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 22l7-3 2.5 30-7.5 5z" fill="url(#sh-o-bag-side)" />
      <path d="M14 22h26l2 32H12z" fill="url(#sh-o-bag)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
      <path d="M14 22h26l0.4 5H13.6z" fill="#fff" opacity="0.18" />
      <path d="M16 24l-1.8 26" stroke="#fff" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="21" cy="28" r="1.5" fill="#05044a" opacity="0.5" />
      <circle cx="33" cy="28" r="1.5" fill="#05044a" opacity="0.5" />
      <path d="M44 40l9-3.6 3.4 8.6-9 3.6z" fill="#1ab728" />
      <circle cx="47.6" cy="41.4" r="1.1" fill="#fff" />
      <path d="M18 44h16" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  // Code editor with brackets, slash and a turning gear
  software: (
    <>
      <defs>
        <linearGradient id="sh-o-code" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16207f" />
          <stop offset="100%" stopColor="#070a52" />
        </linearGradient>
        <linearGradient id="sh-o-gear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fb2ff" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
      </defs>
      <rect x="9" y="17" width="44" height="32" rx="4" fill="#050a3f" opacity="0.7" transform="translate(2 2)" />
      <rect x="7" y="15" width="44" height="32" rx="4" fill="url(#sh-o-code)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      <rect x="7" y="15" width="44" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <path d="M18 27l-5 4.5 5 4.5" stroke="#8fb2ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 27l5 4.5-5 4.5" stroke="#8fb2ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.5 25.5l-3.5 12" stroke="#5be06a" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="40" width="14" height="2" rx="1" fill="#fff" opacity="0.35" />
      <rect x="28" y="40" width="9" height="2" rx="1" fill="#5be06a" opacity="0.6" />
      <g className={styles.gear}>
        <path
          d="M50 34.5l2.2.4.8 2.4 2-1.2 1.8 1.4-.9 2.2 1.9 1.6 2.3-.2.5 2.3-2.1.9.2 2.5 2 1.1-.9 2.1-2.3-.3-1.3 2.1 1.2 2-1.9 1.4-1.7-1.5-2.3.9-.4 2.3h-2.4l-.5-2.3-2.3-.8-1.7 1.5-1.9-1.4 1.2-2-1.3-2.1-2.3.3-.9-2.1 2-1.1.2-2.5-2.1-.9.5-2.3 2.3.2 1.9-1.6-.9-2.2 1.8-1.4 2 1.2.8-2.4z"
          fill="url(#sh-o-gear)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.5"
        />
        <circle cx="50" cy="46" r="4" fill="#05044a" stroke="#cfe0ff" strokeWidth="0.8" />
      </g>
    </>
  ),
  // Tilted phone with an app grid and a notification
  mobile: (
    <>
      <defs>
        <linearGradient id="sh-o-phone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a3aa8" />
          <stop offset="100%" stopColor="#090c55" />
        </linearGradient>
      </defs>
      <g transform="rotate(-10 32 34)">
        <rect x="22" y="7" width="24" height="48" rx="5" fill="#03062e" transform="translate(2.5 1.5)" />
        <rect x="20" y="6" width="24" height="48" rx="5" fill="url(#sh-o-phone)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
        <rect x="22.4" y="9" width="19.2" height="42" rx="3" fill="#05044a" />
        <rect x="28.5" y="10.2" width="7" height="1.6" rx="0.8" fill="#000" opacity="0.6" />
        {[0, 1, 2].flatMap((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={24.4 + col * 5.6}
              y={15 + row * 6}
              width="4.4"
              height="4.4"
              rx="1.2"
              fill={['#0753f6', '#1ab728', '#5b8cff', '#8fb2ff', '#0753f6', '#5be06a', '#1ab728', '#8fb2ff', '#0753f6'][row * 3 + col]}
              opacity="0.9"
            />
          )),
        )}
        <rect x="24.4" y="34" width="15.2" height="8" rx="1.8" fill="rgba(255,255,255,0.1)" />
        <path d="M25.6 40l3-2.6 2.6 1.6 3-3 3.8 2" stroke="#5be06a" strokeWidth="1" strokeLinecap="round" fill="none" />
        <rect x="28" y="47.5" width="8" height="1.2" rx="0.6" fill="#fff" opacity="0.5" />
        <path d="M21 9c4-2 9-2.5 14-2" stroke="#fff" strokeOpacity="0.35" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      <rect x="40" y="13" width="17" height="8" rx="4" fill="#1ab728" />
      <circle cx="44.5" cy="17" r="2" fill="#fff" />
      <rect x="48" y="15.8" width="6" height="2.4" rx="1.2" fill="#fff" opacity="0.8" />
    </>
  ),
  // Magnifier over rising ranking bars with an up arrow
  seo: (
    <>
      <defs>
        <linearGradient id="sh-o-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0f8a1e" />
          <stop offset="100%" stopColor="#5be06a" />
        </linearGradient>
        <radialGradient id="sh-o-lens" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#8fb2ff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0753f6" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <path d="M6 52h52" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
      {[[9, 40], [19, 32], [29, 24]].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x + 8} ${y}l2.4-1.6v${52 - y - 1.6}l-2.4 1.6z`} fill="#0b6b17" />
          <rect x={x} y={y} width="8" height={52 - y} rx="1" fill="url(#sh-o-bar)" />
        </g>
      ))}
      <path d="M10 30l9-7 8 4 11-11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <path d="M33 16h5v5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <g className={styles.sway}>
        <path d="M49.5 41.5l7.5 7.5" stroke="#cfe0ff" strokeWidth="5" strokeLinecap="round" />
        <path d="M49.5 41.5l7.5 7.5" stroke="#0753f6" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="43" cy="35" r="10" fill="url(#sh-o-lens)" stroke="#cfe0ff" strokeWidth="2.6" />
        <path d="M37.5 31.5a7 7 0 0 1 5-3.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
      </g>
    </>
  ),
  // Funnel with a megaphone and a growth arrow
  marketing: (
    <>
      <defs>
        <linearGradient id="sh-o-funnel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5be06a" />
          <stop offset="100%" stopColor="#0f8a1e" />
        </linearGradient>
        <linearGradient id="sh-o-mega" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fb2ff" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="16" rx="16" ry="4" fill="#5be06a" opacity="0.9" />
      <path d="M9 16h32l-4 9H13z" fill="url(#sh-o-funnel)" />
      <path d="M13.5 27h23l-4 9h-15z" fill="url(#sh-o-funnel)" opacity="0.88" />
      <path d="M18 38h14l-3.5 9h-7z" fill="url(#sh-o-funnel)" opacity="0.76" />
      <path d="M9 16h32l-0.8 1.8H9.8z" fill="#fff" opacity="0.35" />
      <ellipse cx="25" cy="16" rx="12" ry="2.4" fill="#05044a" opacity="0.35" />
      <circle cx="25" cy="52" r="2.4" fill="#5be06a" />
      <path d="M42 36l12-6v20l-12-6z" fill="url(#sh-o-mega)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
      <rect x="37" y="36" width="5.5" height="8" rx="1.6" fill="#cfe0ff" />
      <path d="M40 44l1.6 6" stroke="#cfe0ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M57 34c2 2.5 2 9.5 0 12" stroke="#5be06a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M44 22l6-6 4 3 6-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <path d="M56 12h4v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </>
  ),
  // Social post card with reactions, a comment and a share node
  social: (
    <>
      <defs>
        <linearGradient id="sh-o-post" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d2a8f" />
          <stop offset="100%" stopColor="#090c55" />
        </linearGradient>
        <linearGradient id="sh-o-img" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1ab728" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
      </defs>
      <rect x="10" y="12" width="34" height="42" rx="4" fill="#050a3f" opacity="0.7" transform="translate(2 2)" />
      <rect x="8" y="10" width="34" height="42" rx="4" fill="url(#sh-o-post)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      <circle cx="14" cy="16" r="3" fill="#5be06a" />
      <rect x="19" y="14.4" width="13" height="1.8" rx="0.9" fill="#fff" opacity="0.8" />
      <rect x="19" y="17.6" width="8" height="1.4" rx="0.7" fill="#fff" opacity="0.35" />
      <rect x="11" y="22" width="28" height="17" rx="2.4" fill="url(#sh-o-img)" />
      <path d="M13 37l7-7 5 4 4-3 8 6z" fill="#fff" opacity="0.4" />
      <path d="M14 45.5c0-1.4 1.8-1.8 2.4-0.6 0.6-1.2 2.4-0.8 2.4 0.6 0 1.6-2.4 3-2.4 3s-2.4-1.4-2.4-3z" fill="#ff6b8a" />
      <rect x="22" y="45" width="6" height="1.6" rx="0.8" fill="#fff" opacity="0.4" />
      <g className={styles.beat}>
        <circle cx="49" cy="22" r="8" fill="#1ab728" />
        <path d="M45.4 21.2c0-2.2 2.8-2.8 3.6-1 .8-1.8 3.6-1.2 3.6 1 0 2.4-3.6 4.6-3.6 4.6s-3.6-2.2-3.6-4.6z" fill="#fff" />
      </g>
      <path d="M45 36h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-4 3v-3h-1a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" fill="#0753f6" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
      <circle cx="48" cy="42" r="1" fill="#fff" />
      <circle cx="51" cy="42" r="1" fill="#fff" />
      <circle cx="54" cy="42" r="1" fill="#fff" />
    </>
  ),
  // Ad card with a click pointer, ripples and a bid coin
  ads: (
    <>
      <defs>
        <linearGradient id="sh-o-ad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d2a8f" />
          <stop offset="100%" stopColor="#090c55" />
        </linearGradient>
        <radialGradient id="sh-o-coin" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#a8f5b0" />
          <stop offset="55%" stopColor="#1ab728" />
          <stop offset="100%" stopColor="#0b6b17" />
        </radialGradient>
      </defs>
      <rect x="8" y="14" width="42" height="26" rx="4" fill="#050a3f" opacity="0.7" transform="translate(2 2)" />
      <rect x="6" y="12" width="42" height="26" rx="4" fill="url(#sh-o-ad)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      <rect x="10" y="16" width="8" height="4.4" rx="1.2" fill="#1ab728" />
      <rect x="21" y="16.6" width="20" height="2.4" rx="1.2" fill="#fff" opacity="0.85" />
      <rect x="10" y="24" width="32" height="1.8" rx="0.9" fill="#fff" opacity="0.35" />
      <rect x="10" y="28" width="24" height="1.8" rx="0.9" fill="#fff" opacity="0.25" />
      <rect x="10" y="32" width="10" height="3" rx="1.5" fill="#0753f6" />
      <circle cx="38" cy="40" r="5" stroke="#5be06a" strokeWidth="0.8" opacity="0.6" className={styles.ripple} />
      <circle cx="38" cy="40" r="9" stroke="#5be06a" strokeWidth="0.6" opacity="0.35" className={styles.ripple} />
      <path d="M36.5 37.5l0 11 3-2.8 2.2 4.8 2-0.9-2.2-4.7 4-0.3z" fill="#fff" stroke="#05044a" strokeWidth="0.8" strokeLinejoin="round" />
      <ellipse cx="53" cy="52.5" rx="7.5" ry="2.4" fill="#0b6b17" />
      <rect x="45.5" y="47" width="15" height="5.5" fill="#0b6b17" />
      <ellipse cx="53" cy="47" rx="7.5" ry="2.4" fill="url(#sh-o-coin)" />
      <ellipse cx="53" cy="44" rx="7.5" ry="2.4" fill="#0f8a1e" />
      <rect x="45.5" y="41.5" width="15" height="2.5" fill="#0f8a1e" />
      <ellipse cx="53" cy="41.5" rx="7.5" ry="2.4" fill="url(#sh-o-coin)" stroke="#a8f5b0" strokeOpacity="0.5" strokeWidth="0.5" />
    </>
  ),
  // Pen tool on a bezier curve, colour swatches and a logo mark
  branding: (
    <>
      <defs>
        <linearGradient id="sh-o-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0753f6" />
          <stop offset="100%" stopColor="#1ab728" />
        </linearGradient>
        <linearGradient id="sh-o-nib" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#8fb2ff" />
        </linearGradient>
      </defs>
      {[['#05044a', -24], ['#0753f6', -10], ['#1ab728', 4]].map(([c, r]) => (
        <rect key={c as string} x="8" y="26" width="10" height="26" rx="2.6" fill={c as string} stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" transform={`rotate(${r} 13 50)`} />
      ))}
      <path d="M10 22C20 6 38 30 52 12" stroke="url(#sh-o-brand)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M10 22l10-12M52 12l-6 12" stroke="#cfe0ff" strokeWidth="0.7" strokeDasharray="1.4 1.2" />
      <rect x="8.4" y="20.4" width="3.2" height="3.2" fill="#fff" stroke="#0753f6" strokeWidth="0.6" />
      <rect x="50.4" y="10.4" width="3.2" height="3.2" fill="#fff" stroke="#1ab728" strokeWidth="0.6" />
      <circle cx="20" cy="10" r="1.6" fill="#0753f6" />
      <circle cx="46" cy="24" r="1.6" fill="#1ab728" />
      <path d="M36 52l-2-14 8-8 8 8-2 14z" fill="url(#sh-o-nib)" stroke="#05044a" strokeWidth="0.8" strokeLinejoin="round" />
      <path d="M42 30v13" stroke="#05044a" strokeWidth="0.8" />
      <circle cx="42" cy="43.5" r="1.6" fill="#05044a" />
      <path d="M36 52h12v3.5H36z" fill="#0753f6" />
      <path d="M53 42l4.5-2.6 4.5 2.6v5.2l-4.5 2.6-4.5-2.6z" fill="url(#sh-o-brand)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
      <path d="M57.5 42.2v4.8" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    </>
  ),
};

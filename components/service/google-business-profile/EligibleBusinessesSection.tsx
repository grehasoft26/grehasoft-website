import type { CSSProperties } from 'react';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, CENTRED_HEADING_CLASS, EYEBROW_CLASS } from './headingStyles';
import RevealOnView from './RevealOnView';
import styles from './EligibleBusinesses.module.css';

interface Props {
  eligible: GoogleBusinessProfileContent['eligible'];
}

/*
 * "Who Can Benefit" as a roadmap journey.
 *
 * 1024px and up (up to six categories): three cards above a curved road and the rest below it,
 * numbered as one serpentine journey: 01–03 left to right on top, 04–06 right to left underneath.
 * The road runs from a start pin (lower left) to an end pin (upper right), with markers under each
 * column. Below 1024px, or with more than six categories, the cards stack along a vertical road.
 *
 * The categories and copy come from WordPress unchanged; the list keeps the journey order. Cards are
 * text only (title and description).
 */

const ROAD_LAYOUT_MAX = 6;

// Grid cell of each card in the roadmap layout (written in full so Tailwind generates the classes).
// Cards stretch to their row, so the cards in a row share one height.
const CELL = [
  'lg:col-start-1 lg:row-start-1',
  'lg:col-start-2 lg:row-start-1',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-3 lg:row-start-3',
  'lg:col-start-2 lg:row-start-3',
  'lg:col-start-1 lg:row-start-3',
];

// Timeline marker colours along the journey (stacked layout): blue → cyan → green.
const STEP_COLOURS = ['#0753f6', '#1167f2', '#0f8fe0', '#0ea5c6', '#14b07f', '#1ab728'];

// The road: y = 60 − 26·sin(π(x − 200) / 400) over a 1200 × 120 box. It crosses the centre line at
// x = 200, 600 and 1000 (the column centres), where the markers sit, and ends low on the left (start
// pin) and high on the right (end pin), as in the reference.
const ROAD_PATH = Array.from({ length: 121 }, (_, i) => {
  const x = i * 10;
  const y = 60 - 26 * Math.sin((Math.PI * (x - 200)) / 400);
  return `${i === 0 ? 'M' : 'L'}${x} ${y.toFixed(2)}`;
}).join(' ');

/** Green location pin. `id` keeps each instance's gradient unique (one may sit in a hidden layout). */
function LocationPin({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 30" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2fd06a" />
          <stop offset="100%" stopColor="#13973a" />
        </linearGradient>
      </defs>
      <path
        d="M12 1C5.9 1 1 5.8 1 11.8 1 19.6 10.4 28 10.8 28.4c.7.6 1.7.6 2.4 0C13.6 28 23 19.6 23 11.8 23 5.8 18.1 1 12 1Z"
        fill={`url(#${id})`}
      />
      <circle cx="12" cy="11.5" r="4.2" fill="#fff" />
    </svg>
  );
}

/** The curved road between the two rows of cards (1024px and up). Decorative. */
function Roadmap() {
  return (
    <li aria-hidden="true" role="presentation" className="relative hidden lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:block">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="gbp-eligible-road" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0753f6" />
            <stop offset="50%" stopColor="#22b8e6" />
            <stop offset="100%" stopColor="#1ab728" />
          </linearGradient>
        </defs>
        {/* Soft verge, the road itself, then a dashed centre line that flows slowly. */}
        <path d={ROAD_PATH} fill="none" stroke="url(#gbp-eligible-road)" strokeOpacity="0.18" strokeWidth="22" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path className={styles.road} pathLength={1} d={ROAD_PATH} fill="none" stroke="url(#gbp-eligible-road)" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path className={styles.flow} d={ROAD_PATH} fill="none" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.5" strokeDasharray="8 16" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Markers where the road crosses each column centre. */}
      {['16.667%', '50%', '83.333%'].map((left) => (
        <span
          key={left}
          className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-gradient-to-br from-primary to-[#22b8e6] shadow-[0_0_0_4px_rgba(7,83,246,0.15)]"
          style={{ left }}
        />
      ))}

      {/* Start pin (lower left) and end pin (upper right), standing on the road ends. */}
      <span className="absolute left-0 -translate-x-1/2 -translate-y-full" style={{ top: '71.7%' }}>
        <span className={`${styles.pinPulse} absolute bottom-0 left-1/2 -mb-2 -ml-3 h-6 w-6 rounded-full bg-accent/40`} />
        <LocationPin id="gbp-eligible-pin-start" className="relative h-9 w-7 drop-shadow-[0_6px_10px_rgba(26,183,40,0.45)]" />
      </span>
      <span className="absolute right-0 translate-x-1/2 -translate-y-full" style={{ top: '28.3%' }}>
        <span className={`${styles.pinPulse} absolute bottom-0 left-1/2 -mb-2 -ml-3 h-6 w-6 rounded-full bg-accent/40`} />
        <LocationPin id="gbp-eligible-pin-end" className="relative h-9 w-7 drop-shadow-[0_6px_10px_rgba(26,183,40,0.45)]" />
      </span>
    </li>
  );
}

/** Flowing background waves on the left, right and bottom edges. Decorative. */
function Waves() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg viewBox="0 0 400 600" preserveAspectRatio="none" className="absolute top-0 left-0 h-full w-[38%] max-w-[30rem]">
        <path d="M0 0H260C170 120 250 220 150 330 70 420 120 520 0 600Z" fill="#d6e6ff" fillOpacity="0.45" />
        <path d="M0 0H170C100 130 170 240 90 340 30 420 70 520 0 600Z" fill="#c2d9ff" fillOpacity="0.35" />
      </svg>
      <svg viewBox="0 0 400 600" preserveAspectRatio="none" className="absolute top-0 right-0 h-full w-[34%] max-w-[28rem]">
        <path d="M400 0H190C270 140 170 250 260 360 330 450 300 530 400 600Z" fill="#dff5e6" fillOpacity="0.55" />
        <path d="M400 0H290C340 150 270 250 330 350 380 440 360 520 400 600Z" fill="#c9eed5" fillOpacity="0.4" />
      </svg>
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-28 w-full md:h-36">
        <defs>
          <linearGradient id="gbp-eligible-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b9d3ff" />
            <stop offset="55%" stopColor="#d4f0ff" />
            <stop offset="100%" stopColor="#bfeccc" />
          </linearGradient>
        </defs>
        <path d="M0 120C240 60 480 170 760 110 1040 50 1220 120 1440 80V200H0Z" fill="url(#gbp-eligible-wave)" fillOpacity="0.55" />
        <path d="M0 160C300 110 560 190 860 150 1120 115 1300 160 1440 140V200H0Z" fill="url(#gbp-eligible-wave)" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

export default function EligibleBusinessesSection({ eligible }: Props) {
  const roadLayout = eligible.items.length <= ROAD_LAYOUT_MAX;

  return (
    <section aria-labelledby="gbp-eligible-title" className="bg-white px-3 py-4 sm:px-6 md:py-6 lg:px-8">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#e6f0ff_0%,#f4f8ff_35%,#ffffff_55%,#eefaf2_100%)] ring-1 ring-primary/[0.06]">
        <Waves />

        <RevealOnView className="relative mx-auto max-w-6xl px-4 py-9 sm:px-8 md:py-10 lg:px-6 lg:py-9">
          <div className={`${styles.reveal} mx-auto mb-8 max-w-5xl text-center lg:mb-7`}>
            {/* Eyebrow framed by short rules, as in the reference. */}
            <p className={`mb-3 flex items-center justify-center gap-3 ${EYEBROW_CLASS}`}>
              <span aria-hidden="true" className="hidden h-px w-12 bg-current opacity-60 sm:block" />
              {eligible.eyebrow}
              <span aria-hidden="true" className="hidden h-px w-12 bg-current opacity-60 sm:block" />
            </p>
            <h2 id="gbp-eligible-title" className={CENTRED_HEADING_CLASS} style={BRAND_HEADING_GRADIENT}>
              {eligible.title}
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-base leading-relaxed text-gray-600 md:text-lg">{eligible.intro}</p>
          </div>

          <ol
            className={`relative mx-auto max-w-2xl space-y-6 pl-9 sm:pl-14 ${
              roadLayout ? 'lg:grid lg:max-w-none lg:grid-cols-3 lg:grid-rows-[auto_5.5rem_auto] lg:space-y-0 lg:pl-0' : ''
            }`}
          >
            {/* Vertical road for the stacked layout. */}
            <li
              aria-hidden="true"
              role="presentation"
              className={`absolute top-3 bottom-3 left-[10px] w-1.5 rounded-full bg-gradient-to-b from-primary via-[#22b8e6] to-accent sm:left-[22px] ${roadLayout ? 'lg:hidden' : ''}`}
            >
              <LocationPin id="gbp-eligible-pin-vertical" className="absolute -top-8 left-1/2 h-8 w-6 -translate-x-1/2" />
            </li>

            {roadLayout ? <Roadmap /> : null}

            {eligible.items.map((item, i) => {
              const colour = STEP_COLOURS[i % STEP_COLOURS.length];

              return (
                <li
                  key={item.title}
                  className={`${styles.reveal} relative ${roadLayout ? `${CELL[i]} lg:px-2.5 xl:px-3.5` : ''}`}
                  style={{ '--i': i + 1 } as CSSProperties}
                >
                  {/* Timeline marker on the vertical road (stacked layout). */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-[18px] -left-[33px] h-5 w-5 rounded-full border-[3px] border-white shadow-[0_0_0_3px_rgba(7,83,246,0.15)] sm:-left-[41px] ${roadLayout ? 'lg:hidden' : ''}`}
                    style={{ backgroundColor: colour }}
                  />

                  <article className="relative h-full rounded-box-lg border border-white bg-white/85 px-5 py-4 shadow-[0_18px_40px_-26px_rgba(5,4,74,0.4)] ring-1 ring-primary/10 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_44px_-24px_rgba(7,83,246,0.45)] motion-reduce:transition-none xl:px-6 xl:py-5">
                    <h3 className="text-[1.0625rem] font-bold leading-snug text-dark">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>

                    {/* Gradient accent along the lower and right edges. */}
                    <span aria-hidden="true" className="absolute right-4 -bottom-px left-1/3 h-[3px] rounded-full bg-gradient-to-r from-transparent via-primary to-accent" />
                    <span aria-hidden="true" className="absolute top-1/3 -right-px bottom-4 w-[3px] rounded-full bg-gradient-to-b from-transparent via-primary/70 to-accent" />
                  </article>
                </li>
              );
            })}
          </ol>
        </RevealOnView>
      </div>
    </section>
  );
}

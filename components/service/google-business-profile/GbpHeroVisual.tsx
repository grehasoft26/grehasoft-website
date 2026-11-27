import { Globe, MapPin, MousePointerClick, Navigation, Phone, Search, Star } from 'lucide-react';
import styles from './GbpHero.module.css';

interface Props {
  /** The three interaction types from WordPress (hero.visualLabels): calls, website clicks, direction requests. */
  labels: [string, string, string];
}

const LABEL_ICONS = [Phone, MousePointerClick, Navigation];

// Mini charts: deliberately uneven, so they read as "activity" without implying growth or any figure.
const CHART_BARS = [
  [55, 80, 45, 70, 60],
  [40, 65, 75, 50, 70],
  [70, 45, 60, 80, 50],
];

const ACTIONS = [
  { icon: Phone, label: 'Call' },
  { icon: Globe, label: 'Website' },
  { icon: Navigation, label: 'Directions' },
];

const GLASS =
  'rounded-box-lg border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] shadow-[0_28px_56px_-28px_rgba(1,0,30,0.95),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md';

/** Location pin in the brand blue → green gradient (not a Google Maps pin). */
function BrandPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="gbp-hero-pin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d8bff" />
          <stop offset="55%" stopColor="#0753f6" />
          <stop offset="100%" stopColor="#1ab728" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5c-4.6 0-8.3 3.6-8.3 8.1 0 5.9 7.2 12.1 7.6 12.4.4.3.9.3 1.3 0 .4-.3 7.6-6.5 7.6-12.4 0-4.5-3.7-8.1-8.2-8.1Z"
        fill="url(#gbp-hero-pin)"
      />
      <circle cx="12" cy="9.6" r="3.1" fill="#fff" />
    </svg>
  );
}

/** Background map: road lines, a service-area circle and the pin. Desktop only. */
function MapPanel() {
  return (
    <div className="absolute top-[7%] right-0 hidden h-[66%] w-[84%] overflow-hidden rounded-box-lg border border-white/10 bg-[#0a0962]/70 shadow-[0_30px_60px_-30px_rgba(1,0,30,0.9)] backdrop-blur-sm lg:block">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="gbp-hero-area" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0753f6" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0753f6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0753f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* City blocks */}
        <g fill="#ffffff" fillOpacity="0.035">
          <rect x="24" y="24" width="86" height="58" rx="6" />
          <rect x="132" y="24" width="64" height="58" rx="6" />
          <rect x="300" y="190" width="80" height="80" rx="6" />
          <rect x="24" y="200" width="110" height="70" rx="6" />
        </g>
        {/* Main roads */}
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M-10 110 C 90 100, 170 130, 410 96" />
          <path d="M150 -10 C 160 90, 205 180, 230 310" />
        </g>
        {/* Minor roads */}
        <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M-10 180 L 410 168" />
          <path d="M290 -10 L 280 310" />
          <path d="M60 -10 L 76 310" />
          <path d="M-10 250 C 120 240, 260 262, 410 236" />
        </g>
        {/* Service area */}
        <circle cx="312" cy="216" r="74" fill="url(#gbp-hero-area)" />
        <circle cx="312" cy="216" r="74" fill="none" stroke="#4d8bff" strokeOpacity="0.35" strokeDasharray="4 7" />
        {/* Other places */}
        <g fill="#ffffff" fillOpacity="0.28">
          <circle cx="96" cy="150" r="3" />
          <circle cx="250" cy="150" r="3" />
          <circle cx="360" cy="120" r="3" />
        </g>
      </svg>

      {/* Pin with a slow pulse, at the centre of the service area (lower right, clear of both cards). */}
      <div className="absolute top-[72%] left-[78%] -translate-x-1/2 -translate-y-full">
        <span className={`${styles.pulse} absolute bottom-0 left-1/2 -ml-5 -mb-5 h-10 w-10 rounded-full bg-[#4d8bff]/40`} />
        <span className="absolute bottom-0 left-1/2 -ml-1.5 -mb-1 h-2 w-3 rounded-full bg-black/40 blur-[2px]" />
        <BrandPin className="relative h-11 w-11 drop-shadow-[0_8px_14px_rgba(7,83,246,0.55)]" />
      </div>
    </div>
  );
}

/** Business profile preview: placeholders only, no name, rating value or review count. */
function ProfileCard() {
  return (
    <div className={`${GLASS} bg-[#0b0a5c]/75 p-5`}>
      <div className="flex items-center gap-3.5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-box-sm bg-gradient-to-br from-primary to-[#2f8cf0] text-white shadow-[0_10px_20px_-8px_rgba(7,83,246,0.8)]">
          <MapPin className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-2.5 w-4/5 rounded-full bg-white/80" />
          <div className="h-2 w-1/2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Decorative review indicator: brand-tinted stars beside a placeholder, never a number. */}
      <div className="mt-4 flex items-center gap-2.5">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#8db8ff]/70 text-[#8db8ff]/70" />
          ))}
        </div>
        <div className="h-2 w-16 rounded-full bg-white/20" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-2 w-full rounded-full bg-white/[0.12]" />
        <div className="h-2 w-3/4 rounded-full bg-white/[0.12]" />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
        {ACTIONS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-accent ring-1 ring-white/15">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-medium text-white/70">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Profile interactions: the WordPress labels, each with a small uneven bar chart (no values). */
function AnalyticsCard({ labels }: Props) {
  return (
    <div className={`${GLASS} bg-[#0b0a5c]/60 p-4`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <div className="h-2 w-20 rounded-full bg-white/30" />
      </div>
      <ul className="space-y-2">
        {labels.map((label, i) => {
          const Icon = LABEL_ICONS[i];
          return (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-box-sm border border-white/10 bg-white/[0.05] px-3 py-2"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-white/85">{label}</span>
              <span className="flex h-4 shrink-0 items-end gap-[3px]">
                {CHART_BARS[i].map((height, j) => (
                  <span
                    key={j}
                    className="w-1 rounded-full bg-gradient-to-t from-primary to-accent opacity-80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Small "Search · Maps" chip for local discovery. From 1280px, where it has room beside the analytics card. */
function SearchChip() {
  return (
    <div className={`${GLASS} absolute top-[12%] left-[3%] hidden items-center gap-2.5 rounded-full px-3.5 py-2 text-xs font-medium text-white/80 xl:flex`}>
      <Search className="h-3.5 w-3.5 text-[#8db8ff]" />
      Search
      <span className="h-3 w-px bg-white/20" />
      <MapPin className="h-3.5 w-3.5 text-accent" />
      Maps
    </div>
  );
}

/**
 * Decorative Google Business Profile-style illustration for the hero (the parent hides it from
 * assistive technology). No Google logo or brand colours, and no figures, ratings or results.
 *
 * - 1024–1279px: layered composition (map panel, profile card, analytics card).
 * - 1280px and up: the same composition plus the search chip, scaled to 85% (408px wide).
 * - 768–1023px: simplified; the profile and analytics cards side by side, centred.
 */
export default function GbpHeroVisual({ labels }: Props) {
  return (
    // From 1280px the composition is laid out at its full 480px size and scaled to 85% (408 x 388px)
    // as one unit, so every card, label and the pin keep their exact proportions and positions.
    <div className="relative mx-auto w-full xl:aspect-[20/19] xl:max-w-[25.5rem]">
      <div className="relative mx-auto flex w-full max-w-[38rem] items-start justify-center gap-5 lg:block lg:aspect-[4/5] lg:max-w-[30rem] xl:absolute xl:top-0 xl:left-0 xl:mx-0 xl:aspect-[20/19] xl:w-[30rem] xl:max-w-none xl:origin-top-left xl:scale-[0.85]">
        <div className="absolute -inset-6 hidden rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/15 blur-3xl lg:block" />

        <MapPanel />
        <SearchChip />

        <div className="w-[19rem] shrink-0 lg:absolute lg:bottom-[2%] lg:left-0 lg:z-10 lg:w-[66%] xl:w-[64%]">
          <div className={styles.float}>
            <ProfileCard />
          </div>
        </div>

        <div className="w-[16.5rem] shrink-0 lg:absolute lg:top-0 lg:right-0 lg:z-20 lg:w-[64%] xl:w-[54%]">
          <div className={styles.floatDelayed}>
            <AnalyticsCard labels={labels} />
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight, Settings2, type LucideIcon } from 'lucide-react';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { gbpIcons } from './icons';
import { BRAND_HEADING_GRADIENT, CENTRED_HEADING_CLASS, EYEBROW_CLASS } from './headingStyles';

interface Props {
  process: GoogleBusinessProfileContent['process'];
}

/** "Step 1 — Review Your Existing Profile": the badge shows the number; the prefix stays in the heading text. */
function splitStep(title: string): { prefix: string; label: string } {
  const at = title.indexOf(' — ');
  return at === -1 ? { prefix: '', label: title } : { prefix: `${title.slice(0, at)} — `, label: title.slice(at + 3) };
}

/*
 * Decorative step icons, by position (the WordPress steps have no icon field): review, plan,
 * implement, monitor. Three come from the GBP icon map; "implement" has no fitting icon there.
 * Extra steps added in WordPress reuse the sequence.
 */
const STEP_ICONS: LucideIcon[] = [gbpIcons['clipboard-check'], gbpIcons.route, Settings2, gbpIcons['chart-line']];

/*
 * Centred heading and intro, then the steps as cards:
 * - 1280px+: one row of four, with small arrow connectors in the gaps;
 * - 768–1279px: a 2 × 2 grid;
 * - below 768px: stacked.
 * Cards in a row share its height (grid stretch). Content comes from WordPress unchanged.
 */
export default function GbpProcessSection({ process }: Props) {
  const lastIndex = process.steps.length - 1;

  return (
    <section aria-labelledby="gbp-process-title" className="bg-white py-10 md:py-12 lg:py-14">
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
          <p className={`mb-3 ${EYEBROW_CLASS}`}>{process.eyebrow}</p>
          <h2 id="gbp-process-title" className={CENTRED_HEADING_CLASS} style={BRAND_HEADING_GRADIENT}>
            {process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[56rem] text-base leading-relaxed text-gray-600 md:text-lg">
            {process.intro}
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:gap-8">
          {process.steps.map((step, i) => {
            const { prefix, label } = splitStep(step.title);
            const Icon = STEP_ICONS[i % STEP_ICONS.length];

            return (
              <li key={step.title} className="relative">
                <div className="relative h-full overflow-hidden rounded-box-sm border border-gray-200/80 bg-white p-5 pb-6 shadow-[0_10px_28px_-18px_rgba(5,4,74,0.25)] md:p-6 md:pb-7">
                  <div aria-hidden="true" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-box-xs bg-gradient-to-br from-dark via-primary to-primary text-sm font-black text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-box-xs bg-primary/[0.06] text-primary ring-1 ring-primary/15">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-[1.0625rem] font-bold leading-snug text-dark">
                    {prefix ? <span className="sr-only">{prefix}</span> : null}
                    {label}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-gray-600">{step.description}</p>

                  {/* Brand accent along the bottom edge. */}
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent" />
                </div>

                {/* Arrow to the next card, centred in the 32px gap; only when the cards share one row. */}
                {i < lastIndex ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-4 z-10 hidden h-7 w-7 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-[0_2px_8px_rgba(5,4,74,0.12)] ring-1 ring-primary/15 xl:flex"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

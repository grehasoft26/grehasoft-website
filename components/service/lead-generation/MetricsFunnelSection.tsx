import type { CSSProperties } from 'react';
import type { LeadGenerationContent } from '@/types/lead-generation';
import SectionHeading from './SectionHeading';
import styles from './funnel.module.css';

interface Props {
  metrics: LeadGenerationContent['metrics'];
}

// Stage widths narrow down the funnel; mobile narrows less so labels keep room.
const WIDTHS_SM = [100, 93, 86, 79];
const WIDTHS_LG = [100, 86, 72, 58];

/** Stage colour moves from brand blue (top of funnel) to brand green (sales opportunities). */
function stageColor(index: number, total: number) {
  const primaryShare = Math.round(100 - (index / Math.max(total - 1, 1)) * 100);
  return `color-mix(in srgb, var(--color-primary) ${primaryShare}%, var(--color-accent))`;
}

export default function MetricsFunnelSection({ metrics }: Props) {
  return (
    <section
      aria-labelledby="lead-metrics-title"
      className="section-padding relative overflow-hidden bg-dark"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 h-[28rem] w-[28rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          id="lead-metrics-title"
          tone="dark"
          eyebrow={metrics.eyebrow}
          title={metrics.title}
          intro={metrics.intro}
          className="mb-14 max-w-3xl"
        />

        <ol className="space-y-5 lg:space-y-4">
          {metrics.stages.map((stage, i) => {
            const stageMetrics = metrics.items.filter((item) => item.stage === stage.id);
            const color = stageColor(i, metrics.stages.length);
            const stageStyle = {
              '--w-sm': `${WIDTHS_SM[i] ?? 100}%`,
              '--w-lg': `${WIDTHS_LG[i] ?? 100}%`,
              '--stage': color,
            } as CSSProperties;

            return (
              <li
                key={stage.id}
                style={stageStyle}
                className="grid items-center gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10"
              >
                <div className="flex justify-center">
                  <div className="relative w-(--w-sm) rounded-box-lg border border-[color-mix(in_srgb,var(--stage)_70%,white)] lg:w-(--w-lg)">
                    {/* 55% stage colour over navy (sRGB) keeps white text above 7:1 at both ends of the funnel. */}
                    <span
                      aria-hidden="true"
                      className={`${styles.fill} absolute inset-0 rounded-box-lg bg-[color-mix(in_srgb,var(--stage)_55%,var(--color-dark))]`}
                    />
                    <div className="relative flex flex-col items-center justify-center px-5 py-5 text-center sm:px-8">
                      <p className="max-w-full text-lg font-bold text-white">{stage.label}</p>
                      <p className="mt-1 max-w-[34ch] text-sm text-balance text-white/80">{stage.description}</p>
                    </div>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {stageMetrics.map((metric) => (
                    <li
                      key={metric.title}
                      className={`rounded-box-lg border border-white/10 border-l-4 border-l-(--stage) bg-white/5 p-5 ${
                        stageMetrics.length === 1 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <h3 className="font-semibold text-white">{metric.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{metric.description}</p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

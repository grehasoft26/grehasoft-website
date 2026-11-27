import { Crosshair, Layers, Link2, type LucideIcon } from 'lucide-react';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import RichText from '@/components/service/lead-generation/RichText';
import SeoStrategyIllustration from './SeoStrategyIllustration';

interface Props {
  seoStrategy: GoogleBusinessProfileContent['seoStrategy'];
}

// Links keep their WordPress text and destinations; bold white with a green accent underline.
const LINK_CLASS =
  'font-semibold text-white underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

// Decorative paragraph markers, by position: distinct purposes, working together, links onward.
const MARKER_ICONS: LucideIcon[] = [Crosshair, Layers, Link2];

/**
 * The whole heading is white. From 1024px the WordPress heading breaks before " with a "
 * ("Combine Profile Optimization" / "with a Broader SEO Strategy"); below that, or if the phrase is
 * missing, it wraps naturally. The text itself is never changed.
 */
function HeadingText({ title }: { title: string }) {
  const at = title.indexOf(' with a ');
  if (at === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, at)} <br className="hidden lg:inline" />
      {title.slice(at + 1)}
    </>
  );
}

export default function SeoStrategySection({ seoStrategy }: Props) {
  return (
    // One solid navy background (#05044A); no glows or wave, so the colour is uniform to the bottom edge.
    <section aria-labelledby="gbp-seo-title" className="relative overflow-hidden bg-dark py-12 md:py-14 lg:py-16">
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10 lg:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="hidden h-0.5 w-10 rounded-full bg-accent sm:block" />
            {seoStrategy.eyebrow}
            <span aria-hidden="true" className="hidden h-0.5 w-10 rounded-full bg-accent sm:block" />
          </p>
          <h2 id="gbp-seo-title" className="text-balance text-[1.75rem] font-black leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            <HeadingText title={seoStrategy.title} />
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div aria-hidden="true" className="mx-auto w-full max-w-[26rem] md:max-w-[30rem] lg:max-w-none">
            <SeoStrategyIllustration className="h-auto w-full" />
          </div>

          {/* The WordPress paragraphs, joined by markers on a dashed connector. */}
          <div className="mx-auto w-full max-w-2xl lg:max-w-none">
            {seoStrategy.paragraphs.map((paragraph, i) => {
              const Icon = MARKER_ICONS[i % MARKER_ICONS.length];
              const isLast = i === seoStrategy.paragraphs.length - 1;

              return (
                <div key={i} className={`relative flex gap-4 sm:gap-5 ${isLast ? '' : 'pb-7 md:pb-8'}`}>
                  {isLast ? null : (
                    <span aria-hidden="true" className="absolute top-14 bottom-2 left-6 -translate-x-1/2 border-l border-dashed border-white/30" />
                  )}
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1a3fb8] to-primary text-white shadow-[0_0_0_4px_rgba(7,83,246,0.18),0_8px_24px_-8px_rgba(7,83,246,0.9)] ring-1 ring-white/20"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="min-w-0 pt-2 text-base leading-relaxed text-white/85 md:text-[1.0625rem]">
                    <RichText value={paragraph} linkClassName={LINK_CLASS} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

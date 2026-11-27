import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, EYEBROW_CLASS } from './headingStyles';
import RevealOnView from './RevealOnView';
import styles from './GbpCta.module.css';

interface Props {
  enquiry: GoogleBusinessProfileContent['enquiry'];
}

const BREAK_BEFORE = 'Google Business Profile';

/**
 * From 640px the heading breaks before "Google Business Profile" ("Let's Review Your" / "Google
 * Business Profile"); below that, or if the phrase is missing, it wraps naturally. The text itself is
 * never changed.
 */
function Heading({ title }: { title: string }) {
  const at = title.lastIndexOf(BREAK_BEFORE);
  if (at <= 0) return <>{title}</>;
  return (
    <>
      {title.slice(0, at).trimEnd()} <br className="hidden sm:inline" />
      {title.slice(at)}
    </>
  );
}

/**
 * Final CTA on white: a centred card with a fine blue → green border (slanted on larger screens, as in
 * the reference), the eyebrow label above the heading, both paragraphs separated by a
 * location divider, and the two buttons. Soft blue and green glows sit in the outer corners. One fade-up
 * reveal on entering the viewport; no continuous animation.
 */
export default function GbpEnquirySection({ enquiry }: Props) {
  const [first, ...rest] = enquiry.paragraphs;

  return (
    <section
      id={enquiry.id}
      aria-labelledby="gbp-enquiry-title"
      className="relative scroll-mt-20 overflow-hidden bg-white px-4 pt-9 pb-9 sm:px-6 md:pt-11 lg:px-8 md:pb-11 lg:pt-12 lg:pb-12"
    >
      {/* Ambient corner glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(7,83,246,0.16),rgba(7,83,246,0))] md:h-[26rem] md:w-[26rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(26,183,40,0.16),rgba(26,183,40,0))] md:h-[28rem] md:w-[28rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-24 -bottom-36 hidden h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(7,83,246,0.12),rgba(7,83,246,0))] md:block" />

      {/* Card width: the page's content width, minus the slant overhang on tablet and desktop so the
          slanted corners stay inside the page gutters (overhang ≈ 21px at 4°, 26px at 6°). */}
      <RevealOnView className="relative mx-auto max-w-[76rem] md:max-w-[calc(100%-2.5rem)] lg:max-w-[min(73rem,calc(100%-3rem))]">
        {/* Dashed green arc beside the card's upper-left corner (decorative, larger screens). */}
        <svg aria-hidden="true" viewBox="0 0 120 200" className="pointer-events-none absolute -top-8 -left-14 hidden h-44 w-24 min-[1400px]:block">
          <path d="M110 6C50 18 12 70 14 196" fill="none" stroke="#1ab728" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round" />
        </svg>

        {/* Card frame: gradient border + soft shadow, drawn on its own layer so the slant never skews the text. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl border-[1.5px] border-transparent shadow-[0_24px_60px_-32px_rgba(5,4,74,0.28)] [background:linear-gradient(160deg,#ffffff,#f6f9ff)_padding-box,linear-gradient(120deg,rgba(7,83,246,0.45),rgba(34,184,230,0.35)_50%,rgba(26,183,40,0.55))_border-box] md:[transform:skewX(-4deg)] lg:rounded-[2rem] lg:[transform:skewX(-6deg)]"
        />

        <div className="relative px-4 pt-8 pb-7 text-center sm:px-7 md:px-10 md:pt-10 md:pb-9 lg:px-12">
          {/* Eyebrow: the shared GBP section-eyebrow style (as in Local Visibility, Services, Process). */}
          <p className={`${styles.fadeUp} mb-3 ${EYEBROW_CLASS}`} style={{ '--i': 0 } as CSSProperties}>
            {enquiry.eyebrow}
          </p>
          <h2
            id="gbp-enquiry-title"
            className={`${styles.fadeUp} mx-auto w-fit max-w-full pb-1 text-balance text-[1.5rem] font-black leading-[1.2] min-[375px]:text-[1.625rem] sm:text-4xl sm:leading-[1.15] md:text-[2.5rem]`}
            style={{ ...BRAND_HEADING_GRADIENT, '--i': 1 } as CSSProperties}
          >
            <Heading title={enquiry.title} />
          </h2>

          <div className="mx-auto mt-3.5 max-w-[52rem] text-[0.9375rem] leading-relaxed text-gray-600 sm:text-base md:mt-4 md:text-[1.0625rem]">
            {first ? (
              <p className={styles.fadeUp} style={{ '--i': 2 } as CSSProperties}>
                {first}
              </p>
            ) : null}

            {rest.length ? (
              <>
                {/* Location divider between the two paragraphs */}
                <div aria-hidden="true" className={`${styles.fadeUp} my-2 flex items-center justify-center gap-3 md:my-2.5`} style={{ '--i': 3 } as CSSProperties}>
                  <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40 sm:w-24" />
                  <MapPin className="h-5 w-5 text-accent" strokeWidth={2.2} />
                  <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40 sm:w-24" />
                </div>
                {rest.map((paragraph, i) => (
                  <p key={paragraph} className={styles.fadeUp} style={{ '--i': 4 + i } as CSSProperties}>
                    {paragraph}
                  </p>
                ))}
              </>
            ) : null}
          </div>

          <div
            className={`${styles.scaleIn} mx-auto mt-6 flex max-w-md flex-col items-stretch justify-center gap-3 md:mt-7 lg:max-w-none lg:flex-row lg:items-center lg:gap-5`}
            style={{ '--i': 4 + rest.length } as CSSProperties}
          >
            <a
              href={enquiry.primaryCta.href}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-center text-[0.9375rem] font-semibold leading-snug sm:whitespace-nowrap sm:px-7 sm:text-base text-white shadow-[0_14px_30px_-14px_rgba(7,83,246,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a5dff] hover:shadow-[0_18px_36px_-14px_rgba(7,83,246,0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none lg:px-9"
            >
              {enquiry.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <Link
              href={enquiry.secondaryCta.href}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-5 py-3 text-center text-[0.9375rem] font-semibold leading-snug sm:whitespace-nowrap sm:px-7 sm:text-base text-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none lg:px-9"
            >
              {enquiry.secondaryCta.label}
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-dark transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}

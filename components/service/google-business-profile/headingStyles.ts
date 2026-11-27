import type { CSSProperties } from 'react';

/**
 * Section-heading treatment shared by the Google Business Profile sections.
 *
 * The gradient is the homepage section-heading gradient (navy → blue → green), applied the same way
 * as on the homepage (WhyChooseUs, Testimonials, Portfolio): an inline background clipped to the text.
 * Use it on an element with `w-fit max-w-full pb-1` so the gradient spans the words and descenders
 * stay inside the clip.
 */
export const BRAND_HEADING_GRADIENT: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

/** Same eyebrow treatment as the shared SectionHeading (accent green darkened for 4.5:1 on white). */
export const EYEBROW_CLASS =
  'text-xs font-bold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-accent),black_32%)]';

/** Centred section heading (H2) typography: the SectionHeading sizes plus balanced line breaks. */
export const CENTRED_HEADING_CLASS =
  'mx-auto w-fit max-w-full pb-1 text-balance text-[1.75rem] font-black leading-tight md:text-4xl lg:text-[2.5rem]';

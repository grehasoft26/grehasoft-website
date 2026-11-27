/**
 * Section heading (H2) sizes for the WordPress service detail pages (Main, Branding, Technology and
 * Digital Marketing templates). Same scale as the Google Business Profile page, so the page H1
 * (36 / 48 / 52px, see PageHeader `titleSize="service"`) stays clearly larger at every width.
 * Weight, colour, line height and spacing stay on each heading.
 */

/** 28px mobile · 36px from 768px · 40px from 1024px. */
export const SERVICE_H2_CLASS = 'text-[1.75rem] md:text-4xl lg:text-[2.5rem]';

/**
 * For headings in a narrow column of a two-column layout (Why, Contact, Stand Out and CTA blocks): the same
 * mobile and tablet sizes, capped at 36px on desktop so long titles do not wrap onto 7+ lines.
 */
export const SERVICE_NARROW_H2_CLASS = 'text-[1.75rem] md:text-4xl';

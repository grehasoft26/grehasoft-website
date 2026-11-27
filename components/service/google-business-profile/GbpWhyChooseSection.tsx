import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, EYEBROW_CLASS } from './headingStyles';
import WhyChooseIllustration from './WhyChooseIllustration';

interface Props {
  whyChoose: GoogleBusinessProfileContent['whyChoose'];
}

/**
 * From 1024px the WordPress heading breaks before " Optimization" ("Why Choose Grehasoft for Google
 * Business Profile" / "Optimization in Kerala?"). Below 1024px, or when the heading has no
 * " Optimization", it wraps naturally. The text itself is never changed.
 */
function HeadingText({ title }: { title: string }) {
  const at = title.indexOf(' Optimization');
  if (at === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, at)} <br className="hidden lg:inline" />
      {title.slice(at + 1)}
    </>
  );
}

/*
 * White section: eyebrow and two-line gradient heading across the top; below, the intro and a
 * Google Business Profile illustration on the left and text-only benefit cards on the right (two per
 * row; an odd last card spans the row, inset to leave room for the illustration, with a blue → green
 * border). Titles and descriptions come from WordPress unchanged.
 */
export default function GbpWhyChooseSection({ whyChoose }: Props) {
  const count = whyChoose.points.length;

  return (
    <section aria-labelledby="gbp-why-title" className="bg-white py-10 md:py-12 lg:py-14">
      <div className="container-custom">
        <p className={`mb-3 flex items-center gap-3 ${EYEBROW_CLASS}`}>
          {whyChoose.eyebrow}
          <span aria-hidden="true" className="h-px w-10 bg-current sm:w-12" />
        </p>
        {/* Longer line at 1280px+: 1072px of the 1216px container; at 1024px (36px): 877 of 960px. */}
        <h2
          id="gbp-why-title"
          className="w-fit max-w-full pb-1 text-balance text-[1.75rem] font-black leading-tight sm:text-3xl md:text-4xl lg:text-[2.25rem] lg:text-wrap xl:text-[2.5rem]"
          style={BRAND_HEADING_GRADIENT}
        >
          <HeadingText title={whyChoose.title} />
        </h2>

        <div className="mt-7 grid gap-8 lg:mt-9 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-10 xl:gap-12">
          <div>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">{whyChoose.intro}</p>
            <div aria-hidden="true" className="mx-auto mt-6 w-full max-w-[18rem] sm:max-w-[20rem] lg:mt-8">
              <WhyChooseIllustration className="h-auto w-full" />
            </div>
          </div>

          <ul className="grid content-start gap-4 sm:grid-cols-2 sm:gap-5">
            {whyChoose.points.map((point, i) => {
              const isLastOdd = i === count - 1 && count % 2 === 1;

              return (
                <li key={point.title} className={isLastOdd ? 'sm:col-span-2 lg:ml-[9%]' : undefined}>
                  {/* Text-only card. Cards in a row stretch to one height; the wide last card keeps the
                      blue → green border as the section's single accent. */}
                  <article
                    className={`h-full rounded-[14px] border bg-white px-5 py-4 shadow-[0_8px_24px_-16px_rgba(5,4,74,0.22)] transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none md:px-6 md:py-5 ${
                      isLastOdd
                        ? 'border-transparent [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(120deg,rgba(7,83,246,0.25),rgba(7,83,246,0.45)_45%,#1ab728)_border-box]'
                        : 'border-[#e6eaf2] hover:border-primary/25 hover:shadow-[0_12px_28px_-16px_rgba(7,83,246,0.28)]'
                    }`}
                  >
                    <h3 className="text-base font-bold leading-snug text-dark md:text-[1.0625rem]">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{point.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

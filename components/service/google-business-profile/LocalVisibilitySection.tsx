import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { BRAND_HEADING_GRADIENT, CENTRED_HEADING_CLASS, EYEBROW_CLASS } from './headingStyles';
import { MapPin, Store, Target } from 'lucide-react';
import GbpProfileLaptop from './GbpProfileLaptop';

interface Props {
  visibility: GoogleBusinessProfileContent['visibility'];
}

// White text cards with a fine tinted border and a floating icon badge centred on the top border; the
// left card leans blue (thicker blue left edge), the right card green (thicker green right and bottom
// edges). Text uses the full card width; the cards fill their grid row, so their heights match.
const PANEL =
  'relative h-full rounded-box-lg border border-transparent px-5 pt-9 pb-5 text-[0.9375rem] leading-relaxed text-gray-600 shadow-[0_14px_32px_-22px_rgba(5,4,74,0.3)] sm:text-base md:px-6 md:pb-6 xl:px-5 xl:pb-5 xl:text-[0.9375rem]';
// Badge: centred horizontally, its middle on the card's top border; a white ring separates it from the border.
const BADGE =
  'absolute top-0 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-box-sm ring-4 ring-white';
const PANEL_BLUE =
  '[background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,rgba(7,83,246,0.5),rgba(7,83,246,0.12)_60%,rgba(7,83,246,0.25))_border-box]';
const PANEL_GREEN =
  '[background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,rgba(26,183,40,0.2),rgba(26,183,40,0.12)_40%,rgba(26,183,40,0.6))_border-box]';
const ICON_TILE = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-box-sm';

/*
 * Local visibility: centred heading; paragraph 1 (left card), a laptop showing a Grehasoft profile
 * mockup (centre) and paragraph 2 (right card) from 1280px; at 768–1279px the laptop sits above the two
 * cards (side by side, equal height); on phones everything stacks in reading order. Any further
 * paragraph (the statement of what the service does not promise) sits in a compact strip below. All text comes from WordPress.
 */
export default function LocalVisibilitySection({ visibility }: Props) {
  const [first, second, ...rest] = visibility.paragraphs;

  return (
    <section aria-labelledby="gbp-visibility-title" className="bg-white py-10 md:py-12">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`mb-3 flex items-center justify-center gap-3 ${EYEBROW_CLASS}`}>
            <span aria-hidden="true" className="hidden h-px w-12 bg-current opacity-60 sm:block" />
            {visibility.eyebrow}
            <span aria-hidden="true" className="hidden h-px w-12 bg-current opacity-60 sm:block" />
          </p>
          {/* w-fit keeps the gradient across the words themselves; pb-1 keeps descenders inside the clip. */}
          <h2 id="gbp-visibility-title" className={CENTRED_HEADING_CLASS} style={BRAND_HEADING_GRADIENT}>
            {visibility.title}
          </h2>
        </div>

        {/* One shared row (items-stretch): both side cards take the row's height, so their top and bottom
            edges align; the laptop is centred vertically between them. Columns about 1 : 1.2 : 1. */}
        <div className="mt-10 grid items-stretch gap-x-5 gap-y-9 md:mt-11 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className={`${PANEL} ${PANEL_BLUE}`}>
            <span aria-hidden="true" className="absolute inset-y-5 -left-px w-[3px] rounded-full bg-gradient-to-b from-primary to-[#4d8bff]" />
            <span aria-hidden="true" className={`${BADGE} bg-gradient-to-br from-primary to-[#2f8cf0] text-white shadow-[0_8px_18px_-8px_rgba(7,83,246,0.8)]`}>
              <Store className="h-5 w-5" />
            </span>
            <p>{first}</p>
          </div>

          {/* Laptop size: a uniform 87% scale at every width. It keeps the mockup's proportions and does not
              change its layout box, so the cards and grid are unaffected and it stays centred. */}
          <div aria-hidden="true" className="scale-[0.87] px-[6%] py-2 md:order-first md:col-span-2 md:mx-auto md:w-full md:max-w-[32rem] xl:order-none xl:col-span-1 xl:max-w-none xl:self-center xl:px-[3%]">
            <GbpProfileLaptop />
          </div>

          {second ? (
            <div className={`${PANEL} ${PANEL_GREEN}`}>
              <span aria-hidden="true" className="absolute inset-y-5 -right-px w-[3px] rounded-full bg-gradient-to-b from-accent/40 to-accent" />
              <span aria-hidden="true" className="absolute inset-x-5 -bottom-px h-[3px] rounded-full bg-gradient-to-r from-accent/20 to-accent" />
              <span aria-hidden="true" className={`${BADGE} bg-[#e8f7ec] text-accent shadow-[0_8px_18px_-10px_rgba(26,183,40,0.7)]`}>
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p>{second}</p>
            </div>
          ) : null}
        </div>

        {/* The closing paragraph states what the service does not promise: a compact strip with a fine brand border. */}
        {rest.map((paragraph) => (
          <div
            key={paragraph}
            className="relative mt-5 flex items-center gap-4 rounded-box-lg border border-transparent px-5 py-4 text-[0.9375rem] leading-relaxed text-dark shadow-[0_14px_32px_-24px_rgba(5,4,74,0.3)] [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(90deg,rgba(7,83,246,0.35),rgba(34,184,230,0.25)_50%,rgba(26,183,40,0.5))_border-box] sm:text-base md:mt-6 md:gap-5 md:px-6"
          >
            <span aria-hidden="true" className={`${ICON_TILE} hidden bg-[#eaf1ff] text-primary sm:flex`}>
              <Target className="h-5 w-5" />
            </span>
            <span aria-hidden="true" className="hidden h-10 w-px shrink-0 bg-primary/20 sm:block" />
            <p className="min-w-0">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

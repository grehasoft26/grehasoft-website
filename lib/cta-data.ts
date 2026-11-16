import { unstable_cache } from 'next/cache';
import { getHome } from '@/lib/backend-api';
import { CTAData } from '@/types/wordpress';

export const CTA_FIELDS: (keyof CTAData)[] = [
  'cta_badge',
  'cta_title_part1',
  'cta_title_highlight',
  'cta_title_part2',
  'cta_description',
  'cta_btn_text',
  'cta_btn_link',
  'cta_btn2_text',
  'cta_btn2_link',
];

// Caches only the CTA fields, not the full /home response, so the entry stays
// far below Next.js' 2 MB data-cache limit. The fetch inside runs uncached.
// A failed or invalid response throws, so it is never cached: the previous
// entry keeps being served until a refresh succeeds.
const getCachedCtaData = unstable_cache(
  async (): Promise<CTAData> => {
    const cta = (await getHome())?.cta;
    if (!cta || typeof cta !== 'object') {
      throw new Error('Home response has no CTA data');
    }

    const fields: CTAData = {};
    for (const key of CTA_FIELDS) {
      if (typeof cta[key] === 'string') fields[key] = cta[key];
    }
    return fields;
  },
  ['cta-data'],
  { revalidate: 300, tags: ['home'] }
);

/**
 * CTA content for CTABottomSection, fetched server-side and refreshed at most
 * every 5 minutes. Returns null when the backend is unavailable and nothing is
 * cached yet; the component then shows its built-in defaults.
 */
export async function getCtaData(): Promise<CTAData | null> {
  try {
    return await getCachedCtaData();
  } catch (error: any) {
    console.error('[CTA] Using default CTA content:', error.message);
    return null;
  }
}

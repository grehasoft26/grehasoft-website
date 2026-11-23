import { Cloud, Code2, Globe, Palette, Smartphone, TrendingUp, type LucideIcon } from 'lucide-react';

/**
 * Shared types and per-category visual theme for the Services directory.
 * Icons and blue/green tones match the approved Services hero (ServicesHero CATEGORY_LAYOUT).
 * The category ids are the existing ones from app/services/page.tsx and must not change.
 */

export type Tone = 'blue' | 'green';

export interface ServiceItem {
  name: string;
  desc: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  items: ServiceItem[];
}

/** A service as shown in the deck, carrying its category for labels and search results. */
export interface DeckService extends ServiceItem {
  key: string;
  categoryId: string;
  categoryName: string;
  /** Position within its category (data order); drives the card's visual variety. */
  indexInCategory: number;
}

const THEME: Record<string, { icon: LucideIcon; tone: Tone }> = {
  'web-dev': { icon: Globe, tone: 'blue' },
  marketing: { icon: TrendingUp, tone: 'green' },
  branding: { icon: Palette, tone: 'blue' },
  mobile: { icon: Smartphone, tone: 'green' },
  software: { icon: Code2, tone: 'blue' },
  tech: { icon: Cloud, tone: 'green' },
};

export function themeFor(categoryId: string): { icon: LucideIcon; tone: Tone } {
  return THEME[categoryId] ?? { icon: Globe, tone: 'blue' };
}

/**
 * chip/text/dot: for dark surfaces (the cards).
 * chipLight: for the light explorer panel (AA contrast on white).
 */
export const TONE_CLASSES: Record<Tone, { chip: string; text: string; glow: string; dot: string; chipLight: string }> = {
  blue: {
    chip: 'bg-primary/30 text-[#8fb2ff] shadow-[0_0_24px_-6px_rgba(7,83,246,0.9)]',
    text: 'text-[#8fb2ff]',
    glow: 'rgba(7, 83, 246, 0.55)',
    dot: 'bg-[#8fb2ff]',
    chipLight: 'bg-primary/10 text-primary ring-1 ring-primary/15',
  },
  green: {
    chip: 'bg-accent/20 text-[#5be06a] shadow-[0_0_24px_-6px_rgba(26,183,40,0.8)]',
    text: 'text-[#5be06a]',
    glow: 'rgba(26, 183, 40, 0.42)',
    dot: 'bg-[#5be06a]',
    chipLight: 'bg-accent/10 text-[#13861f] ring-1 ring-accent/20',
  },
};

export function toDeckServices(category: ServiceCategory): DeckService[] {
  return category.items.map((item, indexInCategory) => ({
    ...item,
    key: item.href,
    categoryId: category.id,
    categoryName: category.name,
    indexInCategory,
  }));
}

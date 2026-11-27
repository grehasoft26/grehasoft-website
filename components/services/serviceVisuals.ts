import {
  AppWindow,
  BookOpen,
  Blocks,
  Boxes,
  Briefcase,
  Building2,
  Calculator,
  CalendarCheck,
  CalendarClock,
  Camera,
  CirclePlay,
  CloudCog,
  Code2,
  Component,
  Contact,
  Database,
  FileCode2,
  Gem,
  Globe,
  GraduationCap,
  IdCard,
  LayoutDashboard,
  LayoutTemplate,
  Magnet,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Package,
  PenTool,
  Pin,
  PlugZap,
  RefreshCcw,
  Search,
  Server,
  Shapes,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  SmartphoneNfc,
  Store,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { Tone } from './serviceTheme';

/**
 * Per-service visual identity for the flick cards, built from the existing service data only
 * (no image assets): a Lucide icon chosen per service, and an abstract SVG composition generated
 * deterministically from the service URL, so it is identical on server and client and unique
 * to each service.
 */

/** One icon per existing service URL. */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  // Web Design & Development
  '/website-design': LayoutTemplate,
  '/website-development': Code2,
  '/static-html-websites': FileCode2,
  '/wordpress-development': Blocks,
  '/ecommerce-development': ShoppingCart,
  '/woocommerce-development': Store,
  '/shopify-development': ShoppingBag,
  '/landing-page-design': MousePointerClick,
  '/website-redesign-services': RefreshCcw,
  // Digital Marketing & SEO
  '/seo': Search,
  '/search-engine-marketing': Megaphone,
  '/social-media-marketing': Share2,
  '/facebook': Users,
  '/instagram': Camera,
  '/youtube-marketing': CirclePlay,
  '/linkedin': Briefcase,
  '/pinterest': Pin,
  '/twitter': MessageCircle,
  '/lead-generation-services': Magnet,
  '/ai-marketing-service-agency': Sparkles,
  '/google-business-profile': MapPin,
  // Branding & Visual Design
  '/graphic-design': Shapes,
  '/logo-design': Gem,
  '/branding-packages': Package,
  '/brochure-flyer-design': BookOpen,
  '/business-card-design': IdCard,
  '/ui-ux-design': PenTool,
  // Mobile App Development
  '/android-app-development': Smartphone,
  '/ios-app-development': SmartphoneNfc,
  '/hybrid-app-development': MonitorSmartphone,
  '/progressive-web-app-development': AppWindow,
  '/business-app-development': CalendarCheck,
  '/utility-app-development': Wrench,
  // Software & Web Applications
  '/custom-web-app-development': LayoutDashboard,
  '/erp-software-development': Building2,
  '/crm-software-development': Contact,
  '/lms-development': GraduationCap,
  '/booking-system-development': CalendarClock,
  '/inventory-management-software': Boxes,
  '/custom-business-software-development': Calculator,
  '/api-development-integration': PlugZap,
  // Technology Infrastructure Services
  '/backend-development': Server,
  '/frontend-development': Component,
  '/database-development': Database,
  '/server-cloud-solutions': CloudCog,
  '/workflow-automation': Workflow,
};

export function serviceIcon(href: string): LucideIcon {
  return SERVICE_ICONS[href] ?? Globe;
}

/* ------------------------------ composition ------------------------------ */

export type MotifFamily = 'rings' | 'bars' | 'grid' | 'waves' | 'nodes' | 'layers' | 'orbit';
const FAMILIES: MotifFamily[] = ['rings', 'bars', 'grid', 'waves', 'nodes', 'layers', 'orbit'];
const CATEGORY_OFFSET: Record<string, number> = { 'web-dev': 0, marketing: 2, branding: 4, mobile: 1, software: 3, tech: 5 };

export interface ServiceVisual {
  family: MotifFamily;
  /** Primary and accent colours (brand blue / green, ordered by the category tone). */
  primary: string;
  accent: string;
  /** Background glow centres, in % of the card. */
  glowA: { x: number; y: number; r: number };
  glowB: { x: number; y: number; r: number };
  /** Motif rotation (degrees) and the seeded numbers each family draws from. */
  rotate: number;
  values: number[];
}

const BLUE = '#0753F6';
const GREEN = '#1AB728';

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Small deterministic PRNG (mulberry32). */
function random(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Builds a service's composition. Neighbouring cards in a category always get different motif
 * families; the seeded values make every service's version distinct.
 */
export function serviceVisual(href: string, categoryId: string, indexInCategory: number, tone: Tone): ServiceVisual {
  const next = random(hash(href));
  const range = (min: number, max: number) => +(min + next() * (max - min)).toFixed(2);
  const family = FAMILIES[(indexInCategory + (CATEGORY_OFFSET[categoryId] ?? 0)) % FAMILIES.length];
  return {
    family,
    primary: tone === 'green' ? GREEN : BLUE,
    accent: tone === 'green' ? BLUE : GREEN,
    glowA: { x: range(58, 92), y: range(62, 92), r: range(38, 58) },
    glowB: { x: range(4, 40), y: range(86, 112), r: range(26, 40) },
    rotate: range(-16, 16),
    values: Array.from({ length: 16 }, () => range(0, 1)),
  };
}

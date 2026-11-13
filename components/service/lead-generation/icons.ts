import {
  Award,
  Briefcase,
  Eye,
  Globe,
  Handshake,
  Layers,
  LayoutTemplate,
  MapPin,
  Megaphone,
  Route,
  Search,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { LeadIcon } from '@/types/lead-generation';

export const leadIcons: Record<LeadIcon, LucideIcon> = {
  award: Award,
  layers: Layers,
  globe: Globe,
  search: Search,
  megaphone: Megaphone,
  briefcase: Briefcase,
  'map-pin': MapPin,
  layout: LayoutTemplate,
  workflow: Workflow,
  handshake: Handshake,
  route: Route,
  eye: Eye,
};

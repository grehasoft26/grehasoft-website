import {
  Fingerprint,
  Layers,
  Network,
  PenLine,
  ScanSearch,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Clapperboard,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { AiIcon } from '@/types/ai-marketing';

export const aiIcons: Record<AiIcon, LucideIcon> = {
  search: Search,
  pen: PenLine,
  video: Clapperboard,
  share: Share2,
  workflow: Workflow,
  scan: ScanSearch,
  sparkles: Sparkles,
  network: Network,
  fingerprint: Fingerprint,
  layers: Layers,
  shield: ShieldCheck,
  target: Target,
};

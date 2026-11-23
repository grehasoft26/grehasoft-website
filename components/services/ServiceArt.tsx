'use client';

import { useId } from 'react';
import { motion, type MotionValue } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import type { ServiceVisual } from './serviceVisuals';

/**
 * Abstract, per-service card visual: brand-palette glows, a seeded geometric motif (inline SVG)
 * and a glass icon tile. Weighted to the lower half and right side so the text area stays clear.
 * Decorative only (aria-hidden, no pointer events), and on its own layer so it never affects drag maths.
 */
interface ServiceArtProps {
  visual: ServiceVisual;
  icon: LucideIcon;
  isFront: boolean;
  reducedMotion: boolean;
  /** Horizontal parallax (front card only); moves slower than the card. */
  shift?: MotionValue<number>;
}

const f = (n: number) => n.toFixed(2);

export default function ServiceArt({ visual, icon: Icon, isFront, reducedMotion, shift }: ServiceArtProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const { primary, accent, glowA, glowB } = visual;
  const animated = isFront && !reducedMotion;
  const ease = 'transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]';

  return (
    <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={shift ? { x: shift } : undefined}>
      {/* Soft brand glows, positioned per service */}
      <span
        className="absolute inset-0"
        style={{
          background: `radial-gradient(${glowA.r}% ${glowA.r * 0.8}% at ${glowA.x}% ${glowA.y}%, ${primary}80, transparent 70%), radial-gradient(${glowB.r}% ${glowB.r * 0.8}% at ${glowB.x}% ${glowB.y}%, ${accent}4d, transparent 70%)`,
        }}
      />

      {/* Seeded geometric motif */}
      <svg
        viewBox="0 0 100 136"
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 h-full w-full ${animated ? `${ease} group-hover/card:scale-[1.05]` : ''}`}
        style={{ transformOrigin: '72% 80%', filter: 'brightness(1.45) saturate(1.1)' }}
        fill="none"
      >
        <defs>
          <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={primary} stopOpacity="0.95" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <Motif visual={visual} uid={uid} />
      </svg>

      {/* Glass icon tile (hidden on narrow cards, where the CTA needs the width) */}
      <span
        className={`absolute right-[7%] bottom-[6%] hidden aspect-square w-[22%] items-center justify-center rounded-[22%] border border-white/20 bg-[linear-gradient(150deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] shadow-[0_18px_30px_-16px_rgba(0,0,30,0.9),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-[6px] @[280px]:flex ${
          animated ? `${ease} group-hover/card:-translate-y-1.5` : ''
        }`}
      >
        <span className="absolute inset-[-30%] -z-10 rounded-full opacity-60 blur-xl" style={{ background: `radial-gradient(circle, ${primary}, transparent 65%)` }} />
        <Icon className="h-[46%] w-[46%] text-white" strokeWidth={1.6} />
      </span>
    </motion.div>
  );
}

/** The seven motif families, each driven by the service's seeded values. */
function Motif({ visual, uid }: { visual: ServiceVisual; uid: string }) {
  const { family, rotate, values: v, primary, accent } = visual;
  const stroke = `url(#${uid}-stroke)`;
  const fill = `url(#${uid}-fill)`;

  switch (family) {
    case 'rings': {
      const cx = 66 + v[0] * 14;
      const cy = 98 + v[1] * 12;
      const radii = [12, 21, 30, 40].map((r, i) => r + v[2 + i] * 4);
      return (
        <g transform={`rotate(${f(rotate)} ${f(cx)} ${f(cy)})`}>
          {radii.map((r, i) => (
            <circle key={i} cx={f(cx)} cy={f(cy)} r={f(r)} stroke="white" strokeOpacity={0.1 + i * 0.03} strokeWidth="0.45" strokeDasharray={i === 1 ? '1.2 2.2' : undefined} />
          ))}
          <circle cx={f(cx)} cy={f(cy)} r={f(radii[2])} stroke={stroke} strokeWidth="1.1" strokeLinecap="round" pathLength={100} strokeDasharray={`${f(28 + v[6] * 30)} 100`} />
          <circle cx={f(cx)} cy={f(cy)} r={f(radii[3])} stroke={accent} strokeOpacity="0.7" strokeWidth="0.7" strokeLinecap="round" pathLength={100} strokeDasharray={`${f(10 + v[7] * 14)} 100`} strokeDashoffset={f(-40 - v[8] * 30)} />
          <circle cx={f(cx + radii[1])} cy={f(cy)} r="1.6" fill={primary} />
          <circle cx={f(cx)} cy={f(cy)} r={f(5 + v[9] * 3)} fill={fill} stroke="white" strokeOpacity="0.3" strokeWidth="0.4" />
        </g>
      );
    }
    case 'bars': {
      const count = 4 + Math.round(v[0] * 3);
      const gap = 52 / count;
      const tops: [number, number][] = [];
      const bars = Array.from({ length: count }, (_, i) => {
        const h = 16 + (i / (count - 1)) * 34 + (v[1 + i] - 0.5) * 10;
        const x = 40 + i * gap;
        tops.push([x + gap * 0.3, 130 - h]);
        return { x, h, last: i === count - 1 };
      });
      return (
        <g transform={`rotate(${f(rotate * 0.4)} 70 120)`}>
          {bars.map((b, i) => (
            <rect key={i} x={f(b.x)} y={f(130 - b.h)} width={f(gap * 0.6)} height={f(b.h)} rx="1.4" fill={b.last ? accent : fill} fillOpacity={b.last ? 0.85 : 1} stroke="white" strokeOpacity={b.last ? 0 : 0.22} strokeWidth="0.4" />
          ))}
          <polyline points={tops.map(([x, y]) => `${f(x)},${f(y - 4)}`).join(' ')} stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          {tops.map(([x, y], i) => (
            <circle key={i} cx={f(x)} cy={f(y - 4)} r={i === tops.length - 1 ? 1.7 : 0.9} fill={i === tops.length - 1 ? accent : 'white'} fillOpacity={i === tops.length - 1 ? 1 : 0.6} />
          ))}
        </g>
      );
    }
    case 'grid': {
      const cols = 7;
      const rows = 5;
      const lit = new Set([Math.floor(v[0] * 35), Math.floor(v[1] * 35), Math.floor(v[2] * 35), Math.floor(v[3] * 35)]);
      const glow = Math.floor(v[4] * 35);
      return (
        <g transform={`translate(38 84) skewY(${f(-14 + rotate * 0.4)})`}>
          {Array.from({ length: cols * rows }, (_, i) => {
            const x = (i % cols) * 8.4;
            const y = Math.floor(i / cols) * 8.4;
            if (i === glow) return <rect key={i} x={f(x)} y={f(y)} width="7" height="7" rx="1.4" fill={accent} fillOpacity="0.9" />;
            if (lit.has(i)) return <rect key={i} x={f(x)} y={f(y)} width="7" height="7" rx="1.4" fill={primary} fillOpacity="0.55" stroke="white" strokeOpacity="0.3" strokeWidth="0.3" />;
            return <circle key={i} cx={f(x + 3.5)} cy={f(y + 3.5)} r="0.75" fill="white" fillOpacity="0.32" />;
          })}
        </g>
      );
    }
    case 'waves': {
      const lines = 5;
      return (
        <g transform={`rotate(${f(rotate * 0.3)} 50 110)`}>
          {Array.from({ length: lines }, (_, i) => {
            const y = 96 + i * 6 + v[i] * 3;
            const a = 6 + v[5 + i] * 8;
            const p = v[10] * 30;
            const d = `M -6 ${f(y)} C ${f(18 + p)} ${f(y - a)}, ${f(42 + p)} ${f(y + a)}, ${f(64 + p * 0.5)} ${f(y - a * 0.4)} S ${f(96)} ${f(y + a * 0.6)}, 108 ${f(y - a * 0.2)}`;
            return <path key={i} d={d} stroke={i === 2 ? stroke : 'white'} strokeOpacity={i === 2 ? 1 : 0.14 + i * 0.03} strokeWidth={i === 2 ? 1.1 : 0.5} strokeLinecap="round" />;
          })}
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={i} cx={f(52 + i * 7 + v[11] * 3)} cy={f(104 + Math.sin(i + v[12] * 6) * 5)} r={i === 5 ? 1.5 : 0.7} fill={i === 5 ? accent : 'white'} fillOpacity={i === 5 ? 1 : 0.5} />
          ))}
        </g>
      );
    }
    case 'nodes': {
      const points = Array.from({ length: 8 }, (_, i) => [34 + v[i] * 60, 74 + v[i + 8] * 52] as [number, number]);
      const edges: [number, number][] = [];
      points.forEach((p, i) => {
        const nearest = points
          .map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1])] as [number, number])
          .filter(([j]) => j !== i)
          .sort((a, b) => a[1] - b[1])
          .slice(0, 2);
        nearest.forEach(([j]) => {
          if (!edges.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) edges.push([i, j]);
        });
      });
      const hub = Math.floor(v[0] * 8);
      return (
        <g>
          {edges.map(([a, b], i) => (
            <line key={i} x1={f(points[a][0])} y1={f(points[a][1])} x2={f(points[b][0])} y2={f(points[b][1])} stroke={a === hub || b === hub ? stroke : 'white'} strokeOpacity={a === hub || b === hub ? 0.9 : 0.18} strokeWidth={a === hub || b === hub ? 0.8 : 0.45} />
          ))}
          {points.map(([x, y], i) => (
            <circle key={i} cx={f(x)} cy={f(y)} r={i === hub ? 3.4 : 1.3} fill={i === hub ? primary : 'white'} fillOpacity={i === hub ? 0.95 : 0.55} stroke={i === hub ? 'white' : undefined} strokeOpacity="0.5" strokeWidth="0.5" />
          ))}
          <circle cx={f(points[hub][0])} cy={f(points[hub][1])} r="7" stroke={accent} strokeOpacity="0.5" strokeWidth="0.5" />
        </g>
      );
    }
    case 'layers': {
      const count = 3 + Math.round(v[0]);
      return (
        <g transform={`translate(${f(44 + v[1] * 8)} ${f(78 + v[2] * 6)}) skewY(${f(-12 + rotate * 0.3)})`}>
          {Array.from({ length: count }, (_, i) => {
            const top = i === count - 1;
            return (
              <rect key={i} x={f(i * 3)} y={f(i * 9)} width="42" height="26" rx="3" fill={top ? fill : 'white'} fillOpacity={top ? 1 : 0.04 + i * 0.02} stroke={top ? stroke : 'white'} strokeOpacity={top ? 1 : 0.2} strokeWidth={top ? 0.9 : 0.45} />
            );
          })}
          <rect x={f((count - 1) * 3 + 5)} y={f((count - 1) * 9 + 6)} width={f(14 + v[3] * 10)} height="2.2" rx="1.1" fill="white" fillOpacity="0.55" />
          <rect x={f((count - 1) * 3 + 5)} y={f((count - 1) * 9 + 11)} width={f(20 + v[4] * 10)} height="1.6" rx="0.8" fill="white" fillOpacity="0.25" />
          <rect x={f((count - 1) * 3 + 5)} y={f((count - 1) * 9 + 17)} width="9" height="4" rx="2" fill={accent} fillOpacity="0.9" />
        </g>
      );
    }
    case 'orbit':
    default: {
      const cx = 68 + v[0] * 10;
      const cy = 102 + v[1] * 8;
      return (
        <g transform={`rotate(${f(rotate)} ${f(cx)} ${f(cy)})`}>
          {[0, 1, 2].map((i) => (
            <ellipse key={i} cx={f(cx)} cy={f(cy)} rx={f(18 + i * 9 + v[2 + i] * 3)} ry={f(7 + i * 3.5)} stroke={i === 1 ? stroke : 'white'} strokeOpacity={i === 1 ? 0.95 : 0.16} strokeWidth={i === 1 ? 0.9 : 0.45} transform={`rotate(${f((i - 1) * 24 + v[5] * 10)} ${f(cx)} ${f(cy)})`} />
          ))}
          <circle cx={f(cx)} cy={f(cy)} r={f(5.5 + v[6] * 2.5)} fill={primary} fillOpacity="0.85" />
          <circle cx={f(cx)} cy={f(cy)} r={f(8.5 + v[6] * 2.5)} stroke="white" strokeOpacity="0.25" strokeWidth="0.4" />
          <circle cx={f(cx + 26 + v[7] * 4)} cy={f(cy - 4)} r="1.8" fill={accent} />
          <circle cx={f(cx - 20 - v[8] * 4)} cy={f(cy + 6)} r="1.1" fill="white" fillOpacity="0.7" />
        </g>
      );
    }
  }
}

'use client';

import { useEffect, useId, useRef, type KeyboardEvent, type MouseEvent, type PointerEvent } from 'react';
import { animate, motion, useMotionValue, useSpring, useTransform, type AnimationPlaybackControls } from 'motion/react';
import { ChartNoAxesCombined, Code2, Laptop, Megaphone, MousePointer2, Rocket, ShoppingCart, Smartphone, type LucideIcon } from 'lucide-react';
import styles from './KochiTechPlatform.module.css';

/*
 * Kochi intro visual: the Grehasoft platform as an isometric three-plate core that opens on hover.
 *
 * Adapted from the Syntra hero's exploded core:
 *  - One shared isometric projection draws every slab, side face, bevel, groove and seam (SVG).
 *  - At rest the three plates form one compact stack with the Grehasoft hub on top. Hovering the core
 *    (tapping on touch, Enter/Space on keyboard) opens it: one `progress` value (0 = stacked, 1 = apart),
 *    driven by a near-critically-damped spring, raises and separates the plates; each plate carries its
 *    two service cards out with it and draws its connectors to them; the orbits step back and the
 *    shadow lightens.
 *  - Everything is a pure function of `progress` (see `pose`), written straight to the DOM each frame:
 *    no React re-render while it moves, and the server renders exactly pose(0).
 *
 * Motion design:
 *  - The deck leads; the middle and base plates follow a beat later, each easing in from rest (a smooth
 *    window, so a late plate never starts at full speed).
 *  - A plate's cards and connectors run on that plate's own progress: the cards rise with their plate,
 *    slide outward and settle as it does; the connectors grow from the plate's moving corner to the
 *    card's moving node once the plate is nearly apart, so everything arrives together.
 *  - Opening and closing use their own springs (closing slightly softer), a tiny rest threshold so the
 *    last pixels glide instead of snapping, and keep their velocity if the direction reverses mid-way.
 */

/* ------------------------------ geometry ------------------------------ */

const ISO_X = 0.866;
const ISO_Y = 0.54;
const CX = 500;
/** Screen y of the deck's top-face centre while stacked. */
const REST_DECK_Y = 500;

interface Slab {
  half: number;
  r: number;
  z0: number;
  z1: number;
}

// Plates, bottom to top (z measured upwards from the base's underside).
const BASE: Slab = { half: 180, r: 34, z0: 0, z1: 34 };
const MID: Slab = { half: 164, r: 30, z0: 42, z1: 66 };
const DECK: Slab = { half: 172, r: 32, z0: 70, z1: 88 };
const HUB: Slab = { half: 70, r: 16, z0: 88, z1: 116 };

type Pt = { a: number; x: number; y: number };
type XY = [number, number];

/**
 * Visible part of the 1000-unit artboard: everything is drawn in the full 1000 × 1000 space, but the frame
 * shows y = ART_TOP to ART_BOTTOM. Nothing sits above 150 in either pose (the open deck's back corner is at
 * ~193), and below the stack only the orbits (to ~834), the hint and the caption remain, so the empty bands
 * are cropped: the composition is unchanged and the visual is short enough to sit beside the intro copy.
 */
const ART_TOP = 150;
const ART_BOTTOM = 920;
const ART_H = ART_BOTTOM - ART_TOP;
const VIEW_BOX = `0 ${ART_TOP} 1000 ${ART_H}`;
/** Artboard y as a percentage of the visual's height (for HTML layers placed over the SVG). */
const yPct = (y: number) => ((y - ART_TOP) / ART_H) * 100;

const project = (x: number, y: number, z: number): XY => [CX + (x - y) * ISO_X, REST_DECK_Y + (x + y) * ISO_Y + (DECK.z1 - z)];
const topY = (z: number) => REST_DECK_Y + (DECK.z1 - z);

/** Rounded-square footprint, ordered by angle (0° = +x, 90° = +y), with both ends of every arc. */
function outline(half: number, r: number, steps = 6): Pt[] {
  const c = half - r;
  const centres = [
    [c, c],
    [-c, c],
    [-c, -c],
    [c, -c],
  ];
  const pts: Pt[] = [];
  centres.forEach(([cx, cy], k) => {
    for (let s = 0; s <= steps; s++) {
      const a = k * 90 + (s * 90) / steps;
      const rad = (a * Math.PI) / 180;
      pts.push({ a, x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) });
    }
  });
  return pts;
}

const fmt = (n: number) => Math.round(n * 100) / 100;
/** Scales need finer steps: at 2 decimals a plate's size moved in visible ~3px jumps. */
const fmt4 = (n: number) => Math.round(n * 10000) / 10000;
const polygon = (points: XY[]) => `M${points.map(([x, y]) => `${fmt(x)} ${fmt(y)}`).join(' L')} Z`;
const polyline = (points: XY[]) => `M${points.map(([x, y]) => `${fmt(x)} ${fmt(y)}`).join(' L')}`;

function arc(pts: Pt[], from: number, to: number) {
  if (from < 0) return [...pts.filter((p) => p.a >= 360 + from), ...pts.filter((p) => p.a <= to)];
  return pts.filter((p) => p.a >= from && p.a <= to);
}

function slabPaths(s: Slab, bevel = 5) {
  const pts = outline(s.half, s.r);
  const at = (list: Pt[], z: number) => list.map((p) => project(p.x, p.y, z));
  // Visible side faces: left face 45°→135° (front corner to left corner), right face −45°→45°.
  const face = (list: Pt[]) => polygon([...at(list, s.z1), ...at([...list].reverse(), s.z0)]);
  const front = arc(pts, -45, 135);
  return {
    top: polygon(at(pts, s.z1)),
    inner: polygon(at(outline(s.half - bevel, s.r - bevel), s.z1)),
    groove: polygon(at(outline(s.half - 18, Math.max(s.r - 18, 6)), s.z1)),
    left: face(arc(pts, 45, 135)),
    right: face(arc(pts, -45, 45)),
    frontBottom: polyline(at(front, s.z0)),
    frontTop: polyline(at(front, s.z1)),
    marks: arc(pts, -45, 45),
  };
}

/* ------------------------------ explode layout ------------------------------ */

/** Horizontal distance from the centre to every plate's side-corner tip once apart. */
const TIP = 132;
// Screen x of a rounded square's side-corner tip, as a multiple of scale (Syntra's tipOffset).
const tipAtScaleOne = (s: Slab) => ISO_X * (2 * s.half - 0.586 * s.r);

interface Plate {
  slab: Slab;
  /** Top-face centre while stacked, and once apart. */
  restTop: number;
  openTop: number;
  /** Scale once apart (every corner tip then sits TIP from the centre). */
  scale: number;
  /** Share of the shared progress this plate waits before it starts (the deck leads). */
  delay: number;
}

// Bottom to top. The deck leads and rises furthest; the base barely moves.
const PLATES: Plate[] = [
  { slab: BASE, restTop: topY(BASE.z1), openTop: 620, scale: TIP / tipAtScaleOne(BASE), delay: 0.12 },
  { slab: MID, restTop: topY(MID.z1), openTop: 450, scale: TIP / tipAtScaleOne(MID), delay: 0.06 },
  { slab: DECK, restTop: topY(DECK.z1), openTop: 280, scale: TIP / tipAtScaleOne(DECK), delay: 0 },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Smoothstep: starts and ends at rest, so nothing enters or leaves its window at full speed. */
const smooth = (t: number) => t * t * (3 - 2 * t);
/** Position of `v` inside [from, to], eased. */
const windowed = (v: number, from: number, to: number) => smooth(clamp01((v - from) / (to - from)));

/** Progress of one plate. The deck follows the spring directly; later plates ease into their window. */
const plateProgress = (i: number, p: number) => {
  const { delay } = PLATES[i];
  return delay === 0 ? clamp01(p) : windowed(p, delay, 1);
};

/* ------------------------------ services ------------------------------ */

type Tone = 'blue' | 'green';
type Side = 'left' | 'right';

interface Service {
  id: string;
  label: [string, string];
  icon: LucideIcon;
  tone: Tone;
  plate: number;
  side: Side;
}

// Two services per plate, top to bottom (left, then right): the capabilities named in the intro copy.
// Build capabilities are blue, growth (marketing and advertising) green.
const SERVICES: Service[] = [
  { id: 'web', label: ['Website', 'Development'], icon: Laptop, tone: 'blue', plate: 2, side: 'left' },
  { id: 'seo', label: ['SEO & Digital', 'Marketing'], icon: ChartNoAxesCombined, tone: 'green', plate: 2, side: 'right' },
  { id: 'ecommerce', label: ['E-Commerce', 'Solutions'], icon: ShoppingCart, tone: 'blue', plate: 1, side: 'left' },
  { id: 'ads', label: ['Online', 'Advertising'], icon: Megaphone, tone: 'green', plate: 1, side: 'right' },
  { id: 'software', label: ['Custom', 'Software'], icon: Code2, tone: 'blue', plate: 0, side: 'left' },
  { id: 'mobile', label: ['Mobile', 'Applications'], icon: Smartphone, tone: 'blue', plate: 0, side: 'right' },
];

/** Cards in percent of the visual's width: they start at the edge and take this width. */
const CARD = { edge: 1.5, width: 30 };
const dir = (side: Side) => (side === 'left' ? -1 : 1);
const cardInnerEdge = (side: Side) => (side === 'left' ? (CARD.edge + CARD.width) * 10 : (100 - CARD.edge - CARD.width) * 10);
/** The card's connector node, just outside its inner edge (artboard units). */
const nodeX = (side: Side) => cardInnerEdge(side) - dir(side) * 10;

/** Reveal choreography, on each plate's own progress k. */
const REVEAL = {
  // Cards fade, rise with their plate and slide outward between these points.
  card: [0.22, 0.9] as const,
  // Connectors grow once the plate is nearly apart, so they land with the card.
  line: [0.58, 0.97] as const,
  // How far a card starts toward the core (artboard units), its starting scale, and how much of its
  // plate's remaining travel it still has to make when it starts to show.
  inset: 46,
  scaleFrom: 0.92,
  follow: 0.6,
};

/** Height of a plate's side corners (where its cards and connectors attach), at plate progress k. */
function plateCornerY(i: number, k: number) {
  const pl = PLATES[i];
  const s = 1 + (pl.scale - 1) * k;
  const top = pl.restTop + (pl.openTop - pl.restTop) * k;
  return top + ((pl.slab.z1 - pl.slab.z0) * s) / 2;
}
const openCornerY = (i: number) => plateCornerY(i, 1);

/**
 * The Grehasoft brand mark (/images/icon.png, the same asset as the hub's mark) laid on the top faces of the
 * middle and base plates. The mark alone: the full logo's tagline was unreadable at this size, and there is
 * no wordmark-only asset. Sized per plate so it reads the same on screen once the plates have shrunk apart
 * (each plate has its own open scale), and flattened like the hub's logo so it sits in the isometric surface.
 */
const PLATE_LOGO = {
  src: '/images/icon.png',
  aspect: 190 / 210,
  // On-screen width once apart, in artboard units: about twice the hub's mark (~20), a clear emblem that
  // stays well inside each face (~280 wide once apart).
  openWidth: 46,
  // Window of the plate's own progress. With the open/close springs this is a ~190–215ms fade (0.3–0.8 was
  // ~115ms, quicker than the plates); it starts while the plate above still mostly covers the face.
  fade: [0.1, 0.9] as const,
};
const plateLogo = (i: number) => {
  const pl = PLATES[i];
  const w = PLATE_LOGO.openWidth / pl.scale;
  const h = w * PLATE_LOGO.aspect;
  return { x: CX - w / 2, y: -h / 2, w, h, cy: topY(pl.slab.z1) };
};

/** Everything the reveal changes, as a pure function of the shared progress. */
function pose(p: number) {
  const plates = PLATES.map((pl, i) => {
    const k = plateProgress(i, p);
    // Rounded once, then used for the translation too, so the plate's anchor stays exact.
    const s = fmt4(1 + (pl.scale - 1) * k);
    const ty = (pl.openTop - pl.restTop) * k;
    return {
      k,
      // Scales the plate about its own top-face centre while moving it to its open height.
      matrix: `matrix(${s} 0 0 ${s} ${fmt4(CX * (1 - s))} ${fmt4(pl.restTop * (1 - s) + ty)})`,
      cast: fmt(k * 0.16),
      // Logo on the middle and base plates: fades in as the plate parts (hidden at rest under the plate above anyway).
      logo: fmt(windowed(k, PLATE_LOGO.fade[0], PLATE_LOGO.fade[1])),
      tipX: (side: Side) => CX + dir(side) * (tipAtScaleOne(pl.slab) * s + 7),
      cornerY: plateCornerY(i, k),
    };
  });
  const services = SERVICES.map((sv) => {
    const pl = plates[sv.plate];
    const c = windowed(pl.k, REVEAL.card[0], REVEAL.card[1]);
    const l = windowed(pl.k, REVEAL.line[0], REVEAL.line[1]);
    // Card offsets from its open spot (artboard units): toward the core, and still part-way along its
    // plate's path, both closing to zero as it settles.
    const dx = -dir(sv.side) * REVEAL.inset * (1 - c);
    const dy = (pl.cornerY - openCornerY(sv.plate)) * REVEAL.follow * (1 - c);
    const scale = REVEAL.scaleFrom + (1 - REVEAL.scaleFrom) * c;
    // Connector: from the plate's moving corner to the card's moving node, drawn out by `l`.
    const x1 = pl.tipX(sv.side);
    const y1 = pl.cornerY;
    const nx = nodeX(sv.side) + dx;
    const ny = openCornerY(sv.plate) + dy;
    // Draw only once the plate's corner is inside the card's node (never "through" the card while the
    // plate is still wider than the gap).
    const reach = (nx - x1) * dir(sv.side) > 0 ? l : 0;
    return {
      // Rest opacity is 0.004, not 0: at least 1/255 alpha, so the browser rasterises the cards on load
      // and the first reveal has nothing new to paint (0, or anything rounding to 0 alpha, made the
      // first opening hitch for ~250 ms). 0.4% of a navy card over white is not perceptible.
      cardOpacity: Math.round((0.004 + 0.996 * c) * 1000) / 1000,
      cardTransform: `translate(${fmt4(dx / 10)}cqw, ${fmt4(dy / 10)}cqw) scale(${fmt4(scale)})`,
      x1: fmt(x1),
      y1: fmt(y1),
      x2: fmt(x1 + (nx - x1) * reach),
      y2: fmt(y1 + (ny - y1) * reach),
      nx: fmt(nx),
      ny: fmt(ny),
      track: fmt(0.001 + 0.999 * reach),
      dot: fmt(0.001 + 0.999 * clamp01(reach / 0.25)),
      node: fmt(0.001 + 0.999 * clamp01((reach - 0.65) / 0.35)),
      bead: fmt(clamp01((reach - 0.9) / 0.1)),
    };
  });
  return {
    plates,
    services,
    orbit: fmt(1 - 0.85 * clamp01(p / 0.6)),
    shadow: fmt(1 - 0.45 * p),
    hint: fmt(1 - clamp01(p / 0.25)),
  };
}

const REST = pose(0);

const TONE = {
  blue: { line: '#0753F6', bead: '#3D7DFF' },
  green: { line: '#1AB728', bead: '#2BD13D' },
};

/* ------------------------------ artwork ------------------------------ */

function Glow({ d, stroke }: { d: string; stroke: string }) {
  return (
    <g fill="none" stroke={stroke} strokeLinecap="round">
      <path d={d} strokeWidth="14" strokeOpacity="0.07" />
      <path d={d} strokeWidth="8" strokeOpacity="0.14" />
      <path d={d} strokeWidth="4.5" strokeOpacity="0.28" />
    </g>
  );
}

function SlabShape({ s, url, groove = true }: { s: ReturnType<typeof slabPaths>; url: (n: string) => string; groove?: boolean }) {
  return (
    <>
      <path d={s.left} fill={url('left')} />
      <path d={s.right} fill={url('right')} />
      <path d={s.frontBottom} stroke="#05044A" strokeOpacity="0.1" strokeWidth="1.2" fill="none" />
      <path d={s.top} fill={url('bevel')} stroke="#DCE2EF" strokeWidth="1" />
      <path d={s.inner} fill={url('top')} />
      {groove && <path d={s.groove} fill="none" stroke="#05044A" strokeOpacity="0.07" strokeWidth="1.3" />}
      <path d={s.frontTop} stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
    </>
  );
}

/** Soft shadow a plate casts on the one below while they part (radial gradient, no blur filter). */
function PlateShadow({ plate, url, refCb }: { plate: Plate; url: (n: string) => string; refCb: (el: SVGEllipseElement | null) => void }) {
  const depth = plate.slab.z1 - plate.slab.z0;
  return <ellipse ref={refCb} cx={CX} cy={plate.restTop + depth + 64} rx={plate.slab.half * 1.55} ry={plate.slab.half * 0.55} fill={url('cast')} opacity="0" />;
}

/** The logo lying on a plate's top face, centred; it moves and scales with its plate's group. */
function PlateLogo({ index, refCb, opacity }: { index: number; refCb: (el: SVGGElement | null) => void; opacity: number }) {
  const l = plateLogo(index);
  return (
    <g ref={refCb} opacity={opacity} transform={`translate(0 ${fmt(l.cy)}) scale(1 ${ISO_Y + 0.14})`}>
      <image href={PLATE_LOGO.src} x={fmt(l.x)} y={fmt(l.y)} width={fmt(l.w)} height={fmt(l.h)} preserveAspectRatio="xMidYMid meet" />
    </g>
  );
}

function TileIcon({ icon }: { icon: Service['icon'] }) {
  const Icon = icon;
  return <Icon className={styles.icon} strokeWidth={1.9} aria-hidden="true" />;
}

/* ------------------------------ background ------------------------------ */

const RING_CY = 560;
const RING_FLATTEN = 0.57;
const RINGS = [480, 385, 300];
const ellipsePath = (rx: number, ry: number, reverse = false) =>
  `M${CX - rx} ${RING_CY} a${rx} ${ry} 0 1 ${reverse ? 0 : 1} ${rx * 2} 0 a${rx} ${ry} 0 1 ${reverse ? 0 : 1} ${-rx * 2} 0`;

/** Static atmosphere: ambient light, technical backdrop and orbit lines (painted once). */
function Backdrop({ uid }: { uid: string }) {
  const id = (name: string) => `${uid}-bg-${name}`;
  const url = (name: string) => `url(#${id(name)})`;
  const plus: XY[] = [
    [120, 300],
    [880, 260],
    [190, 760],
    [860, 700],
    [640, 140],
    [360, 900],
  ];
  return (
    <svg viewBox={VIEW_BOX} className={styles.layer} aria-hidden="true">
      <defs>
        <radialGradient id={id('blue')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0753F6" stopOpacity="0.16" />
          <stop offset="1" stopColor="#0753F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('green')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#1AB728" stopOpacity="0.13" />
          <stop offset="1" stopColor="#1AB728" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('fade')} cx="0.5" cy="0.55" r="0.55">
          <stop offset="0.35" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#000000" />
        </radialGradient>
        <mask id={id('mask')}>
          <rect width="1000" height="1000" fill={url('fade')} />
        </mask>
        <pattern id={id('dots')} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#05044A" fillOpacity="0.16" />
        </pattern>
      </defs>
      <ellipse cx={CX} cy={520} rx={430} ry={380} fill={url('blue')} />
      {/* Kept inside the artboard: the visual is frameless, so a glow running past the SVG's edge would show a hard cut. */}
      <ellipse cx={740} cy={740} rx={230} ry={210} fill={url('green')} />
      <g mask={url('mask')}>
        <rect width="1000" height="1000" fill={url('dots')} />
        <path d="M60 820 L940 312 M60 312 L940 820" stroke="#05044A" strokeOpacity="0.05" strokeWidth="1" />
        {plus.map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x - 7} ${y} H${x + 7} M${x} ${y - 7} V${y + 7}`} stroke="#0753F6" strokeOpacity="0.3" strokeWidth="1.5" />
        ))}
      </g>
    </svg>
  );
}

/** Orbits and their nodes (SVG animateMotion, paused off screen and while the core is open). */
function Orbits({ uid }: { uid: string }) {
  const id = (name: string) => `${uid}-orb-${name}`;
  const nodes = [
    { ring: 0, color: '#0753F6', dur: 38, begin: -4, primary: true },
    { ring: 0, color: '#1AB728', dur: 38, begin: -23, primary: true },
    { ring: 1, color: '#1AB728', dur: 30, begin: -9, primary: false },
    { ring: 2, color: '#0753F6', dur: 26, begin: -15, primary: false },
  ];
  return (
    <svg viewBox={VIEW_BOX} className={styles.layer} aria-hidden="true" data-smil="orbits">
      <defs>
        {RINGS.map((rx, i) => (
          <path key={rx} id={id(`${i}`)} d={ellipsePath(rx, rx * RING_FLATTEN, i % 2 === 1)} />
        ))}
      </defs>
      {RINGS.map((rx, i) => (
        <ellipse
          key={rx}
          cx={CX}
          cy={RING_CY}
          rx={rx}
          ry={rx * RING_FLATTEN}
          fill="none"
          stroke={i === 1 ? '#0753F6' : '#05044A'}
          strokeOpacity={i === 1 ? 0.16 : 0.09}
          strokeWidth="1.4"
          strokeDasharray={i === 1 ? '2 9' : undefined}
          className={i === 1 ? styles.ringDrift : undefined}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i} className={n.primary ? undefined : styles.dotSecondary}>
          <circle r="9" fill={n.color} opacity="0.18">
            <animateMotion dur={`${n.dur}s`} begin={`${n.begin}s`} repeatCount="indefinite">
              <mpath href={`#${id(`${n.ring}`)}`} />
            </animateMotion>
          </circle>
          <circle r="3.6" fill={n.color}>
            <animateMotion dur={`${n.dur}s`} begin={`${n.begin}s`} repeatCount="indefinite">
              <mpath href={`#${id(`${n.ring}`)}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------ component ------------------------------ */

const POINTER_SPRING = { stiffness: 55, damping: 18, mass: 0.9 };
// Near-critically damped (ζ ≈ 1.0–1.05): the quickest settle with no overshoot or bounce. Closing is a
// little softer so it reads as the core folding back together, not a rewind.
const OPEN_SPRING = { type: 'spring' as const, stiffness: 80, damping: 18, mass: 1, restDelta: 0.0005, restSpeed: 0.0005 };
const CLOSE_SPRING = { type: 'spring' as const, stiffness: 62, damping: 16.5, mass: 1, restDelta: 0.0005, restSpeed: 0.0005 };
/** Grace period before a mouse leaving the visual closes it (a brief overshoot past the edge is forgiven). */
const CLOSE_DELAY_MS = 160;
/** Must match the phone breakpoint in KochiTechPlatform.module.css (in-visual cards hidden, grid shown). */
const PHONE_QUERY = '(max-width: 639px)';

type Ref<T> = { current: (T | null)[] };
const setAt = <T,>(ref: Ref<T>, i: number) => (el: T | null) => {
  ref.current[i] = el;
};

export default function KochiTechPlatform({ label }: { label: string }) {
  const uid = `ktp${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const listId = `${uid}-services`;
  const id = (name: string) => `${uid}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const plateRefs = useRef<(SVGGElement | null)[]>([]);
  const castRefs = useRef<(SVGEllipseElement | null)[]>([]);
  const logoRefs = useRef<(SVGGElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const trackRefs = useRef<(SVGLineElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const beadRefs = useRef<(SVGCircleElement | null)[]>([]);
  const orbitRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<SVGEllipseElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  const parallaxOn = useRef(false);
  const reduceRef = useRef(false);
  const pointerType = useRef('mouse');
  const openRef = useRef(false);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const closeTimer = useRef<number | null>(null);
  const syncPause = useRef<() => void>(() => {});

  // Pointer parallax (desktop mice only).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, POINTER_SPRING);
  const y = useSpring(py, POINTER_SPRING);
  const bgX = useTransform(x, (v) => v * -4);
  const bgY = useTransform(y, (v) => v * -4);
  const platX = useTransform(x, (v) => v * 8);
  const platY = useTransform(y, (v) => v * 8);

  // The shared reveal progress: 0 = stacked, 1 = apart.
  const progress = useMotionValue(0);
  const tiltY = useTransform(x, (v) => v * 4);
  // While open the stack also leans back a little (Syntra), which adds depth.
  const tiltX = useTransform([y, progress], ([v, p]: number[]) => v * -4 + p * 4);

  // Every frame of the reveal: write the pose straight to the DOM (no React render).
  useEffect(() => {
    const apply = (p: number) => {
      const f = pose(p);
      f.plates.forEach((pl, i) => {
        plateRefs.current[i]?.setAttribute('transform', pl.matrix);
        castRefs.current[i]?.setAttribute('opacity', `${pl.cast}`);
        logoRefs.current[i]?.setAttribute('opacity', `${pl.logo}`);
      });
      f.services.forEach((sv, i) => {
        const card = cardRefs.current[i];
        if (card) {
          card.style.opacity = `${sv.cardOpacity}`;
          card.style.transform = sv.cardTransform;
        }
        const line = lineRefs.current[i];
        line?.setAttribute('x1', `${sv.x1}`);
        line?.setAttribute('y1', `${sv.y1}`);
        line?.setAttribute('x2', `${sv.x2}`);
        line?.setAttribute('y2', `${sv.y2}`);
        const track = trackRefs.current[i];
        if (track) {
          track.setAttribute('x1', `${sv.x1}`);
          track.setAttribute('y1', `${sv.y1}`);
          track.setAttribute('x2', `${sv.nx}`);
          track.setAttribute('y2', `${sv.ny}`);
          track.setAttribute('opacity', `${sv.track}`);
        }
        const dot = dotRefs.current[i];
        dot?.setAttribute('cx', `${sv.x1}`);
        dot?.setAttribute('cy', `${sv.y1}`);
        dot?.setAttribute('opacity', `${sv.dot}`);
        const node = nodeRefs.current[i];
        node?.setAttribute('transform', `translate(${sv.nx} ${sv.ny})`);
        node?.setAttribute('opacity', `${sv.node}`);
        beadRefs.current[i]?.setAttribute('opacity', `${sv.bead}`);
      });
      if (orbitRef.current) orbitRef.current.style.opacity = `${f.orbit}`;
      shadowRef.current?.setAttribute('opacity', `${f.shadow}`);
      if (hintRef.current) hintRef.current.style.opacity = `${f.hint}`;
    };
    apply(progress.get());
    return progress.on('change', apply);
  }, [progress]);

  /** Open or close the core: imperative, so it never re-renders the artwork. */
  const setOpen = (next: boolean) => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (openRef.current === next) return;
    openRef.current = next;
    const root = rootRef.current;
    if (root) {
      if (next) root.dataset.open = '';
      else delete root.dataset.open;
    }
    buttonRef.current?.setAttribute('aria-expanded', `${next}`);
    listRef.current?.setAttribute('aria-hidden', `${!next}`);
    controlsRef.current?.stop();
    if (reduceRef.current) {
      progress.jump(next ? 1 : 0);
    } else {
      // Starts from the current position and velocity, so a reversal mid-way stays continuous.
      controlsRef.current = animate(progress, next ? 1 : 0, next ? OPEN_SPRING : CLOSE_SPRING);
    }
    syncPause.current();
  };
  const scheduleClose = () => {
    if (!openRef.current || closeTimer.current !== null) return;
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      setOpen(false);
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
    const svg = (name: string) => root.querySelector<SVGSVGElement>(`svg[data-smil="${name}"]`);

    // Orbit nodes run only while visible and closed; connector beads only while visible and open.
    let inView = true;
    const applyPause = () => {
      reduceRef.current = reduce.matches;
      const still = !inView || document.hidden || reduce.matches;
      if (still) root.dataset.paused = '';
      else delete root.dataset.paused;
      const orbits = svg('orbits');
      const beads = svg('beads');
      if (orbits) {
        if (still || openRef.current) orbits.pauseAnimations();
        else orbits.unpauseAnimations();
      }
      if (beads) {
        if (still || !openRef.current) beads.pauseAnimations();
        else beads.unpauseAnimations();
      }
    };
    syncPause.current = applyPause;
    const updateParallax = () => {
      parallaxOn.current = desktop.matches && !reduce.matches;
      if (!parallaxOn.current) {
        px.set(0);
        py.set(0);
      }
    };

    let viewObserver: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      viewObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        applyPause();
      });
      viewObserver.observe(root);
    }
    // Phones list the services in a grid below the visual (the in-visual cards are hidden there), so
    // the core only unfolds the plates: it must not claim to control the hidden card list.
    const phone = window.matchMedia(PHONE_QUERY);
    const updateButton = () => {
      const btn = buttonRef.current;
      if (!btn) return;
      if (phone.matches) {
        btn.removeAttribute('aria-controls');
        btn.setAttribute('aria-label', 'Unfold the Grehasoft platform');
      } else {
        btn.setAttribute('aria-controls', listId);
        btn.setAttribute('aria-label', 'Show Grehasoft services');
      }
    };

    document.addEventListener('visibilitychange', applyPause);
    reduce.addEventListener('change', applyPause);
    reduce.addEventListener('change', updateParallax);
    desktop.addEventListener('change', updateParallax);
    phone.addEventListener('change', updateButton);
    applyPause();
    updateParallax();
    updateButton();

    // Warm-up: the first repaint of the card layers after load is a one-off ~250 ms of rasterising.
    // Pay it while idle, once the visual is first on screen, with an invisible nudge (card opacity
    // 0.004 → 0.005 for a couple of frames), so the first real opening starts on already-painted layers.
    let warmObserver: IntersectionObserver | undefined;
    let warmHandle = 0;
    const hasIdle = typeof window.requestIdleCallback === 'function';
    const idle = (cb: () => void): number => (hasIdle ? window.requestIdleCallback(cb, { timeout: 1200 }) : globalThis.setTimeout(cb, 300) as unknown as number);
    const cancelIdle = (h: number) => (hasIdle ? window.cancelIdleCallback(h) : globalThis.clearTimeout(h));
    // Only while closed and fully at rest, so it never interferes with a real opening.
    const atRest = () => !openRef.current && progress.get() === 0;
    const warm = () => {
      if (!atRest()) return;
      const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
      cards.forEach((c) => (c.style.opacity = '0.005'));
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (atRest()) cards.forEach((c, i) => (c.style.opacity = `${REST.services[i].cardOpacity}`));
        }),
      );
    };
    if ('IntersectionObserver' in window) {
      warmObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        warmObserver?.disconnect();
        warmObserver = undefined;
        warmHandle = idle(warm);
      });
      warmObserver.observe(root);
    }

    // Entrance: only when the visual starts mostly off screen, so the server-rendered scene is never
    // hidden from a visitor who can already see it (or has no JavaScript / reduced motion).
    let enterObserver: IntersectionObserver | undefined;
    const rect = root.getBoundingClientRect();
    const visible = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
    if (!reduce.matches && 'IntersectionObserver' in window && rect.height > 0 && visible / rect.height < 0.3) {
      try {
        enterObserver = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            root.dataset.enter = 'play';
            enterObserver?.disconnect();
            enterObserver = undefined;
          },
          { threshold: 0.3 },
        );
        enterObserver.observe(root);
        root.dataset.enter = 'armed';
      } catch {
        enterObserver?.disconnect();
        enterObserver = undefined;
        delete root.dataset.enter;
      }
    }

    return () => {
      viewObserver?.disconnect();
      enterObserver?.disconnect();
      warmObserver?.disconnect();
      if (warmHandle) cancelIdle(warmHandle);
      controlsRef.current?.stop();
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
      document.removeEventListener('visibilitychange', applyPause);
      reduce.removeEventListener('change', applyPause);
      reduce.removeEventListener('change', updateParallax);
      desktop.removeEventListener('change', updateParallax);
      phone.removeEventListener('change', updateButton);
      syncPause.current = () => {};
    };
  }, [px, py, progress, listId]);

  /* -------- input: a mouse opens it by hovering the core; touch and keyboard toggle it -------- */

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!parallaxOn.current || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - box.left) / box.width - 0.5) * 2);
    py.set(((event.clientY - box.top) / box.height - 0.5) * 2);
  };
  const onPointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    // Coming back within the grace period cancels the pending close.
    if (event.pointerType === 'mouse' && closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    px.set(0);
    py.set(0);
    // A touch "leaves" as the finger lifts; only a mouse leaving closes the core.
    if (event.pointerType === 'mouse') scheduleClose();
  };
  const onCorePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    pointerType.current = event.pointerType;
  };
  const onCorePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'mouse') setOpen(true);
  };
  const onCoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0 || pointerType.current !== 'mouse') setOpen(!openRef.current);
  };
  const onCoreKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') setOpen(false);
  };

  /* -------- static geometry (rest pose; `progress` moves it) -------- */

  const base = slabPaths(BASE);
  const mid = slabPaths(MID);
  const deck = slabPaths(DECK, 6);
  const hub = slabPaths(HUB, 5);
  const [hubX, hubY] = project(0, 0, HUB.z1);
  const deckCentreY = topY(DECK.z1);
  const grid: string[] = [];
  for (let t = -DECK.half + 36; t < DECK.half; t += 36) {
    grid.push(polyline([project(t, -DECK.half, DECK.z1), project(t, DECK.half, DECK.z1)]));
    grid.push(polyline([project(-DECK.half, t, DECK.z1), project(DECK.half, t, DECK.z1)]));
  }
  const shadowY = project(0, 0, -6)[1] + 24;

  return (
    <>
    <div
      ref={rootRef}
      role="group"
      aria-label={label}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={`${styles.root} relative`}
      style={{ aspectRatio: `1000 / ${ART_H}` }}
    >
      <div className={styles.stage}>
        {/* Background and orbits: slide against the pointer; orbits step back while open */}
        <motion.div className={styles.layer} style={{ x: bgX, y: bgY }}>
          <Backdrop uid={uid} />
          <div ref={orbitRef} className={`${styles.layer} ${styles.orbitLayer}`}>
            <Orbits uid={uid} />
          </div>
        </motion.div>

        {/* The core: tilts toward the pointer, leans back when open, floats */}
        <motion.div className={`${styles.layer} ${styles.core}`} style={{ x: platX, y: platY, rotateX: tiltX, rotateY: tiltY }}>
          <div className={`${styles.layer} ${styles.enterStack}`}>
            <div className={`${styles.layer} ${styles.float}`}>
              <svg viewBox={VIEW_BOX} className={styles.layer} aria-hidden="true">
                <defs>
                  <linearGradient id={id('brand')} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#0753F6" />
                    <stop offset="1" stopColor="#1AB728" />
                  </linearGradient>
                  <linearGradient id={id('bevel')} x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#E4E9F4" />
                  </linearGradient>
                  <linearGradient id={id('top')} x1="0.1" x2="0.9" y1="0" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#F1F5FD" />
                  </linearGradient>
                  <linearGradient id={id('left')} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#E3E8F3" />
                    <stop offset="1" stopColor="#C8D1E5" />
                  </linearGradient>
                  <linearGradient id={id('right')} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#F2F5FB" />
                    <stop offset="1" stopColor="#D9E0EE" />
                  </linearGradient>
                  <linearGradient id={id('word')} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#0753F6" />
                    <stop offset="1" stopColor="#1AB728" />
                  </linearGradient>
                  <radialGradient id={id('contact')} cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#05044A" stopOpacity="0.24" />
                    <stop offset="0.55" stopColor="#05044A" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#05044A" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id={id('cast')} cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#05044A" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#05044A" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id={id('hubGlow')} cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#0753F6" stopOpacity="0.24" />
                    <stop offset="0.6" stopColor="#1AB728" stopOpacity="0.06" />
                    <stop offset="1" stopColor="#1AB728" stopOpacity="0" />
                  </radialGradient>
                  <clipPath id={id('deckClip')}>
                    <path d={deck.inner} />
                  </clipPath>
                </defs>

                {/* Contact shadow on the floor (Syntra core-shadow); lightens as the core opens */}
                <ellipse ref={shadowRef} cx={CX} cy={shadowY} rx={BASE.half * ISO_X * 2.1} ry={BASE.half * ISO_Y * 1.35} fill={url('contact')} opacity={REST.shadow} />

                {/* Plate 0 — base, with its glowing underside edge */}
                <g ref={setAt(plateRefs, 0)} transform={REST.plates[0].matrix}>
                  <Glow d={base.frontBottom} stroke={url('brand')} />
                  <SlabShape s={base} url={url} />
                  <path d={base.frontBottom} stroke={url('brand')} strokeWidth="2.4" fill="none" strokeLinecap="round" />
                  {[0.32, 0.4, 0.48].map((t) => {
                    const p = base.marks[Math.round(t * (base.marks.length - 1))];
                    const [cx, cy] = project(p.x, p.y, BASE.z0 + 12);
                    return <circle key={t} cx={cx} cy={cy} r="2.6" fill="#8E97B3" opacity="0.7" />;
                  })}
                  <PlateLogo index={0} refCb={setAt(logoRefs, 0)} opacity={REST.plates[0].logo} />
                </g>

                {/* Plate 1 — middle, carrying the light-emitting seam */}
                <g ref={setAt(plateRefs, 1)} transform={REST.plates[1].matrix}>
                  <PlateShadow plate={PLATES[1]} url={url} refCb={setAt(castRefs, 1)} />
                  <Glow d={mid.frontBottom} stroke={url('brand')} />
                  <SlabShape s={mid} url={url} />
                  <path d={mid.frontBottom} stroke={url('brand')} strokeWidth="2" fill="none" strokeLinecap="round" />
                  {[0.3, 0.5, 0.7].map((t) => {
                    const p = mid.marks[Math.round(t * (mid.marks.length - 1))];
                    const [x1, y1] = project(p.x, p.y, MID.z1 - 7);
                    const [x2, y2] = project(p.x, p.y, MID.z0 + 7);
                    return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#05044A" strokeOpacity="0.1" strokeWidth="1.5" strokeLinecap="round" />;
                  })}
                  <PlateLogo index={1} refCb={setAt(logoRefs, 1)} opacity={REST.plates[1].logo} />
                </g>

                {/* Plate 2 — top deck with the raised Grehasoft hub (leads the reveal) */}
                <g ref={setAt(plateRefs, 2)} transform={REST.plates[2].matrix}>
                  <PlateShadow plate={PLATES[2]} url={url} refCb={setAt(castRefs, 2)} />
                  <SlabShape s={deck} url={url} groove={false} />
                  <g clipPath={url('deckClip')} stroke="#0753F6" strokeOpacity="0.08" strokeWidth="1">
                    {grid.map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </g>
                  <path d={deck.groove} fill="none" stroke="#05044A" strokeOpacity="0.07" strokeWidth="1.3" />
                  <ellipse cx={hubX} cy={deckCentreY} rx={190} ry={190 * ISO_Y * 1.3} fill={url('hubGlow')} />
                  <Glow d={hub.frontBottom} stroke={url('word')} />
                  <SlabShape s={hub} url={url} groove={false} />
                  <path d={hub.frontBottom} stroke={url('word')} strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Logo and wordmark lying on the hub's top face */}
                  <g transform={`translate(${fmt(hubX)} ${fmt(hubY)}) scale(1 ${ISO_Y + 0.14})`}>
                    <image href="/images/icon.png" x={-96} y={-20} width={42} height={38} preserveAspectRatio="xMidYMid meet" />
                    <text x={-50} y={10} fontSize="29" fontWeight="700" fontFamily="var(--font-poppins), Poppins, sans-serif" fill={url('word')} letterSpacing="-0.4">
                      Grehasoft
                    </text>
                  </g>
                </g>
              </svg>

              {/* Connectors: from each plate's moving corner to its card's moving node */}
              <svg viewBox={VIEW_BOX} className={`${styles.layer} ${styles.connectors}`} aria-hidden="true" data-smil="beads">
                {SERVICES.map((s, i) => {
                  const r = REST.services[i];
                  const finalY = openCornerY(s.plate);
                  return (
                    <g key={s.id}>
                      <line ref={setAt(trackRefs, i)} x1={r.x1} y1={r.y1} x2={r.nx} y2={r.ny} opacity={r.track} stroke="#05044A" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 5" />
                      <line ref={setAt(lineRefs, i)} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={TONE[s.tone].line} strokeWidth="1.6" strokeLinecap="round" />
                      <circle ref={setAt(dotRefs, i)} cx={r.x1} cy={r.y1} r="3" fill="#8E97B3" opacity={r.dot} />
                      <g ref={setAt(nodeRefs, i)} transform={`translate(${r.nx} ${r.ny})`} opacity={r.node}>
                        <circle r="9" fill={TONE[s.tone].line} opacity="0.16" />
                        <circle r="3.8" fill={TONE[s.tone].line} />
                      </g>
                      <circle ref={setAt(beadRefs, i)} cy={finalY} r="2.8" fill={TONE[s.tone].bead} opacity={r.bead}>
                        <animate attributeName="cx" values={`${nodeX(s.side)};${CX + dir(s.side) * (TIP + 7)}`} dur="1.8s" begin={`${-i * 0.3}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.45 0 0.55 1" />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Service cards beside their plates: hidden at rest, carried out by their plate as it opens */}
              <ul ref={listRef} id={listId} aria-label="Grehasoft services" aria-hidden="true" className={styles.cards}>
                {SERVICES.map((s, i) => (
                  <li
                    key={s.id}
                    className={styles.cardSlot}
                    style={{ top: `${fmt(yPct(openCornerY(s.plate)))}%`, left: `${s.side === 'left' ? CARD.edge : 100 - CARD.edge - CARD.width}%`, width: `${CARD.width}%` }}
                  >
                    <div
                      ref={setAt(cardRefs, i)}
                      className={`${styles.card} ${styles[s.tone]} ${s.side === 'left' ? styles.fromRight : styles.fromLeft}`}
                      style={{ opacity: REST.services[i].cardOpacity, transform: REST.services[i].cardTransform }}
                    >
                      <span className={styles.cardIcon}>
                        <TileIcon icon={s.icon} />
                      </span>
                      <span className={styles.cardLabel}>
                        {s.label[0]}
                        <br />
                        {s.label[1]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* A quiet invitation under the core; touch screens are told to tap */}
        <p ref={hintRef} aria-hidden="true" className={styles.hint} style={{ opacity: REST.hint }}>
          <MousePointer2 className={styles.hintIcon} strokeWidth={1.8} />
          <span className={styles.hintHover}>Hover to explore our services</span>
          <span className={styles.hintTouch}>Tap to explore our services</span>
          <span className={styles.hintPhone}>Tap to unfold the platform</span>
        </p>

        {/* The core itself: hover (mouse) opens it; tap, Enter or Space toggles it */}
        <button
          ref={buttonRef}
          type="button"
          aria-label="Show Grehasoft services"
          aria-expanded="false"
          aria-controls={listId}
          onPointerDown={onCorePointerDown}
          onPointerEnter={onCorePointerEnter}
          onClick={onCoreClick}
          onKeyDown={onCoreKeyDown}
          onBlur={() => setOpen(false)}
          className={styles.coreButton}
        />

        <p className={styles.caption}>
          <Rocket className={styles.captionIcon} strokeWidth={1.8} aria-hidden="true" />
          Strategy, Design, Engineering &amp; Ongoing Support
        </p>
      </div>
    </div>

    {/* Phones: the visual is too narrow for cards beside the plates, so the services sit below it as a
        grid (Syntra's stage list). Only one of the two lists is ever displayed, so nothing is announced twice. */}
    <ul aria-label="Grehasoft services" className={styles.mobileList}>
      {SERVICES.map((s) => (
        <li key={s.id} className={`${styles.mobileCard} ${styles[s.tone]}`}>
          <span className={styles.mobileIcon}>
            <TileIcon icon={s.icon} />
          </span>
          <span className={styles.mobileLabel}>
            {s.label[0]} {s.label[1]}
          </span>
        </li>
      ))}
    </ul>
    </>
  );
}

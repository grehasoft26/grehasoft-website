'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from 'motion/react';
import Image from 'next/image';
import { X, type LucideIcon } from 'lucide-react';
import styles from './radial-orbital-timeline.module.css';

/**
 * Radial orbital timeline: stages orbit a central orb; the stage passing the top focus point is
 * active, unless the user selects one (the selection persists while the orbit keeps turning).
 * The active stage's details show in an information panel.
 *
 * Motion: rotation is a motion value advanced per frame (no React re-render per frame); nodes are
 * translated (never rotated) so icons and labels stay upright. Rotation pauses under the mouse, while
 * focus is inside the orbit, off-screen, and entirely for reduced motion.
 */

export interface OrbitalStage {
  id: string;
  /** Display number, e.g. "01". */
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface RadialOrbitalTimelineProps {
  stages: OrbitalStage[];
  /** Accessible name of the stage group. */
  label: string;
  /** Short text inside the central orb (used when no centerImage is given). */
  centerLabel?: string;
  /**
   * Brand mark shown on a light disc inside the central orb, instead of centerLabel.
   * offsetX (fraction of the image width) recentres artwork whose visible shape is off-centre in its canvas.
   */
  centerImage?: { src: string; width: number; height: number; offsetX?: number };
  /** Seconds for one full revolution. */
  revolutionSeconds?: number;
  className?: string;
}

const TOP = -90;
const COMPACT_BELOW = 440;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export default function RadialOrbitalTimeline({
  stages,
  label,
  centerLabel = 'G',
  centerImage,
  revolutionSeconds = 84,
  className = '',
}: RadialOrbitalTimelineProps) {
  const total = stages.length;
  const step = 360 / total;
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const rootRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();
  const inView = useInView(rootRef, { margin: '0px 0px -10% 0px' });

  const [size, setSize] = useState(560);
  const radius = useMotionValue(560 * 0.39);
  const rotation = useMotionValue(0);
  const cometRotation = useTransform(rotation, (r) => r * 2.4);

  const [autoIndex, setAutoIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [pointerPause, setPointerPause] = useState(false);
  const [focusPause, setFocusPause] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const compact = size < COMPACT_BELOW;
  const running = !reducedMotion && inView && !pointerPause && !focusPause;
  const active = selected ?? autoIndex;
  const activeStage = stages[active];

  // Measure the orbit square; the radius scales with it.
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setSize(width);
      radius.set(width * (width < COMPACT_BELOW ? 0.37 : 0.385));
    });
    observer.observe(orbit);
    return () => observer.disconnect();
  }, [radius]);

  // Continuous, slow rotation (counter-clockwise, so stages reach the top in order 01 → 07).
  useAnimationFrame((_, delta) => {
    if (!running) return;
    rotation.set(rotation.get() - (Math.min(delta, 64) / 1000) * (360 / revolutionSeconds));
  });

  // The stage nearest the top focus point is the auto-active one; re-render only when it changes.
  useMotionValueEvent(rotation, 'change', (r) => {
    const index = (((Math.round(-r / step) % total) + total) % total);
    setAutoIndex((current) => (current === index ? current : index));
  });

  const select = (index: number) => {
    setSelected((current) => {
      const next = current === index ? null : index;
      setAnnouncement(
        next === null
          ? 'Selection cleared. Stages advance automatically.'
          : `Stage ${stages[index].number} of ${String(total).padStart(2, '0')}: ${stages[index].title}. ${stages[index].description}`,
      );
      return next;
    });
  };

  const clearSelection = () => {
    setSelected(null);
    setAnnouncement('Selection cleared. Stages advance automatically.');
  };

  // Roving focus: arrow keys move between stages and select them.
  const onNodeKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const map: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: total - 1,
    };
    if (!(event.key in map)) return;
    event.preventDefault();
    const next = (map[event.key] + total) % total;
    setSelected(next);
    setAnnouncement(`Stage ${stages[next].number} of ${String(total).padStart(2, '0')}: ${stages[next].title}. ${stages[next].description}`);
    nodeRefs.current[next]?.focus();
  };

  const ActiveIcon = activeStage.icon;

  return (
    <div
      ref={rootRef}
      className={`${styles.root} grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 ${className}`}
      data-paused={!inView || reducedMotion ? '' : undefined}
    >
      {/* ------------------------------ orbit ------------------------------ */}
      <div className="relative mx-auto w-full max-w-[560px] px-2 pb-5 sm:px-6 sm:pb-8">
        <div
          ref={orbitRef}
          role="group"
          aria-label={label}
          className="relative aspect-square w-full"
          onPointerEnter={(event) => event.pointerType === 'mouse' && setPointerPause(true)}
          onPointerLeave={() => setPointerPause(false)}
          // Pause only for keyboard focus, so a mouse click doesn't freeze the orbit.
          onFocus={(event) => {
            if ((event.target as HTMLElement).matches?.(':focus-visible')) setFocusPause(true);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusPause(false);
          }}
        >
          {/* Rings and the moving comet (decorative) */}
          <svg aria-hidden="true" viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" fill="none">
            <defs>
              <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0753F6" stopOpacity="0.32" />
                <stop offset="55%" stopColor="#0753F6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0753F6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${uid}-beam`} x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#5be06a" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="49" fill={`url(#${uid}-halo)`} />
            <circle cx="50" cy="50" r={compact ? 37 : 38.5} stroke="rgba(255,255,255,0.16)" strokeWidth="0.35" />
            <circle cx="50" cy="50" r={compact ? 27 : 28} stroke="rgba(143,178,255,0.18)" strokeWidth="0.3" strokeDasharray="0.6 1.6" className={styles.drift} style={{ transformOrigin: '50px 50px' }} />
            {/* Focus beam from the orb to the top of the orbit, where the auto-active stage sits */}
            <line x1="50" y1="40" x2="50" y2={compact ? 17 : 15.5} stroke={`url(#${uid}-beam)`} strokeWidth="0.5" strokeLinecap="round" />
          </svg>

          {/* Glowing comet arcs travelling the orbit (faster than the nodes) */}
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            style={{ rotate: reducedMotion ? 0 : cometRotation }}
          >
            <defs>
              <linearGradient id={`${uid}-comet`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0753F6" stopOpacity="0" />
                <stop offset="100%" stopColor="#8fb2ff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r={compact ? 37 : 38.5}
              stroke={`url(#${uid}-comet)`}
              strokeWidth="0.9"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="14 86"
              style={{ filter: 'drop-shadow(0 0 1.4px rgba(7,83,246,0.9))' }}
            />
            <circle
              cx="50"
              cy="50"
              r={compact ? 37 : 38.5}
              stroke="#1AB728"
              strokeOpacity="0.7"
              strokeWidth="0.6"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="5 95"
              strokeDashoffset="-50"
              style={{ filter: 'drop-shadow(0 0 1.2px rgba(26,183,40,0.9))' }}
            />
          </motion.svg>

          {/* Central orb */}
          <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2">
            <span className={`absolute inset-0 rounded-full border border-[#8fb2ff]/40 ${styles.ring}`} />
            <span className={`absolute inset-0 rounded-full border border-[#5be06a]/30 ${styles.ringDelayed}`} />
            <span className="absolute -inset-[45%] rounded-full bg-[radial-gradient(circle,rgba(7,83,246,0.45),transparent_65%)] blur-md" />
            <span
              className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#8fb2ff_0%,#0753F6_38%,#0a2bb0_62%,#05044A_100%)] shadow-[0_0_40px_-4px_rgba(7,83,246,0.9),inset_0_-8px_20px_rgba(26,183,40,0.35),inset_0_2px_6px_rgba(255,255,255,0.45)] ${styles.orbPulse}`}
            />
            <span className="absolute inset-[14%] rounded-full border border-white/25" />
            {centerImage ? (
              <span className="absolute inset-[21%] flex items-center justify-center rounded-full bg-white shadow-[0_0_18px_rgba(143,178,255,0.55),inset_0_-2px_6px_rgba(7,83,246,0.12)]">
                <Image
                  src={centerImage.src}
                  alt=""
                  width={centerImage.width}
                  height={centerImage.height}
                  sizes="96px"
                  className="h-auto w-[66%]"
                  style={centerImage.offsetX ? { transform: `translateX(${centerImage.offsetX * 100}%)` } : undefined}
                />
              </span>
            ) : (
              <span className={`absolute inset-0 flex items-center justify-center font-bold tracking-tight text-white ${compact ? 'text-xl' : 'text-3xl'}`}>
                {centerLabel}
              </span>
            )}
          </div>

          {/* Stage nodes */}
          {stages.map((stage, index) => (
            <OrbitNode
              key={stage.id}
              stage={stage}
              index={index}
              step={step}
              total={total}
              rotation={rotation}
              radius={radius}
              compact={compact}
              isActive={index === active}
              isSelected={index === selected}
              tabbable={index === active}
              onSelect={() => select(index)}
              onKeyDown={(event) => onNodeKeyDown(event, index)}
              nodeRef={(element) => {
                nodeRefs.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>

      {/* ------------------------------ information panel ------------------------------ */}
      <div className="relative rounded-[28px] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_60px_-30px_rgba(0,0,20,0.9),inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-6">
        {/* Clear-selection control, only while a stage is selected (no status label otherwise) */}
        {selected !== null && (
          <span className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pr-1 pl-3 text-xs font-semibold text-white/80 sm:top-6 sm:right-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Selected
            <button
              type="button"
              onClick={clearSelection}
              aria-label="Clear selection and resume automatic stages"
              className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </span>
        )}

        <div className="min-h-[12rem] sm:min-h-[11rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStage.id}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/25 text-[#8fb2ff] shadow-[0_0_30px_-6px_rgba(7,83,246,0.9)] ring-1 ring-primary/40">
                <ActiveIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.01em] text-white sm:text-[1.7rem]">{activeStage.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">{activeStage.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selectable stage indicators */}
        <div className="mt-5 grid grid-cols-7 gap-1.5" role="group" aria-label="Choose a stage">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => select(index)}
              aria-label={`Show stage ${stage.number}: ${stage.title}`}
              aria-pressed={index === selected}
              className={`flex h-11 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                index === active ? 'bg-primary text-white' : 'bg-white/[0.06] text-white/60 hover:bg-white/[0.12] hover:text-white'
              }`}
            >
              {stage.number}
              <span className={`h-0.5 w-4 rounded-full ${index === active ? 'bg-white/80' : index === selected ? 'bg-accent' : 'bg-white/15'}`} aria-hidden="true" />
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </div>
    </div>
  );
}

interface OrbitNodeProps {
  stage: OrbitalStage;
  index: number;
  step: number;
  total: number;
  rotation: MotionValue<number>;
  radius: MotionValue<number>;
  compact: boolean;
  isActive: boolean;
  isSelected: boolean;
  tabbable: boolean;
  onSelect: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  nodeRef: (element: HTMLButtonElement | null) => void;
}

function OrbitNode({ stage, index, step, total, rotation, radius, compact, isActive, isSelected, tabbable, onSelect, onKeyDown, nodeRef }: OrbitNodeProps) {
  const angle = (r: number) => ((TOP + index * step + r) * Math.PI) / 180;
  const x = useTransform([rotation, radius], ([r, R]: number[]) => R * Math.cos(angle(r)));
  const y = useTransform([rotation, radius], ([r, R]: number[]) => R * Math.sin(angle(r)));
  const Icon = stage.icon;
  const nodeSize = compact ? 44 : 64;

  return (
    <motion.div className="absolute top-1/2 left-1/2" style={{ x, y, zIndex: isActive || isSelected ? 3 : 2 }}>
      <button
        ref={nodeRef}
        type="button"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        tabIndex={tabbable ? 0 : -1}
        aria-label={`Stage ${stage.number} of ${String(total).padStart(2, '0')}: ${stage.title}`}
        aria-pressed={isSelected}
        aria-current={isActive ? 'step' : undefined}
        className="group absolute block rounded-full outline-none"
        style={{ width: nodeSize, height: nodeSize, marginLeft: -nodeSize / 2, marginTop: -nodeSize / 2 }}
      >
        <span
          className={`relative flex items-center justify-center rounded-full border transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#05044a] ${
            isActive
              ? 'scale-110 border-[#8fb2ff] bg-[radial-gradient(circle_at_35%_30%,rgba(143,178,255,0.55),rgba(7,83,246,0.55)_55%,rgba(5,4,74,0.9))] text-white shadow-[0_0_34px_-4px_rgba(7,83,246,1)]'
              : 'border-white/25 bg-[linear-gradient(150deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] text-[#cfe0ff] shadow-[0_14px_28px_-14px_rgba(0,0,20,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] group-hover:border-white/50 group-hover:text-white'
          }`}
          style={{ width: nodeSize, height: nodeSize, backgroundColor: isActive ? undefined : 'rgba(12,16,88,0.85)' }}
        >
          <Icon className={compact ? 'h-[18px] w-[18px]' : 'h-6 w-6'} strokeWidth={1.8} aria-hidden="true" />
        </span>
        {!compact && (
          <span
            className={`absolute top-full left-1/2 mt-3 block w-[132px] -translate-x-1/2 text-center text-[13px] leading-snug font-semibold transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-white/65 group-hover:text-white'
            }`}
            aria-hidden="true"
          >
            {stage.title}
          </span>
        )}
      </button>
    </motion.div>
  );
}

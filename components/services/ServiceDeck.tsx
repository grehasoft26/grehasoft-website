'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  wrap,
  type MotionValue,
  type PanInfo,
  type TargetAndTransition,
  type Transition,
} from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { TONE_CLASSES, type DeckService, type Tone } from './serviceTheme';

/**
 * 3D "flick cards" deck.
 *
 * Pose (d = signed distance from the front card, wrapping so the deck loops):
 *   x = sign(d)·|d|^0.7·W·spread, y = |d|·W·0.015, z = −|d|·150,
 *   rotateY = −sign(d)·min(|d|,3)·20°, rotateZ = sign(d)·|d|·2.2°, scale = 1 − |d|·0.035.
 * Only |d| ≤ maxD is visible (5 cards desktop, 3 compact); one buffer card per side stays
 * mounted (invisible) so cards glide in, and nothing further away is rendered.
 * Each service renders once, so small decks never show duplicates.
 */

interface Layout {
  cardW: number;
  maxD: number;
  spread: number;
}

const DEFAULT_LAYOUT: Layout = { cardW: 300, maxD: 2, spread: 0.52 };
const CARD_RATIO = 1.36;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const POWER3_OUT = [0.215, 0.61, 0.355, 1] as const;
const SWIPE_DISTANCE = 0.22; // of card width
const SWIPE_VELOCITY = 500; // px/s (0.5 px/ms)
const AUTOPLAY_MS = 4000;

function layoutFor(stageWidth: number): Layout {
  if (stageWidth >= 760) {
    return { cardW: Math.round(Math.min(340, Math.max(270, stageWidth * 0.38))), maxD: 2, spread: 0.52 };
  }
  return { cardW: Math.round(Math.min(310, stageWidth * 0.74)), maxD: 1, spread: 0.4 };
}

function signedDistance(i: number, active: number, n: number) {
  let d = (((i - active) % n) + n) % n;
  if (d > n / 2) d -= n;
  return d;
}

function pose(d: number, layout: Layout) {
  const a = Math.abs(d);
  const s = Math.sign(d);
  return {
    x: s * Math.pow(a, 0.7) * layout.cardW * layout.spread,
    y: a * layout.cardW * 0.015,
    z: -a * 150,
    rotateY: -s * Math.min(a, 3) * 20,
    rotateZ: s * a * 2.2,
    scale: 1 - a * 0.035,
    opacity: a > layout.maxD ? 0 : 1,
  };
}

/** Starting point of the entrance: cards rise from below with alternating tilt. */
function introPose(d: number, i: number, layout: Layout) {
  const tilt = (i % 2 === 0 ? 1 : -1) * 24;
  return { x: pose(d, layout).x * 0.3, y: layout.cardW * 0.9, z: -120, rotateY: 0, rotateZ: tilt, scale: 0.9, opacity: 0 };
}

const shadeFor = (d: number) => (d === 0 ? 0 : Math.min(0.18 + Math.abs(d) * 0.2, 0.8));

interface Flick {
  from: number;
  dir: 1 | -1;
  offset: number;
}

interface DeckState {
  key: string;
  index: number;
  flick: Flick | null;
}

interface ServiceDeckProps {
  deckKey: string;
  services: DeckService[];
  tone: Tone;
  label: string;
  reducedMotion: boolean;
  emptyState?: ReactNode;
  /** `automatic` is true when autoplay (not the user) brought the card to the front. */
  onIndexChange?: (service: DeckService, position: number, total: number, automatic: boolean) => void;
}

export default function ServiceDeck({ deckKey, services, tone, label, reducedMotion, emptyState, onIndexChange }: ServiceDeckProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout>(DEFAULT_LAYOUT);
  const [measured, setMeasured] = useState(false);
  const inView = useInView(stageRef, { once: true, amount: 0.2 });
  const revealed = inView && measured;

  // Index state resets whenever the deck (category or search) changes.
  const [deck, setDeck] = useState<DeckState>({ key: deckKey, index: 0, flick: null });
  const [phase, setPhase] = useState<'hidden' | 'intro' | 'ready'>('hidden');
  if (deck.key !== deckKey) {
    setDeck({ key: deckKey, index: 0, flick: null });
    setPhase(revealed ? 'intro' : 'hidden');
  }

  const total = services.length;
  const index = total ? Math.min(deck.index, total - 1) : 0;

  // Front-card drag offset (shared), its tilt, and the coordinated drift of the other cards.
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-layout.cardW, 0, layout.cardW], [-12, 0, 12]);
  const neighbourX = useSpring(useTransform(dragX, (v) => v * 0.14), { stiffness: 260, damping: 28 });
  const draggedRef = useRef(false);

  // Pointer tilt of the whole deck (desktop mice only).
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 70, damping: 18 });
  const springTiltY = useSpring(tiltY, { stiffness: 70, damping: 18 });
  const deckRotateY = useTransform(springTiltX, (v) => v * 6);
  const deckRotateX = useTransform(springTiltY, (v) => v * -4);
  // Front-card artwork parallax: lags the drag (12% counter-shift) and drifts slightly with the pointer tilt.
  const artShift = useTransform([dragX, springTiltX], ([drag, tilt]: number[]) => -drag * 0.12 - tilt * 6);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      setLayout(layoutFor(entry.contentRect.width));
      setMeasured(true);
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (revealed && phase === 'hidden') setPhase('intro');
    if (phase !== 'intro') return;
    const timer = window.setTimeout(() => setPhase('ready'), reducedMotion ? 0 : 1500);
    return () => window.clearTimeout(timer);
  }, [revealed, phase, reducedMotion]);

  // Autoplay pause reasons. Off entirely for reduced motion.
  const onScreen = useInView(stageRef, { amount: 0.35 });
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const autoAdvanceRef = useRef(false);
  const releaseRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const update = () => setPageHidden(document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => {
      document.removeEventListener('visibilitychange', update);
      releaseRef.current?.();
    };
  }, []);

  useEffect(() => {
    const automatic = autoAdvanceRef.current;
    autoAdvanceRef.current = false;
    if (total && phase !== 'hidden') onIndexChange?.(services[index], index + 1, total, automatic);
    // Announce only when the front card changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, deckKey, phase === 'hidden']);

  const go = useCallback(
    (step: number, offset = 0) => {
      if (total < 2 || step === 0) return;
      dragX.jump(0);
      setDeck((state) => ({
        ...state,
        index: wrap(0, total, state.index + step),
        flick: { from: state.index, dir: step > 0 ? 1 : -1, offset },
      }));
    },
    [dragX, total],
  );

  const goTo = useCallback((target: number) => go(signedDistance(target, index, total)), [go, index, total]);

  // One timeout per front card: any index change (auto, drag, flick, keys, side card, dots, category)
  // or pause/resume re-runs this effect, whose cleanup clears the previous timer, so each start gets
  // a fresh interval and two timers never coexist.
  const autoplay = !reducedMotion && phase === 'ready' && total > 1 && onScreen && !hovered && !pressed && !keyboardFocus && !pageHidden;
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      autoAdvanceRef.current = true;
      go(1);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, deck.index, deckKey, go]);

  // Pause while pressed/dragging, until the pointer is released anywhere.
  const onPointerDownCapture = () => {
    draggedRef.current = false;
    if (releaseRef.current) return;
    setPressed(true);
    const release = () => {
      setPressed(false);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      releaseRef.current = null;
    };
    releaseRef.current = release;
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
  };

  const onRelease = useCallback(
    (info: PanInfo) => {
      const { x: dx } = info.offset;
      const { x: vx } = info.velocity;
      const threshold = layout.cardW * SWIPE_DISTANCE;
      // Velocity wins for quick flicks; otherwise distance decides; otherwise spring back.
      const step = vx < -SWIPE_VELOCITY ? 1 : vx > SWIPE_VELOCITY ? -1 : dx < -threshold ? 1 : dx > threshold ? -1 : 0;
      if (step) go(step, dragX.get());
    },
    [dragX, go, layout.cardW],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => go(1),
      ArrowLeft: () => go(-1),
      Home: () => goTo(0),
      End: () => goTo(total - 1),
    };
    const action = keys[event.key];
    if (!action) return;
    event.preventDefault();
    setKeyboardFocus(true);
    action();
    stageRef.current?.focus();
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    tiltX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    tiltY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const onCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (draggedRef.current) event.preventDefault();
  };

  // Visible window plus one invisible buffer card per side.
  const windowed = services
    .map((service, i) => ({ service, i, d: total ? signedDistance(i, index, total) : 0 }))
    .filter(({ d }) => Math.abs(d) <= layout.maxD + 1);

  const toneClasses = TONE_CLASSES[tone];
  const cardH = Math.round(layout.cardW * CARD_RATIO);

  return (
    // Keyboard focus anywhere in the deck or its controls pauses autoplay, so a focused card never rotates away.
    <div
      className="relative"
      onFocus={(event) => {
        if (event.target.matches(':focus-visible')) setKeyboardFocus(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setKeyboardFocus(false);
      }}
    >
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerMove={onPointerMove}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true);
        }}
        onPointerLeave={() => {
          resetTilt();
          setHovered(false);
        }}
        onPointerDownCapture={onPointerDownCapture}
        className="relative -mx-4 h-[calc(min(310px,74vw)*1.36+56px)] rounded-[28px] outline-none sm:mx-0 [overflow-x:clip] [perspective:1400px] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F8FC] lg:h-[456px]"
      >
        {/* Ambient light behind the deck, crossfading with the category tone (subtle on the light section) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={tone}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
            style={{ background: `radial-gradient(40% 44% at 50% 50%, ${toneClasses.glow}, transparent 72%)` }}
          />
        </AnimatePresence>
        {/* Contact shadow under the deck so it reads as lifted off the page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-[3%] h-[12%] w-[min(560px,80%)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(5,4,74,0.26),transparent)] blur-md"
        />

        {total === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">{emptyState}</div>
        ) : (
          // The wrappers sit at z = 0, in front of the receding side cards, so they must not take pointer events.
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ transformStyle: 'preserve-3d', rotateX: deckRotateX, rotateY: deckRotateY }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={deckKey} className="pointer-events-none absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                {windowed.map(({ service, i, d }) => (
                  <DeckCard
                    key={service.key}
                    service={service}
                    i={i}
                    d={d}
                    total={total}
                    layout={layout}
                    cardH={cardH}
                    phase={phase}
                    flick={deck.flick?.from === i && d !== 0 ? deck.flick : null}
                    reducedMotion={reducedMotion}
                    dragX={dragX}
                    dragRotate={dragRotate}
                    neighbourX={neighbourX}
                    artShift={reducedMotion ? undefined : artShift}
                    draggedRef={draggedRef}
                    onRelease={onRelease}
                    onSelect={() => goTo(i)}
                    onCtaClick={onCtaClick}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/*
        Previous / next. Beside the deck, vertically centred on the front card, wherever the stage leaves
        room for a 48px button clear of the outermost side cards (measured: 768–1023px and ≥1088px).
        Below 768px and at 1024–1087px (sidebar squeezes the stage) they sit in a compact row under the deck.
      */}
      <div className={`mt-6 flex items-center justify-center gap-5 ${SIDE_NAV.row}`}>
        <DeckButton label="Previous service" disabled={total < 2} onClick={() => go(-1)} className={SIDE_NAV.prev}>
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </DeckButton>
        <DeckButton label="Next service" disabled={total < 2} onClick={() => go(1)} className={SIDE_NAV.next}>
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </DeckButton>
      </div>
    </div>
  );
}

// Side placement for the nav buttons (literal class strings so Tailwind can see them).
const SIDE_NAV = {
  row: 'md:max-lg:mt-0 min-[1088px]:mt-0',
  prev: 'md:max-lg:absolute md:max-lg:top-1/2 md:max-lg:left-0 md:max-lg:z-30 md:max-lg:-translate-y-1/2 min-[1088px]:absolute min-[1088px]:top-1/2 min-[1088px]:left-0 min-[1088px]:z-30 min-[1088px]:-translate-y-1/2',
  next: 'md:max-lg:absolute md:max-lg:top-1/2 md:max-lg:right-0 md:max-lg:z-30 md:max-lg:-translate-y-1/2 min-[1088px]:absolute min-[1088px]:top-1/2 min-[1088px]:right-0 min-[1088px]:z-30 min-[1088px]:-translate-y-1/2',
};

function DeckButton({
  label,
  disabled,
  onClick,
  className = '',
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`${className} flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#05044a]/10 bg-white text-[#05044a] shadow-[0_10px_24px_-14px_rgba(5,4,74,0.4)] transition-colors duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40`}
    >
      {children}
    </button>
  );
}

interface DeckCardProps {
  service: DeckService;
  i: number;
  d: number;
  total: number;
  layout: Layout;
  cardH: number;
  phase: 'hidden' | 'intro' | 'ready';
  flick: Flick | null;
  reducedMotion: boolean;
  dragX: MotionValue<number>;
  dragRotate: MotionValue<number>;
  neighbourX: MotionValue<number>;
  artShift?: MotionValue<number>;
  draggedRef: MutableRefObject<boolean>;
  onRelease: (info: PanInfo) => void;
  onSelect: () => void;
  onCtaClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}

function DeckCard({
  service,
  i,
  d,
  total,
  layout,
  cardH,
  phase,
  flick,
  reducedMotion,
  dragX,
  dragRotate,
  neighbourX,
  artShift,
  draggedRef,
  onRelease,
  onSelect,
  onCtaClick,
}: DeckCardProps) {
  const isFront = d === 0;
  const target = pose(d, layout);
  const W = layout.cardW;
  // Cards mounted after the entrance appear directly in their slot.
  const [mountedDuringIntro] = useState(phase !== 'ready');

  let animate: TargetAndTransition;
  let transition: Transition;
  if (phase === 'hidden') {
    animate = introPose(d, i, layout);
    transition = { duration: 0 };
  } else if (reducedMotion) {
    animate = target;
    transition = { duration: 0 };
  } else if (phase === 'intro') {
    animate = target;
    transition = { duration: 1.1, ease: EXPO_OUT, delay: (layout.maxD + 1 - Math.abs(d)) * 0.07 };
  } else if (flick) {
    // The old front card arcs out of the deck, then eases into its new back slot.
    const arcX = -flick.dir * 1.05 * W;
    animate = {
      x: [flick.offset, arcX, target.x],
      y: [0, -0.06 * W, target.y],
      z: [0, 60, target.z],
      rotateY: [0, flick.dir * 30, target.rotateY],
      rotateZ: [0, -flick.dir * 14, target.rotateZ],
      scale: [1, 0.96, target.scale],
      opacity: [1, 1, target.opacity],
    };
    transition = { duration: 1.06, times: [0, 0.38, 1], ease: [POWER3_OUT, EXPO_OUT] };
  } else {
    animate = target;
    transition = { duration: 0.95, ease: EXPO_OUT, delay: 0.03 * Math.abs(d) };
  }

  const exitTilt = (d >= 0 ? 1 : -1) * 8;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: W,
        height: cardH,
        marginLeft: -W / 2,
        marginTop: -cardH / 2,
        zIndex: 20 - Math.abs(d) * 2,
        // Invisible buffer cards must not catch clicks.
        pointerEvents: Math.abs(d) > layout.maxD ? 'none' : 'auto',
      }}
      initial={mountedDuringIntro ? introPose(d, i, layout) : false}
      animate={animate}
      transition={transition}
      exit={{
        opacity: 0,
        y: W * 0.25,
        scale: 0.88,
        rotateZ: exitTilt,
        transition: { duration: reducedMotion ? 0 : 0.32, ease: 'easeIn', delay: reducedMotion ? 0 : Math.abs(d) * 0.03 },
      }}
      aria-hidden={isFront ? undefined : true}
      role={isFront ? 'group' : undefined}
      aria-roledescription={isFront ? 'slide' : undefined}
      aria-label={isFront ? `${i + 1} of ${total}: ${service.name}` : undefined}
    >
      <motion.div className="h-full w-full" style={{ x: isFront ? 0 : neighbourX }} onClick={isFront ? undefined : onSelect}>
        <motion.div
          className={`h-full w-full ${isFront && total > 1 ? 'cursor-grab active:cursor-grabbing' : isFront ? '' : 'cursor-pointer'}`}
          drag={isFront && total > 1 ? 'x' : false}
          dragDirectionLock
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 320, bounceDamping: 16 }}
          onDragStart={() => {
            draggedRef.current = true;
          }}
          onDragEnd={(_, info) => onRelease(info)}
          style={{ x: isFront ? dragX : 0, rotate: isFront ? dragRotate : 0, touchAction: 'pan-y' }}
        >
          <ServiceCard
            service={service}
            isFront={isFront}
            shade={shadeFor(d)}
            reducedMotion={reducedMotion}
            onCtaClick={onCtaClick}
            artShift={isFront ? artShift : undefined}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

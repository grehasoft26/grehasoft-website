'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  /** Share of the element that must be on screen before it reveals (default 0.15). */
  threshold?: number;
}

/**
 * Plays the section's entrance once, when it scrolls into view.
 *
 * Server-rendered content is visible by default. After mounting, a section that is still below the
 * fold is marked data-reveal="pending" (the CSS module hides its animated parts) and is released when
 * `threshold` of it (15% by default) is on screen. Sections already on screen, reduced-motion users
 * and browsers without IntersectionObserver never enter the hidden state.
 */
export default function RevealOnView({ children, className, threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'pending' | 'done'>('idle');

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    setState('pending');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('done');
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} data-reveal={state === 'pending' ? 'pending' : undefined}>
      {children}
    </div>
  );
}

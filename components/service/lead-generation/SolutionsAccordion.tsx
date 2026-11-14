'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import type { LeadSolution } from '@/types/lead-generation';
import RichText from './RichText';
import { leadIcons } from './icons';

interface Props {
  items: LeadSolution[];
}

// Clearance for the fixed site header when keeping a row in view.
const HEADER_OFFSET = 96;
// Slightly longer than the panel transition so the row stays pinned until layout settles.
const PIN_DURATION = 420;

export default function SolutionsAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pinFrame = useRef<number | null>(null);

  // Panels above a row collapse while it opens, which would pull the row upwards. Hold the row
  // at its starting position (or just below the header) for the length of the transition.
  // Hash navigation instead brings the row to just below the header.
  const pinRow = useCallback((id: string, alignToHeader = false) => {
    const row = rowRefs.current[id];
    if (!row) return;

    if (pinFrame.current !== null) cancelAnimationFrame(pinFrame.current);
    const target = alignToHeader ? HEADER_OFFSET : Math.max(row.getBoundingClientRect().top, HEADER_OFFSET);
    const start = performance.now();

    const step = (now: number) => {
      const drift = row.getBoundingClientRect().top - target;
      if (Math.abs(drift) > 0.5) window.scrollBy(0, drift);
      pinFrame.current = now - start < PIN_DURATION ? requestAnimationFrame(step) : null;
    };
    pinFrame.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => () => {
    if (pinFrame.current !== null) cancelAnimationFrame(pinFrame.current);
  }, []);

  // Open the item named in the URL hash, on load and whenever the hash changes.
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!items.some((item) => item.id === id)) return;
      setOpenId(id);
      pinRow(id, true);
    };

    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [items, pinRow]);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
    pinRow(id);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const next =
      event.key === 'ArrowDown' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowUp' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    buttonRefs.current[items[next].id]?.focus();
  };

  return (
    <div className="space-y-3 [overflow-anchor:none]">
      {items.map((item, index) => {
        const Icon = leadIcons[item.icon];
        const open = openId === item.id;
        const buttonId = `${item.id}-button`;
        const panelId = `${item.id}-panel`;

        return (
          <div
            key={item.id}
            id={item.id}
            ref={(node) => {
              rowRefs.current[item.id] = node;
            }}
            className={`scroll-mt-28 rounded-box-lg border transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
              open ? 'border-primary/20 bg-white shadow-sm' : 'border-gray-200/70 bg-gray-100/70'
            }`}
          >
            <h3>
              <button
                ref={(node) => {
                  buttonRefs.current[item.id] = node;
                }}
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex w-full items-center gap-4 rounded-box-lg p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-5 sm:p-5"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-box-sm transition-colors duration-300 motion-reduce:transition-none ${
                    open ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-dark md:text-lg">
                  {item.title}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${
                    open ? 'border-primary/20 bg-primary/10' : 'border-gray-200 bg-white'
                  }`}
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 text-primary transition-transform duration-300 motion-reduce:transition-none ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>
            </h3>

            {/* Panels stay in the DOM (and the server HTML); closed ones collapse to 0fr and are inert. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-6 sm:pr-8 sm:pb-8 sm:pl-[5.5rem]">
                  <p className="max-w-3xl leading-relaxed text-gray-600">{item.body}</p>

                  {item.points?.length ? (
                    <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <div key={point.title} className="border-l-2 border-primary/25 pl-5">
                          <dt className="font-semibold text-dark">{point.title}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-gray-600">
                            {point.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {item.followUp ? (
                    <p className="mt-6 max-w-3xl text-sm font-medium leading-relaxed text-dark">
                      <RichText value={item.followUp} />
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import { useState, type MouseEvent, type SyntheticEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types/google-business-profile';

interface Props {
  items: FaqItem[];
}

/**
 * Single-expansion FAQ: one `activeFaqIndex` decides which item is open (all closed initially).
 * Clicking a question opens it and closes the previous one; clicking the open question closes it.
 *
 * The items stay native <details>/<summary> elements, so keyboard use (Enter / Space on a question)
 * works as before and, without JavaScript, every answer can still be opened. If the browser opens an
 * item itself (for example find-in-page), the state follows so only one item stays open.
 */
export default function GbpFaqAccordion({ items }: Props) {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const handleSummaryClick = (event: MouseEvent<HTMLElement>, index: number) => {
    event.preventDefault();
    setActiveFaqIndex((current) => (current === index ? null : index));
  };

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>, index: number) => {
    const isOpen = event.currentTarget.open;
    setActiveFaqIndex((current) => {
      if (isOpen) return index;
      return current === index ? null : current;
    });
  };

  return (
    <>
      {items.map((item, index) => (
        <details
          key={item.question}
          open={activeFaqIndex === index}
          onToggle={(event) => handleToggle(event, index)}
          className="group rounded-box-sm border border-gray-200/70 bg-gray-50 transition-colors open:border-primary/25 open:bg-white open:shadow-[0_10px_28px_-18px_rgba(5,4,74,0.3)] motion-reduce:transition-none"
        >
          <summary
            onClick={(event) => handleSummaryClick(event, index)}
            className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-box-sm px-4 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-5 md:py-4 lg:min-h-[5rem] [&::-webkit-details-marker]:hidden"
          >
            <h3 className="text-base font-semibold leading-snug text-dark md:text-[1.0625rem]">{item.question}</h3>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <p className="px-4 pb-4 text-[0.9375rem] leading-relaxed text-gray-600 md:px-5">{item.answer}</p>
        </details>
      ))}
    </>
  );
}

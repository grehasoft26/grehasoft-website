import type { ReactNode } from 'react';

// Accent green darkened so small eyebrow text keeps at least 4.5:1 contrast on white.
const EYEBROW_TONE = {
  light: 'text-[color-mix(in_oklab,var(--color-accent),black_32%)]',
  dark: 'text-accent',
} as const;

const TITLE_TONE = {
  light: 'text-dark',
  dark: 'text-white',
} as const;

const INTRO_TONE = {
  light: 'text-gray-600',
  dark: 'text-white/75',
} as const;

interface Props {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  tone?: keyof typeof TITLE_TONE;
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  eyebrow,
  intro,
  tone = 'light',
  className = '',
}: Props) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${EYEBROW_TONE[tone]}`}>
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className={`text-[1.75rem] font-black leading-tight md:text-4xl lg:text-[2.5rem] ${TITLE_TONE[tone]}`}
      >
        {title}
      </h2>

      {intro ? (
        <p className={`mt-6 text-lg leading-relaxed ${INTRO_TONE[tone]}`}>{intro}</p>
      ) : null}
    </div>
  );
}

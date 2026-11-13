import Link from 'next/link';
import type { RichText as RichTextValue } from '@/types/lead-generation';

interface Props {
  value: RichTextValue;
  linkClassName?: string;
}

export default function RichText({
  value,
  linkClassName = 'font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary',
}: Props) {
  return (
    <>
      {value.map((segment, i) => {
        if (typeof segment === 'string') return segment;

        // In-page anchors and external URLs use a plain anchor; site routes use next/link.
        return segment.href.startsWith('/') ? (
          <Link key={i} href={segment.href} className={linkClassName}>
            {segment.text}
          </Link>
        ) : (
          <a key={i} href={segment.href} className={linkClassName}>
            {segment.text}
          </a>
        );
      })}
    </>
  );
}

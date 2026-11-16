'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { toInternalHref } from '@/lib/internal-href';
import { buildBreadcrumbJsonLd, serializeJsonLd } from '@/lib/seo';

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb: { name: string; href: string }[];
  /** Use 'p' when the page renders its own <h1> (detail pages). */
  titleTag?: 'h1' | 'p';
  /** BreadcrumbList JSON-LD for the visible breadcrumb; off when the names are not final in server HTML. */
  breadcrumbSchema?: boolean;
}

export default function PageHeader({
  title,
  description,
  breadcrumb,
  titleTag: TitleTag = 'h1',
  breadcrumbSchema = true,
}: PageHeaderProps) {
  const pathname = usePathname();

  // Same trail as the visible breadcrumb; "#" links stand for the current page.
  const schemaItems = [{ name: 'Home', href: '/' }, ...breadcrumb]
    .map((item) => ({
      name: item.name,
      path: !item.href || item.href.startsWith('#') ? pathname : toInternalHref(item.href),
    }))
    .filter((item) => item.name && item.path?.startsWith('/'));

  return (
    <section className="relative pt-40 pb-20 bg-dark overflow-hidden">
      {breadcrumbSchema && schemaItems.length > 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbJsonLd(schemaItems)) }}
        />
      )}
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 max-w-3xl text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={item.href}
                  className={index === breadcrumb.length - 1 ? 'text-accent' : 'hover:text-accent transition-colors'}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <TitleTag className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight text-balance">
            {title}
          </TitleTag>
          <p className="max-w-3xl text-xl text-white/70 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

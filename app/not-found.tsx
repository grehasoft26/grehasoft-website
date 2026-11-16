import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Grehasoft',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 bg-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Error 404
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight text-balance">
          Page Not Found
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-white/70 leading-relaxed mb-10">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-3 rounded-full font-medium text-white border border-white/30 transition-all hover:bg-white/10 inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import { getLogoGallery } from "@/lib/api";
import { Sparkles } from "lucide-react";
import LogoSliderClient from "./LogoSliderClient";

export default async function LogoGallery() {
  const logos = await getLogoGallery();

  if (!logos || logos.length === 0) {
    return null; // Gracefully render nothing if no logos are available
  }

  return (
    <section className="section-padding bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="container-custom relative">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              OUR RECENT LOGO WORKS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Logos We've Designed for <span className="text-primary">Growing Brands</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            From startups to established businesses, we create memorable logo identities that strengthen brands across industries.
          </p>
        </div>

        {/* LOGO SLIDER */}
        <LogoSliderClient logos={logos} />
      </div>
    </section>
  );
}

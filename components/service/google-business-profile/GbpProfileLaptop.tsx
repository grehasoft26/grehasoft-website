import { Building2, Globe, MapPin, Navigation, Phone, Search } from 'lucide-react';

/**
 * Decorative laptop showing a Grehasoft business profile, built in HTML/CSS around the real logo file
 * (/images/logo.png). It shows only the business name, a category line and the city; no rating, review
 * count, address, phone number or photo is invented (the photo is a neutral placeholder).
 * The caller hides it from assistive technology.
 */
export default function GbpProfileLaptop({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[32rem] ${className}`}>
      {/* Soft blue disc and ring behind the laptop */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-[54%] rounded-full bg-[radial-gradient(closest-side,rgba(7,83,246,0.14),rgba(7,83,246,0.05)_70%,rgba(7,83,246,0))]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-[54%] rounded-full border border-primary/10" />

      {/* Floating location badge with two small accent marks */}
      <div className="absolute -top-4 right-[3%] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(5,4,74,0.45)] ring-1 ring-primary/10 sm:h-12 sm:w-12">
        <MapPin className="h-6 w-6 fill-accent/15 text-accent" strokeWidth={2.2} />
        <span className="absolute -top-2.5 -right-1 h-3 w-[3px] rotate-[35deg] rounded-full bg-accent" />
        <span className="absolute -top-0.5 -right-3 h-[3px] w-3 -rotate-[20deg] rounded-full bg-accent" />
      </div>

      <div className="relative">
        {/* Screen: dark bezel with camera, white display */}
        <div className="relative rounded-t-[1.1rem] bg-[#0f1430] p-2 shadow-[0_24px_50px_-28px_rgba(5,4,74,0.55)] sm:p-2.5">
          <span className="absolute top-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25 sm:top-1" />
          <div className="overflow-hidden rounded-md bg-white">
            {/* Search bar */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2 sm:px-4">
              <span className="flex h-6 flex-1 items-center gap-2 rounded-full border border-gray-200 bg-white px-2.5 shadow-sm">
                <Search className="h-3 w-3 text-gray-400" />
                <span className="text-[10px] font-medium text-dark sm:text-[11px]">Grehasoft</span>
                <Search className="ml-auto h-3 w-3 text-primary" />
              </span>
            </div>

            <div className="px-3 pt-3 pb-3 sm:px-4 sm:pt-3.5">
              {/* Profile details (left) and photo placeholder (right) */}
              <div className="flex gap-3">
                <div className="min-w-0 flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static logo inside a decorative mockup */}
                  <img src="/images/logo.png" alt="" width={262} height={48} className="h-6 w-auto sm:h-7" />
                  <p className="mt-1.5 text-sm font-bold leading-tight text-dark sm:text-[15px]">Grehasoft</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-gray-500 sm:text-[11px]">IT Solutions &amp; Digital Marketing Agency</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-500 sm:text-[11px]">
                    <MapPin className="h-3 w-3 shrink-0 text-accent" />
                    Kochi, Kerala
                  </p>

                  {/* Actions: round icons with labels */}
                  <div className="mt-2.5 flex gap-3 sm:gap-4">
                    {[
                      { icon: Globe, label: 'Website' },
                      { icon: Navigation, label: 'Directions' },
                      { icon: Phone, label: 'Call' },
                    ].map(({ icon: Icon, label }) => (
                      <span key={label} className="flex flex-col items-center gap-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 text-primary sm:h-8 sm:w-8">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-[9px] font-medium text-gray-600 sm:text-[10px]">{label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden w-[38%] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e6efff] via-[#eef4ff] to-[#e3f6e7] ring-1 ring-primary/10 min-[400px]:flex">
                  <Building2 className="h-8 w-8 text-primary/25" />
                </span>
              </div>

              {/* Tabs */}
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-gray-100 pt-2.5 text-[10px] font-semibold text-gray-600 sm:text-[11px]">
                <span className="rounded-full bg-primary px-2.5 py-1 text-white">Overview</span>
                <span className="px-2 py-1">Reviews</span>
                <span className="px-2 py-1">Photos</span>
                <span className="px-2 py-1">Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard deck with a thumb notch, slightly wider than the screen */}
        <div className="relative -mx-[7%] h-3 rounded-b-xl bg-gradient-to-b from-[#e3e8f1] to-[#b9c2d4] shadow-[0_14px_24px_-14px_rgba(5,4,74,0.45)] sm:h-3.5">
          <span className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#c9d1e0]" />
        </div>
      </div>
    </div>
  );
}

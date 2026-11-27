/**
 * Decorative "Google Business Profile + Website SEO" scene for the Connected Digital Strategy section:
 * a glowing platform with a laptop showing a search page, a storefront with a red map pin and review
 * stars, a growth chart, and two labels. Pure SVG; the caller hides it from assistive technology.
 */
export default function SeoStrategyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="presentation" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="gbp-seo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2f7bff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2f7bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gbp-seo-disc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a3fb8" />
          <stop offset="100%" stopColor="#0a1a6e" />
        </linearGradient>
        <linearGradient id="gbp-seo-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3d8bff" />
          <stop offset="60%" stopColor="#22b8e6" />
          <stop offset="100%" stopColor="#1ab728" />
        </linearGradient>
        <linearGradient id="gbp-seo-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#139a33" />
          <stop offset="100%" stopColor="#3ee06a" />
        </linearGradient>
        <linearGradient id="gbp-seo-pin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0564a" />
          <stop offset="100%" stopColor="#c5221f" />
        </linearGradient>
        <filter id="gbp-seo-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000020" floodOpacity="0.35" />
        </filter>
        <filter id="gbp-seo-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Glow and orbit ring behind the scene */}
      <ellipse cx="250" cy="190" rx="200" ry="150" fill="url(#gbp-seo-glow)" />
      <path d="M90 230 A170 170 0 0 1 400 120" fill="none" stroke="#3d8bff" strokeOpacity="0.55" strokeWidth="2" filter="url(#gbp-seo-soft-glow)" />
      <path d="M90 230 A170 170 0 0 1 400 120" fill="none" stroke="#7fb2ff" strokeOpacity="0.7" strokeWidth="1.2" />

      {/* Platform */}
      <ellipse cx="240" cy="300" rx="200" ry="40" fill="#000030" opacity="0.35" />
      <path d="M40 282v12c0 22 90 40 200 40s200-18 200-40v-12Z" fill="#0a1a6e" />
      <ellipse cx="240" cy="282" rx="200" ry="40" fill="url(#gbp-seo-disc)" />
      <ellipse cx="240" cy="282" rx="200" ry="40" fill="none" stroke="url(#gbp-seo-rim)" strokeWidth="2.5" />
      <ellipse cx="240" cy="282" rx="200" ry="40" fill="none" stroke="url(#gbp-seo-rim)" strokeWidth="6" opacity="0.35" filter="url(#gbp-seo-soft-glow)" />

      {/* Growth chart */}
      <rect x="352" y="168" width="18" height="74" rx="3" fill="url(#gbp-seo-bar)" />
      <rect x="376" y="146" width="18" height="96" rx="3" fill="url(#gbp-seo-bar)" />
      <rect x="400" y="120" width="18" height="122" rx="3" fill="url(#gbp-seo-bar)" />
      <path d="M332 186 C360 170 388 140 418 96" fill="none" stroke="#2fd162" strokeWidth="7" strokeLinecap="round" />
      <path d="M404 92 L426 84 L424 108 Z" fill="#2fd162" />

      {/* Laptop */}
      <g filter="url(#gbp-seo-shadow)">
        <rect x="150" y="92" width="210" height="146" rx="10" fill="#1b2350" />
        <rect x="158" y="100" width="194" height="128" rx="5" fill="#ffffff" />
        <path d="M128 238h254l-14 18H142Z" fill="#c9d4ee" />
        <rect x="226" y="238" width="58" height="5" rx="2.5" fill="#9fb0d8" />
      </g>
      {/* Search page: wordmark, search bar, results */}
      <text x="255" y="134" textAnchor="middle" fontSize="23" fontWeight="600" fontFamily="inherit">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
      <rect x="182" y="146" width="146" height="20" rx="10" fill="#ffffff" stroke="#c9d4ee" />
      <rect x="192" y="153" width="70" height="6" rx="3" fill="#dfe5f2" />
      <rect x="306" y="148" width="20" height="16" rx="8" fill="#0753f6" />
      <circle cx="315" cy="155" r="3.5" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <path d="M317.6 157.6l2.6 2.6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="182" y="178" width="58" height="6" rx="3" fill="#1ab728" />
      <rect x="182" y="190" width="120" height="5" rx="2.5" fill="#dfe5f2" />
      <rect x="182" y="201" width="100" height="5" rx="2.5" fill="#dfe5f2" />
      <rect x="182" y="212" width="110" height="5" rx="2.5" fill="#dfe5f2" />

      {/* Storefront */}
      <g filter="url(#gbp-seo-shadow)">
        <rect x="74" y="200" width="104" height="70" rx="4" fill="#eef3ff" />
      </g>
      <rect x="88" y="214" width="26" height="22" rx="2" fill="#2f6df6" />
      <rect x="136" y="214" width="26" height="22" rx="2" fill="#2f6df6" />
      <path d="M68 180h116l8 22H60Z" fill="#2f6df6" />
      <path d="M87.3 180h19.4l-3 22H79.3ZM126 180h19.4l4.6 22h-22.7ZM164.7 180H184l8 22h-22.6Z" fill="#ffffff" />
      <path d="M60 202a11 11 0 0 0 22 0a11 11 0 0 0 22 0a11 11 0 0 0 22 0a11 11 0 0 0 22 0a11 11 0 0 0 22 0a11 11 0 0 0 22 0Z" fill="#1f5fe8" />

      {/* Red map pin over the storefront */}
      <path
        d="M196 164c-14.4 0-26 11.3-26 25.3 0 18.9 22.6 41 23.6 42a3.4 3.4 0 0 0 4.8 0c1-1 23.6-23.1 23.6-42 0-14-11.6-25.3-26-25.3Z"
        fill="url(#gbp-seo-pin)"
      />
      <circle cx="196" cy="189" r="9.5" fill="#ffffff" />

      {/* Review card with gold stars */}
      <g filter="url(#gbp-seo-shadow)">
        <rect x="112" y="250" width="112" height="30" rx="8" fill="#ffffff" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${121 + i * 19.5} 258)`}
          d="M7 0l2.06 4.6 5 .5-3.76 3.36 1.08 4.92L7 10.86 2.62 13.38 3.7 8.46-.06 5.1l5-.5Z"
          fill="#FBBC04"
        />
      ))}

      {/* Label: Google Business Profile (top left) */}
      <g filter="url(#gbp-seo-shadow)">
        <rect x="26" y="44" width="164" height="50" rx="25" fill="#ffffff" />
      </g>
      <path d="M52 56c-6.6 0-12 5.2-12 11.6 0 8.6 10.3 18.7 10.8 19.2a1.6 1.6 0 0 0 2.4 0c.5-.5 10.8-10.6 10.8-19.2C64 61.2 58.6 56 52 56Z" fill="#EA4335" />
      <path d="M52 56c-6.6 0-12 5.2-12 11.6 0 2.4.8 4.9 2 7.3L52 64.5Z" fill="#4285F4" />
      <path d="M42 74.9c2.6 4.9 7 9.5 8.8 11.3a1.6 1.6 0 0 0 2.4 0l2.8-3.1L52 64.5Z" fill="#34A853" />
      <circle cx="52" cy="67.6" r="4.2" fill="#ffffff" />
      <text x="74" y="65" fontSize="13" fontWeight="700" fill="#05044a" fontFamily="inherit">Google</text>
      <text x="74" y="81" fontSize="13" fontWeight="700" fill="#05044a" fontFamily="inherit">Business Profile</text>

      {/* Label: Website SEO (bottom right) */}
      <g filter="url(#gbp-seo-shadow)">
        <rect x="318" y="232" width="138" height="50" rx="25" fill="#ffffff" />
      </g>
      <circle cx="346" cy="254" r="10" fill="none" stroke="#0753f6" strokeWidth="4" />
      <path d="M353.5 261.5l8 8" stroke="#0753f6" strokeWidth="5" strokeLinecap="round" />
      <text x="372" y="253" fontSize="13" fontWeight="700" fill="#05044a" fontFamily="inherit">Website</text>
      <text x="372" y="269" fontSize="13" fontWeight="700" fill="#05044a" fontFamily="inherit">SEO</text>
    </svg>
  );
}

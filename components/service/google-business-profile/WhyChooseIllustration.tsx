/**
 * Decorative Google Business Profile listing for the "Why Choose" section: a listing card with the
 * Google "G" (original colours), a storefront, placeholder text, gold review stars and a red map pin,
 * standing on a soft blue podium. Pure SVG; hidden from assistive technology by the caller.
 */
export default function WhyChooseIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 270" className={className} role="presentation" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gbp-why-podium-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d9fb" />
          <stop offset="100%" stopColor="#9db8f2" />
        </linearGradient>
        <linearGradient id="gbp-why-podium-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e3ecfd" />
        </linearGradient>
        <linearGradient id="gbp-why-card-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d8bff" />
          <stop offset="100%" stopColor="#0753f6" />
        </linearGradient>
        <linearGradient id="gbp-why-pin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0564a" />
          <stop offset="100%" stopColor="#c5221f" />
        </linearGradient>
        <filter id="gbp-why-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#05044a" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Podium */}
      <ellipse cx="160" cy="246" rx="132" ry="20" fill="#05044a" opacity="0.06" />
      <path d="M32 214v16c0 15 57 27 128 27s128-12 128-27v-16Z" fill="url(#gbp-why-podium-side)" />
      <ellipse cx="160" cy="214" rx="128" ry="27" fill="url(#gbp-why-podium-top)" stroke="#d3e0fb" />

      {/* Green accent marks */}
      <rect x="112" y="4" width="5" height="18" rx="2.5" fill="#1ab728" transform="rotate(-8 114 13)" />
      <rect x="126" y="14" width="5" height="16" rx="2.5" fill="#1ab728" transform="rotate(48 128 22)" />

      {/* Listing card: blue back panel, white front */}
      <rect x="62" y="38" width="160" height="172" rx="16" fill="url(#gbp-why-card-back)" />
      <g filter="url(#gbp-why-shadow)">
        <rect x="74" y="46" width="160" height="172" rx="16" fill="#ffffff" />
      </g>

      {/* Google "G", original colours */}
      <svg x="140" y="56" width="28" height="28" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>

      {/* Storefront: building, door, windows and a striped scalloped awning */}
      <rect x="96" y="112" width="116" height="34" rx="3" fill="#e8effd" />
      <rect x="143" y="120" width="22" height="26" rx="2" fill="#2f6df6" />
      <rect x="104" y="120" width="30" height="16" rx="2" fill="#bcd0fa" />
      <rect x="174" y="120" width="30" height="16" rx="2" fill="#bcd0fa" />
      <path d="M92 94h124l6 18H86Z" fill="#2f6df6" />
      <path d="M112.7 94h20.6l-2 18h-22.7ZM154.3 94h20.6l4.2 18h-22.8Z" fill="#ffffff" opacity="0.9" />
      <path
        d="M86 112a9 9 0 0 0 18 0a9 9 0 0 0 17.6 0a9 9 0 0 0 17.6 0a9 9 0 0 0 17.6 0a9 9 0 0 0 17.6 0a9 9 0 0 0 17.6 0a9 9 0 0 0 18 0Z"
        fill="#1f5fe8"
      />

      {/* Listing text placeholders */}
      <rect x="92" y="158" width="96" height="7" rx="3.5" fill="#cfd6e4" />
      <rect x="92" y="171" width="120" height="6" rx="3" fill="#e2e7f0" />

      {/* Review stars (gold) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${92 + i * 17} 186)`}
          d="M7 0l2.06 4.6 5 .5-3.76 3.36 1.08 4.92L7 10.86 2.62 13.38 3.7 8.46-.06 5.1l5-.5Z"
          fill="#FBBC04"
        />
      ))}

      {/* Red map pin with its ground shadow */}
      <ellipse cx="246" cy="208" rx="16" ry="5" fill="#05044a" opacity="0.15" />
      <path
        d="M246 112c-19.3 0-35 15.2-35 34 0 25.4 30.4 55.2 31.7 56.5a4.6 4.6 0 0 0 6.6 0C250.6 201.2 281 171.4 281 146c0-18.8-15.7-34-35-34Z"
        fill="url(#gbp-why-pin)"
      />
      <path d="M246 112c-19.3 0-35 15.2-35 34 0 4.4 1 9 2.6 13.4C219 140 230.8 124 246 120.4Z" fill="#ffffff" opacity="0.12" />
      <circle cx="246" cy="146" r="12.5" fill="#ffffff" />
    </svg>
  );
}

/** @type {import('next').NextConfig} */
const apiURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';
let wpHostname = 'antiquewhite-swan-450844.hostingersite.com';

if (apiURL) {
  try {
    wpHostname = new URL(apiURL).hostname;
  } catch (e) {
    // Ignore
  }
}

const nextConfig = {
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: wpHostname,
      },
    ],
  },

  async redirects() {
    return [
      // Legacy page URLs that were linked from the site but never existed.
      // Keep in sync with LEGACY_PATHS in lib/internal-href.ts.
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/branding', destination: '/branding-and-graphic-design', permanent: true },
      { source: '/branding/logo-design', destination: '/logo-design', permanent: true },
      { source: '/branding/packages', destination: '/branding-packages', permanent: true },
      { source: '/branding/business-cards', destination: '/business-card-design', permanent: true },
      { source: '/branding/ui-ux', destination: '/ui-ux-design', permanent: true },
      { source: '/youtube', destination: '/youtube-marketing', permanent: true },
      { source: '/about-us/awards-and-recognitions', destination: '/awards-and-recognitions', permanent: true },
      { source: '/website-development/static-website', destination: '/static-html-websites', permanent: true },
      {
        source: '/website-design/:slug',
        destination: '/blogs/website-design/:slug',
        permanent: true,
      },
      {
        source: '/seo/:slug',
        destination: '/blogs/seo/:slug',
        permanent: true,
      },
      {
        source: '/digital-marketing/:slug',
        destination: '/blogs/digital-marketing/:slug',
        permanent: true,
      },
      {
        // Old blog URLs only: these two slugs are service URLs, not posts
        // (static-website is redirected above; dynamic-website has no page).
        source: '/website-development/:slug((?!(?:static-website|dynamic-website)$)[^/]+)',
        destination: '/blogs/website-development/:slug',
        permanent: true,
      },
      {
        source: '/logo-design/:slug',
        destination: '/blogs/logo-design/:slug',
        permanent: true,
      },
      {
        source: '/news/:slug',
        destination: '/blogs/news/:slug',
        permanent: true,
      },
      {
        source: '/app/:slug',
        destination: '/blogs/app/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
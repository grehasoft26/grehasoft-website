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
        source: '/website-development/:slug',
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
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
};

export default nextConfig;

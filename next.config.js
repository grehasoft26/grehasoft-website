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
      // Phase 4: retired duplicate service pages (old static copies of the
      // CMS-driven service pages), redirected to the page on the same service.
      { source: '/website-development1', destination: '/website-development', permanent: true },
      { source: '/seo1', destination: '/seo', permanent: true },
      { source: '/digital-marketing1', destination: '/digital-marketing', permanent: true },
      { source: '/mobile-app-development1', destination: '/mobile-app-development', permanent: true },
      { source: '/software-web-apps1', destination: '/software-web-apps', permanent: true },
      { source: '/technology-services1', destination: '/technology-services', permanent: true },
      { source: '/ecommerce-development1', destination: '/ecommerce-development', permanent: true },
      { source: '/social-media-marketing1', destination: '/social-media-marketing', permanent: true },
      { source: '/website-design1', destination: '/website-design', permanent: true },
      { source: '/branding-and-design1', destination: '/branding-and-graphic-design', permanent: true },
      { source: '/ui-ux-design1', destination: '/ui-ux-design', permanent: true },
      { source: '/wordpress-development1', destination: '/wordpress-development', permanent: true },
      { source: '/logo-design1', destination: '/logo-design', permanent: true },
      // Phase 4 route cleanup: remaining legacy static pages, each redirected to the
      // CMS service page on the same topic (PHASE_4_REVIEW_FOLLOWUP.md §5–§7).
      // /ecommerce-development1/magento, /ecommerce-development1/opencart and
      // /website-development1/dynamic-website have no equivalent and return 404.
      { source: '/custom-development', destination: '/software-web-apps', permanent: true },
      { source: '/services/software-programming', destination: '/software-web-apps', permanent: true },
      { source: '/services/visiting-cards-letter-heads', destination: '/business-card-design', permanent: true },
      { source: '/branding-packages1', destination: '/branding-packages', permanent: true },
      { source: '/brochure-flyer-design1', destination: '/brochure-flyer-design', permanent: true },
      { source: '/business-card-design1', destination: '/business-card-design', permanent: true },
      { source: '/landing-page-design1', destination: '/landing-page-design', permanent: true },
      { source: '/search-engine-marketing1', destination: '/search-engine-marketing', permanent: true },
      { source: '/ecommerce-development1/custom', destination: '/ecommerce-development', permanent: true },
      { source: '/ecommerce-development1/shopify', destination: '/shopify-development', permanent: true },
      { source: '/ecommerce-development1/woocommerce', destination: '/woocommerce-development', permanent: true },
      { source: '/mobile-app-development1/android', destination: '/android-app-development', permanent: true },
      { source: '/mobile-app-development1/bussiness-apps', destination: '/business-app-development', permanent: true },
      { source: '/mobile-app-development1/hybrid', destination: '/hybrid-app-development', permanent: true },
      { source: '/mobile-app-development1/ios', destination: '/ios-app-development', permanent: true },
      { source: '/mobile-app-development1/pwa', destination: '/progressive-web-app-development', permanent: true },
      { source: '/mobile-app-development1/utility-apps', destination: '/utility-app-development', permanent: true },
      { source: '/social-media-marketing1/facebook1', destination: '/facebook', permanent: true },
      { source: '/social-media-marketing1/instagram1', destination: '/instagram', permanent: true },
      { source: '/social-media-marketing1/linkedin1', destination: '/linkedin', permanent: true },
      { source: '/social-media-marketing1/pinterest1', destination: '/pinterest', permanent: true },
      { source: '/social-media-marketing1/twitter1', destination: '/twitter', permanent: true },
      { source: '/social-media-marketing1/youtube', destination: '/youtube-marketing', permanent: true },
      { source: '/software-web-apps1/api-integrations', destination: '/api-development-integration', permanent: true },
      { source: '/software-web-apps1/booking', destination: '/booking-system-development', permanent: true },
      { source: '/software-web-apps1/business-tools', destination: '/custom-business-software-development', permanent: true },
      { source: '/software-web-apps1/crm', destination: '/crm-software-development', permanent: true },
      { source: '/software-web-apps1/custom-web', destination: '/custom-web-app-development', permanent: true },
      { source: '/software-web-apps1/erp', destination: '/erp-software-development', permanent: true },
      { source: '/software-web-apps1/inventory', destination: '/inventory-management-software', permanent: true },
      { source: '/software-web-apps1/lms', destination: '/lms-development', permanent: true },
      { source: '/technology-services1/automation1', destination: '/workflow-automation', permanent: true },
      { source: '/technology-services1/backend1', destination: '/backend-development', permanent: true },
      { source: '/technology-services1/databases1', destination: '/database-development', permanent: true },
      { source: '/technology-services1/frontend1', destination: '/frontend-development', permanent: true },
      { source: '/technology-services1/server-cloud1', destination: '/server-cloud-solutions', permanent: true },
      { source: '/website-development1/static-website', destination: '/static-html-websites', permanent: true },
      // The static redesign page is consolidated into the CMS service page.
      { source: '/website-redesign', destination: '/website-redesign-services', permanent: true },
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
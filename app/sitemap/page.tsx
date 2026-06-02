'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Map, 
  Globe, 
  Layers, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Cpu, 
  Shield, 
  DollarSign, 
  Code,
  Building2
} from 'lucide-react';
import Footer from '@/components/Footer';

const sitemapData = [
  {
    title: 'Core Corporate Pages',
    icon: <Building2 className="w-5 h-5 text-primary" />,
    description: 'Our primary corporate pages detailing who we are, our professional crew, case histories, and active roles.',
    links: [
      { name: 'Home Screen', href: '/' },
      { name: 'About Grehasoft', href: '/about' },
      { name: 'Our Elite Team', href: '/team' },
      { name: 'Case Studies & Portfolio', href: '/portfolio' },
      { name: 'Proprietary Products & Labs', href: '/products' },
      { name: 'Careers & Active Openings', href: '/careers' },
      { name: 'Blog & Technical Insights', href: '/blog' },
      { name: 'Contact Our Consultants', href: '/contact' },
    ],
  },
  {
    title: 'Web Design & Creative Media',
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    description: 'High-fidelity interface wireframes, content hubs, and dynamic loading portals built to gain audience traffic.',
    links: [
      { name: 'Services Directory Hub', href: '/services' },
      { name: 'Website Design', href: '/website-design' },
      { name: 'Website Development', href: '/website-development' },
      { name: 'Static HTML Websites', href: '/website-development/static' },
      { name: 'Static Website Services', href: '/website-development/static-website' },
      { name: 'Dynamic Database Platforms', href: '/website-development/dynamic-website' },
      { name: 'Custom WordPress Dev', href: '/wordpress-development' },
      { name: 'Landing Page Optimization', href: '/landing-page-design' },
      { name: 'Legacy Website Redesigns', href: '/website-redesign' },
    ],
  },
  {
    title: 'eCommerce Solution Engines',
    icon: <DollarSign className="w-5 h-5 text-emerald-500" />,
    description: 'Scale physical product delivery systems using hardened payment pathways, shopping cart triggers, and clean inventory.',
    links: [
      { name: 'eCommerce Development', href: '/ecommerce-development' },
      { name: 'Shopify Store Building', href: '/ecommerce-development/shopify' },
      { name: 'WooCommerce Integrations', href: '/ecommerce-development/woocommerce' },
      { name: 'Magento Enterprise Dev', href: '/ecommerce-development/magento' },
      { name: 'OpenCart Digital Stores', href: '/ecommerce-development/opencart' },
      { name: 'Bespoke Custom eCommerce', href: '/ecommerce-development/custom' },
    ],
  },
  {
    title: 'Branding & Visual Artistry',
    icon: <Palette className="w-5 h-5 text-indigo-500" />,
    description: 'Establish distinctive, timeless corporate signatures and high-fidelity screen templates that drive customer engagement.',
    links: [
      { name: 'Branding Solutions', href: '/branding' },
      { name: 'Vector Logo Design', href: '/branding/logo-design' },
      { name: 'Complete Corporate Packages', href: '/branding/packages' },
      { name: 'Graphic Design', href: '/branding/graphic-design' },
      { name: 'Brochure & Flyer Layouts', href: '/branding/brochure-flyer' },
      { name: 'Business Cards & Stationary', href: '/branding/business-cards' },
      { name: 'Elite UI/UX Experience Design', href: '/branding/ui-ux' },
    ],
  },
  {
    title: 'Enterprise Software Solutions',
    icon: <Code className="w-5 h-5 text-pink-500" />,
    description: 'Custom cloud modules, interactive admin panels, calendar booking systems, and workflow automation databases.',
    links: [
      { name: 'Software Overview', href: '/software' },
      { name: 'SaaS Client Web Apps', href: '/software/custom-web' },
      { name: 'ERP Core Platforms', href: '/software/erp' },
      { name: 'CRM Contact Class Systems', href: '/software/crm' },
      { name: 'LMS Learning Classrooms', href: '/software/lms' },
      { name: 'Interactive Booking calendars', href: '/software/booking' },
      { name: 'Stock Inventory Tracks', href: '/software/inventory' },
      { name: 'Operational Business Tools', href: '/software/business-tools' },
      { name: 'Clean API Sync Pathways', href: '/software/api-integrations' },
    ],
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone className="w-5 h-5 text-orange-500" />,
    description: 'High-performance applications built specifically for Android, iOS, and hybrid operating layers with clean offline storage.',
    links: [
      { name: 'Mobile Solutions Overview', href: '/mobile-apps' },
      { name: 'Native Android Dev (Kotlin)', href: '/mobile-apps/android' },
      { name: 'Native iOS Dev (Swift)', href: '/mobile-apps/ios' },
      { name: 'Hybrid Apps (Flutter/React)', href: '/mobile-apps/hybrid' },
      { name: 'Progressive Web Apps (PWA)', href: '/mobile-apps/pwa' },
      { name: 'Dynamic Service Apps', href: '/mobile-apps/business-apps' },
      { name: 'Task-Focused Utility Apps', href: '/mobile-apps/utility-apps' },
    ],
  },
  {
    title: 'Search Ranking & Marketing',
    icon: <Megaphone className="w-5 h-5 text-accent" />,
    description: 'Increase corporate lead generation and organically scale keyword presence across major lookup indexes.',
    links: [
      { name: 'Comprehensive SEO Services', href: '/seo' },
      { name: 'SEM & High-ROI Google Ads', href: '/search-engine-marketing' },
      { name: 'Digital Marketing Hub', href: '/digital-marketing' },
      { name: 'Social Media Management', href: '/social-media-marketing' },
      { name: 'Facebook Ad Campaigns', href: '/social-media-marketing/facebook' },
      { name: 'Instagram Visual Strategy', href: '/social-media-marketing/instagram' },
      { name: 'YouTube Growth & SEO', href: '/social-media-marketing/youtube' },
      { name: 'LinkedIn B2B Lead Funnels', href: '/social-media-marketing/linkedin' },
      { name: 'Pinterest Referral Traffic', href: '/social-media-marketing/pinterest' },
      { name: 'Twitter (X) Authority building', href: '/social-media-marketing/twitter' },
    ],
  },
  {
    title: 'Technology & Cloud Staging',
    icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    description: 'Robust server parameters, relational schemas, high-efficiency container deployments, and front-of-house UI components.',
    links: [
      { name: 'Technology Stack Hub', href: '/tech' },
      { name: 'Backend (Laravel & Node.js)', href: '/tech/backend' },
      { name: 'Frontend (React, Vue, Webpack)', href: '/tech/frontend' },
      { name: 'Databases (MySQL, Mongo, Redis)', href: '/tech/databases' },
      { name: 'AWS & Cloud Deployment', href: '/tech/server-cloud' },
      { name: 'Workflow RPA Automation', href: '/tech/automation' },
    ],
  },
  {
    title: 'Operational Support & Legal',
    icon: <Shield className="w-5 h-5 text-red-500" />,
    description: 'Verify our active user privacy terms, general service parameters, and complete platform location layout guides.',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Interactive Site Map', href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Grehasoft Site Directory"
        description="Explore the complete hierarchical architecture of our digital services, engineering frameworks, and branding channels."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Sitemap', href: '/sitemap' },
        ]}
      />

      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs px-3.5 py-1.5 bg-primary/10 border border-primary/5 rounded-full inline-flex items-center gap-2 font-mono">
              <Map className="w-3.5 h-3.5" />
              Dynamic Map Router
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark mt-6 mb-6 leading-tight">
              Platform Directory Index
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Navigate seamlessly across our complete service landscape. Our logical hierarchy matches search-engine parsing layouts to maximize overall indexing potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-gray-50 pb-5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-dark text-base leading-snug">{section.title}</h3>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest font-mono">
                        {section.links.length} Links
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {section.description}
                  </p>

                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-500 hover:text-primary text-xs leading-relaxed transition-colors flex items-center gap-2 group py-1"
                        >
                          <ChevronRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                          <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

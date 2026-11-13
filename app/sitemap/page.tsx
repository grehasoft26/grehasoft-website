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
      { name: 'About Grehasoft', href: '/about-us' },
      { name: 'Our Brand Story', href: '/brand-story' },
      { name: 'Awards & Recognitions', href: '/awards-and-recognitions' },
      { name: 'Case Studies & Portfolio', href: '/portfolio' },
      { name: 'Proprietary Products & Labs', href: '/products' },
      { name: 'Grehasoft PMS', href: '/products/pms' },
      { name: 'Careers & Active Openings', href: '/careers' },
      { name: 'Blog & Technical Insights', href: '/blogs' },
      { name: 'Contact Our Consultants', href: '/contact-us' },
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
      { name: 'Static HTML Websites', href: '/static-html-websites' },
      { name: 'Custom WordPress Dev', href: '/wordpress-development' },
      { name: 'Landing Page Optimization', href: '/landing-page-design' },
      { name: 'Website Redesign Services', href: '/website-redesign-services' },
    ],
  },
  {
    title: 'eCommerce Solution Engines',
    icon: <DollarSign className="w-5 h-5 text-emerald-500" />,
    description: 'Scale physical product delivery systems using hardened payment pathways, shopping cart triggers, and clean inventory.',
    links: [
      { name: 'eCommerce Development', href: '/ecommerce-development' },
      { name: 'Shopify Store Building', href: '/shopify-development' },
      { name: 'WooCommerce Integrations', href: '/woocommerce-development' },
    ],
  },
  {
    title: 'Branding & Visual Artistry',
    icon: <Palette className="w-5 h-5 text-indigo-500" />,
    description: 'Establish distinctive, timeless corporate signatures and high-fidelity screen templates that drive customer engagement.',
    links: [
      { name: 'Branding Solutions', href: '/branding-and-graphic-design' },
      { name: 'Vector Logo Design', href: '/logo-design' },
      { name: 'Complete Corporate Packages', href: '/branding-packages' },
      { name: 'Graphic Design', href: '/graphic-design' },
      { name: 'Brochure & Flyer Layouts', href: '/brochure-flyer-design' },
      { name: 'Business Cards & Stationery', href: '/business-card-design' },
      { name: 'Elite UI/UX Experience Design', href: '/ui-ux-design' },
    ],
  },
  {
    title: 'Enterprise Software Solutions',
    icon: <Code className="w-5 h-5 text-pink-500" />,
    description: 'Custom cloud modules, interactive admin panels, calendar booking systems, and workflow automation databases.',
    links: [
      { name: 'Software Overview', href: '/software-web-apps' },
      { name: 'SaaS Client Web Apps', href: '/custom-web-app-development' },
      { name: 'ERP Core Platforms', href: '/erp-software-development' },
      { name: 'CRM Contact Class Systems', href: '/crm-software-development' },
      { name: 'LMS Learning Classrooms', href: '/lms-development' },
      { name: 'Interactive Booking calendars', href: '/booking-system-development' },
      { name: 'Stock Inventory Tracks', href: '/inventory-management-software' },
      { name: 'Operational Business Tools', href: '/custom-business-software-development' },
      { name: 'Clean API Sync Pathways', href: '/api-development-integration' },
    ],
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone className="w-5 h-5 text-orange-500" />,
    description: 'High-performance applications built specifically for Android, iOS, and hybrid operating layers with clean offline storage.',
    links: [
      { name: 'Mobile Solutions Overview', href: '/mobile-app-development' },
      { name: 'Native Android Dev (Kotlin)', href: '/android-app-development' },
      { name: 'Native iOS Dev (Swift)', href: '/ios-app-development' },
      { name: 'Hybrid Apps (Flutter/React)', href: '/hybrid-app-development' },
      { name: 'Progressive Web Apps (PWA)', href: '/progressive-web-app-development' },
      { name: 'Dynamic Service Apps', href: '/business-app-development' },
      { name: 'Task-Focused Utility Apps', href: '/utility-app-development' },
    ],
  },
  {
    title: 'Search Ranking & Marketing',
    icon: <Megaphone className="w-5 h-5 text-accent" />,
    description: 'Increase corporate lead generation and organically scale keyword presence across major lookup indexes.',
    links: [
      { name: 'Comprehensive SEO Services', href: '/seo' },
      { name: 'Lead Generation Services', href: '/lead-generation-services' },
      { name: 'SEM & High-ROI Google Ads', href: '/search-engine-marketing' },
      { name: 'Digital Marketing Hub', href: '/digital-marketing' },
      { name: 'Social Media Management', href: '/social-media-marketing' },
      { name: 'Facebook Ad Campaigns', href: '/facebook' },
      { name: 'Instagram Visual Strategy', href: '/instagram' },
      { name: 'YouTube Growth & SEO', href: '/youtube-marketing' },
      { name: 'LinkedIn B2B Lead Funnels', href: '/linkedin' },
      { name: 'Pinterest Referral Traffic', href: '/pinterest' },
      { name: 'Twitter (X) Authority building', href: '/twitter' },
    ],
  },
  {
    title: 'Technology & Cloud Staging',
    icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    description: 'Robust server parameters, relational schemas, high-efficiency container deployments, and front-of-house UI components.',
    links: [
      { name: 'Technology Stack Hub', href: '/technology-services' },
      { name: 'Backend (Laravel & Node.js)', href: '/backend-development' },
      { name: 'Frontend (React, Vue, Webpack)', href: '/frontend-development' },
      { name: 'Databases (MySQL, Mongo, Redis)', href: '/database-development' },
      { name: 'AWS & Cloud Deployment', href: '/server-cloud-solutions' },
      { name: 'Workflow RPA Automation', href: '/workflow-automation' },
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
      
    </main>
  );
}

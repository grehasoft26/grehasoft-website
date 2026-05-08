import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import HeroSection from '@/components/service/HeroSection';
import ServicesSection from '@/components/service/ServicesSection';
import WhyChooseSection from '@/components/service/WhyChooseSection';
import FeaturesSection from '@/components/service/FeaturesSection';
import FAQSection from '@/components/service/FAQSection';

import {
  Layout,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Lightbulb,
  Headphones,
  Wallet,
  LayoutDashboard,
  Brush,
  MousePointer,
  ImageIcon,
  MonitorSmartphone,
  Building2,
  Palette,
  ShoppingCart,
  Navigation as NavigationIcon,
  Store,
} from 'lucide-react';
import IndustriesSection from '@/components/service/IndustriesSection';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {

  const { slug } = await params;

  const serviceSlug = slug[slug.length - 1];

  // FETCH SERVICE
  const res = await fetch(
    `${API}/services?slug=${slug}&_embed`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();

  const service = data[0];

  // NO SERVICE
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No Service Found
      </div>
    );
  }

  const acf = service.acf || {};

  // FEATURED IMAGE
  const featuredImage =
    service._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/images/fallback.jpg';

  // HERO IMAGE FROM ID
  const heroImageId = acf.hero_image;

  let heroImageUrl = '';

  if (heroImageId) {

    const mediaRes = await fetch(
      `${API}/media/${heroImageId}`,
      {
        cache: 'no-store',
      }
    );

    const mediaData = await mediaRes.json();

    heroImageUrl = mediaData.source_url;
  }

  // WHY CHOOSE US
  const whyChooseUs = [
    {
      title: acf.advantage1_title,
      desc: acf.advantage1_description,
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: acf.advantage2_title,
      desc: acf.advantage2_description,
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: acf.advantage3_title,
      desc: acf.advantage3_description,
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: acf.advantage4_title,
      desc: acf.advantage4_description,
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: acf.advantage5_title,
      desc: acf.advantage5_description,
      icon: <Wallet className="w-6 h-6" />,
    },
  ].filter((item) => item.title);
const industries = [
    acf.industry1,
    acf.industry2,
    acf.industry3,
    acf.industry4,
    acf.industry5,
    acf.industry6,
    acf.industry7,
    acf.industry8,
  ].filter(Boolean);
  // FEATURES
  const websiteFeatures = [
    {
      title: acf.feature1_title,
      desc: acf.feature1_description,
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: acf.feature2_title,
      desc: acf.feature2_description,
      icon: <MonitorSmartphone className="w-6 h-6" />,
    },
    {
      title: acf.feature3_title,
      desc: acf.feature3_description,
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: acf.feature4_title,
      desc: acf.feature4_description,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: acf.feature5_title,
      desc: acf.feature5_description,
      icon: <ImageIcon className="w-6 h-6" />,
    },
    {
      title: acf.feature6_title,
      desc: acf.feature6_description,
      icon: <NavigationIcon className="w-6 h-6" />,
    },
    {
      title: acf.feature7_title,
      desc: acf.feature7_description,
      icon: <MousePointer className="w-6 h-6" />,
    },
    {
      title: acf.feature8_title,
      desc: acf.feature8_description,
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: acf.feature9_title,
      desc: acf.feature9_description,
      icon: <Brush className="w-6 h-6" />,
    },
    {
      title: acf.feature10_title,
      desc: acf.feature10_description,
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
  ].filter((item) => item.title);

  // SERVICES
  const designServices = [
    {
      title: acf.service1_title,
      desc: acf.service1_description,
      icon: <Building2 className="w-10 h-10" />,
    },
    {
      title: acf.service2_title,
      desc: acf.service2_description,
      icon: <Layout className="w-10 h-10" />,
    },
    {
      title: acf.service3_title,
      desc: acf.service3_description,
      icon: <Smartphone className="w-10 h-10" />,
    },
    {
      title: acf.service4_title,
      desc: acf.service4_description,
      icon: <Palette className="w-10 h-10" />,
    },
    {
      title: acf.service5_title,
      desc: acf.service5_description,
      icon: <ShoppingCart className="w-10 h-10" />,
    },
    {
      title: acf.service6_title,
      desc: acf.service6_description,
      icon: <Layout className="w-10 h-10" />,
    },
  ].filter((item) => item.title);

  // FAQS
  const faqs = [
    {
      q: acf.faq1_question,
      a: acf.faq1_answer,
    },
    {
      q: acf.faq2_question,
      a: acf.faq2_answer,
    },
    {
      q: acf.faq3_question,
      a: acf.faq3_answer,
    },
    {
      q: acf.faq4_question,
      a: acf.faq4_answer,
    },
    {
      q: acf.faq5_question,
      a: acf.faq5_answer,
    },
    {
      q: acf.faq6_question,
      a: acf.faq6_answer,
    },
    {
      q: acf.faq7_question,
      a: acf.faq7_answer,
    },
    {
      q: acf.faq8_question,
      a: acf.faq8_answer,
    },
    {
      q: acf.faq9_question,
      a: acf.faq9_answer,
    },
    {
      q: acf.faq10_question,
      a: acf.faq10_answer,
    },
  ].filter((item) => item.q);

  return (
    <main className="bg-white">

      {/* PAGE HEADER */}
      <PageHeader
        title={acf.page_title || service.title.rendered}
        description={acf.page_desc}
        breadcrumb={[
          { name: 'Home', href: '/' },
          {
            name: service.title.rendered,
            href: `/${service.slug}`,
          },
        ]}
      />

      {/* HERO */}
      <HeroSection
        acf={acf}
        heroImageUrl={heroImageUrl}
        featuredImage={featuredImage}
        serviceTitle={service.title.rendered}
      />
      {/* STRATEGIC SECTION */}
      {acf.planning_title && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="bg-dark rounded-[3rem] p-10 md:p-16 text-white">

                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                  {acf.planning_title}
                </h2>

                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {acf.planning_description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {acf.point1 && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{acf.point1}</span>
                    </div>
                  )}

                  {acf.point2 && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{acf.point2}</span>
                    </div>
                  )}

                  {acf.point3 && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{acf.point3}</span>
                    </div>
                  )}
                   {acf.point4 && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{acf.point4}</span>
                    </div>
                  )}

                </div>

              </div>

              <div>

                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                  {acf.success_tag}
                </span>

                <h3 className="text-3xl font-black text-dark mb-6">
                  {acf.success_title}
                </h3>
<div
  className="text-gray-600 mb-8 leading-relaxed space-y-4"
  dangerouslySetInnerHTML={{
    __html: acf.success_description,
  }}
/>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* SERVICES */}
      <ServicesSection
        acf={acf}
        designServices={designServices}
      />

      {/* WHY CHOOSE */}
      <WhyChooseSection
        acf={acf}
        whyChooseUs={whyChooseUs}
      />

      {/* FEATURES */}
      <FeaturesSection
        acf={acf}
        websiteFeatures={websiteFeatures}
      />
{/* FEATURES */}
      <IndustriesSection
        acf={acf}
        industries={industries}
      />
      {/* FAQ */}
      <FAQSection
        acf={acf}
        faqs={faqs}
      />

      <CTA />
      <Footer />

    </main>
  );
}
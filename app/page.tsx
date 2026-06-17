import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import StickyScrollServices from '@/components/StickyScrollServices';
import Awards from '@/components/Awards';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import TrustedITSection from '@/components/TrustedITSection';
import WhyChooseUs from '@/components/WhyChooseUs';


import { getHomeData } from '@/lib/api';
import KochiIntroSection from '@/components/KochiIntroSection';
import EndToEndServicesIntro from '@/components/EndToEndServicesIntro';
import type { Metadata } from "next";

export const revalidate = 60;
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      "https://cms.grehasoft.com/wp-json/wp/v2/pages/1072?_fields=yoast_head_json",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return {};
    }

    const page = await res.json();

    return {
      title: page?.yoast_head_json?.title || "GrehaSoft",
      description: page?.yoast_head_json?.description || "",

      alternates: {
        canonical: page?.yoast_head_json?.og_url,
      },

      openGraph: {
        title: page?.yoast_head_json?.og_title,
        description: page?.yoast_head_json?.og_description,
        url: page?.yoast_head_json?.og_url,
        images:
          page?.yoast_head_json?.og_image?.map(
            (img: { url: string }) => img.url
          ) || [],
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  } catch (error) {
    console.error("Home metadata error:", error);
    return {};
  }
}
export default async function Home() {
  const homeData = await getHomeData();

  return (
    <main className="min-h-screen">
       {homeData.schemaJson && (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: homeData.schemaJson,
      }}
    />
  )}
      <Navbar />
      <Hero slides={homeData.hero} />
      <KochiIntroSection />
      <EndToEndServicesIntro />
      <StickyScrollServices initialServices={homeData.services || []} />
      <TrustedITSection />
      <Clients initialClients={homeData.clients || []} />
      <WhyChooseUs />
      <Awards data={homeData.awards} />
      <About data={homeData.about} />
      <Portfolio 
        showFilters={false} 
        initialProjects={homeData.portfolioProjects || []} 
        initialCategories={homeData.portfolioCategories || []} 
      />
      <Products data={homeData.products} />
      <FAQ />
      <Testimonials />
      <CTA data={homeData.cta} />
      <Contact initialData={homeData.contact} />
      <Footer initialData={homeData.footerData} initialMenu={homeData.footerMenu || []} />
    </main>
  );
}

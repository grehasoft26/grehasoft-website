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

import { getHome } from '@/lib/backend-api';
import KochiIntroSection from '@/components/KochiIntroSection';
import EndToEndServicesIntro from '@/components/EndToEndServicesIntro';
import type { Metadata } from "next";

export const revalidate = 60;
export async function generateMetadata(): Promise<Metadata> {
  try {
    const homeData = await getHome();
    const yoast = homeData?.yoastMeta;

    return {
      title: yoast?.title || "GrehaSoft",
      description: yoast?.description || "",

      alternates: {
        canonical: yoast?.og_url || "",
      },

      openGraph: {
        title: yoast?.og_title || "",
        description: yoast?.og_description || "",
        url: yoast?.og_url || "",
        images:
          yoast?.og_image?.map(
            (img: { url: string }) => img.url
          ) || [],
      },

      robots: {
        index: yoast?.robots?.index === 'noindex' ? false : true,
        follow: yoast?.robots?.follow === 'nofollow' ? false : true,
      },
    };
  } catch (error) {
    console.error("Home metadata error:", error);
    return {};
  }
}
export default async function Home() {
  const homeData = await getHome();

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
      {/* <Navbar /> */}
      <Hero slides={homeData.hero} />
      <KochiIntroSection />
       <EndToEndServicesIntro /> 
      <StickyScrollServices initialServices={homeData.services || []} />
      <TrustedITSection />
      <Clients initialClients={homeData.clients || []} />
      <WhyChooseUs />
      <Awards data={homeData.awards} />
      {/* <About data={homeData.about} /> */}
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
      {/* <Footer is provided by RootLayout */}
    </main>
  );
}

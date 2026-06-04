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

export const revalidate = 60;

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero slides={homeData.hero} />
      
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

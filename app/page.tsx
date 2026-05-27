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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <StickyScrollServices />
      <TrustedITSection />
      <Clients />
      <WhyChooseUs />
      <Awards />
      <About />
    <Portfolio showFilters={false} />
      <Products />
       <FAQ />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer/>
    </main>
  );
}

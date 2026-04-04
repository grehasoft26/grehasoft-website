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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <StickyScrollServices />
      <Clients />
      <Awards />
      <About />
      <Portfolio />
      <Products />
       <FAQ />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer/>
    </main>
  );
}

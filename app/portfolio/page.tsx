import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Clients from '@/components/Clients';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Portfolio"
        description="Explore our successful projects and case studies of how we've helped businesses achieve their digital goals."
        breadcrumb={[{ name: 'Portfolio', href: '/portfolio' }]}
      />
      <PortfolioSection isFullPage={true} />
      
      {/* Our Clients Section */}
     <Clients/>
      
      <CTA />
      <Footer />
    </main>
  );
}

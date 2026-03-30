import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import CTA from '@/components/CTA';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Portfolio"
        description="Explore our successful projects and case studies of how we've helped businesses achieve their digital goals."
        breadcrumb={[{ name: 'Portfolio', href: '/portfolio' }]}
      />
      <PortfolioSection />
      
      {/* Our Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Clients</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Trusted by <span className="text-primary">Leading Brands</span> Worldwide</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src={`https://picsum.photos/seed/client${index}/200/100`}
                  alt={`Client ${index}`}
                  className="h-8 md:h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </main>
  );
}

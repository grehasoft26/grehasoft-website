import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/Services';
import CTA from '@/components/CTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Services"
        description="We provide a wide range of IT solutions designed to help your business innovate, grow, and succeed in the digital age."
        breadcrumb={[{ name: 'Services', href: '/services' }]}
      />
      <ServicesSection />
      
      {/* Our Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">How We Bring Your <span className="text-primary">Vision to Life</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, requirements, and business challenges.' },
              { step: '02', title: 'Planning', desc: 'We create a detailed roadmap and strategy for your project.' },
              { step: '03', title: 'Development', desc: 'Our expert team builds your solution using cutting-edge technology.' },
              { step: '04', title: 'Delivery', desc: 'We test, deploy, and provide ongoing support for your project.' },
            ].map((process, index) => (
              <div key={index} className="relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <span className="text-5xl font-bold text-primary/10 absolute top-6 right-6">{process.step}</span>
                <h3 className="text-2xl font-bold mb-4 text-dark">{process.title}</h3>
                <p className="text-text-gray leading-relaxed">{process.desc}</p>
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

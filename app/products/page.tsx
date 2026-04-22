import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/Products';
import CTA from '@/components/CTA';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Products"
        description="Explore our innovative software products designed to help your business streamline operations and boost productivity."
        breadcrumb={[{ name: 'Products', href: '/products' }]}
      />
    
      
      {/* Other Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Other Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Innovative Solutions for <span className="text-primary">Every Business</span> Need</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Solutions', desc: 'Comprehensive e-commerce platforms to help you sell online and grow your business.' },
              { title: 'CRM Systems', desc: 'Customer Relationship Management systems to help you manage your customer interactions.' },
              { title: 'HRM Software', desc: 'Human Resource Management software to help you manage your employees and payroll.' },
            ].map((product, index) => (
              <div key={index} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-dark">{product.title}</h3>
                <p className="text-text-gray leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        <ProductsSection />
      <CTA />
      <Footer />
    </main>
  );
}

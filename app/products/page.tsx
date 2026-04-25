import PageHeader from '@/components/PageHeader';
import ProductsSection from '@/components/Products';
import CTA from '@/components/CTA';
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Settings, 
  Users, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Receipt, 
  ShoppingBag, 
  Calendar,
  CheckCircle2,
  Zap,
  BarChart3,
  ShieldCheck,
  MousePointer2,
  Building2,
  Stethoscope,
  GraduationCap as EduIcon,
  ShoppingCart,
  Truck,
  Factory
} from 'lucide-react';
import Footer from '@/components/Footer';

const coreSolutions = [
  {
    title: 'Mobile Applications',
    desc: 'High-performance native and cross-platform apps for iOS and Android with intuitive user experiences.',
    icon: Smartphone,
    color: 'bg-blue-500'
  },
  {
    title: 'Custom Web Apps',
    desc: 'Scalable, secure, and responsive web applications built with the latest technologies to power your business.',
    icon: Globe,
    color: 'bg-emerald-500'
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Smart solutions that leverage predictive analytics, natural language processing, and computer vision.',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    title: 'Workflow Automation',
    desc: 'Streamline repetitive tasks and complex processes with intelligent automation systems.',
    icon: Settings,
    color: 'bg-orange-500'
  }
];

const businessSoftware = [
  {
    title: 'Enterprise ERP Systems',
    desc: 'Comprehensive Resource Planning software to integrate all facets of an operation.',
    icon: Briefcase,
  },
  {
    title: 'CRM Solutions',
    desc: 'Strategic Customer Relationship Management tools to boost sales and enhance retention.',
    icon: Users,
  },
  {
    title: 'LMS Platforms',
    desc: 'Modern Learning Management Systems for corporate training and educational institutions.',
    icon: GraduationCap,
  },
  {
    title: 'Billing & Invoicing',
    desc: 'Robust billing softwares designed for accuracy, speed, and automated financial reporting.',
    icon: Receipt,
  },
  {
    title: 'Quotation Software',
    desc: 'Streamlined tools for generating professional, accurate, and fast business quotations.',
    icon: FileText,
  },
  {
    title: 'Ecommerce Platforms',
    desc: 'Feature-rich online stores with high conversion rates and secure payment integrations.',
    icon: ShoppingBag,
  },
  {
    title: 'Appointment Booking',
    desc: 'User-friendly scheduling systems for service providers, clinics, and consultants.',
    icon: Calendar,
  },
];

const reasons = [
  { title: 'Scalability', desc: 'Our products grow with your business, handling increased loads effortlessly.', icon: Zap },
  { title: 'Security', desc: 'Data protection is at the core of our development, using industry-standard protocols.', icon: ShieldCheck },
  { title: 'Reliability', desc: 'Built for high availability with 99.9% uptime and consistent performance.', icon: BarChart3 },
  { title: 'Ease of Use', desc: 'Intuitive interfaces that require minimal training for your team.', icon: MousePointer2 },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Product Catalog"
        description="From enterprise-grade ERPs to custom AI solutions, we build powerful tools that drive digital transformation."
        breadcrumb={[{ name: 'Products', href: '/products' }]}
      />

      {/* Core Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Core Innovation</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
                Software Built for the <span className="text-primary">Modern Age</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                We specialize in developing cutting-edge products that solve real-world problems. Whether it's a mobile app or an AI-driven automation tool, our focus is always on impact.
              </p>
              <div className="space-y-4">
                {[
                  'Cloud-Native Architecture',
                  'API-First Development',
                  'User-Centric Design Philosophy'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-bold text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreSolutions.map((solution, index) => (
                <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-primary transition-colors`}>
                    <solution.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-dark mb-3 group-hover:text-white transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* Business Software Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Software Suite</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-dark leading-tight">
              Powerful Tools for <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-gray-600">
              Ready-to-deploy and customizable softwares that help you manage operations, sales, and customer experience effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businessSoftware.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <product.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-dark">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
              </div>
            ))}
            
            {/* Custom Solution Card */}
            <div className="bg-dark p-8 rounded-3xl overflow-hidden relative flex flex-col justify-center text-white">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Need a Custom Solution?</h3>
                <p className="text-white/60 mb-6 text-sm">We can build a tailored product specifically for your unique industry requirements.</p>
                <div className="h-px bg-white/20 mb-6 w-12" />
                <button className="text-accent font-bold hover:gap-3 transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                  Talk to our experts
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Settings className="w-32 h-32 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://picsum.photos/seed/product-quality/800/1000" 
                  alt="Product Quality" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">The Grehasoft Advantage</p>
                  <h3 className="text-3xl font-black leading-tight">Engineering Excellence in Every Line of Code</h3>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 p-10 bg-primary rounded-[2rem] shadow-2xl text-white hidden md:block">
                <p className="text-5xl font-black mb-2">16+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Years of Expertise</p>
              </div>
            </div>

            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Product Philosophy</span>
              <h2 className="text-4xl font-black text-dark mb-8 leading-tight">
                Designed for <span className="text-primary">Performance</span>, Optimized for <span className="text-primary">Impact</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {reasons.map((reason, index) => (
                  <div key={index}>
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-5">
                      <reason.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-dark mb-2">{reason.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Expertise Section */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Industry Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-dark leading-tight">
              Solutions Tailored for <span className="text-primary">Diverse Sectors</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Real Estate', icon: Building2 },
              { name: 'Healthcare', icon: Stethoscope },
              { name: 'Education', icon: EduIcon },
              { name: 'Retail', icon: ShoppingCart },
              { name: 'Logistics', icon: Truck },
              { name: 'Manufacturing', icon: Factory },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:shadow-lg transition-all duration-300 mb-4 border border-gray-100">
                  <industry.icon className="w-8 h-8" />
                </div>
                <p className="font-bold text-dark text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>



      
    </main>
  );
}

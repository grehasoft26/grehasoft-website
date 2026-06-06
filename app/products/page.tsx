import PageHeader from '@/components/PageHeader';
import ProductsSection from '@/components/Products';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import {
  Smartphone, Globe, Cpu, Settings,
  Users, Briefcase, GraduationCap,
  FileText, Receipt, ShoppingBag, Calendar,
  CheckCircle2, Zap, BarChart3, ShieldCheck, MousePointer2,
  Building2, Stethoscope, GraduationCap as EduIcon,
  ShoppingCart, Truck, Factory
} from 'lucide-react';

import axiosInstance from '@/lib/axios';

export const revalidate = 60;

// ✅ SERVER FETCH
async function getData() {
  const endpoint = '/wp-json/wp/v2/pages?slug=products&_fields=acf';
  console.log(`[ProductsPage] getData() fetching from base: ${axiosInstance.defaults.baseURL} with path: ${endpoint}`);
  try {
    const res = await axiosInstance.get(endpoint);
    console.log(`[ProductsPage] getData() response status: ${res.status}`);
    const payloadLength = res.data ? JSON.stringify(res.data).length : 0;
    console.log(`[ProductsPage] getData() response payload length: ${payloadLength}`);
    
    if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
      console.warn(`[ProductsPage] getData() returned empty or malformed array:`, res.data);
      return null;
    }
    
    return res.data[0].acf || null;
  } catch (err: any) {
    console.error("[ProductsPage] Error fetching products data in getData():", err.message || err);
    if (err.response) {
      console.error(`[ProductsPage] Error response status: ${err.response.status}, payload:`, err.response.data);
    }
    return null;
  }
}

// ✅ IMAGE FETCH (ID → URL)
async function getImageUrl(id: number) {
  if (!id) {
    console.log("[ProductsPage] getImageUrl() called with no ID");
    return null;
  }
  const endpoint = `/wp-json/wp/v2/media/${id}`;
  console.log(`[ProductsPage] getImageUrl(${id}) fetching from base: ${axiosInstance.defaults.baseURL} with path: ${endpoint}`);
  try {
    const res = await axiosInstance.get(endpoint);
    console.log(`[ProductsPage] getImageUrl(${id}) response status: ${res.status}`);
    return res.data?.source_url || null;
  } catch (err: any) {
    console.error(`[ProductsPage] Error fetching products media (${id}):`, err.message || err);
    if (err.response) {
      console.error(`[ProductsPage] Media fetch error response status: ${err.response.status}`);
    }
    return null;
  }
}

export default async function ProductsPage() {
  console.log("[ProductsPage] Rendering ProductsPage...");
  const data = await getData();
  
  // Fetch PMS details from home page slug to pass to ProductsSection
  let productsData = null;
  const homeEndpoint = '/wp-json/wp/v2/pages?slug=home&_fields=acf,pms_media';
  console.log(`[ProductsPage] Fetching PMS details from base: ${axiosInstance.defaults.baseURL} with path: ${homeEndpoint}`);
  try {
    const homeRes = await axiosInstance.get(homeEndpoint);
    console.log(`[ProductsPage] Home page fetch status: ${homeRes.status}`);
    const homeData = homeRes.data?.[0];
    if (homeData) {
      productsData = { ...homeData.acf, ...homeData.pms_media };
      console.log(`[ProductsPage] Successfully compiled productsData. Has pms_title_part1: ${!!productsData.pms_title_part1}`);
    } else {
      console.warn("[ProductsPage] Home page data returned empty.");
    }
  } catch (err: any) {
    console.error("[ProductsPage] Error fetching homepage products details:", err.message || err);
  }

  if (!data) {
    console.warn("[ProductsPage] No products data returned from API. Running fallback path.");
    console.log("[ProductsPage] Fallback execution path hit because data is null.");
    return (
      <main>
        <PageHeader
          title="Our Products"
          description="From enterprise-grade ERPs to custom AI solutions, we build powerful tools that drive digital transformation."
          breadcrumb={[{ name: 'Products', href: '/products' }]}
        />
        <div className="section-padding text-center bg-white border-b border-gray-100">
          <div className="container-custom">
            <p className="text-lg text-gray-500 mb-4">We are currently experiencing technical difficulties loading our products catalog.</p>
            <p className="text-sm text-gray-400">Please try refreshing the page or check back in a few moments.</p>
          </div>
        </div>
        {productsData && <ProductsSection data={productsData} />}
        <CTA />
        <Footer />
      </main>
    );
  }

  const core = data.core_section;
  const software = data.software_section;
  const adv = data.advantage_section;
  const industry = data.industry_section;

  console.log("[ProductsPage] adv bg_image ID:", adv?.bg_image);
  const imageUrl = await getImageUrl(adv?.bg_image);
  console.log("[ProductsPage] Resolved image URL:", imageUrl);

  return (
    <main>

      {/* HERO */}
      <PageHeader
        title={data.hero_section.title}
        description={data.hero_section.description}
        breadcrumb={[{ name: 'Products', href: '/products' }]}
      />

      {/* Core Solutions Section */}
<section className="section-padding bg-white">
  <div className="container-custom">
    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

      {/* LEFT */}
      <div className="lg:w-1/2">

        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          {core?.small_title}
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
          {core?.title}{" "}
          <span className="text-primary">{core?.highlight_text}</span>
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          {core?.description}
        </p>

        <div className="space-y-4">
          {[core?.point1, core?.point2, core?.point3].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-bold text-dark">{item}</span>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[
          {
            title: core?.card1_title,
            desc: core?.card1_desc,
            icon: Smartphone,
            color: 'bg-blue-500'
          },
          {
            title: core?.card2_title,
            desc: core?.card2_desc,
            icon: Globe,
            color: 'bg-emerald-500'
          },
          {
            title: core?.card3_title,
            desc: core?.card3_desc,
            icon: Cpu,
            color: 'bg-purple-500'
          },
          {
            title: core?.card4_title,
            desc: core?.card4_desc,
            icon: Settings,
            color: 'bg-orange-500'
          }
        ].map((solution, index) => (
          <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">

            <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-primary transition-colors`}>
              <solution.icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-black text-dark mb-3 group-hover:text-white transition-colors">
              {solution.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
              {solution.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  </div>
</section>

<ProductsSection data={productsData} />

{/* Business Software Grid */}
<section className="section-padding bg-gray-50">
  <div className="container-custom">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
        {software?.small_title}
      </span>

      <h2 className="text-4xl md:text-5xl font-black mb-6 text-dark leading-tight">
        {software?.title}{" "}
        <span className="text-primary">{software?.highlight_text}</span>
      </h2>

      <p className="text-gray-600">
        {software?.description}
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

      {[
        { title: software?.product1_title, desc: software?.product1_desc, icon: Briefcase },
        { title: software?.product2_title, desc: software?.product2_desc, icon: Users },
        { title: software?.product3_title, desc: software?.product3_desc, icon: GraduationCap },
        { title: software?.product4_title, desc: software?.product4_desc, icon: Receipt },
        { title: software?.product5_title, desc: software?.product5_desc, icon: FileText },
        { title: software?.product6_title, desc: software?.product6_desc, icon: ShoppingBag },
        { title: software?.product7_title, desc: software?.product7_desc, icon: Calendar },
      ].map((product, index) => (
        <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">

          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />

          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <product.icon className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold mb-4 text-dark">
            {product.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            {product.desc}
          </p>

        </div>
      ))}

      {/* CTA CARD */}
      <div className="bg-dark p-8 rounded-3xl overflow-hidden relative flex flex-col justify-center text-white">

        <div className="relative z-10">

          <h3 className="text-2xl font-black mb-4">
            {software?.cta_title}
          </h3>

          <p className="text-white/60 mb-6 text-sm">
            {software?.cta_text}
          </p>

          <div className="h-px bg-white/20 mb-6 w-12" />

          <button className="text-accent font-bold hover:gap-3 transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
            {software?.cta_button_text}
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

      {/* LEFT SIDE */}
      <div className="relative">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">

       {imageUrl && (
  <img
    src={imageUrl}
    alt="Product Quality"
    className="w-full h-full object-cover"
  />
)}

          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

          <div className="absolute bottom-12 left-12 right-12 text-white">
            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">
              {adv?.small_text}
            </p>
            <h3 className="text-3xl font-black leading-tight text-accent">
              {adv?.main_title}
            </h3>
          </div>

        </div>

        <div className="absolute -bottom-10 -right-10 p-10 bg-primary rounded-[2rem] shadow-2xl text-white hidden md:block">
          <p className="text-5xl font-black mb-2">
            {adv?.experience}
          </p>
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            {adv?.experience_label}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>

        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          {adv?.section_tag}
        </span>

        <h2 className="text-4xl font-black text-dark mb-8 leading-tight">
          {adv?.title}{" "}
          <span className="text-primary">{adv?.highlight_text}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {[
            { title: adv?.feature1_title, desc: adv?.feature1_desc, icon: Zap },
            { title: adv?.feature2_title, desc: adv?.feature2_desc, icon: ShieldCheck },
            { title: adv?.feature3_title, desc: adv?.feature3_desc, icon: BarChart3 },
            { title: adv?.feature4_title, desc: adv?.feature4_desc, icon: MousePointer2 },
          ].map((reason, index) => (
            <div key={index}>

              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-5">
                <reason.icon className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-bold text-dark mb-2">
                {reason.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.desc}
              </p>

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
      <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
        {industry?.small_title}
      </span>

      <h2 className="text-4xl md:text-5xl font-black mb-6 text-dark leading-tight">
        {industry?.title}{" "}
        <span className="text-primary">{industry?.highlight_text}</span>
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

      {[
        { name: industry?.industry1_name, icon: Building2 },
        { name: industry?.industry2_name, icon: Stethoscope },
        { name: industry?.industry3_name, icon: EduIcon },
        { name: industry?.industry4_name, icon: ShoppingCart },
        { name: industry?.industry5_name, icon: Truck },
        { name: industry?.industry6_name, icon: Factory },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center group">

          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:shadow-lg transition-all duration-300 mb-4 border border-gray-100">
            <item.icon className="w-8 h-8" />
          </div>

          <p className="font-bold text-dark text-sm">
            {item.name}
          </p>

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
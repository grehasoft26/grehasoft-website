import PageHeader from '@/components/PageHeader';
import Awards from '@/components/Awards';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import axios from '@/lib/axios';

// ✅ SERVER SIDE FETCH
async function getData() {
  try {
    const res = await axios.get('/wp-json/wp/v2/pages?slug=awards&_fields=acf');
    return res.data?.[0]?.acf || null;
  } catch (err) {
    console.error("Error fetching awards data:", err);
    return null;
  }
}

export default async function AwardsPage() {
  const data = await getData();

  if (!data) return null;

  return (
    <main className="min-h-screen">

      {/* HEADER */}
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumb={[
          { name: 'About', href: '/about' },
          { name: data.breadcrumb, href: '/about/awards' },
        ]}
      />

      {/* MAIN AWARDS SECTION */}
      <Awards  />

      {/* OTHER RECOGNITIONS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">
              {data.other_title}{' '}
              <span className="text-primary">{data.other_highlight}</span>
            </h2>

            <p className="text-text-gray text-lg">
              {data.other_description}
            </p>
          </div>

          

          {/* SAME DESIGN */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: data.feature1_title,
                desc: data.feature1_desc,
                icon: 'shield',
              },
              {
                title: data.feature2_title,
                desc: data.feature2_desc,
                icon: 'zap',
              },
              {
                title: data.feature3_title,
                desc: data.feature3_desc,
                icon: 'heart',
              },
              {
                title: data.feature4_title,
                desc: data.feature4_desc,
                icon: 'globe',
              },
            ].map((item, index) => {

              const icons: any = {
                shield: require('lucide-react').Shield,
                zap: require('lucide-react').Zap,
                heart: require('lucide-react').Heart,
                globe: require('lucide-react').Globe,
              };

              const Icon = icons[item.icon];

              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>

                  <p className="text-text-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <CTA />
     
    </main>
  );
}
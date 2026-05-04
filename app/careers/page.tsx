import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// ✅ SERVER SIDE FETCH
async function getData() {
  const res = await axios.get(`${API}/pages?slug=careers&_fields=acf`);
  return res.data[0]?.acf;
}

export default async function CareersPage() {
  const data = await getData();

  if (!data) return null;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HEADER (DYNAMIC) */}
      <PageHeader
        title={data.career_title}
        description={data.career_desc}
        breadcrumb={[{ name: data.breadcrumb, href: '/careers' }]}
      />

      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              {data.why_tag}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              {data.why_title}{' '}
              <span className="text-primary">{data.why_highlight}</span>
            </h2>
          </div>

          {/* SAME DESIGN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: data.feature1_title,
                desc: data.feature1_desc,
              },
              {
                title: data.feature2_title,
                desc: data.feature2_desc,
              },
              {
                title: data.feature3_title,
                desc: data.feature3_desc,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-10 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4 text-dark">
                  {value.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              {data.jobs_tag}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              {data.jobs_title}{' '}
              <span className="text-primary">{data.jobs_highlight}</span>
            </h2>
          </div>

          {/* SAME CARD DESIGN */}
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: data.job1_title,
                type: data.job1_type,
                location: data.job1_location,
                link: data.job1_link,
              },
              {
                title: data.job2_title,
                type: data.job2_type,
                location: data.job2_location,
                link: data.job2_link,
              },
              {
                title: data.job3_title,
                type: data.job3_type,
                location: data.job3_location,
                link: data.job3_link,
              },
              {
                title: data.job4_title,
                type: data.job4_type,
                location: data.job4_location,
                link: data.job4_link,
              },
            ]
              .filter(job => job.title) // remove empty jobs
              .map((position, index) => (
                <div
                  key={index}
                  className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-all duration-500"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-dark">
                      {position.title}
                    </h3>
                    <p className="text-text-gray font-medium">
                      {position.type} • {position.location}
                    </p>
                  </div>

                  {/* APPLY BUTTON (DYNAMIC LINK) */}
                  <a
                    href={position.link}
                    target="_blank"
                    className="btn-primary"
                  >
                    Apply Now
                  </a>
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
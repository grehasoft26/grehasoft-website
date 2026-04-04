import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Video, BarChart4, Target, Search } from 'lucide-react';

export default function YouTubeMarketingPage() {
  const features = [
    {
      title: 'TrueView In-Stream Ads',
      description: 'Run targeted video ads that appear right before your ideal customers watch a video.',
      icon: <Video className="w-8 h-8 text-primary" />,
    },
    {
      title: 'YouTube SEO',
      description: 'Optimize video titles, descriptions, and tags to rank high on the second largest search engine.',
      icon: <Search className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Retargeting Videos',
      description: 'Show customized video campaigns only to users who already visited your website.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Channel Analytics',
      description: 'Deep diving into viewer retention curves to ensure your video hooks and CTAs are perfect.',
      icon: <BarChart4 className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="YouTube Marketing & Ads"
        description="Captivate millions and drive high-intent leads with strategic YouTube advertising."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'YouTube Marketing', href: '/social-media-marketing/youtube' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Video Ads That Drive Action
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a Google entity, YouTube combines massive visual attention with the immense targeting power of search intent. It is uniquely powerful. Our YouTube marketing focuses intensely on executing profitable YouTube Ad campaigns.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From unskippable bumper ads for mass awareness to highly targeted in-stream ads meant entirely to force a website conversion—we know how to build a video advertising pipeline that pays for itself.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/youtubeads/800/800"
                  alt="YouTube Marketing and Ads"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

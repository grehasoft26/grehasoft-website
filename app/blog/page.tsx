import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Blog"
        description="Stay updated with the latest trends and insights in the world of technology and digital innovation."
        breadcrumb={[{ name: 'Blog', href: '/blog' }]}
      />
      
      {/* Blog Posts Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of Software Development', date: 'March 27, 2026', author: 'John Doe', category: 'Technology' },
              { title: 'Top Digital Marketing Trends in 2026', date: 'March 20, 2026', author: 'Sarah Smith', category: 'Marketing' },
              { title: 'The Impact of AI on Business Operations', date: 'March 15, 2026', author: 'Michael Brown', category: 'AI' },
              { title: 'How to Build a Successful Mobile App', date: 'March 10, 2026', author: 'John Doe', category: 'Technology' },
              { title: 'The Benefits of PMS for Property Management', date: 'March 5, 2026', author: 'Sarah Smith', category: 'PMS' },
              { title: 'The Role of Cyber Security in Modern Business', date: 'March 1, 2026', author: 'Michael Brown', category: 'Security' },
            ].map((post, index) => (
              <div key={index} className="p-10 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-4 block">{post.category}</span>
                <h3 className="text-2xl font-bold mb-4 text-dark">{post.title}</h3>
                <p className="text-text-gray font-medium mb-6">{post.date} • {post.author}</p>
                <button className="text-primary font-bold hover:text-accent transition-colors">Read More</button>
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

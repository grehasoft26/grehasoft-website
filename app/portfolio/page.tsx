import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import ProjectGallery from '@/components/ProjectGallery';
import CTA from '@/components/CTA';
import Clients from '@/components/Clients';
import { getPortfolio, getPortfolioCategories, getProjectGallery, getHome } from '@/lib/backend-api';

export const revalidate = 60;

export default async function PortfolioPage() {
  const [projects, categories, projectGallery, homeData] = await Promise.all([
    getPortfolio(),
    getPortfolioCategories(),
    getProjectGallery(),
    getHome(),
  ]);

  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <PageHeader
        title="Our Portfolio"
        description="Explore our successful projects and case studies of how we've helped businesses achieve their digital goals."
        breadcrumb={[{ name: 'Portfolio', href: '/portfolio' }]}
      />
      <PortfolioSection 
        isFullPage={true} 
        initialProjects={projects} 
        initialCategories={categories} 
      />
      
      {/* Project Gallery Section */}
      <ProjectGallery projects={projectGallery} />
      
      {/* Our Clients Section */}
      <Clients initialClients={homeData.clients || []} />
      
      <CTA data={homeData.cta || null} />
      {/* <Footer /> is provided by RootLayout */}
    </main>
  );
}

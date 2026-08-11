import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import ProjectGallery from '@/components/ProjectGallery';
import CTA from '@/components/CTA';
import Clients from '@/components/Clients';
import { getPortfolioData, getMenuData, getProjectGallery } from '@/lib/api';

export const revalidate = 60;

export default async function PortfolioPage() {
  const [portfolioData, menuData, projectGallery] = await Promise.all([
    getPortfolioData(),
    getMenuData(),
    getProjectGallery()
  ]);

  const { projects, categories } = portfolioData;

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
      <Clients />
      
      <CTA />
      <Footer initialData={menuData.footerAcf} initialMenu={menuData.footerMenu || []} />
    </main>
  );
}

import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import ProjectGallery from '@/components/ProjectGallery';
import CTABottomSection from '@/components/CTABottomSection';
import Clients from '@/components/Clients';
import { getPortfolio, getPortfolioCategories, getProjectGallery, getHome } from '@/lib/backend-api';
import {
  trimClients,
  trimCta,
  trimPortfolioCategories,
  trimPortfolioProjects,
  trimProjectGallery,
} from '@/lib/wp-props';

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
        initialProjects={trimPortfolioProjects(projects)}
        initialCategories={trimPortfolioCategories(categories)}
      />
      
      {/* Project Gallery Section */}
      <ProjectGallery projects={trimProjectGallery(projectGallery)} />
      
      {/* Our Clients Section */}
      <div id="clients">
        <Clients initialClients={trimClients(homeData.clients)} variant="grid" />
      </div>
      
      <CTABottomSection data={trimCta(homeData.cta) || null} />
      {/* <Footer /> is provided by RootLayout */}
    </main>
  );
}

import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/Portfolio';
import ProjectGallery from '@/components/ProjectGallery';
import CTABottomSection from '@/components/CTABottomSection';
import Clients from '@/components/Clients';
import type { Metadata } from 'next';
import { getPortfolio, getPortfolioCategories, getProjectGallery, getHome, getPage } from '@/lib/backend-api';
import { buildPageMetadata } from '@/lib/seo';
import {
  trimClients,
  trimCta,
  trimPortfolioCategories,
  trimPortfolioProjects,
  trimProjectGallery,
} from '@/lib/wp-props';

export const revalidate = 60;

// Metadata and schema live on the page, not in a layout, so portfolio detail
// pages (and their 404s) never inherit the index's canonical or schema.
async function getPageData() {
  return await getPage("portfolio");
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageData();

    if (!page) return {};

    return buildPageMetadata({
      path: "/portfolio",
      yoast: page?.yoast_head_json,
    });
  } catch {
    return {};
  }
}

export default async function PortfolioPage() {
  const [projects, categories, projectGallery, homeData, page] = await Promise.all([
    getPortfolio(),
    getPortfolioCategories(),
    getProjectGallery(),
    getHome(),
    getPageData(),
  ]);

  return (
    <main className="min-h-screen">
      {page?.acf?.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: page.acf.schema_json,
          }}
        />
      )}
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

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPortfolio, getPortfolioProjectStrict } from '@/lib/backend-api';
import { buildPageMetadata, decodeEntities, plainTextExcerpt } from '@/lib/seo';
import { trimPortfolioDetail, trimPortfolioRelated } from '@/lib/wp-props';
import CaseStudyDetail from '@/components/portfolio/CaseStudyDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ISR, like the service routes: rendered on first request, regenerated at most
// every 5 minutes. Only a project the backend reports as missing produces
// notFound(); backend failures throw so they are never cached as a 404.
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProjectStrict(slug);

  if (!project) return {};

  return buildPageMetadata({
    path: `/portfolio/${project.slug}`,
    yoast: project.yoast_head_json,
    fallbackTitle: decodeEntities(project.title?.rendered || ''),
    // Yoast description first; otherwise the case study's own summary.
    fallbackDescription: plainTextExcerpt(project.acf?.short_desc || project.excerpt?.rendered || ''),
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = await getPortfolioProjectStrict(slug);
  if (!project) {
    notFound();
  }

  // "Related works" is secondary: getPortfolio() returns [] if it fails.
  const related = await getPortfolio();
  const schemaJson = project.acf?.schema_json;

  return (
    <>
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaJson,
          }}
        />
      )}

      <CaseStudyDetail data={trimPortfolioDetail(project)} related={trimPortfolioRelated(related)} />
    </>
  );
}

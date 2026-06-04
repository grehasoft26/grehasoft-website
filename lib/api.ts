import axiosInstance from './axios';
import { HomeData, Slide } from '@/types/wordpress';

export async function getHomeData(): Promise<HomeData> {
  const results = await Promise.allSettled([
    axiosInstance.get('/wp-json/wp/v2/pages?slug=home&_fields=acf,about_media,awards_media,pms_media').catch(err => { console.warn("Home page fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/hero-slide').catch(err => { console.warn("Hero slides fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/ourservices?_embed').catch(err => { console.warn("Services CPT fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/clients?per_page=100').catch(err => { console.warn("Clients CPT fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/portfolio?_embed').catch(err => { console.warn("Portfolio CPT fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/portfolio_category').catch(err => { console.warn("Portfolio categories fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/contact').catch(err => { console.warn("Contact CPT fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/wp/v2/pages?slug=footer&_fields=acf').catch(err => { console.warn("Footer ACF fetch error:", err.message); return null; }),
    axiosInstance.get('/wp-json/custom/v1/menu/footer-menu').catch(err => { console.warn("Footer menu fetch error:", err.message); return null; })
  ]);

  let pageData: any = null;
  let slidesData: any[] = [];
  let servicesData: any[] = [];
  let clientsData: any[] = [];
  let portfolioProjects: any[] = [];
  let portfolioCategories: any[] = [];
  let contactData: any = null;
  let footerData: any = null;
  let footerMenu: any[] = [];

  if (results[0].status === 'fulfilled' && results[0].value) {
    pageData = results[0].value.data?.[0] || null;
  } else {
    console.warn('Failed to fetch home page data');
  }

  if (results[1].status === 'fulfilled' && results[1].value) {
    slidesData = results[1].value.data || [];
  } else {
    console.warn('Failed to fetch hero slides');
  }

  if (results[2].status === 'fulfilled' && results[2].value) {
    servicesData = results[2].value.data || [];
  } else {
    console.warn('Failed to fetch services CPT');
  }

  if (results[3].status === 'fulfilled' && results[3].value) {
    clientsData = results[3].value.data || [];
  } else {
    console.warn('Failed to fetch clients CPT');
  }

  if (results[4].status === 'fulfilled' && results[4].value) {
    portfolioProjects = results[4].value.data || [];
  } else {
    console.warn('Failed to fetch portfolio CPT');
  }

  if (results[5].status === 'fulfilled' && results[5].value) {
    portfolioCategories = results[5].value.data || [];
  } else {
    console.warn('Failed to fetch portfolio categories');
  }

  if (results[6].status === 'fulfilled' && results[6].value) {
    contactData = results[6].value.data?.[0]?.acf || null;
  } else {
    console.warn('Failed to fetch contact CPT');
  }

  if (results[7].status === 'fulfilled' && results[7].value) {
    footerData = results[7].value.data?.[0]?.acf || null;
  } else {
    console.warn('Failed to fetch footer ACF');
  }

  if (results[8].status === 'fulfilled' && results[8].value) {
    footerMenu = results[8].value.data || [];
  } else {
    console.warn('Failed to fetch footer menu');
  }

  const acf = pageData?.acf || {};
  const aboutMedia = pageData?.about_media || {};
  const awardsMedia = pageData?.awards_media || {};
  const pmsMedia = pageData?.pms_media || {};

  const slides: Slide[] = Array.isArray(slidesData)
    ? slidesData.map((post: any) => ({
        title: post.acf?.slide_title || "",
        video: post.acf?.slide_video || "",
        thumbnail: post.acf?.slide_thumbnail || "",
        label: post.acf?.slide_label || "",
        description: post.acf?.slide_description || ""
      }))
    : [];

  return {
    hero: slides,
    about: pageData ? { ...acf, ...aboutMedia } : null,
    awards: pageData ? { ...acf, awards_media: awardsMedia } : null,
    cta: pageData ? acf : null,
    products: pageData ? { ...acf, ...pmsMedia } : null,
    services: servicesData.length > 0 ? servicesData : null,
    clients: clientsData.length > 0 ? clientsData : null,
    portfolioProjects: portfolioProjects.length > 0 ? portfolioProjects : null,
    portfolioCategories: portfolioCategories.length > 0 ? portfolioCategories : null,
    contact: contactData,
    footerData: footerData,
    footerMenu: footerMenu
  };
}

export async function getMenuData() {
  try {
    const results = await Promise.allSettled([
      axiosInstance.get('/wp-json/custom/v1/menu/primary-menu').catch(err => { console.warn("Primary menu fetch error:", err.message); return null; }),
      axiosInstance.get('/wp-json/custom/v1/menu/footer-menu').catch(err => { console.warn("Footer menu fetch error:", err.message); return null; }),
      axiosInstance.get('/wp-json/wp/v2/pages?slug=footer&_fields=acf').catch(err => { console.warn("Footer ACF fetch error:", err.message); return null; })
    ]);

    const primaryMenu = results[0].status === 'fulfilled' && results[0].value ? results[0].value.data : [];
    const footerMenu = results[1].status === 'fulfilled' && results[1].value ? results[1].value.data : [];
    const footerAcf = results[2].status === 'fulfilled' && results[2].value ? results[2].value.data?.[0]?.acf : null;

    return {
      primaryMenu: Array.isArray(primaryMenu) ? primaryMenu : [],
      footerMenu: Array.isArray(footerMenu) ? footerMenu : [],
      footerAcf
    };
  } catch (error: any) {
    console.warn('Error in getMenuData:', error?.message || error);
    return {
      primaryMenu: [],
      footerMenu: [],
      footerAcf: null
    };
  }
}

export async function getPortfolioData() {
  try {
    const results = await Promise.allSettled([
      axiosInstance.get('/wp-json/wp/v2/portfolio?_embed').catch(err => { console.warn("Portfolio fetch error:", err.message); return null; }),
      axiosInstance.get('/wp-json/wp/v2/portfolio_category').catch(err => { console.warn("Portfolio category fetch error:", err.message); return null; })
    ]);

    const portfolioProjects = results[0].status === 'fulfilled' && results[0].value ? results[0].value.data : [];
    const portfolioCategories = results[1].status === 'fulfilled' && results[1].value ? results[1].value.data : [];

    return {
      projects: Array.isArray(portfolioProjects) ? portfolioProjects : [],
      categories: Array.isArray(portfolioCategories) ? portfolioCategories : []
    };
  } catch (error: any) {
    console.warn('Error in getPortfolioData:', error?.message || error);
    return {
      projects: [],
      categories: []
    };
  }
}

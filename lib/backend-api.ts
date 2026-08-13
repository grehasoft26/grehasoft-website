const BACKEND_API_BASE = (
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1'
).replace(/\/$/, '');

const WP_API_BASE = (
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.grehasoft.com'
).replace(/\/$/, '');

const ENABLE_FALLBACK = process.env.NEXT_PUBLIC_ENABLE_WORDPRESS_FALLBACK === 'true';

/**
 * Robust fetcher wrapper for NestJS backend API.
 */
async function fetchBackend<T = any>(endpoint: string, options?: RequestInit): Promise<T> {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${BACKEND_API_BASE}${cleanEndpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json',
        ...options?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`NestJS backend returned HTTP ${res.status}`);
    }

    const envelope = await res.json();
    
    // Unenvelope data from NestJS standard transform interceptor
    if (envelope && typeof envelope === 'object' && 'success' in envelope && envelope.success) {
      return envelope.data as T;
    }
    
    throw new Error('Invalid response envelope from NestJS backend');
  } catch (error: any) {
    console.error(`[NestJS Backend Error] Failed to fetch ${cleanEndpoint}:`, error.message);
    throw error;
  }
}

/**
 * Client-safe direct WordPress fetch helper used ONLY during development fallbacks.
 */
async function fetchFallbackWP<T = any>(path: string): Promise<T | null> {
  try {
    const url = `${WP_API_BASE}${path.startsWith('/') ? '' : '/'}${path}`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err: any) {
    console.warn(`[Fallback WP Fetch Error] ${path}:`, err.message);
    return null;
  }
}

/**
 * Retrieves the primary menu array.
 */
export async function getMenu(name: string = 'primary-menu'): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>(`/menus/${name}`);
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS menu ${name} failed. Falling back to direct WordPress REST...`);
      const fallbackData = await fetchFallbackWP<any[]>(`/wp-json/custom/v1/menu/${name}`);
      return Array.isArray(fallbackData) ? fallbackData : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return []; // Return clean empty list in production
  }
}

/**
 * Retrieves compiled menu and footer configuration.
 */
export async function getMenuData() {
  try {
    const data = await fetchBackend<{ primaryMenu: any[]; footerMenu: any[]; footerAcf: any }>('/menus');
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getMenuData failed. Falling back to direct WordPress REST...');
      const footerMenu = await fetchFallbackWP<any[]>('/wp-json/custom/v1/menu/footer-menu');
      const footerPage = await fetchFallbackWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf');
      return {
        primaryMenu: [],
        footerMenu: Array.isArray(footerMenu) ? footerMenu : [],
        footerAcf: footerPage?.[0]?.acf || null,
      };
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return {
      primaryMenu: [],
      footerMenu: [],
      footerAcf: null,
    };
  }
}

/**
 * Retrieves compiled homepage data.
 */
export async function getHome() {
  try {
    const data = await fetchBackend<any>('/home');
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getHome failed. Falling back to direct WordPress REST...');
      // Simple direct fallback for home page elements
      const pageDataArray = await fetchFallbackWP<any[]>('/wp-json/wp/v2/pages?slug=home&_fields=acf,about_media,awards_media,pms_media,yoast_head_json');
      const slidesData = await fetchFallbackWP<any[]>('/wp-json/wp/v2/hero-slide');
      const servicesData = await fetchFallbackWP<any[]>('/wp-json/wp/v2/ourservices?_embed');
      const clientsData = await fetchFallbackWP<any[]>('/wp-json/wp/v2/clients?per_page=100');
      const portfolioProjects = await fetchFallbackWP<any[]>('/wp-json/wp/v2/portfolio?_embed');
      const portfolioCategories = await fetchFallbackWP<any[]>('/wp-json/wp/v2/portfolio_category');
      const contactPage = await fetchFallbackWP<any[]>('/wp-json/wp/v2/contact');
      const footerPage = await fetchFallbackWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf');
      const footerMenu = await fetchFallbackWP<any[]>('/wp-json/custom/v1/menu/footer-menu');

      const pageData = pageDataArray?.[0] || null;
      const acf = pageData?.acf || {};
      const aboutMedia = pageData?.about_media || {};
      const awardsMedia = pageData?.awards_media || {};
      const pmsMedia = pageData?.pms_media || {};
      const yoastHeadJson = pageData?.yoast_head_json || null;

      const slides = Array.isArray(slidesData) ? slidesData.map((post: any) => ({
        title: post.acf?.slide_title || '',
        video: post.acf?.slide_video || '',
        thumbnail: post.acf?.slide_thumbnail || '',
        label: post.acf?.slide_label || '',
        description: post.acf?.slide_description || '',
        slide_duration: Number(post.acf?.slide_duration) || 11,
      })) : [];

      return {
        hero: slides,
        schemaJson: acf?.schema_json || '',
        about: pageData ? { ...acf, ...aboutMedia } : null,
        awards: pageData ? { ...acf, awards_media: awardsMedia } : null,
        cta: pageData ? acf : null,
        products: pageData ? { ...acf, ...pmsMedia } : null,
        services: Array.isArray(servicesData) ? servicesData : null,
        clients: Array.isArray(clientsData) ? clientsData : null,
        portfolioProjects: Array.isArray(portfolioProjects) ? portfolioProjects : null,
        portfolioCategories: Array.isArray(portfolioCategories) ? portfolioCategories : null,
        contact: contactPage?.[0]?.acf || null,
        footerData: footerPage?.[0]?.acf || null,
        footerMenu: Array.isArray(footerMenu) ? footerMenu : [],
        yoastMeta: yoastHeadJson,
      };
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    throw error;
  }
}

/**
 * Retrieves portfolio projects array.
 */
export async function getPortfolio(): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>('/portfolio');
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getPortfolio failed. Falling back to direct WordPress REST...');
      const fallback = await fetchFallbackWP<any[]>('/wp-json/wp/v2/portfolio?_embed');
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves portfolio categories array.
 */
export async function getPortfolioCategories(): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>('/portfolio/categories');
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getPortfolioCategories failed. Falling back to direct WordPress REST...');
      const fallback = await fetchFallbackWP<any[]>('/wp-json/wp/v2/portfolio_category');
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves a single portfolio project by slug (returns array).
 */
export async function getPortfolioProject(slug: string): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>(`/portfolio/${slug}`);
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS getPortfolioProject failed for ${slug}. Falling back to direct WordPress REST...`);
      const fallback = await fetchFallbackWP<any[]>(`/wp-json/wp/v2/portfolio?slug=${slug}&_embed`);
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves project gallery items.
 */
export async function getProjectGallery(): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>('/project-gallery');
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getProjectGallery failed. Falling back to direct WordPress REST...');
      const fallback = await fetchFallbackWP<any[]>(
        '/wp-json/wp/v2/project-gallery?_embed&per_page=100&orderby=menu_order&order=asc&_fields=id,title,slug,acf,yoast_head_json,_embedded'
      );
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves list of categories.
 */
export async function getCategories(): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>('/categories');
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getCategories failed. Falling back to direct WordPress REST...');
      const fallback = await fetchFallbackWP<any[]>('/wp-json/wp/v2/categories?per_page=100');
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves paginated, filtered, and searched posts.
 */
export async function getPosts(options?: {
  page?: number;
  perPage?: number;
  search?: string;
  category?: string;
  categories?: string;
}): Promise<{ posts: any[]; totalPages: number; totalPosts: number }> {
  const page = options?.page || 1;
  const perPage = options?.perPage || 10;
  const search = options?.search || '';
  const category = options?.category || '';
  const categories = options?.categories || '';

  try {
    const data = await fetchBackend<{ posts: any[]; totalPages: number; totalPosts: number }>(
      `/posts?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}&categories=${encodeURIComponent(categories)}`
    );
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getPosts failed. Falling back to direct WordPress REST...');
      
      let resolvedCategory = category;
      if (category && isNaN(Number(category))) {
        const cats = await getCategories();
        const found = cats.find((c: any) => c.slug === category);
        resolvedCategory = found ? String(found.id) : '';
      }

      let path = `/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`;
      if (search) {
        path += `&search=${encodeURIComponent(search)}`;
      }
      const targetCategories = [resolvedCategory, categories].filter(Boolean).join(',');
      if (targetCategories) {
        path += `&categories=${targetCategories}`;
      }

      const res = await fetch(`${WP_API_BASE}${path}`);
      if (res.ok) {
        const posts = await res.json();
        const totalPages = Number(res.headers.get('x-wp-totalpages')) || 1;
        const totalPosts = Number(res.headers.get('x-wp-total')) || posts.length;
        return { posts, totalPages, totalPosts };
      }
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return { posts: [], totalPages: 1, totalPosts: 0 };
  }
}

/**
 * Retrieves a single post by slug (wrapped in array [post] for frontend backward-compatibility).
 */
export async function getPost(slug: string): Promise<any[]> {
  try {
    const post = await fetchBackend<any | null>(`/posts/${slug}`);
    return post ? [post] : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS getPost failed for ${slug}. Falling back to direct WordPress REST...`);
      const fallback = await fetchFallbackWP<any[]>(`/wp-json/wp/v2/posts?slug=${slug}&_embed`);
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves the services CPT list.
 */
export async function getServicesList(): Promise<any[]> {
  try {
    const data = await fetchBackend<any[]>('/services');
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getServicesList failed. Falling back to direct WordPress REST...');
      const fallback = await fetchFallbackWP<any[]>('/wp-json/wp/v2/services?_embed&per_page=100');
      return Array.isArray(fallback) ? fallback : [];
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return [];
  }
}

/**
 * Retrieves a single service CPT by slug.
 */
export async function getService(slug: string): Promise<any | null> {
  try {
    const data = await fetchBackend<any | null>(`/services/${slug}`);
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS getService failed for ${slug}. Falling back to direct WordPress REST...`);
      const fallback = await fetchFallbackWP<any[]>(`/wp-json/wp/v2/services?slug=${slug}&_embed`);
      const service = Array.isArray(fallback) && fallback.length > 0 ? fallback[0] : null;
      if (service) {
        const heroImageId = service.acf?.hero_image;
        if (heroImageId && !isNaN(Number(heroImageId))) {
          const media = await fetchFallbackWP<any>(`/wp-json/wp/v2/media/${heroImageId}`);
          service.heroImageUrl = media?.source_url || '';
        } else {
          service.heroImageUrl = '';
        }
      }
      return service;
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Retrieves a single child service CPT by parent and child slugs.
 */
export async function getServiceChild(parentSlug: string, childSlug: string): Promise<any | null> {
  try {
    const data = await fetchBackend<any | null>(`/services/${parentSlug}/${childSlug}`);
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS getServiceChild failed for ${parentSlug}/${childSlug}. Falling back to direct WordPress REST...`);
      const fallback = await fetchFallbackWP<any[]>('/wp-json/wp/v2/services?_embed&per_page=100');
      if (Array.isArray(fallback)) {
        const service = fallback.find(
          (item: any) =>
            item?.acf?.custom_slug === childSlug &&
            item?.acf?.parent_slug === parentSlug
        );
        if (service) {
          const heroImageId = service.acf?.hero_image;
          if (heroImageId && !isNaN(Number(heroImageId))) {
            const media = await fetchFallbackWP<any>(`/wp-json/wp/v2/media/${heroImageId}`);
            service.heroImageUrl = media?.source_url || '';
          } else {
            service.heroImageUrl = '';
          }
        }
        return service;
      }
      return null;
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Retrieves a generic WordPress page by slug or numeric ID.
 */
export async function getPage(slug: string): Promise<any | null> {
  try {
    const data = await fetchBackend<any | null>(`/pages/${slug}`);
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn(`[Fallback Active] NestJS getPage failed for ${slug}. Falling back to direct WordPress REST...`);
      const isNumeric = /^\d+$/.test(slug);
      const path = isNumeric ? `/wp-json/wp/v2/pages/${slug}` : `/wp-json/wp/v2/pages?slug=${slug}`;
      const fallback = await fetchFallbackWP<any>(path);
      return Array.isArray(fallback) && fallback.length > 0 ? fallback[0] : fallback;
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Retrieves contact data from NestJS middleware.
 */
export async function getContact(): Promise<any> {
  try {
    const data = await fetchBackend<any>('/contact');
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getContact failed. Falling back to direct WordPress REST...');
      return await fetchFallbackWP<any>('/wp-json/wp/v2/contact');
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Retrieves clients data from NestJS middleware.
 */
export async function getClients(): Promise<any> {
  try {
    const data = await fetchBackend<any>('/clients');
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getClients failed. Falling back to direct WordPress REST...');
      return await fetchFallbackWP<any>('/wp-json/wp/v2/clients?per_page=100');
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Retrieves ourservices data from NestJS middleware.
 */
export async function getOurServices(): Promise<any> {
  try {
    const data = await fetchBackend<any>('/our-services');
    return data;
  } catch (error: any) {
    if (ENABLE_FALLBACK) {
      console.warn('[Fallback Active] NestJS getOurServices failed. Falling back to direct WordPress REST...');
      return await fetchFallbackWP<any>('/wp-json/wp/v2/ourservices?_embed');
    }
    console.error('[NestJS Backend Failure] Direct WordPress fallback disabled in production.');
    return null;
  }
}

/**
 * Submits the contact form to the NestJS middleware backend.
 */
export async function submitContactForm(payload: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): Promise<any> {
  return await fetchBackend('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

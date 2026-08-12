import { cache } from 'react';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { HomeData, Slide, ProjectGalleryItem } from '@/types/wordpress';
import { Logo } from '@/types/logo';

const API_BASE = (process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.grehasoft.com').replace(/\/$/, '');

const CACHE_DIR = path.join(process.cwd(), 'node_modules', '.cache', 'wp-api');
const CACHE_TTL_MS = 60 * 1000; // 60s freshness TTL for runtime ISR

// Server-side In-memory cache map (retained across all page renders in the Node.js process)
const memoryCache = new Map<string, { data: any; timestamp: number }>();

// In-memory in-flight request deduplication map (prevents concurrent duplicate network calls)
const inFlightRequests = new Map<string, Promise<any>>();

// Bounded Concurrency queue: limits simultaneous unique outbound network requests to 6
const MAX_CONCURRENT_REQUESTS = 6;
let activeRequests = 0;
const waitQueue: Array<() => void> = [];

async function acquireSlot(): Promise<void> {
  if (activeRequests < MAX_CONCURRENT_REQUESTS) {
    activeRequests++;
    return;
  }
  return new Promise<void>((resolve) => {
    waitQueue.push(() => {
      activeRequests++;
      resolve();
    });
  });
}

function releaseSlot(): void {
  activeRequests--;
  if (waitQueue.length > 0) {
    const next = waitQueue.shift();
    if (next) next();
  }
}

function getCached<T>(key: string, ignoreTTL = false): T | null {
  try {
    // 1. Check in-memory cache
    const inMem = memoryCache.get(key);
    if (inMem) {
      return inMem.data as T;
    }

    // 2. Check filesystem cache
    const hash = crypto.createHash('md5').update(key).digest('hex');
    const filePath = path.join(CACHE_DIR, `${hash}.json`);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(raw) as T;
      memoryCache.set(key, { data: parsed, timestamp: stats.mtimeMs });
      return parsed;
    }
  } catch {
    // Ignore cache read errors
  }
  return null;
}

function setCached<T>(key: string, data: T): void {
  try {
    memoryCache.set(key, { data, timestamp: Date.now() });
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
    const hash = crypto.createHash('md5').update(key).digest('hex');
    const filePath = path.join(CACHE_DIR, `${hash}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8');
  } catch {
    // Ignore cache write errors
  }
}

export async function fetchWP<T = any>(endpoint: string, options?: RequestInit, retries = 1): Promise<T | null> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  // 1. MEMORY CACHE: Instant synchronous hit (0.0ms, 0 queue slots consumed)
  const memCached = memoryCache.get(url);
  if (memCached) {
    return memCached.data as T;
  }

  // 2. DISK CACHE: Instant filesystem hit (<0.5ms, 0 queue slots consumed)
  const diskCached = getCached<T>(url);
  if (diskCached !== null) {
    return diskCached;
  }

  // 3. IN-FLIGHT DEDUPLICATION: Share in-progress network request (0 queue slots consumed)
  if (inFlightRequests.has(url)) {
    return inFlightRequests.get(url) as Promise<T | null>;
  }

  // 4. CONCURRENCY QUEUE: Only unique uncached requests enter the queue
  const fetchPromise = (async (): Promise<T | null> => {
    await acquireSlot();
    try {
      // Re-check cache after queue wait in case another worker populated it
      const freshCache = getCached<T>(url);
      if (freshCache !== null) {
        return freshCache;
      }

      for (let attempt = 0; attempt <= retries; attempt++) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout per attempt

          const res = await fetch(url, {
            ...options,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Next.js-Server',
              'Accept': 'application/json',
              'Connection': 'keep-alive',
              ...options?.headers,
            },
            signal: options?.signal || controller.signal,
            next: { revalidate: 60, ...options?.next },
          });

          clearTimeout(timeoutId);

          if (!res.ok) {
            if (attempt < retries && (res.status === 429 || res.status >= 500)) {
              const delay = 600 + Math.random() * 400;
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }

            const errorBody = await res.text().catch(() => '');
            console.warn(
              `[fetchWP] HTTP ${res.status} for ${endpoint}\n`,
              errorBody.slice(0, 300)
            );
            return getCached<T>(url, true);
          }

          const json = await res.json();
          if (json !== null && json !== undefined) {
            setCached(url, json);
          }
          return json;
        } catch (error: any) {
          // Never swallow Next.js internal control-flow exceptions
          if (
            error?.digest?.startsWith('NEXT_') ||
            error?.message?.includes('NEXT_') ||
            error?.name === 'DynamicServerError'
          ) {
            throw error;
          }

          const errCode = error?.code || error?.cause?.code || error?.name || 'UNKNOWN';
          const errCause = error?.cause?.message || (typeof error?.cause === 'object' ? JSON.stringify(error.cause) : String(error?.cause || ''));

          if (attempt < retries) {
            const delay = 600 + Math.random() * 400;
            console.warn(`[fetchWP] Retry ${attempt + 1}/${retries} for ${endpoint} after: [${errCode}] ${error?.message} (Cause: ${errCause})`);
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
          console.warn(`[fetchWP] Network error for ${endpoint}: [${errCode}] ${error?.message || error} (Cause: ${errCause}) -> serving cached fallback`);
          return getCached<T>(url, true);
        }
      }
      return getCached<T>(url, true);
    } finally {
      releaseSlot();
      inFlightRequests.delete(url);
    }
  })();

  inFlightRequests.set(url, fetchPromise);
  return fetchPromise;
}

export const getHomeData = cache(async (): Promise<HomeData> => {
  const [
    pageDataRes,
    slidesDataRes,
    servicesDataRes,
    clientsDataRes,
    portfolioProjectsRes,
    portfolioCategoriesRes,
    contactDataRes,
    footerDataRes,
    footerMenuRes,
  ] = await Promise.allSettled([
    fetchWP<any[]>('/wp-json/wp/v2/pages?slug=home&_fields=acf,about_media,awards_media,pms_media'),
    fetchWP<any[]>('/wp-json/wp/v2/hero-slide'),
    fetchWP<any[]>('/wp-json/wp/v2/ourservices?_embed'),
    fetchWP<any[]>('/wp-json/wp/v2/clients?per_page=100'),
    fetchWP<any[]>('/wp-json/wp/v2/portfolio?_embed'),
    fetchWP<any[]>('/wp-json/wp/v2/portfolio_category'),
    fetchWP<any[]>('/wp-json/wp/v2/contact'),
    fetchWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf'),
    fetchWP<any[]>('/wp-json/custom/v1/menu/footer-menu'),
  ]);

  const pageData = pageDataRes.status === 'fulfilled' && pageDataRes.value ? pageDataRes.value[0] || null : null;
  const slidesData = slidesDataRes.status === 'fulfilled' && Array.isArray(slidesDataRes.value) ? slidesDataRes.value : [];
  const servicesData = servicesDataRes.status === 'fulfilled' && Array.isArray(servicesDataRes.value) ? servicesDataRes.value : [];
  const clientsData = clientsDataRes.status === 'fulfilled' && Array.isArray(clientsDataRes.value) ? clientsDataRes.value : [];
  const portfolioProjects = portfolioProjectsRes.status === 'fulfilled' && Array.isArray(portfolioProjectsRes.value) ? portfolioProjectsRes.value : [];
  const portfolioCategories = portfolioCategoriesRes.status === 'fulfilled' && Array.isArray(portfolioCategoriesRes.value) ? portfolioCategoriesRes.value : [];
  const contactData = contactDataRes.status === 'fulfilled' && contactDataRes.value ? contactDataRes.value[0]?.acf || null : null;
  const footerData = footerDataRes.status === 'fulfilled' && footerDataRes.value ? footerDataRes.value[0]?.acf || null : null;
  const footerMenu = footerMenuRes.status === 'fulfilled' && Array.isArray(footerMenuRes.value) ? footerMenuRes.value : [];

  const acf = pageData?.acf || {};
  const aboutMedia = pageData?.about_media || {};
  const awardsMedia = pageData?.awards_media || {};
  const pmsMedia = pageData?.pms_media || {};

  const slides: Slide[] = slidesData.map((post: any) => ({
    title: post.acf?.slide_title || "",
    video: post.acf?.slide_video || "",
    thumbnail: post.acf?.slide_thumbnail || "",
    label: post.acf?.slide_label || "",
    description: post.acf?.slide_description || "",
    slide_duration: Number(post.acf?.slide_duration) || 11,
  }));

  return {
    hero: slides,
    schemaJson: acf?.schema_json || "",
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
    footerMenu: footerMenu,
  };
});

export const getMenuData = cache(async () => {
  try {
    const [footerMenuRes, footerAcfRes] = await Promise.allSettled([
      fetchWP<any[]>('/wp-json/custom/v1/menu/footer-menu'),
      fetchWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf'),
    ]);

    const footerMenu = footerMenuRes.status === 'fulfilled' && Array.isArray(footerMenuRes.value) ? footerMenuRes.value : [];
    const footerAcf = footerAcfRes.status === 'fulfilled' && footerAcfRes.value ? footerAcfRes.value[0]?.acf || null : null;

    return {
      primaryMenu: [],
      footerMenu,
      footerAcf,
    };
  } catch (error: any) {
    console.warn('Error in getMenuData:', error?.message || error);
    return {
      primaryMenu: [],
      footerMenu: [],
      footerAcf: null,
    };
  }
});

export const getPortfolioData = cache(async () => {
  try {
    const [portfolioProjectsRes, portfolioCategoriesRes] = await Promise.allSettled([
      fetchWP<any[]>('/wp-json/wp/v2/portfolio?_embed'),
      fetchWP<any[]>('/wp-json/wp/v2/portfolio_category'),
    ]);

    const portfolioProjects = portfolioProjectsRes.status === 'fulfilled' && Array.isArray(portfolioProjectsRes.value) ? portfolioProjectsRes.value : [];
    const portfolioCategories = portfolioCategoriesRes.status === 'fulfilled' && Array.isArray(portfolioCategoriesRes.value) ? portfolioCategoriesRes.value : [];

    return {
      projects: portfolioProjects,
      categories: portfolioCategories,
    };
  } catch (error: any) {
    console.warn('Error in getPortfolioData:', error?.message || error);
    return {
      projects: [],
      categories: [],
    };
  }
});

export const getProjectGallery = cache(async (): Promise<ProjectGalleryItem[]> => {
  try {
    const data = await fetchWP<ProjectGalleryItem[]>(
      '/wp-json/wp/v2/project-gallery?_embed&per_page=100&orderby=menu_order&order=asc&_fields=id,title,slug,acf,yoast_head_json,_embedded'
    );
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    console.warn('Error in getProjectGallery:', error?.message || error);
    return [];
  }
});

export const getLogoGallery = cache(async (): Promise<Logo[]> => {
  try {
    const data = await fetchWP<any[]>(
      '/wp-json/wp/v2/logo_gallery?_embed&per_page=100&orderby=menu_order&order=asc'
    );
    if (!Array.isArray(data)) return [];
    return data.map((post) => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      const imageUrl = featuredMedia?.source_url || '/images/fallback.jpg';
      return {
        id: post.id,
        title: post.title?.rendered?.replace(/<[^>]+>/g, '') || '',
        image: imageUrl,
      };
    });
  } catch (error: any) {
    console.warn('Error in getLogoGallery:', error?.message || error);
    return [];
  }
});

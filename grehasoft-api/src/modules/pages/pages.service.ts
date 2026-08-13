import { Injectable, Logger } from '@nestjs/common';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';
import { CacheService } from '../wordpress-client/cache.service';

@Injectable()
export class PagesService {
  private readonly logger = new Logger(PagesService.name);
  private readonly inFlightRequests = new Map<string, Promise<any>>();

  constructor(
    private readonly wpClient: WordPressClientService,
    private readonly cacheService: CacheService,
  ) {}

  /**
   * Retrieves a generic page by slug or numeric ID.
   */
  async getPage(slug: string): Promise<any | null> {
    const isNumeric = /^\d+$/.test(slug);
    const cacheKey = isNumeric ? `page_id_${slug}` : `page_${slug}`;

    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug(`Sharing in-flight page promise for: ${slug}`);
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        let pageData: any = null;

        if (isNumeric) {
          // Fetch single page by numeric ID
          pageData = await this.wpClient.fetchWP<any>(`/wp-json/wp/v2/pages/${slug}`);
        } else {
          // Fetch page list by string slug
          const data = await this.wpClient.fetchWP<any[]>(`/wp-json/wp/v2/pages?slug=${slug}`);
          pageData = Array.isArray(data) && data.length > 0 ? data[0] : null;
        }

        if (slug === 'brand-story' && pageData?.acf) {
          const acf = pageData.acf;
          if (acf.story_image && !isNaN(Number(acf.story_image))) {
            const media = await this.wpClient.fetchWP<any>(`/wp-json/wp/v2/media/${acf.story_image}`);
            pageData.storyImageUrl = media?.source_url || '';
          }
          if (acf.story_pdf && !isNaN(Number(acf.story_pdf))) {
            const media = await this.wpClient.fetchWP<any>(`/wp-json/wp/v2/media/${acf.story_pdf}`);
            pageData.storyPdfUrl = media?.source_url || '';
          }
        }

        if (slug === 'products' && pageData?.acf) {
          const acf = pageData.acf;
          const adv = acf.advantage_section;
          if (adv && adv.bg_image && !isNaN(Number(adv.bg_image))) {
            const media = await this.wpClient.fetchWP<any>(`/wp-json/wp/v2/media/${adv.bg_image}`);
            adv.bgImageUrl = media?.source_url || '';
          }
        }

        if (pageData) {
          this.cacheService.set(cacheKey, pageData, 600); // 10 minutes cache
        }
        return pageData;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves contact data.
   */
  async getContact(): Promise<any> {
    const cacheKey = 'contact_data';
    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug('Sharing in-flight contact data promise');
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/contact');
        if (data) {
          this.cacheService.set(cacheKey, data, 600); // 10 minutes cache
        }
        return data;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves clients list.
   */
  async getClients(): Promise<any> {
    const cacheKey = 'clients_data';
    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug('Sharing in-flight clients data promise');
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/clients?per_page=100');
        if (data) {
          this.cacheService.set(cacheKey, data, 600); // 10 minutes cache
        }
        return data;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves "ourservices" CPT list for StickyScrollServices.
   */
  async getOurServices(): Promise<any> {
    const cacheKey = 'ourservices_data';
    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug('Sharing in-flight ourservices data promise');
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/ourservices?_embed');
        if (data) {
          this.cacheService.set(cacheKey, data, 600); // 10 minutes cache
        }
        return data;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';
import { CacheService } from '../wordpress-client/cache.service';

@Injectable()
export class ServicesService {
  private readonly logger = new Logger(ServicesService.name);
  private readonly inFlightRequests = new Map<string, Promise<any>>();

  constructor(
    private readonly wpClient: WordPressClientService,
    private readonly cacheService: CacheService,
  ) {}

  /**
   * Helper to fetch a single media source URL from WordPress (cached for 10 minutes).
   */
  async getMediaUrl(mediaId: number): Promise<string> {
    const cacheKey = `media_url_id_${mediaId}`;
    const cached = this.cacheService.get<string>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const media = await this.wpClient.fetchWP<any>(`/wp-json/wp/v2/media/${mediaId}`);
        const url = media?.source_url || '';
        this.cacheService.set(cacheKey, url, 600); // 10 minutes cache
        return url;
      } catch (err: any) {
        this.logger.warn(`Failed to resolve media ID ${mediaId}: ${err.message}`);
        return '';
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves all services.
   */
  async getServices(): Promise<any[]> {
    const cacheKey = 'services_list_all';
    const cached = this.cacheService.get<any[]>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/services?_embed&per_page=100');
        const services = Array.isArray(data) ? data : [];
        this.cacheService.set(cacheKey, services, 600); // 10 minutes cache
        return services;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves a single service by parent slug.
   */
  async getServiceBySlug(slug: string): Promise<any | null> {
    const cacheKey = `services_slug_${slug}`;
    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug(`Sharing in-flight parent service promise for: ${slug}`);
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>(`/wp-json/wp/v2/services?slug=${slug}&_embed`);
        const service = Array.isArray(data) && data.length > 0 ? data[0] : null;

        if (service) {
          const heroImageId = service.acf?.hero_image;
          if (heroImageId && !isNaN(Number(heroImageId))) {
            service.heroImageUrl = await this.getMediaUrl(Number(heroImageId));
          } else {
            service.heroImageUrl = '';
          }
          this.cacheService.set(cacheKey, service, 600); // 10 minutes cache
        }
        return service;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }

  /**
   * Retrieves a single child service by parent and child slugs.
   */
  async getServiceChild(parentSlug: string, childSlug: string): Promise<any | null> {
    const cacheKey = `services_child_${parentSlug}_${childSlug}`;
    const cached = this.cacheService.get<any>(cacheKey);
    if (cached !== null) return cached;

    if (this.inFlightRequests.has(cacheKey)) {
      this.logger.debug(`Sharing in-flight child service promise for: ${parentSlug}/${childSlug}`);
      return this.inFlightRequests.get(cacheKey);
    }

    const promise = (async () => {
      try {
        // Fetch all services and resolve child
        const allServices = await this.getServices();
        const normalize = (s: string) => (s || '').replace(/^\/|\/$/g, '').toLowerCase().trim();
        const service = allServices.find((item: any) => {
          const itemChild = normalize(item?.acf?.custom_slug);
          const itemParent = normalize(item?.acf?.parent_slug);
          return itemChild === normalize(childSlug) && itemParent === normalize(parentSlug);
        });

        if (service) {
          // Clone service to prevent mutating cached services array
          const clonedService = JSON.parse(JSON.stringify(service));
          const heroImageId = clonedService.acf?.hero_image;
          if (heroImageId && !isNaN(Number(heroImageId))) {
            clonedService.heroImageUrl = await this.getMediaUrl(Number(heroImageId));
          } else {
            clonedService.heroImageUrl = '';
          }
          this.cacheService.set(cacheKey, clonedService, 600); // 10 minutes cache
          return clonedService;
        }
        return null;
      } finally {
        this.inFlightRequests.delete(cacheKey);
      }
    })();

    this.inFlightRequests.set(cacheKey, promise);
    return promise;
  }
}

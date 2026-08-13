import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';
import { CacheService } from '../wordpress-client/cache.service';

@Injectable()
export class HomeService {
  private readonly logger = new Logger(HomeService.name);
  private inFlightHome: Promise<any> | null = null;

  constructor(
    private readonly configService: ConfigService,
    private readonly wpClient: WordPressClientService,
    private readonly cacheService: CacheService,
  ) {}

  /**
   * Sequentially aggregates and caches all homepage CPT/ACF data.
   * Concurrent duplicate hits will share the same active promise.
   */
  async getHomeData(): Promise<any> {
    const cacheKey = 'grehasoft_home_payload';

    // 1. Memory Cache Lookup
    const cached = this.cacheService.get(cacheKey);
    if (cached !== null) {
      return cached;
    }

    // 2. Share Active In-flight Promise
    if (this.inFlightHome !== null) {
      this.logger.log('Sharing in-flight homepage aggregation promise');
      return this.inFlightHome;
    }

    this.inFlightHome = (async () => {
      this.logger.log('Starting sequential homepage resources aggregation...');
      try {
        // Fetch 9 endpoints sequentially to preserve Hostinger connection limits
        
        // 1. Home Page ACF & Yoast Meta (resolved dynamically by slug instead of hardcoded post ID)
        const pageDataArray = await this.wpClient.fetchWP<any[]>(
          '/wp-json/wp/v2/pages?slug=home&_fields=acf,about_media,awards_media,pms_media,yoast_head_json',
        );
        await this.applySpacerDelay();

        // 2. Hero Slides CPT
        const slidesData = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/hero-slide');
        await this.applySpacerDelay();

        // 3. Our Services CPT
        const servicesData = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/ourservices?_embed');
        await this.applySpacerDelay();

        // 4. Clients CPT
        const clientsData = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/clients?per_page=100');
        await this.applySpacerDelay();

        // 5. Portfolio CPT
        const portfolioProjects = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/portfolio?_embed');
        await this.applySpacerDelay();

        // 6. Portfolio Categories Taxonomy
        const portfolioCategories = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/portfolio_category');
        await this.applySpacerDelay();

        // 7. Contact Info ACF Page
        const contactPage = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/contact');
        await this.applySpacerDelay();

        // 8. Footer Page ACF Page
        const footerPage = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf');
        await this.applySpacerDelay();

        // 9. Footer Menu structure
        const footerMenu = await this.wpClient.fetchWP<any[]>('/wp-json/custom/v1/menu/footer-menu');

        // Data Transformation & Structuring to match Next.js expectations
        const pageData = pageDataArray?.[0] || null;
        const acf = pageData?.acf || {};
        const aboutMedia = pageData?.about_media || {};
        const awardsMedia = pageData?.awards_media || {};
        const pmsMedia = pageData?.pms_media || {};
        const yoastHeadJson = pageData?.yoast_head_json || null;

        const slides = slidesData.map((post: any) => ({
          title: post.acf?.slide_title || '',
          video: post.acf?.slide_video || '',
          thumbnail: post.acf?.slide_thumbnail || '',
          label: post.acf?.slide_label || '',
          description: post.acf?.slide_description || '',
          slide_duration: Number(post.acf?.slide_duration) || 11,
        }));

        const payload = {
          hero: slides,
          schemaJson: acf?.schema_json || '',
          about: pageData ? { ...acf, ...aboutMedia } : null,
          awards: pageData ? { ...acf, awards_media: awardsMedia } : null,
          cta: pageData ? acf : null,
          products: pageData ? { ...acf, ...pmsMedia } : null,
          services: servicesData.length > 0 ? servicesData : null,
          clients: clientsData.length > 0 ? clientsData : null,
          portfolioProjects: portfolioProjects.length > 0 ? portfolioProjects : null,
          portfolioCategories: portfolioCategories.length > 0 ? portfolioCategories : null,
          contact: contactPage?.[0]?.acf || null,
          footerData: footerPage?.[0]?.acf || null,
          footerMenu: footerMenu,
          yoastMeta: yoastHeadJson, // Included dynamically via slug resolving
        };

        const ttl = this.configService.get<number>('cache.ttlHome') || 300;
        this.cacheService.set(cacheKey, payload, ttl);
        this.logger.log('Homepage aggregation successfully built and cached.');
        return payload;

      } catch (err: any) {
        this.logger.error(`Homepage aggregation failed: ${err.message}`);
        throw err;
      } finally {
        this.inFlightHome = null;
      }
    })();

    return this.inFlightHome;
  }

  private async applySpacerDelay(): Promise<void> {
    const delayMs = this.configService.get<number>('wordpress.requestDelayMs') || 100;
    if (delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

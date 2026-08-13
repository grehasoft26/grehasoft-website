import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';

@Injectable()
export class PortfolioService {
  private readonly logger = new Logger(PortfolioService.name);

  constructor(
    private readonly wpClient: WordPressClientService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Retrieves all portfolio projects.
   */
  async getPortfolioProjects(): Promise<any[]> {
    this.logger.log('Fetching portfolio projects from WordPress...');
    const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/portfolio?_embed');
    return Array.isArray(data) ? data : [];
  }

  /**
   * Retrieves all portfolio categories.
   */
  async getPortfolioCategories(): Promise<any[]> {
    this.logger.log('Fetching portfolio categories from WordPress...');
    const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/portfolio_category');
    return Array.isArray(data) ? data : [];
  }

  /**
   * Retrieves a single portfolio project by slug.
   * Returns an array containing the single project, matching the WordPress query payload shape
   * to ensure full compatibility with the existing Next.js frontend detail page.
   */
  async getPortfolioProjectBySlug(slug: string): Promise<any[]> {
    this.logger.log(`Fetching single portfolio project by slug: ${slug}`);
    const data = await this.wpClient.fetchWP<any[]>(`/wp-json/wp/v2/portfolio?slug=${slug}&_embed`);
    return Array.isArray(data) ? data : [];
  }

  /**
   * Retrieves the project gallery items.
   */
  async getProjectGallery(): Promise<any[]> {
    this.logger.log('Fetching project gallery items from WordPress...');
    const data = await this.wpClient.fetchWP<any[]>(
      '/wp-json/wp/v2/project-gallery?_embed&per_page=100&orderby=menu_order&order=asc&_fields=id,title,slug,acf,yoast_head_json,_embedded',
    );
    return Array.isArray(data) ? data : [];
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';

@Injectable()
export class MenusService {
  private readonly logger = new Logger(MenusService.name);

  constructor(private readonly wpClient: WordPressClientService) {}

  /**
   * Retrieves a named menu tree structure from WordPress.
   */
  async getMenuByName(name: string): Promise<any[]> {
    this.logger.log(`Fetching menu structure by name: ${name}`);
    const data = await this.wpClient.fetchWP<any[]>(`/wp-json/custom/v1/menu/${name}`);
    return Array.isArray(data) ? data : [];
  }

  /**
   * Compiles the unified getMenuData response structure expected by Next.js.
   */
  async getUnifiedMenuData(): Promise<{ primaryMenu: any[]; footerMenu: any[]; footerAcf: any }> {
    this.logger.log('Compiling composite getMenuData payloads...');
    
    // Fetch footer menu and footer ACF page sequentially or concurrently managed by WordPressClientService
    const footerMenu = await this.getMenuByName('footer-menu');
    
    let footerAcf = null;
    try {
      const footerPage = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/pages?slug=footer&_fields=acf');
      footerAcf = footerPage?.[0]?.acf || null;
    } catch (err: any) {
      this.logger.warn(`Failed to retrieve footer ACF page settings: ${err.message}`);
    }

    return {
      primaryMenu: [], // The existing Next.js layout.tsx fetches primaryMenu directly, keeping this array empty per lib/api.ts
      footerMenu,
      footerAcf,
    };
  }
}

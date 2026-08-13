import {
  Controller,
  Get,
  Query,
  ForbiddenException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WordPressClientService } from './wordpress-client.service';
import { WordPressDiagnosticSummary } from './interfaces/wordpress.interfaces';

@Controller('wordpress')
export class WordPressClientController {
  private readonly logger = new Logger(WordPressClientController.name);

  constructor(
    private readonly wpClientService: WordPressClientService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Diagnostic test of all 12 primary WordPress endpoints.
   * Provides isolated latency, status, and payload health.
   */
  @Get('test')
  async testWordPressConnection(): Promise<WordPressDiagnosticSummary> {
    this.logger.log('Executing complete WordPress endpoints diagnostic test...');
    return this.wpClientService.testConnection();
  }

  /**
   * Development-only debug endpoint for querying custom WordPress paths.
   * Blocked automatically in production environments to prevent proxy misuse.
   */
  @Get('endpoint')
  async queryCustomEndpoint(@Query('path') path: string) {
    const isProduction = this.configService.get<string>('nodeEnv') === 'production';

    if (isProduction) {
      this.logger.warn('Blocked attempt to access /wordpress/endpoint in production mode');
      throw new ForbiddenException(
        'Dynamic WordPress endpoint querying is strictly disabled in production environments.',
      );
    }

    if (!path || typeof path !== 'string') {
      throw new BadRequestException('Query parameter "path" is required (e.g. ?path=/wp-json/wp/v2/pages)');
    }

    // Safety checks against path traversal or SSRF to external hosts
    if (path.startsWith('http://') || path.startsWith('https://')) {
      throw new BadRequestException('Absolute URLs are not permitted. Provide a relative path starting with /');
    }

    return this.wpClientService.fetchWP(path);
  }
}

import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from './cache.service';
import { WordPressDiagnosticSummary, EndpointDiagnosticResult } from './interfaces/wordpress.interfaces';

@Injectable()
export class WordPressClientService {
  private readonly logger = new Logger(WordPressClientService.name);
  private readonly baseUrl: string;
  private readonly maxConcurrency: number;
  private readonly requestDelayMs: number;

  // In-flight request deduplication map
  private readonly inFlightRequests = new Map<string, Promise<any>>();

  // Bounded Concurrency state
  private activeRequests = 0;
  private readonly waitQueue: Array<() => void> = [];

  constructor(
    private readonly configService: ConfigService,
    private readonly cacheService: CacheService,
  ) {
    this.baseUrl = this.configService.get<string>('wordpress.baseUrl') || 'https://cms.grehasoft.com';
    this.maxConcurrency = this.configService.get<number>('wordpress.maxConcurrency') || 1;
    this.requestDelayMs = this.configService.get<number>('wordpress.requestDelayMs') || 100;
    this.logger.log(`Initialized WordPressClientService with base URL: ${this.baseUrl}`);
    this.logger.log(`Throttling settings: Max Concurrency = ${this.maxConcurrency}, Request Delay = ${this.requestDelayMs}ms`);
  }

  /**
   * Resolves cache TTL (in seconds) dynamically based on the endpoint path.
   */
  private resolveTtl(endpoint: string): number {
    const clean = endpoint.toLowerCase();
    
    if (clean.includes('menu')) {
      return this.configService.get<number>('cache.ttlMenus') || 600;
    }
    if (clean.includes('slug=home') || clean.includes('home')) {
      return this.configService.get<number>('cache.ttlHome') || 300;
    }
    if (clean.includes('ourservices') || clean.includes('services')) {
      return this.configService.get<number>('cache.ttlServices') || 600;
    }
    if (clean.includes('clients')) {
      return this.configService.get<number>('cache.ttlClients') || 600;
    }
    if (clean.includes('portfolio_category')) {
      return this.configService.get<number>('cache.ttlPortfolioCategories') || 600;
    }
    if (clean.includes('project-gallery')) {
      return this.configService.get<number>('cache.ttlProjectGallery') || 600;
    }
    if (clean.includes('portfolio')) {
      return this.configService.get<number>('cache.ttlPortfolio') || 300;
    }
    if (clean.includes('posts') || clean.includes('categories')) {
      return this.configService.get<number>('cache.ttlBlogs') || 300;
    }
    if (clean.includes('pages')) {
      return this.configService.get<number>('cache.ttlPages') || 600;
    }
    return 300; // Default fallback to 5 minutes
  }

  /**
   * Limit simultaneous unique outbound requests.
   */
  private async acquireSlot(): Promise<void> {
    if (this.activeRequests < this.maxConcurrency) {
      this.activeRequests++;
      return;
    }
    return new Promise<void>((resolve) => {
      this.waitQueue.push(() => {
        this.activeRequests++;
        resolve();
      });
    });
  }

  private releaseSlot(): void {
    this.activeRequests--;
    if (this.waitQueue.length > 0) {
      const next = this.waitQueue.shift();
      if (next) next();
    }
  }

  /**
   * Executes a robust HTTP fetch to WordPress with:
   * - 8s request timeout via AbortController
   * - Configurable concurrency limiting
   * - In-flight request deduplication
   * - Server-side caching for successful responses
   * - Up to 3 retries with exponential backoff + jitter
   * - Selective retry logic (network error, timeout, 429, 503, 504, transient 500)
   */
  async fetchWP<T = any>(endpoint: string, options?: RequestInit, retries = 3): Promise<T> {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${cleanEndpoint}`;

    // 1. Memory Cache Lookup: Instant hit if successful data exists
    const cachedData = this.cacheService.get<T>(url);
    if (cachedData !== null) {
      return cachedData;
    }

    // 2. In-flight Request Deduplication: Share in-progress network promise
    if (this.inFlightRequests.has(url)) {
      this.logger.debug(`Deduplicating in-flight request for: ${cleanEndpoint}`);
      return this.inFlightRequests.get(url) as Promise<T>;
    }

    const fetchPromise = (async (): Promise<T> => {
      await this.acquireSlot();
      try {
        for (let attempt = 0; attempt <= retries; attempt++) {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => {
            controller.abort();
          }, 8000); // 8-second timeout per attempt

          const startTime = Date.now();
          try {
            this.logger.log(
              `Outbound Request started [Attempt ${attempt + 1}/${retries + 1}]: GET ${url}`,
            );

            const res = await fetch(url, {
              ...options,
              headers: {
                'User-Agent': 'Mozilla/5.0 Grehasoft-NestJS-Backend/1.0',
                'Accept': 'application/json',
                ...options?.headers,
              },
              signal: controller.signal,
            });

            const duration = Date.now() - startTime;
            clearTimeout(timeoutId);

            const responseText = await res.clone().text().catch(() => '');

            // Handle non-OK status codes
            if (!res.ok) {
              // Retry on 429, 503, 504, or transient 500 (like DB connection failure)
              const isTransientDbError = res.status === 500 && responseText.includes('database connection');
              const shouldRetry =
                attempt < retries &&
                (res.status === 429 || res.status === 503 || res.status === 504 || isTransientDbError);

              if (shouldRetry) {
                const delay = Math.pow(2, attempt) * 500 + Math.random() * 300;
                this.logger.warn(
                  `Outbound Request completed with HTTP ${res.status} [Retryable]. Retrying in ${delay.toFixed(0)}ms... (Attempt ${attempt + 1}/${retries + 1})`,
                );
                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
              }

              this.logger.error(
                `Outbound Request completed with HTTP ${res.status} [Non-Retryable] for ${cleanEndpoint} (after ${duration}ms): ${responseText.slice(0, 150)}`,
              );
              throw new HttpException(
                `WordPress CMS returned HTTP ${res.status}: ${responseText.slice(0, 100)}`,
                res.status || HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }

            const json = await res.json();
            this.logger.log(`Outbound Request completed successfully: GET ${cleanEndpoint} - Status 200 - Took ${duration}ms`);
            
            // Cache only successful JSON responses
            const ttl = this.resolveTtl(cleanEndpoint);
            this.cacheService.set(url, json, ttl);

            return json;

          } catch (error: any) {
            clearTimeout(timeoutId);

            // Check if error is due to abortion (timeout)
            const isTimeout = error.name === 'AbortError';
            const errCode = error?.code || error?.cause?.code || error?.name || 'UNKNOWN';
            
            const isNetworkError =
              !isTimeout &&
              (errCode === 'ECONNRESET' ||
                errCode === 'ETIMEDOUT' ||
                errCode === 'ERR_NETWORK' ||
                error.message?.includes('fetch failed'));

            const isRetryableError = isTimeout || isNetworkError;

            if (attempt < retries && isRetryableError) {
              const delay = Math.pow(2, attempt) * 500 + Math.random() * 300;
              this.logger.warn(
                `Outbound Request failed [${errCode}]. Retrying in ${delay.toFixed(0)}ms... Error: ${error.message} (Attempt ${attempt + 1}/${retries + 1})`,
              );
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }

            const displayError = isTimeout
              ? 'Request to WordPress timed out (8-second limit exceeded)'
              : `Connection to WordPress failed: ${error.message}`;

            this.logger.error(`Outbound Request failed [Final]: ${displayError}`);
            throw new HttpException(
              displayError,
              error instanceof HttpException ? error.getStatus() : HttpStatus.BAD_GATEWAY,
            );
          }
        }
        throw new HttpException('Request to WordPress failed after maximum retries', HttpStatus.GATEWAY_TIMEOUT);
      } finally {
        this.releaseSlot();
        this.inFlightRequests.delete(url);
      }
    })();

    this.inFlightRequests.set(url, fetchPromise);
    return fetchPromise;
  }

  /**
   * Performs an outbound HTTP query returning both parsed JSON body and raw HTTP headers.
   */
  async fetchWPWithRawResponse<T = any>(endpoint: string, options?: RequestInit, retries = 3): Promise<{ data: T; headers: Headers }> {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${cleanEndpoint}`;

    await this.acquireSlot();
    try {
      for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, 8000); // 8s timeout

        const startTime = Date.now();
        try {
          this.logger.log(
            `Outbound Request (Raw) started [Attempt ${attempt + 1}/${retries + 1}]: GET ${url}`,
          );

          const res = await fetch(url, {
            ...options,
            headers: {
              'User-Agent': 'Mozilla/5.0 Grehasoft-NestJS-Backend/1.0',
              'Accept': 'application/json',
              ...options?.headers,
            },
            signal: controller.signal,
          });

          const duration = Date.now() - startTime;
          clearTimeout(timeoutId);

          const responseText = await res.clone().text().catch(() => '');

          if (!res.ok) {
            const isTransientDbError = res.status === 500 && responseText.includes('database connection');
            const shouldRetry =
              attempt < retries &&
              (res.status === 429 || res.status === 503 || res.status === 504 || isTransientDbError);

            if (shouldRetry) {
              const delay = Math.pow(2, attempt) * 500 + Math.random() * 300;
              this.logger.warn(
                `Outbound Request (Raw) completed with HTTP ${res.status} [Retryable]. Retrying in ${delay.toFixed(0)}ms...`,
              );
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }

            throw new HttpException(
              `WordPress CMS returned HTTP ${res.status}: ${responseText.slice(0, 100)}`,
              res.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }

          const json = await res.json();
          this.logger.log(`Outbound Request (Raw) completed successfully: GET ${cleanEndpoint} - Status 200 - Took ${duration}ms`);
          
          return { data: json, headers: res.headers };

        } catch (error: any) {
          clearTimeout(timeoutId);

          const isTimeout = error.name === 'AbortError';
          const errCode = error?.code || error?.cause?.code || error?.name || 'UNKNOWN';
          const isNetworkError =
            !isTimeout &&
            (errCode === 'ECONNRESET' ||
              errCode === 'ETIMEDOUT' ||
              errCode === 'ERR_NETWORK' ||
              error.message?.includes('fetch failed'));

          const isRetryableError = isTimeout || isNetworkError;

          if (attempt < retries && isRetryableError) {
            const delay = Math.pow(2, attempt) * 500 + Math.random() * 300;
            this.logger.warn(
              `Outbound Request (Raw) failed [${errCode}]. Retrying in ${delay.toFixed(0)}ms... (Attempt ${attempt + 1}/${retries + 1})`,
            );
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }

          throw new HttpException(
            isTimeout ? 'Request to WordPress timed out' : `Connection failed: ${error.message}`,
            HttpStatus.BAD_GATEWAY,
          );
        }
      }
      throw new HttpException('Request to WordPress failed after max retries', HttpStatus.GATEWAY_TIMEOUT);
    } finally {
      this.releaseSlot();
    }
  }


  /**
   * Diagnostic verification of the 12 critical endpoints.
   * Runs sequentially with delay to avoid triggering Hostinger concurrency drops.
   */
  async testConnection(): Promise<WordPressDiagnosticSummary> {
    const endpointsToTest = [
      { path: '/wp-json/wp/v2/pages?slug=home', label: 'Home Page ACF Data' },
      { path: '/wp-json/wp/v2/hero-slide', label: 'Hero Slides CPT' },
      { path: '/wp-json/wp/v2/ourservices?_embed', label: 'Our Services CPT (Embedded)' },
      { path: '/wp-json/wp/v2/clients?per_page=100', label: 'Clients CPT' },
      { path: '/wp-json/wp/v2/portfolio?_embed', label: 'Portfolio CPT (Embedded)' },
      { path: '/wp-json/wp/v2/portfolio_category', label: 'Portfolio Categories Taxonomy' },
      { path: '/wp-json/wp/v2/project-gallery?_embed', label: 'Project Gallery CPT (Embedded)' },
      { path: '/wp-json/wp/v2/logo_gallery?_embed', label: 'Logo Gallery CPT (Embedded)' },
      { path: '/wp-json/wp/v2/posts?_embed', label: 'Blog Posts (Embedded)' },
      { path: '/wp-json/custom/v1/menu/primary-menu', label: 'Primary Header Menu' },
      { path: '/wp-json/custom/v1/menu/footer-menu', label: 'Footer Menu' },
      { path: '/wp-json/wp/v2/pages?slug=footer&_fields=acf', label: 'Footer Page ACF Fields' },
    ];

    const results: EndpointDiagnosticResult[] = [];
    let successfulCount = 0;

    for (const item of endpointsToTest) {
      const startTime = Date.now();
      let httpStatus: number | null = null;
      let success = false;
      let itemCount: number | null = null;
      let dataType = 'Unknown';
      let errorMessage: string | null = null;
      let diagnosis = 'Undetermined';

      // Bypass cache for diagnostic test so it checks direct live status of WordPress
      const url = `${this.baseUrl}${item.path}`;
      this.cacheService.delete(url);

      try {
        const data = await this.fetchWP(item.path, {}, 1); // 1 retry for diagnostic speed
        success = true;
        httpStatus = 200;
        successfulCount++;
        diagnosis = 'Healthy';

        if (Array.isArray(data)) {
          itemCount = data.length;
          dataType = 'Array';
        } else if (data && typeof data === 'object') {
          itemCount = 1;
          dataType = 'Object';
        }
      } catch (err: any) {
        success = false;
        errorMessage = err.message || 'Diagnostic failed';
        httpStatus = err instanceof HttpException ? err.getStatus() : 502;

        if (errorMessage && (errorMessage.includes('timed out') || errorMessage.includes('limit exceeded'))) {
          diagnosis = 'Timeout (8-second limit exceeded)';
        } else if (httpStatus === 429) {
          diagnosis = 'Rate Limited (Too Many Requests)';
        } else if (httpStatus === 500 && errorMessage && errorMessage.includes('database connection')) {
          diagnosis = 'WordPress Server Error (Access Denied / Database Connection limit)';
        } else if (httpStatus === 500) {
          diagnosis = 'WordPress PHP Error / Internal Exception';
        } else if (httpStatus === 502 || httpStatus === 503 || httpStatus === 504) {
          diagnosis = 'LiteSpeed / Hostinger Gateway Throttling';
        } else {
          diagnosis = `Failed: HTTP ${httpStatus}`;
        }
      }

      const durationMs = Date.now() - startTime;

      results.push({
        endpoint: item.label,
        url,
        httpStatus,
        durationMs,
        success,
        itemCount,
        dataType,
        errorMessage,
        diagnosis,
      });

      // Apply the configured request delay to prevent triggering concurrency limits
      if (this.requestDelayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.requestDelayMs));
      }
    }

    const totalTested = endpointsToTest.length;
    const failedCount = totalTested - successfulCount;

    let overallStatus: 'HEALTHY' | 'DEGRADED' | 'UNREACHABLE' = 'HEALTHY';
    if (successfulCount === 0) {
      overallStatus = 'UNREACHABLE';
    } else if (failedCount > 0) {
      overallStatus = 'DEGRADED';
    }

    return {
      timestamp: new Date().toISOString(),
      wordpressBaseUrl: this.baseUrl,
      totalEndpointsTested: totalTested,
      successfulEndpoints: successfulCount,
      failedEndpoints: failedCount,
      overallStatus,
      results,
    };
  }
}

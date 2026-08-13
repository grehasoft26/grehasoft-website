import { Injectable, Logger } from '@nestjs/common';
import { WordPressClientService } from '../wordpress-client/wordpress-client.service';
import { CacheService } from '../wordpress-client/cache.service';

@Injectable()
export class BlogsService {
  private readonly logger = new Logger(BlogsService.name);
  private readonly inFlightRequests = new Map<string, Promise<any>>();

  constructor(
    private readonly wpClient: WordPressClientService,
    private readonly cacheService: CacheService,
  ) {}

  /**
   * Resolves a category slug to its corresponding category ID.
   */
  async getCategoryIdBySlug(slug: string): Promise<number | null> {
    const categories = await this.getCategories();
    const found = categories.find((c: any) => c.slug === slug);
    return found ? found.id : null;
  }

  /**
   * Retrieves paginated, searched, and filtered posts.
   */
  async getPosts(
    page = 1,
    perPage = 10,
    search = '',
    category = '',
    categories = '',
  ): Promise<{ posts: any[]; totalPages: number; totalPosts: number }> {
    // 1. Resolve category slug to numeric ID if not already numeric
    let resolvedCategory = category;
    if (category && isNaN(Number(category))) {
      const id = await this.getCategoryIdBySlug(category);
      resolvedCategory = id ? String(id) : '999999'; // Safe fallback if category slug not found
    }

    // 2. Normalize parameters to build the unique cache key
    const normalizedKey = `posts_page_${page}_limit_${perPage}_search_${search.trim()}_cat_${resolvedCategory}_cats_${categories}`;

    // 3. Memory Cache Lookup
    const cached = this.cacheService.get<{ posts: any[]; totalPages: number; totalPosts: number }>(normalizedKey);
    if (cached !== null) {
      return cached;
    }

    // 4. In-flight Request Deduplication
    if (this.inFlightRequests.has(normalizedKey)) {
      this.logger.debug(`Sharing in-flight posts promise for key: ${normalizedKey}`);
      return this.inFlightRequests.get(normalizedKey);
    }

    const promise = (async () => {
      let path = `/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`;
      if (search) {
        path += `&search=${encodeURIComponent(search.trim())}`;
      }

      const targetCategories = [resolvedCategory, categories].filter(Boolean).join(',');
      if (targetCategories) {
        path += `&categories=${targetCategories}`;
      }

      try {
        const { data, headers } = await this.wpClient.fetchWPWithRawResponse<any[]>(path);

        const totalPages = Number(headers.get('x-wp-totalpages')) || 1;
        const totalPosts = Number(headers.get('x-wp-total')) || (Array.isArray(data) ? data.length : 0);

        const result = {
          posts: Array.isArray(data) ? data : [],
          totalPages,
          totalPosts,
        };

        // Cache successful response (TTL: 300 seconds)
        this.cacheService.set(normalizedKey, result, 300);
        return result;
      } catch (err: any) {
        this.logger.error(`Failed to retrieve posts for path ${path}: ${err.message}`);
        throw err;
      } finally {
        this.inFlightRequests.delete(normalizedKey);
      }
    })();

    this.inFlightRequests.set(normalizedKey, promise);
    return promise;
  }

  /**
   * Retrieves a single post by slug (returns a clean single object).
   */
  async getPostBySlug(slug: string): Promise<any | null> {
    const normalizedKey = `post_detail_slug_${slug}`;

    const cached = this.cacheService.get<any>(normalizedKey);
    if (cached !== null) {
      return cached;
    }

    if (this.inFlightRequests.has(normalizedKey)) {
      this.logger.debug(`Sharing in-flight post detail promise for: ${slug}`);
      return this.inFlightRequests.get(normalizedKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>(`/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        const post = Array.isArray(data) && data.length > 0 ? data[0] : null;

        // Cache successful single post detail (TTL: 600 seconds)
        if (post !== null) {
          this.cacheService.set(normalizedKey, post, 600);
        }
        return post;
      } finally {
        this.inFlightRequests.delete(normalizedKey);
      }
    })();

    this.inFlightRequests.set(normalizedKey, promise);
    return promise;
  }

  /**
   * Retrieves list of categories.
   */
  async getCategories(): Promise<any[]> {
    const normalizedKey = 'categories_list_all';

    const cached = this.cacheService.get<any[]>(normalizedKey);
    if (cached !== null) {
      return cached;
    }

    if (this.inFlightRequests.has(normalizedKey)) {
      return this.inFlightRequests.get(normalizedKey);
    }

    const promise = (async () => {
      try {
        const data = await this.wpClient.fetchWP<any[]>('/wp-json/wp/v2/categories?per_page=100');
        const result = Array.isArray(data) ? data : [];

        // Cache successful category listing (TTL: 600 seconds)
        this.cacheService.set(normalizedKey, result, 600);
        return result;
      } finally {
        this.inFlightRequests.delete(normalizedKey);
      }
    })();

    this.inFlightRequests.set(normalizedKey, promise);
    return promise;
  }
}

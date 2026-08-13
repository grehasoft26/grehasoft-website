export interface AppConfig {
  port: number;
  nodeEnv: string;
  corsOrigins: string | string[];
  wordpress: {
    baseUrl: string;
    maxConcurrency: number;
    requestDelayMs: number;
  };
  cache: {
    ttlMenus: number;
    ttlHome: number;
    ttlServices: number;
    ttlClients: number;
    ttlPortfolio: number;
    ttlPortfolioCategories: number;
    ttlProjectGallery: number;
    ttlBlogs: number;
    ttlPages: number;
  };
  database: {
    enabled: boolean;
    host: string;
    port: number;
    user: string;
    pass: string;
    name: string;
  };
}

export default (): AppConfig => ({
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigins: process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim())
    : ['http://localhost:3000'],
  wordpress: {
    baseUrl: (process.env.WORDPRESS_BASE_URL || 'https://cms.grehasoft.com').replace(/\/$/, ''),
    maxConcurrency: parseInt(process.env.WORDPRESS_MAX_CONCURRENCY || '1', 10),
    requestDelayMs: parseInt(process.env.WORDPRESS_REQUEST_DELAY_MS || '100', 10),
  },
  cache: {
    ttlMenus: parseInt(process.env.CACHE_TTL_MENUS || '600', 10),
    ttlHome: parseInt(process.env.CACHE_TTL_HOME || '300', 10),
    ttlServices: parseInt(process.env.CACHE_TTL_SERVICES || '600', 10),
    ttlClients: parseInt(process.env.CACHE_TTL_CLIENTS || '600', 10),
    ttlPortfolio: parseInt(process.env.CACHE_TTL_PORTFOLIO || '300', 10),
    ttlPortfolioCategories: parseInt(process.env.CACHE_TTL_PORTFOLIO_CATEGORIES || '600', 10),
    ttlProjectGallery: parseInt(process.env.CACHE_TTL_PROJECT_GALLERY || '600', 10),
    ttlBlogs: parseInt(process.env.CACHE_TTL_BLOGS || '300', 10),
    ttlPages: parseInt(process.env.CACHE_TTL_PAGES || '600', 10),
  },
  database: {
    enabled: process.env.DATABASE_ENABLED === 'true',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    user: process.env.DATABASE_USER || 'root',
    pass: process.env.DATABASE_PASSWORD || '',
    name: process.env.DATABASE_NAME || 'grehasoft_db',
  },
});

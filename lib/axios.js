import axios from 'axios';

const apiURL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://cms.grehasoft.com';

let baseURL = 'https://cms.grehasoft.com';

if (apiURL) {
  try {
    const parsed = new URL(apiURL);
    baseURL = parsed.origin;
  } catch (e) {
    baseURL = apiURL;
  }
}

const instance = axios.create({
  baseURL,
  timeout: 15000, // 15 seconds
});

// Client-side In-memory cache
const clientCache = new Map();
const CLIENT_CACHE_TTL_MS = 60 * 1000; // 60s

// Client-side In-flight request deduplication
const inFlightRequests = new Map();

// Client-side Concurrency limiter (max 2 concurrent requests to protect Hostinger MySQL)
const MAX_CONCURRENT_REQUESTS = 2;
let activeRequests = 0;
const waitQueue = [];

function acquireSlot() {
  if (activeRequests < MAX_CONCURRENT_REQUESTS) {
    activeRequests++;
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    waitQueue.push(() => {
      activeRequests++;
      resolve();
    });
  });
}

function releaseSlot() {
  activeRequests--;
  if (waitQueue.length > 0) {
    const next = waitQueue.shift();
    if (next) next();
  }
}

// Request Interceptor: Concurrency Control
instance.interceptors.request.use(
  async (config) => {
    // Only queue once per request attempt
    await acquireSlot();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Slot Release & Retry with Backoff + Jitter
instance.interceptors.response.use(
  (response) => {
    releaseSlot();

    // Cache successful GET responses in-memory
    if (response.config.method?.toLowerCase() === 'get' && response.config.url) {
      const cacheKey = `${response.config.baseURL || ''}${response.config.url}`;
      clientCache.set(cacheKey, {
        data: response.data,
        timestamp: Date.now(),
      });
      inFlightRequests.delete(cacheKey);
    }

    return response;
  },

  async (error) => {
    releaseSlot();

    const config = error.config;

    if (!config) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;

    const maxRetries = 4;
    const shouldRetry =
      config.__retryCount < maxRetries &&
      (
        error.code === 'ECONNABORTED' ||
        error.code === 'ECONNRESET' ||
        error.code === 'ERR_NETWORK' ||
        error.response?.status === 429 ||
        error.response?.status === 500 ||
        error.response?.status === 502 ||
        error.response?.status === 503 ||
        error.response?.status === 504
      );

    if (shouldRetry) {
      config.__retryCount += 1;

      // Exponential backoff with random jitter to prevent thundering herd on Hostinger MySQL
      const backoff = Math.pow(2, config.__retryCount) * 600;
      const jitter = Math.random() * 400;
      const delay = backoff + jitter;

      await new Promise((resolve) => setTimeout(resolve, delay));

      return instance(config);
    }

    // If retries exhausted and we have stale cached data for GET, return it gracefully
    if (config.method?.toLowerCase() === 'get' && config.url) {
      const cacheKey = `${config.baseURL || ''}${config.url}`;
      inFlightRequests.delete(cacheKey);
      const cached = clientCache.get(cacheKey);
      if (cached && cached.data) {
        console.warn(`[axios] Serving stale cached data for ${config.url}`);
        return {
          data: cached.data,
          status: 200,
          statusText: 'OK (stale-cache)',
          headers: {},
          config,
        };
      }
    }

    return Promise.reject(error);
  }
);

// Wrapper for GET requests to provide in-flight deduplication and instant cache hits
const originalGet = instance.get.bind(instance);
instance.get = function (url, config) {
  const fullUrl = url.startsWith('http') ? url : `${baseURL}${url.startsWith('/') ? '' : '/'}${url}`;

  // 1. Check client-side memory cache
  const cached = clientCache.get(fullUrl);
  if (cached && Date.now() - cached.timestamp < CLIENT_CACHE_TTL_MS) {
    return Promise.resolve({
      data: cached.data,
      status: 200,
      statusText: 'OK (cached)',
      headers: {},
      config: config || {},
    });
  }

  // 2. In-flight promise deduplication
  if (inFlightRequests.has(fullUrl)) {
    return inFlightRequests.get(fullUrl);
  }

  const promise = originalGet(url, config).finally(() => {
    inFlightRequests.delete(fullUrl);
  });

  inFlightRequests.set(fullUrl, promise);
  return promise;
};

export default instance;
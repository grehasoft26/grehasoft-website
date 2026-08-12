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

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const config = error.config;

//     if (!config) {
//       return Promise.reject(error);
//     }

//     config.__retryCount = config.__retryCount || 0;

//     if (
//       config.__retryCount < 2 &&
//       (error.code === 'ECONNABORTED' ||
//         error.response?.status === 500)
//     ) {
//       config.__retryCount += 1;

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       return instance(config);
//     }

//     return Promise.reject(error);
//   }
// );
instance.interceptors.response.use(
  (response) => response,

  async (error) => {
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

    return Promise.reject(error);
  }
);

export default instance;
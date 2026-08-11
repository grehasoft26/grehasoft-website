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

    const shouldRetry =
      config.__retryCount < 2 &&
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

      const delay = 1000 * config.__retryCount;

      await new Promise((resolve) =>
        setTimeout(resolve, delay)
      );

      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;
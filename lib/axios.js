import axios from 'axios';

const apiURL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://antiquewhite-swan-450844.hostingersite.com';

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

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (!config) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;

    if (
      config.__retryCount < 2 &&
      (error.code === 'ECONNABORTED' ||
        error.response?.status === 500)
    ) {
      config.__retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return instance(config);
    }

    return Promise.reject(error);
  }
);

export default instance;
import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://antiquewhite-swan-450844.hostingersite.com';
let baseURL = 'https://antiquewhite-swan-450844.hostingersite.com';

if (apiURL) {
  try {
    const parsed = new URL(apiURL);
    baseURL = parsed.origin;
  } catch (e) {
    // If not a full URL (e.g. just a hostname or relative path), use it as is
    baseURL = apiURL;
  }
}

const instance = axios.create({
  baseURL,
});

export default instance;
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://antiquewhite-swan-450844.hostingersite.com',
});

export default instance;
import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');

  if (!config.headers) return config;

  if (accessToken !== null) {
    config.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
  }
  return config;
});

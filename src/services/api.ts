import axios from 'axios';
import {getData} from '../utils/storage';
import {AUTH_TOKEN_STORAGE_KEY} from '../constants';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

api.interceptors.request.use(async config => {
  const token = await getData<string>(AUTH_TOKEN_STORAGE_KEY);

  const {headers} = config;

  return {
    ...config,
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

export default api;

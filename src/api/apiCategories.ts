import axios, {AxiosRequestHeaders, InternalAxiosRequestConfig} from 'axios';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const token = useSelector((state: RootState) => state.token);

const apiCategories = axios.create({
  baseURL: 'http://192.168.89.8:3000/taskmanager/categories/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiCategories.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const tokenFound = token;
    if (tokenFound) {
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
      }
      config.headers.Authorization = `Bearer ${tokenFound}`;
    }
    return config;
  },
);

export default apiCategories;

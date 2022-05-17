import axios from 'axios';
import { API_BASE_URL } from '../config/config';
import { IAxiosService, IServiceConfig } from './interfaces/service';
import qs from 'qs';

class HttpService implements IAxiosService {
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || API_BASE_URL;
  }
  baseUrl?: string | undefined;
  get = (path: string, config?: IServiceConfig) => {
    let queryString;
    const query = config?.query;
    if (query) {
      queryString = qs.stringify(query);
    }
    return axios.get(`${this.baseUrl}${path}${queryString ? `?${queryString}` : ''}`, config?.axiosConfig);
  }

  post = (path: string, data: object, config?: IServiceConfig) => {
    return axios.post(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  put = (path: string, data: any, config?: IServiceConfig) => {
    return axios.put(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  patch = (path: string, data: any, config?: IServiceConfig) => {
    return axios.patch(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  delete = (path: string, config?: IServiceConfig) => {
    return axios.delete(`${this.baseUrl}${path}`, config?.axiosConfig);
  }
}

export default HttpService;

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
    return axios.get(`${this.baseUrl}${path}${queryString ? `?${queryString}` : ''}`);
  }

  post = (path: string, data: object, config?: object) => {
    return axios.post(`${this.baseUrl}${path}`, JSON.stringify(data), config);
  }

  put = (path: string, data: any, config?: object) => {
    return axios.put(`${this.baseUrl}${path}`, JSON.stringify(data), config);
  }

  patch = (path: string, data: any, config?: object) => {
    return axios.patch(`${this.baseUrl}${path}`, JSON.stringify(data), config);
  }

  delete = (path: string, config?: object) => {
    return axios.delete(`${this.baseUrl}${path}`, config);
  }
}

export default HttpService;

import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IServiceConfig {
  query?: any;
  limit?: number;
  offset?: number;
  filter?: any;
}

interface IAxiosServiceConfig extends IServiceConfig {
  axiosConfig?: AxiosRequestConfig;
}
interface IAxiosService {
  baseUrl?: string;
  get: (path: string, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  put: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  delete: (path: string, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
};


export type {
  IAxiosService,
  IServiceConfig,
  IAxiosServiceConfig,
}
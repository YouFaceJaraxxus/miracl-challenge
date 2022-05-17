import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IServiceConfig{
  query?: any;
  limit?: number;
  offset?: number;
  axiosConfig?: AxiosRequestConfig;
  filter?: any;
}

interface IAxiosService {
  baseUrl?: string;
  get: (path: string, config?: IServiceConfig) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, config?: IServiceConfig) => Promise<AxiosResponse<any>>;
  put: (path: string, data: any, config?: IServiceConfig) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, config?: IServiceConfig) => Promise<AxiosResponse<any>>;
  delete: (path: string, config?: IServiceConfig) => Promise<AxiosResponse<any>>;
};


interface ILocalStorageService {
  get: (path: string, config?: any) => Promise<any>;
  post: (path: string, data: any, config?: any) => Promise<any>;
  put: (path: string, data: any, config?: any) => Promise<any>;
  patch: (path: string, data: any, config?: any) => Promise<any>;
  delete: (path: string, config?: any) => Promise<any>;
};

export type {
  IAxiosService,
  ILocalStorageService,
  IServiceConfig,
}
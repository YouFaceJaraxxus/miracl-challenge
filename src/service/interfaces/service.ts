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

interface ILocalStorageServiceConfig extends IServiceConfig {
}

interface IAxiosService {
  baseUrl?: string;
  get: (path: string, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  put: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
  delete: (path: string, config?: IAxiosServiceConfig) => Promise<AxiosResponse<any>>;
};


interface ILocalStorageService {
  get: (path: string, config?: ILocalStorageServiceConfig) => Promise<any>;
  post: (path: string, data: any, config?: ILocalStorageServiceConfig) => Promise<any>;
  put: (path: string, data: any, config?: ILocalStorageServiceConfig) => Promise<any>;
  patch: (path: string, data: any, config?: ILocalStorageServiceConfig) => Promise<any>;
  delete: (path: string, config?: ILocalStorageServiceConfig) => Promise<any>;
};

export type {
  IAxiosService,
  ILocalStorageService,
  IServiceConfig,
  IAxiosServiceConfig,
  ILocalStorageServiceConfig,
}
import { AxiosResponse } from 'axios';

interface IService {
  baseUrl?: string;
  get: (path: string, config?: any) => any;
  post: (path: string, data: any, config?: any) => any;
  put: (path: string, data: any, config?: any) => any;
  patch: (path: string, data: any, config?: any) => any;
  delete: (path: string, config?: any) => any;
};

interface IAxiosService extends IService {
  baseUrl?: string;
  get: (path: string, config?: any) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, config?: any) => Promise<AxiosResponse<any>>;
  put: (path: string, data: any, config?: any) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, config?: any) => Promise<AxiosResponse<any>>;
  delete: (path: string, config?: any) => Promise<AxiosResponse<any>>;
};


interface ILocalStorageService extends IService {
  get: (path: string, config?: any) => Promise<any>;
  post: (path: string, data: any, config?: any) => Promise<any>;
  put: (path: string, data: any, config?: any) => Promise<any>;
  patch: (path: string, data: any, config?: any) => Promise<any>;
  delete: (path: string, config?: any) => Promise<any>;
};

export default IService;

export type {
  IAxiosService,
  ILocalStorageService
}
import { ILocalStorageService } from './interfaces/service';
// @ts-ignore
import uuid from 'react-uuid';

/*
 The Local Storage is not the best way to show how this interface/implementation system can really work well,
 as it doesn't mimic the behaviour of a typical REST API (it isn't even asynchronous so I wrapped the return vals in Promises),
 but I wanted to give this idea a go.
*/
class LocalStorageService implements ILocalStorageService {
  constructor() {
    this.baseUrl = undefined;
  }
  baseUrl?: string | undefined;

  getItemFromLocalStorage = (key: string) => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : null;
  }

  setLocalStorageItem = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  get = (path: string) => {
    return Promise.resolve(this.getItemFromLocalStorage(path));
  }

  post = (path: string, data: any) => {
    const initialValue = this.getItemFromLocalStorage(path);
    if (Array.isArray(initialValue)) {
      const newArray = initialValue.concat({ ...data, id: uuid() });
      return Promise.resolve(this.setLocalStorageItem(path, newArray));
    }
    return Promise.resolve(this.setLocalStorageItem(path, [{ ...data, id: uuid() }]));
  }

  put = (path: string, data: any) => {
    let initialValue = this.getItemFromLocalStorage(path);
    if (Array.isArray(initialValue)) {
      initialValue = initialValue.map((item) => {
        if (item.id === data.id) return data;
        else return item;
      });
      return Promise.resolve(this.setLocalStorageItem(path, initialValue));
    }
    return Promise.resolve(this.setLocalStorageItem(path, [{ ...data, id: uuid() }]));
  }

  patch = (path: string, data: any) => {
    let initialValue = this.getItemFromLocalStorage(path);
    if (Array.isArray(initialValue)) {
      initialValue = initialValue.map((item) => {
        //this makes sure that any passed data overwrites the initial data
        //if some fields are ommited, they're not "lost" from the initial value
        if (item.id === data.id) return { ...item, ...data };
        else return item;
      });
      return Promise.resolve(this.setLocalStorageItem(path, initialValue));
    }
    return Promise.resolve(this.setLocalStorageItem(path, [{ ...data, id: uuid() }]));
  }

  delete = (path: string, config: any) => {
    const { id } = config;
    let initialValue = this.getItemFromLocalStorage(path);
    if (Array.isArray(initialValue)) {
      initialValue = initialValue.filter((item) => item.id !== id);
      return Promise.resolve(this.setLocalStorageItem(path, initialValue));
    }
    return Promise.resolve({ success: 'true' });
  }
}

export default LocalStorageService;

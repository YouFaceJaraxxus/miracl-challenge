const JSON_SUFFIX = '.json';
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const IS_LOGGED_LOCAL_STORAGE = 'isLogged';
const CHECK_IS_LOGGED_LOCAL_STORAGE = 'checkIsLogged';
const DEFAULT_PAGE_SIZE = 10;
const DOCUMENTS_PAGE_SIZE = DEFAULT_PAGE_SIZE;
const ERROR = 'error';
const SUCCESS = 'success';
const MIN_DOWNLOAD_TIME = 1000;
const MAX_DOWNLOAD_TIME = 2000;

export {
  JSON_SUFFIX,
  EMAIL_REGEX,
  IS_LOGGED_LOCAL_STORAGE,
  CHECK_IS_LOGGED_LOCAL_STORAGE,
  DEFAULT_PAGE_SIZE,
  DOCUMENTS_PAGE_SIZE,
  ERROR,
  SUCCESS,
  MIN_DOWNLOAD_TIME,
  MAX_DOWNLOAD_TIME,
};

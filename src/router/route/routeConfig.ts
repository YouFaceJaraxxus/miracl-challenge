import Documents from '../../components/documents/documents';
import Home from '../../components/home/home';
import Login from '../../components/login/login';
import Users from '../../components/users/users';
import ICustomRouteProps from './customRouteProps.model';

const DEFAULT_PATH = '/';
const LOGIN_PATH = '/login';
const HOME_PATH = '/home';
const USERS_PATH = '/users';
const DOCUMENTS_PATH = '/documents';
const DEFAULT_REDIRECT_PATH = LOGIN_PATH;
const ROUTES: ICustomRouteProps[] = [
  {
    id: 2,
    component: Login,
    exact: true,
    isProtected: false,
    path: '/login',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 3,
    component: Home,
    exact: true,
    isProtected: false,
    path: HOME_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 4,
    component: Users,
    exact: false,
    isProtected: true,
    path: USERS_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 5,
    component: Documents,
    exact: false,
    isProtected: true,
    path: DOCUMENTS_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 1,
    component: Home,
    exact: false,
    isProtected: false,
    path: DEFAULT_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
]

export {
  ROUTES,
  DEFAULT_REDIRECT_PATH,
  DEFAULT_PATH,
  LOGIN_PATH,
  HOME_PATH,
  USERS_PATH,
  DOCUMENTS_PATH,
}
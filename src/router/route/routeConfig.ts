import Counter from "../../components/counter/counter";
import Home from "../../components/home/home";
import Login from "../../components/login/login";
import Users from "../../components/users/users";
import ICustomRouteProps from "./customRouteProps.model";

const DEFAULT_REDIRECT_PATH = '/login';
const ROUTES: ICustomRouteProps[] = [
  {
    id: 1,
    component: Login,
    exact: true,
    isProtected: false,
    path: '/login',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 2,
    component: Home,
    exact: true,
    isProtected: false,
    path: '/home',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 3,
    component: Counter,
    exact: true,
    isProtected: true,
    path: '/counter',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 4,
    component: Users,
    exact: false,
    isProtected: true,
    path: '/users',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 5,
    component: Home,
    exact: false,
    isProtected: false,
    path: '/',
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
] 

export {
  ROUTES,
  DEFAULT_REDIRECT_PATH,
}
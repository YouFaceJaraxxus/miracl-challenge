import { Switch } from 'react-router-dom';
import CustomRoute from './route/customRoute';
import { ROUTES as routes } from './route/routeConfig';

const Router = () => (
  <Switch>
    {
      routes.map((route) => (
        <CustomRoute key={route.id} {...route} />
      ))
    }
  </Switch>
);

export default Router;
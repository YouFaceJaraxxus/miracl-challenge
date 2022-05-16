import { FC } from 'react';

export default interface ICustomRouteProps {
  id: number;
  isProtected: boolean;
  path: string;
  exact: boolean;
  component: FC;
  redirectPath?: string;
};

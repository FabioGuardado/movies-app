import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import routes from './routes';

interface PublicRouteProps extends RouteProps {
  isAuth: boolean;
}

const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({
  isAuth,
  ...routeProps
}) => {
  if (isAuth) {
    return <Redirect to={routes.HOME} />;
  }
  return <Route {...routeProps} />;
};

export default PublicRoute;

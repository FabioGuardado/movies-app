import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import routes from './routes';

interface ProtectedRouteProps extends RouteProps {
  isAuth: boolean;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  isAuth,
  ...routeProps
}) => {
  if (isAuth) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={routes.HOME} />;
};

export default ProtectedRoute;

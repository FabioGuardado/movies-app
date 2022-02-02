import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import NotFoundPage from '../pages/404/404';
import PersonDetails from '../pages/PersonDetails/PersonDetails';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Navbar from '../components/UI/Navbar/Navbar';
import Approved from '../pages/Approved/Approved';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import ShowsRouter from './ShowsRouter';
import MoviesRouter from './MoviesRouter';
import useAuth from '../hooks/useAuth';

const AppRouter: React.FunctionComponent = () => {
  const { sessionId } = useAuth();
  const isAuth: boolean = sessionId ? true : false;

  return (
    <Router forceRefresh>
      <Navbar />
      <Switch>
        <Route path={routes.SHOW} component={ShowsRouter} />
        <Route path={routes.MOVIE} component={MoviesRouter} />

        <Route path={`${routes.PERSON}:id`}>
          <PersonDetails />
        </Route>
        <ProtectedRoute
          isAuth={isAuth}
          path={routes.PROFILE}
          component={ProfilePage}
        />
        <Route path={routes.SEARCH}>
          <SearchPage />
        </Route>
        <Route exact path={routes.HOME}>
          <HomePage />
        </Route>
        <PublicRoute
          isAuth={isAuth}
          path={routes.APPROVED}
          component={Approved}
        />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;

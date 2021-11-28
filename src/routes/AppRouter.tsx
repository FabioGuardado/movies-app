import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import Layout from '../components/UI/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import NotFoundPage from '../pages/404/404';
import ShowDetails from '../pages/ShowDetails/ShowDetails';
import SeasonDetails from '../pages/SeasonDetails/SeasonDetails';
import PersonDetails from '../pages/PersonDetails/PersonDetails';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Navbar from '../components/UI/Navbar/Navbar';

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Switch>
          <Route path={`${routes.SHOW}:id${routes.SEASON}:id`}>
            <SeasonDetails />
          </Route>
          <Route path={`${routes.SHOW}:id`}>
            <ShowDetails />
          </Route>
          <Route path={`${routes.MOVIE}:id`}>
            <MovieDetails />
          </Route>
          <Route path={`${routes.PERSON}:id`}>
            <PersonDetails />
          </Route>
          <Route path={routes.PROFILE}>
            <ProfilePage />
          </Route>
          <Route path={routes.SEARCH}>
            <SearchPage />
          </Route>
          <Route exact path={routes.HOME}>
            <HomePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import NotFoundPage from '../pages/404/404';
import ShowDetails from '../pages/ShowDetails/ShowDetails';
import SeasonDetails from '../pages/SeasonDetails/SeasonDetails';
import PersonDetails from '../pages/PersonDetails/PersonDetails';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Navbar from '../components/UI/Navbar/Navbar';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import CastPage from '../pages/CastPage/CastPage';

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={`${routes.SHOW}:id${routes.CAST}`}>
          <CastPage />
        </Route>
        <Route path={`${routes.SHOW}:id${routes.REVIEWS}`}>
          <ReviewsPage />
        </Route>
        <Route path={`${routes.SHOW}:id${routes.SEASON}:id`}>
          <SeasonDetails />
        </Route>
        <Route path={`${routes.SHOW}:id`}>
          <ShowDetails />
        </Route>
        <Route path={`${routes.MOVIE}:id${routes.CAST}`}>
          <CastPage />
        </Route>
        <Route path={`${routes.MOVIE}:id${routes.REVIEWS}`}>
          <ReviewsPage />
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
    </Router>
  );
};

export default AppRouter;

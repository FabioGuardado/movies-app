import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import CastPage from '../pages/CastPage/CastPage';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import routes from './routes';

const MoviesRouter: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path={`${routes.MOVIE}:id${routes.CAST}`}>
        <CastPage />
      </Route>
      <Route path={`${routes.MOVIE}:id${routes.REVIEWS}`}>
        <ReviewsPage />
      </Route>
      <Route path={`${routes.MOVIE}:id`}>
        <MovieDetails />
      </Route>
      <Route path={routes.MOVIE}>
        <MoviesPage />
      </Route>
    </Switch>
  );
};

export default MoviesRouter;

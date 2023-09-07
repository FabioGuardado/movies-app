import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import CastPage from '../pages/CastPage/CastPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import SeasonDetails from '../pages/SeasonDetails/SeasonDetails';
import SeasonsPage from '../pages/SeasonsPage/SeasonsPage';
import ShowDetails from '../pages/ShowDetails/ShowDetails';
import ShowsPage from '../pages/ShowsPage/ShowsPage';
import routes from './routes';

const ShowsRouter: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path={`${routes.SHOW}:id${routes.CAST}`}>
        <CastPage />
      </Route>
      <Route path={`${routes.SHOW}:id${routes.REVIEWS}`}>
        <ReviewsPage />
      </Route>
      <Route path={`${routes.SHOW}:id${routes.SEASONS}:seasonNumber`}>
        <SeasonDetails />
      </Route>
      <Route path={`${routes.SHOW}:id${routes.SEASONS}`}>
        <SeasonsPage />
      </Route>
      <Route path={`${routes.SHOW}:id`}>
        <ShowDetails />
      </Route>
      <Route path={routes.SHOW}>
        <ShowsPage />
      </Route>
    </Switch>
  );
};

export default ShowsRouter;

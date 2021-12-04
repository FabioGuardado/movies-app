import React from 'react';
import { Link } from 'react-router-dom';
import { ISeasonSummary } from '../../../interfaces/ISummaries';
import routes from '../../../routes/routes';
import SeasonCard from './SeasonCard/SeasonCard';

const SeasonsSection: React.FunctionComponent<SeasonsSectionProps> = ({
  showId,
  lastSeason,
}) => {
  return (
    <>
      {lastSeason ? (
        <section className="md:w-2/3 mt-12 pt-6 border-t border-solid border-gray-300 lg:w-5/6">
          <h2 className="mt-2 mb-4 font-bold text-3xl">Last season</h2>
          <div className="mb-4">
            <SeasonCard showId={showId} season={lastSeason} />
          </div>
          <Link
            to={`${routes.SHOW}${showId}${routes.SEASONS}`}
            className="text-lg border-b border-blue-500 text-blue-500"
          >
            See all seasons
          </Link>
        </section>
      ) : null}
    </>
  );
};

export default SeasonsSection;

type SeasonsSectionProps = {
  showId: number | string;
  lastSeason: ISeasonSummary;
};

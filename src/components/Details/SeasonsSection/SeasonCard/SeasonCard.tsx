import React from 'react';
import { Link } from 'react-router-dom';
import { ISeasonSummary } from '../../../../interfaces/ISummaries';
import routes from '../../../../routes/routes';

const SeasonCard: React.FunctionComponent<SeasonCardProps> = ({
  showId,
  season,
}) => {
  return (
    <Link
      to={`${routes.SHOW}${showId}${routes.SEASONS}${season.season_number}`}
    >
      <div className="season-card my-4 flex flex-row shadow-md rounded-md overflow-hidden object-contain border border-gray-200 border-solid">
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${season.poster_path}`}
          alt={season.name}
        />
        <div className="h-full p-2 sm:p-4 my-auto overflow-hidden">
          <h3 className="text-xl font-bold">{season.name}</h3>
          <span className="text-gray-600">
            {season.air_date} | {season.episode_count} Episodes
          </span>
          <p className="text-sm md:text-base mt-2">
            {season.overview.length > 240
              ? `${season.overview.slice(0, 240)}...`
              : season.overview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SeasonCard;

type SeasonCardProps = {
  showId: number | string | undefined;
  season: ISeasonSummary;
};

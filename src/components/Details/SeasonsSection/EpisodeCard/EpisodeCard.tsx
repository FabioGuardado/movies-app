import React from 'react';
import IEpisode from '../../../../interfaces/IEpisode';

import defaultImage from '../../../../assets/backdrop-default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const EpisodeCard: React.FunctionComponent<EpisodeCardProps> = ({
  episode,
}) => {
  return (
    <div className="episode-card my-8 flex flex-col lg:flex-row object-cover overflow-hidden rounded-md shadow-md border border-gray-300 border-solid">
      <img
        src={
          episode.still_path
            ? `${process.env.REACT_APP_IMAGE_URL}${episode.still_path}`
            : defaultImage
        }
        alt={`${episode.id}`}
      />
      <div className="py-2 px-4">
        <div className="mb-2 flex-flex-row">
          <h3 className="text-xl font-bold inline-block">{episode.name}</h3>
          <div className="inline-block ml-2 py-1 px-2 text-xs font-light rounded-md bg-gray-700 text-white">
            <FontAwesomeIcon icon={faStar} />
            <span className="ml-1">{episode.vote_average.toFixed(1)}</span>
          </div>
        </div>
        {episode.overview ? (
          <div className="text-sm">{episode.overview.slice(0, 240)}</div>
        ) : null}
      </div>
    </div>
  );
};

export default EpisodeCard;

type EpisodeCardProps = {
  episode: IEpisode;
};

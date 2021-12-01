import React from 'react';
import { Link } from 'react-router-dom';
import { IMovieSummary, IShowSummary } from '../../../../interfaces/ISummaries';
import routes from '../../../../routes/routes';
import { getNameOrTitle } from '../../../../utils/TypeGuards';

import defaultImage from '../../../../assets/backdrop-default.png';

const SimilarItemCard: React.FunctionComponent<SimilarItemCardProps> = ({
  item,
}) => {
  return (
    <Link to={`${routes.MOVIE}${item.id}`}>
      <div className="similar-card mx-2">
        <img
          className="rounded-md"
          src={
            item.backdrop_path
              ? `${process.env.REACT_APP_IMAGE_URL}${item.backdrop_path}`
              : defaultImage
          }
          alt={getNameOrTitle(item)}
        />
        <div className="mt-1 flex flex-row items-center text-sm">
          <h2 className="h-6 w-full overflow-hidden">{getNameOrTitle(item)}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SimilarItemCard;

type SimilarItemCardProps = {
  item: IMovieSummary | IShowSummary;
};

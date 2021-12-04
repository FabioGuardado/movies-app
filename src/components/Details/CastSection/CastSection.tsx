import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCreditsByMovieId } from '../../../API/movies';
import { getCreditsByShowId } from '../../../API/shows';
import ICast from '../../../interfaces/ICast';
import routes from '../../../routes/routes';
import DetailsSectionProps from '../../../types/DetailsSectionProps';
import PersonCard from '../../UI/PersonCard/PersonCard';

const CastSection: React.FunctionComponent<DetailsSectionProps> = ({
  id,
  elementType,
}) => {
  const [castPreview, setCastPreview] = useState<ICast[] | null>(null);

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const creditsResponde =
        elementType === 'movie'
          ? await getCreditsByMovieId(Number(id))
          : await getCreditsByShowId(Number(id));

      if (mounted) {
        setCastPreview(creditsResponde.cast.slice(0, 9));
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id, elementType]);

  return (
    <div className="lg:w-5/6">
      <h2 className="mb-5 font-bold text-3xl">Cast</h2>
      <div className="horizontal-item-list mb-3 h-auto pl-2 pb-5 flex flex-row flex-nowrap overflow-x-scroll">
        {castPreview &&
          castPreview.map((castMember: ICast) => (
            <PersonCard key={castMember.id} person={castMember} />
          ))}
        <div className="flex flex-row flex-nowrap justify-center items-center">
          <Link
            className="w-32 text-center flex flex-row justify-center items-center"
            to={`${elementType === 'movie' ? routes.MOVIE : routes.SHOW}${id}${
              routes.CAST
            }`}
          >
            <span className="mr-2 font-bold">View more</span>{' '}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <Link
        to={`${elementType === 'movie' ? routes.MOVIE : routes.SHOW}${id}${
          routes.CAST
        }`}
        className="text-lg border-b border-blue-500 text-blue-500"
      >
        Complete cast and crew
      </Link>
    </div>
  );
};

export default CastSection;

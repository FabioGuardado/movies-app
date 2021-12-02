import React, { useEffect, useState } from 'react';
import { getSimilarMovies } from '../../../API/movies';
import { getSimilarShows } from '../../../API/shows';
import IResponse from '../../../interfaces/IResponse';
import { IMovieSummary, IShowSummary } from '../../../interfaces/ISummaries';
import DetailsSectionProps from '../../../types/DetailsSectionProps';
import SimilarItemCard from './SimilarItemCard/SimilarItemCard';

const SimilarSection: React.FunctionComponent<DetailsSectionProps> = ({
  id,
  elementType,
}) => {
  const [similarItems, setSimilarItems] = useState<IResponse<
    IMovieSummary | IShowSummary
  > | null>(null);

  useEffect(() => {
    let mounted = true;
    const getData = async (id: number | string) => {
      const response =
        elementType === 'movie'
          ? await getSimilarMovies(Number(id))
          : await getSimilarShows(Number(id));

      if (mounted) {
        setSimilarItems(response);
      }
    };

    getData(id);

    return () => {
      mounted = false;
    };
  }, [id]);
  return (
    <section className="mt-12 pt-6 border-t border-solid border-gray-300">
      <h2 className="my-6 font-bold text-3xl text-black">
        Similar {elementType === 'movie' ? 'movies' : 'TV Shows'}
      </h2>
      <div className="horizontal-item-list mb-3 h-auto pl-2 pb-5 flex flex-row flex-nowrap overflow-x-scroll">
        {similarItems &&
          similarItems.results.map((item: IMovieSummary | IShowSummary) => (
            <SimilarItemCard
              key={item.id}
              item={item}
              elementType={elementType}
            />
          ))}
      </div>
    </section>
  );
};

export default SimilarSection;

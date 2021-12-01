import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReviewsByMovieId } from '../../../API/movies';
import IResponse from '../../../interfaces/IResponse';
import IReview from '../../../interfaces/IReview';
import routes from '../../../routes/routes';
import DetailsSectionProps from '../../../types/DetailsSectionProps';
import Review from './Review/Review';

const Reviews: React.FunctionComponent<DetailsSectionProps> = ({
  id,
  elementType,
}) => {
  const [reviewsData, setReviewsData] = useState<IResponse<IReview> | null>(
    null,
  );

  useEffect(() => {
    let mounted = true;
    const getData = async (id: number | string) => {
      const response = await getReviewsByMovieId(Number(id));

      if (mounted) {
        setReviewsData(response);
      }
    };

    getData(id);

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <>
      {reviewsData && reviewsData?.total_results > 0 ? (
        <section className="mt-12 pt-6 border-t border-solid border-gray-300 lg:w-5/6">
          <h2 className="mt-2 mb-4 font-bold text-3xl">
            Reviews{' '}
            <span className="text-2xl text-gray-500">
              {`(${reviewsData.total_results})`}
            </span>
          </h2>
          <div>
            <Review review={reviewsData.results[0]} />
          </div>
          <Link
            to={`${routes.MOVIE}${id}${routes.REVIEWS}`}
            className="text-lg border-b border-blue-500 text-blue-500"
          >
            See all reviews
          </Link>
        </section>
      ) : null}
    </>
  );
};

export default Reviews;

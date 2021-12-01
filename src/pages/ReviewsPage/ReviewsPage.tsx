import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getReviewsByMovieId } from '../../API/movies';
import EmptyReviews from '../../components/UI/Empty/EmptyReviews';
import Layout from '../../components/UI/Layout/Layout';
import Review from '../../components/Details/ReviewsSection/Review/Review';
import IResponse from '../../interfaces/IResponse';
import IReview from '../../interfaces/IReview';
import routes from '../../routes/routes';
import DetailsParams from '../../types/DetailsParams';
import scrollTop from '../../utils/scrollTop';

const ReviewsPage: React.FunctionComponent = () => {
  let { id }: DetailsParams = useParams();
  const [reviewsData, setReviewsData] = useState<IResponse<IReview> | null>(
    null,
  );

  useEffect(() => {
    scrollTop();
    let mounted = true;
    const getData = async () => {
      const response = await getReviewsByMovieId(Number(id));

      if (mounted) {
        setReviewsData(response);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id]);
  return reviewsData && reviewsData?.total_results > 0 ? (
    <>
      <div className="mb-5 bg-gray-900 text-white h-24 flex flex-row items-center">
        <Link to={`${routes.MOVIE}${id}`}>
          <button className="ml-4 sm:ml-12 py-2 px-4 text-base rounded-full bg-gray-600 transition-all hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-2">Back to movie</span>
          </button>
        </Link>
      </div>

      <Layout>
        <div className="sm:w-3/4 sm:mx-auto">
          {reviewsData.results?.map((review: IReview) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </Layout>
    </>
  ) : (
    <EmptyReviews />
  );
};

export default ReviewsPage;

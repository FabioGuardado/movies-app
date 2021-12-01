import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import emptyImage from '../../../assets/empty.png';

const EmptyReviews: React.FunctionComponent = () => {
  let { pathname } = useLocation();
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="empty flex flex-col items-center">
        <img className="mt-4" src={emptyImage} alt="no results" />
        <h1 className="px-3 sm:px-0 font-bold text-3xl mt-6 text-center">
          Oops! We don't have results for that search...
        </h1>
        <Link to={pathname.replace('/reviews', '')}>
          <button className="mt-4 py-2 px-4 text-white text-base rounded-full bg-gray-600 transition-all hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-2">
              Back to {pathname.includes('movie') ? 'movie' : 'TV show'}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyReviews;

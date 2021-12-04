import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/404.png';
import routes from '../../routes/routes';

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <section className="px-5 md:px-0 w-screen flex flex-col items-center justify-center">
      <div className="not-found-container">
        <img src={notFoundImage} alt="404" />
      </div>
      <h1 className="text-center font-bold text-gray-700 text-4xl">Oops!</h1>
      <p className="text-center text-xl italic mt-1">
        The page you were looking for could not be found
      </p>
      <div className="w-full flex flex-row items-center justify-center">
        <Link to={routes.HOME}>
          <button className="mt-5 py-1 px-4 rounded-md text-lg text-white bg-blue-800 transition-all hover:bg-blue-700">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

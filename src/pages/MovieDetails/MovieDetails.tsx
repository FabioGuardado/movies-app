import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

import { getMovieById } from '../../API/movies';
import formatQuantities from '../../utils/formatQuantities';
import scrollTop from '../../utils/scrollTop';

import CastSection from '../../components/Details/CastSection/CastSection';
import FactsSection from '../../components/Details/FactsSection/FactsSection';
import SimilarSection from '../../components/Details/SimilarSection/SimilarSection';
import GenreTag from '../../components/UI/GenreTag/GenreTag';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import Reviews from '../../components/Details/ReviewsSection/Reviews';

import IGenre from '../../interfaces/IGenre';
import IMovie from '../../interfaces/IMovie';
import DetailsParams from '../../types/DetailsParams';
import FavoriteButton from '../../components/Details/FavoriteButton/FavoriteButton';

const MovieDetails: React.FunctionComponent = () => {
  let { id }: DetailsParams = useParams();
  const [movieData, setMovieData] = useState<IMovie | null>(null);

  useEffect(() => {
    scrollTop();
    let mounted = true;

    const getData = async () => {
      const movieResponse = await getMovieById(Number(id));

      if (mounted) {
        setMovieData(movieResponse);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id]);
  return (
    <>
      {movieData ? (
        <>
          <section className="mb-5 flex flex-col sm:flex-row bg-gradient-to-r from-blue-900 via-blue-400 to-green-500 px-5 md:px-16 py-6">
            <div className="image-container mx-auto md:mr-10 flex flex-row justify-center">
              <img
                className="rounded-md"
                src={`${process.env.REACT_APP_IMAGE_URL}${movieData.poster_path}`}
                alt={movieData.title}
              />
            </div>
            <div className="sm:w-2/3 text-white self-center mt-3">
              <div id="header">
                <div className="flex flex-row">
                  <h1 className="mr-4 text-4xl font-bold mb-2">
                    {movieData.title}
                  </h1>
                  <FavoriteButton mediaType={'movie'} mediaId={movieData.id} />
                </div>
                <span className="p-1 mr-3 border border-solid border-white rounded-md uppercase">
                  {movieData.original_language}
                </span>
                <span>{movieData.release_date}</span>
                <div className="my-3 flex flex-row flex-wrap items-center">
                  {movieData.genres.map((genre: IGenre) => (
                    <GenreTag
                      key={genre.id}
                      genre={genre}
                      element_type="movie"
                    />
                  ))}
                </div>
              </div>
              <div id="community" className="my-8 flex flex-row">
                <div className="mr-8 flex flex-col items-center">
                  <span className="p-2 w-12 h-12 bg-gray-700 rounded-full flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <h4 className="font-bold text-base">Popularity</h4>
                  <span className="font-light">
                    {formatQuantities(Math.ceil(movieData.popularity))}
                  </span>
                </div>
                <div className="mr-8 flex flex-col items-center">
                  <span className="p-2 w-12 h-12 bg-gray-700 rounded-full flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <h4 className="font-bold text-base">Rating</h4>
                  <span className="font-light">{movieData.vote_average}</span>
                </div>
              </div>
              {movieData.overview && (
                <div id="overview" className="my-2">
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p className="text-base lg:w-4/5">{movieData.overview}</p>
                </div>
              )}
              <div id="links" className="my-3">
                {movieData.homepage && (
                  <a href={movieData.homepage}>
                    <button className="w-full sm:w-auto py-2 px-4 rounded-md bg-gray-700 transition-all hover:bg-gray-600">
                      <FontAwesomeIcon icon={faLink} />
                      <span className="ml-2">Website</span>
                    </button>
                  </a>
                )}
              </div>
            </div>
          </section>

          <Layout>
            <section className="mb-5 flex flex-col-reverse lg:flex-row">
              <CastSection id={movieData.id} elementType="movie" />
              <FactsSection data={movieData} />
            </section>
            <Reviews id={movieData.id} elementType="movie" />
            <SimilarSection id={movieData.id} elementType="movie" />
          </Layout>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetails;

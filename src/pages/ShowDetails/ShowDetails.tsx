import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

import { getShowById } from '../../API/shows';
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
import IShow from '../../interfaces/IShow';
import DetailsParams from '../../types/DetailsParams';
import SeasonsSection from '../../components/Details/SeasonsSection/SeasonsSection';

const ShowDetails: React.FunctionComponent = () => {
  const [showData, setShowData] = useState<IShow | null>(null);
  let { id }: DetailsParams = useParams();

  useEffect(() => {
    scrollTop();
    let mounted = true;

    const getData = async () => {
      const showsResponse = await getShowById(Number(id));

      if (mounted) {
        setShowData(showsResponse);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <>
      {showData ? (
        <>
          <section className="mb-5 flex flex-col sm:flex-row bg-gradient-to-r from-blue-900 via-blue-400 to-green-500 px-5 md:px-16 py-6">
            <div className="image-container mx-auto md:mr-10 flex flex-row justify-center">
              <img
                className="rounded-md"
                src={`${process.env.REACT_APP_IMAGE_URL}${showData.poster_path}`}
                alt={showData.name}
              />
            </div>
            <div className="sm:w-2/3 text-white self-center mt-3">
              <div id="header" className="">
                <h1 className="text-4xl font-bold mb-2">{showData.name}</h1>
                <span className="p-1 mr-3 border border-solid border-white rounded-md uppercase">
                  {showData.original_language}
                </span>
                <span>{showData.first_air_date}</span>
                <div className="my-3 flex flex-row flex-wrap items-center">
                  {showData.genres.map((genre: IGenre) => (
                    <GenreTag key={genre.id} genre={genre} />
                  ))}
                </div>
              </div>
              <div id="community" className="my-8 flex flex-row">
                <div className="mr-10 flex flex-col items-center">
                  <span className="p-2 w-12 h-12 bg-gray-700 rounded-full flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <h4 className="font-bold text-base">Popularity</h4>
                  <span className="font-light">
                    {formatQuantities(Math.ceil(showData.popularity))}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="p-2 w-12 h-12 bg-gray-700 rounded-full flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <h4 className="font-bold text-base">Rating</h4>
                  <span className="font-light">{showData.vote_average}</span>
                </div>
              </div>
              {showData.overview && (
                <div id="overview" className="my-2">
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p className="text-base lg:w-4/5">{showData.overview}</p>
                </div>
              )}
              <div id="links" className="my-3">
                {showData.homepage && (
                  <a href={showData.homepage}>
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
              <CastSection id={showData.id} elementType="tv" />
              <FactsSection data={showData} />
            </section>
            <SeasonsSection
              showId={showData.id}
              lastSeason={showData.seasons[showData.seasons.length - 1]}
            />
            <Reviews id={showData.id} elementType="tv" />
            <SimilarSection id={showData.id} elementType="tv" />
          </Layout>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ShowDetails;

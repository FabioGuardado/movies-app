import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import routes from '../../routes/routes';
import DetailsParams from '../../types/DetailsParams';
import scrollTop from '../../utils/scrollTop';
import { getSeasonDetails } from '../../API/shows';
import SeasonCard from '../../components/Details/SeasonsSection/SeasonCard/SeasonCard';
import { ISeasonSummary } from '../../interfaces/ISummaries';
import ISeason from '../../interfaces/ISeason';
import IEpisode from '../../interfaces/IEpisode';
import EpisodeCard from '../../components/Details/SeasonsSection/EpisodeCard/EpisodeCard';

const SeasonDetails: React.FunctionComponent = () => {
  let { id, seasonNumber }: DetailsParams = useParams();
  const [seasonDetails, setSeasonDetails] = useState<ISeason | null>(null);

  useEffect(() => {
    scrollTop();
    let mounted = true;
    const getData = async () => {
      const response = await getSeasonDetails(Number(id), Number(seasonNumber));

      if (mounted) {
        setSeasonDetails(response);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id, seasonNumber]);

  return seasonDetails ? (
    <>
      <div className="mb-5 px-4 sm:pl-16 lg:pl-48 bg-gray-900 text-white h-auto flex flex-col">
        <h1 className="my-4 font-bold text-3xl">
          {`${seasonDetails.name} `}
          <span className="text-2xl text-gray-500 font-medium">{`(${seasonDetails.air_date})`}</span>
        </h1>
        <Link to={`${routes.SHOW}${id}${routes.SEASONS}`}>
          <button className="mb-4 py-2 px-4 text-base rounded-full bg-gray-600 transition-all hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-2">Back to seasons</span>
          </button>
        </Link>
      </div>

      <Layout>
        <div className="sm:w-3/4 sm:mx-auto">
          {seasonDetails.episodes.map((episode: IEpisode) => (
            <EpisodeCard episode={episode} />
          ))}
        </div>
      </Layout>
    </>
  ) : (
    <Loader />
  );
};

export default SeasonDetails;

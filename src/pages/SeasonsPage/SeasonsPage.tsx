import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import routes from '../../routes/routes';
import DetailsParams from '../../types/DetailsParams';
import scrollTop from '../../utils/scrollTop';
import { getShowById } from '../../API/shows';
import SeasonCard from '../../components/Details/SeasonsSection/SeasonCard/SeasonCard';
import { ISeasonSummary } from '../../interfaces/ISummaries';

const SeasonsPage: React.FunctionComponent = () => {
  let { id }: DetailsParams = useParams();
  const [seasonsData, setSeasonsData] = useState<ISeasonSummary[] | null>(null);

  useEffect(() => {
    scrollTop();
    let mounted = true;
    const getData = async () => {
      const response = await getShowById(Number(id));

      if (mounted) {
        setSeasonsData(response.seasons);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id]);

  return seasonsData ? (
    <>
      <div className="mb-5 bg-gray-900 text-white h-24 flex flex-row items-center">
        <Link to={`${routes.SHOW}${id}`}>
          <button className="ml-4 sm:ml-12 py-2 px-4 text-base rounded-full bg-gray-600 transition-all hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-2">Back to TV show</span>
          </button>
        </Link>
      </div>

      <Layout>
        <h1 className="my-4 font-bold text-3xl">
          TV show seasons{' '}
          <span className="text-2xl text-gray-500">{`(${seasonsData.length})`}</span>
        </h1>
        <div className="sm:w-3/4 sm:mx-auto">
          {seasonsData.map((season: ISeasonSummary) => (
            <SeasonCard key={season.id} showId={id} season={season} />
          ))}
        </div>
      </Layout>
    </>
  ) : (
    <Loader />
  );
};

export default SeasonsPage;

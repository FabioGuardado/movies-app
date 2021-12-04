import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCreditsByMovieId } from '../../API/movies';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import ICast from '../../interfaces/ICast';
import ICredits from '../../interfaces/ICredits';
import ICrew from '../../interfaces/ICrew';
import routes from '../../routes/routes';
import DetailsParams from '../../types/DetailsParams';
import scrollTop from '../../utils/scrollTop';
import defaultImage from '../../assets/user-icon.png';
import { getCreditsByShowId } from '../../API/shows';

const CastPage: React.FunctionComponent = () => {
  let { pathname } = useLocation();
  let { id }: DetailsParams = useParams();
  const [creditsData, setCreditsData] = useState<ICredits | null>(null);

  useEffect(() => {
    scrollTop();
    let mounted = true;
    const getData = async () => {
      const response = pathname.includes('/movie')
        ? await getCreditsByMovieId(Number(id))
        : await getCreditsByShowId(Number(id));

      if (mounted) {
        setCreditsData(response);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id, pathname]);
  return creditsData ? (
    <>
      <div className="mb-5 bg-gray-900 text-white h-24 flex flex-row items-center">
        <Link
          to={`${
            pathname.includes('/movie') ? routes.MOVIE : routes.SHOW
          }${id}`}
        >
          <button className="ml-4 sm:ml-12 py-2 px-4 text-base rounded-full bg-gray-600 transition-all hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-2">
              Back to {pathname.includes('/movie') ? 'movie' : 'show'}
            </span>
          </button>
        </Link>
      </div>

      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:w-1/2">
            <h1 className="mb-5 font-bold text-3xl">
              Cast{' '}
              <span className="text-2xl text-gray-500">{`(${creditsData.cast.length})`}</span>
            </h1>
            {creditsData.cast.map((castMember: ICast) => (
              <Link to={`${routes.PERSON}${castMember.id}`}>
                <div className="credits-list-item">
                  <img
                    src={
                      castMember.profile_path
                        ? `${process.env.REACT_APP_IMAGE_URL}${castMember.profile_path}`
                        : defaultImage
                    }
                    alt={castMember.name}
                  />
                  <div className="ml-4">
                    <h1 className="text-base font-bold">{castMember.name}</h1>
                    <p>{castMember.character}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="sm:w-1/2">
            <h1 className="mb-5 font-bold text-3xl">
              Crew{' '}
              <span className="text-2xl text-gray-500">{`(${creditsData.crew.length})`}</span>
            </h1>
            {creditsData.crew.map((crewMember: ICrew) => (
              <Link to={`${routes.PERSON}${crewMember.id}`}>
                <div className="credits-list-item">
                  <img
                    src={
                      crewMember.profile_path
                        ? `${process.env.REACT_APP_IMAGE_URL}${crewMember.profile_path}`
                        : defaultImage
                    }
                    alt={crewMember.name}
                  />
                  <div className="ml-4">
                    <h1 className="text-base font-bold">{crewMember.name}</h1>
                    <p>{crewMember.job}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  ) : (
    <Loader />
  );
};

export default CastPage;

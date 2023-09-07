import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonById } from '../../API/persons';

import defaultImage from '../../assets/user-icon.png';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import IPerson from '../../interfaces/IPerson';
import DetailsParams from '../../types/DetailsParams';
import scrollTop from '../../utils/scrollTop';

const PersonDetails: React.FunctionComponent = () => {
  let { id }: DetailsParams = useParams();
  const [personData, setPersonData] = useState<IPerson | null>(null);

  useEffect(() => {
    scrollTop();
    let mounted = true;
    const getData = async () => {
      const response = await getPersonById(Number(id));

      if (mounted) {
        setPersonData(response);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [id]);

  return personData ? (
    <Layout>
      <div className="person-details my-8 flex flex-col lg:flex-row">
        <img
          className="rounded-md"
          src={
            personData.profile_path
              ? `${import.meta.env.VITE_IMAGE_URL}${personData.profile_path}`
              : defaultImage
          }
          alt={personData.name}
        />
        <div className="flex flex-col lg:pl-8">
          <div className="mt-4 lg:mt-0 ">
            <h3 className="text-center lg:text-left mb-4 text-3xl font-bold">
              {personData.name}
            </h3>
            <p className="text-sm">
              {personData.biography
                ? personData.biography
                : `We don't have a biography for ${personData.name}`}
            </p>
          </div>
          <h3 className="mt-4 text-xl font-bold">Personal info</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <div className="my-2">
              <h4 className="font-bold">Known for</h4>
              <p>
                {personData.known_for_department
                  ? personData.known_for_department
                  : '-'}
              </p>
            </div>
            <div className="my-2">
              <h4 className="font-bold">Gender</h4>
              {personData.gender === 1 && <p>Female</p>}
              {personData.gender === 2 && <p>Male</p>}
              {personData.gender !== 1 && personData.gender !== 2 && '-'}
            </div>
            <div className="my-2">
              <h4 className="font-bold">Birthday</h4>
              <p>{personData.birthday ? personData.birthday : '-'}</p>
            </div>
            {personData.deathday && (
              <div className="my-2">
                <h4 className="font-bold">Deathday</h4>
                <p>{personData.deathday}</p>
              </div>
            )}
            <div className="my-2">
              <h4 className="font-bold">Place of birth</h4>
              <p>
                {personData.place_of_birth ? personData.place_of_birth : '-'}
              </p>
            </div>
            <div className="my-2">
              <h4 className="font-bold">Also known as</h4>
              {personData.also_known_as.length > 0
                ? personData.also_known_as.map((alias: string) => (
                    <span key={alias} className="inline-block lg:block">
                      {`${alias},`}
                    </span>
                  ))
                : '-'}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Loader />
  );
};

export default PersonDetails;

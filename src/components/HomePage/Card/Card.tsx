import React from 'react';
import { Link } from 'react-router-dom';
import { faStar, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import HomePageCardProps from '../../../types/HomePageCardProps';
import CardItem from './CardItem/CardItem';
import {
  getDate,
  getDetailsLink,
  getNameOrTitle,
} from '../../../utils/TypeGuards';

const HomePageCard: React.FunctionComponent<HomePageCardProps> = ({ data }) => {
  return (
    <Link to={getDetailsLink(data)}>
      <div className="home-page-card mr-6 flex flex-col text-gray-600 bg-gray-200 rounded-md cursor-pointer overflow-hidden shadow transition-all hover:bg-gray-800 hover:text-gray-100">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}${data.poster_path}`}
          alt={getNameOrTitle(data)}
        />
        <div className="h-full m-3 flex flex-col justify-between">
          <h1 className="h-12 overflow-hidden text-base font-bold my-1 ">
            {getNameOrTitle(data)}
          </h1>
          <div>
            <CardItem itemIcon={faStar} data={data.vote_average} />
            <CardItem itemIcon={faCalendarDay} data={getDate(data)} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;

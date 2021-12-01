import React from 'react';
import { Link } from 'react-router-dom';
import {
  faStar,
  faUsers,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
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
      <div className="flex flex-col text-gray-600 bg-gray-200 rounded-md cursor-pointer overflow-hidden shadow transition-all transform hover:scale-105 hover:bg-gray-800 hover:text-gray-100">
        <div>
          <img
            className="h-auto w-full"
            src={`${process.env.REACT_APP_IMAGE_URL}${data.poster_path}`}
            alt={getNameOrTitle(data)}
          />
        </div>
        <div className="h-full m-3 flex flex-col justify-between">
          <h1 className="text-base font-bold my-1 ">{getNameOrTitle(data)}</h1>
          <div>
            <CardItem itemIcon={faUsers} data={Math.ceil(data.popularity)} />
            <CardItem itemIcon={faStar} data={data.vote_average} />
            <CardItem itemIcon={faCalendarDay} data={getDate(data)} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;

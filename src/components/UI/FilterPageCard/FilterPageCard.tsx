import React from 'react';
import { Link } from 'react-router-dom';
import HomePageCardProps from '../../../types/HomePageCardProps';
import { getDetailsLink, getNameOrTitle } from '../../../utils/TypeGuards';

import defaultImage from '../../../assets/backdrop-default-results.png';

const FilterPageCard: React.FunctionComponent<HomePageCardProps> = ({
  data,
}) => {
  return (
    <Link to={getDetailsLink(data)}>
      <div className="filter-page-card mx-auto flex flex-col text-gray-600 bg-gray-200 rounded-md cursor-pointer overflow-hidden shadow transition-all hover:bg-gray-800 hover:text-gray-100">
        <img
          src={
            data.poster_path
              ? `${process.env.REACT_APP_IMAGE_URL}${data.poster_path}`
              : defaultImage
          }
          alt={getNameOrTitle(data)}
        />
        <div className="h-full m-3 flex flex-col justify-between">
          <h1 className="h-12 overflow-hidden text-base font-bold my-1 ">
            {getNameOrTitle(data)}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default FilterPageCard;

import React from 'react';
import { Link } from 'react-router-dom';
import ResultCardProps from '../../../types/ResultCardProps';
import {
  getDetailsLink,
  getNameOrTitle,
  getPicture,
} from '../../../utils/TypeGuards';

import defaultImage from '../../../assets/backdrop-default-results.png';

const ResultCard: React.FunctionComponent<ResultCardProps> = ({ data }) => {
  return (
    <Link to={getDetailsLink(data)}>
      <div className="results-card mx-auto flex flex-col text-gray-800 rounded-md cursor-pointer overflow-hidden shadow transition-all hover:bg-gray-800 hover:text-white">
        <img
          src={
            getPicture(data)
              ? `${import.meta.env.VITE_IMAGE_URL}${getPicture(data)}`
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

export default ResultCard;

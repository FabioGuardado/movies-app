import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes/routes';
import { isCast } from '../../../utils/TypeGuards';

import defaultImage from '../../../assets/user-icon.png';
import PersonCardProps from '../../../types/PersonCardProps';

const PersonCard: React.FunctionComponent<PersonCardProps> = ({ person }) => {
  return (
    <Link to={`${routes.PERSON}${person.id}`}>
      <div className="person-card mr-4 rounded-md overflow-hidden shadow border border-gray-200 border-solid object-cover">
        <div className="">
          <img
            src={
              person.profile_path
                ? `${process.env.REACT_APP_IMAGE_URL}${person.profile_path}`
                : defaultImage
            }
            alt={person.name}
          />
        </div>
        <div className="p-2 h-28">
          <h3 className="font-bold">{person.name}</h3>
          {isCast(person) && <span className="text-sm">{isCast(person)}</span>}
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;

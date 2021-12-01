import React from 'react';
import { Link } from 'react-router-dom';
import GenreTagProps from '../../../types/GenreTagProps';

const GenreTag: React.FunctionComponent<GenreTagProps> = ({ genre }) => {
  return (
    <Link to={`/search?tag=${genre.id}`}>
      <div className="mr-1 mt-2 sm:mt-0 py-1 px-4 text-sm text-white border border-solid border-white rounded-full transition-all hover:bg-white hover:text-gray-600">
        {genre.name}
      </div>
    </Link>
  );
};

export default GenreTag;

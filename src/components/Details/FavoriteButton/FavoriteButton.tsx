import React from 'react';
import { faBookmark as BookMarkIconRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as BookmarkIconSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FavoriteButtonProps from '../../../types/FavoriteButtonProps';
import useFavorites from '../../../hooks/useFavorites';

const FavoriteButton: React.FunctionComponent<FavoriteButtonProps> = ({
  mediaType,
  mediaId,
}) => {
  const { isFavorite, changeFavoriteStatus } = useFavorites(mediaType, mediaId);

  const handleClick = () => {
    changeFavoriteStatus(!isFavorite);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className={`p-2 w-12 h-12 ${
          isFavorite
            ? 'bg-pink-600 hover:bg-pink-500'
            : 'bg-blue-700 hover:bg-blue-600'
        } rounded-full flex flex-row justify-center items-center`}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={isFavorite ? BookmarkIconSolid : BookMarkIconRegular}
        />
      </button>
    </div>
  );
};

export default FavoriteButton;

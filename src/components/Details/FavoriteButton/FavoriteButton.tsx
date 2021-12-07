import React from 'react';
import { faBookmark as BookMarkIconRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as BookmarkIconSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { markAsFavorite } from '../../../API/auth';

const FavoriteButton: React.FunctionComponent<FavoriteButtonProps> = ({
  sessionId,
  accountId,
  mediaType,
  mediaId,
  favorite,
  setIsFavorite,
  setNotification,
}) => {
  const handleClick = async () => {
    if (sessionId && accountId) {
      const favoriteResponse = await markAsFavorite(
        sessionId,
        accountId,
        mediaId,
        mediaType,
        !favorite,
      );

      setNotification({
        active: true,
        message: favoriteResponse.status_message,
      });

      setIsFavorite(!favorite);
    } else {
      setNotification({
        active: true,
        message: 'You have to be logged in to add favorites',
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className={`p-2 w-12 h-12 ${
          favorite
            ? 'bg-pink-600 hover:bg-pink-500'
            : 'bg-blue-700 hover:bg-blue-600'
        } rounded-full flex flex-row justify-center items-center`}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={favorite ? BookmarkIconSolid : BookMarkIconRegular}
        />
      </button>
    </div>
  );
};

export default FavoriteButton;

type FavoriteButtonProps = {
  sessionId: string | null;
  accountId: string | number | null | undefined;
  mediaType: 'movie' | 'tv';
  mediaId: number;
  favorite: boolean;
  setIsFavorite: CallableFunction;
  setNotification: CallableFunction;
};

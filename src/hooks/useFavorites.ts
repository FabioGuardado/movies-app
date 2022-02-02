import { useState, useEffect } from 'react';
import { markAsFavorite } from '../API/auth';
import { getAccountStates } from '../API/movies';
import useAlertContext from './useAlertContext';
import useAuth from './useAuth';

const useFavorites = (elementType: string, elementId: number) => {
  const { user, sessionId } = useAuth();
  const { showSuccessAlert, showErrorAlert } = useAlertContext();
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);

  const changeFavoriteStatus = async (newStatus: boolean) => {
    if (sessionId && user?.id) {
      const favoriteResponse = await markAsFavorite(
        sessionId,
        user.id,
        elementId,
        elementType,
        newStatus,
      );

      showSuccessAlert(favoriteResponse.status_message, 5000);
      setIsFavorite(newStatus);
    } else {
      showErrorAlert('You must be logged to add favorites', 5000);
    }
  };

  useEffect(() => {
    const validateIsFavorite = async () => {
      if (sessionId) {
        const accountState = await getAccountStates(
          Number(elementId),
          sessionId,
        );
        if (accountState.favorite) setIsFavorite(true);
      }
    };

    validateIsFavorite();
  }, [elementId, elementType]);

  return { isFavorite, changeFavoriteStatus };
};

export default useFavorites;

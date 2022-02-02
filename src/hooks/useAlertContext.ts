import { useContext } from 'react';
import AlertContext from '../context/alertContext';

function useAlertContext() {
  const alertContext = useContext(AlertContext);

  if (!alertContext) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }

  return alertContext;
}

export default useAlertContext;

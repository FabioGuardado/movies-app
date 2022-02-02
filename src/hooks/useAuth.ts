import { useContext } from 'react';
import AuthContext from '../context/authContext';

const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }

  return authContext;
};

export default useAuth;

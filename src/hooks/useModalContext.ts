import { useContext } from 'react';
import ModalContext from '../context/modalContext';

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }

  return modalContext;
};

export default useModalContext;

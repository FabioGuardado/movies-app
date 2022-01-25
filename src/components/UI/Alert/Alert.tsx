import { useContext } from 'react';
import { createPortal } from 'react-dom';
import AlertContext from '../../../context/alertContext';

const domPortalNode = document.getElementById('alert');

const Alert = () => {
  const alertContext = useContext(AlertContext);

  if (alertContext?.alert !== 'NONE' && domPortalNode) {
    return createPortal(
      <div
        className={`text-white p-5 font-bold text-lg absolute bottom-5 left-8 z-50 rounded shadow-2xl ${
          alertContext?.alert === 'SUCCESS' && 'bg-green-700'
        } ${alertContext?.alert === 'ERROR' && 'bg-red-700'}`}
      >
        {alertContext?.alertText}
      </div>,
      domPortalNode,
    );
  } else {
    return null;
  }
};

export default Alert;

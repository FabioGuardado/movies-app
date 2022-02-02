import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import useAlertContext from '../../../hooks/useAlertContext';

const domPortalNode = document.getElementById('alert');

const Alert = () => {
  const { alert, clearAlerts } = useAlertContext();

  if (alert.status !== 'NONE' && domPortalNode) {
    return createPortal(
      <div
        className={`fixed text-white p-5 font-bold text-lg bottom-5 left-8 z-50 rounded shadow-2xl ${
          alert.status === 'SUCCESS' && 'bg-green-600 hover:bg-green-700'
        } ${alert.status === 'ERROR' && 'bg-red-600 hover:bg-red-700'}`}
      >
        <span className="mr-4">{alert.body}</span>
        <button onClick={() => clearAlerts()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>,
      domPortalNode,
    );
  } else {
    return null;
  }
};

export default Alert;

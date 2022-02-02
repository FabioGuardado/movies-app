import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import ModalContext from '../../../../context/modalContext';

const domModalNode = document.getElementById('modal');

const MainModal: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);

  const handleClick = () => {
    modalContext?.setModalBody(null);
  };

  if (modalContext?.modalBody && domModalNode) {
    return createPortal(
      <div className="fixed z-50 w-full h-screen bg-gray-700 bg-opacity-80 flex items-center justify-center shadow-lg mb-5">
        <div className="bg-white p-8 rounded shadow-lg w-2/5">
          <div className="w-full flex justify-end mb-5">
            <button className="text-4xl" onClick={handleClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {modalContext?.modalBody}
        </div>
      </div>,
      domModalNode,
    );
  } else {
    return null;
  }
};

export default MainModal;

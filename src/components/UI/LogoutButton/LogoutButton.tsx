import React, { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import ModalContext from '../../../context/modalContext';

const LogoutButton: React.FunctionComponent = () => {
  const { logout } = useAuth();
  const modalContext = useContext(ModalContext);

  const logoutModalBody = (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-gray-800 font-bold mb-8">
        Do you really want to log out?
      </h1>
      <div className="w-full flex flex-row items-center justify-evenly">
        <button
          className="py-2 px-4 bg-green-600 text-white text-lg rounded-lg shadow-md"
          onClick={() => logout()}
        >
          Yes, see you later!
        </button>
        <button
          className="py-2 px-4 bg-red-600 text-white text-lg rounded-lg shadow-md"
          onClick={() => modalContext?.setModalBody(null)}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <button
      className="px-4 py-2 rounded-md bg-red-600 transition-all hover:bg-red-500"
      onClick={() => modalContext?.setModalBody(logoutModalBody)}
    >
      Logout
    </button>
  );
};

export default LogoutButton;

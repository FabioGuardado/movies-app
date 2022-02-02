import React, { createContext, useState } from 'react';
import {
  ModalProviderProps,
  ModalProviderValue,
} from '../types/ModalContextTypes';

const ModalContext = createContext<ModalProviderValue | null>(null);

export const ModalProvider: React.FunctionComponent<ModalProviderProps> = ({
  children,
}) => {
  const [modalBody, setModalBody] = useState<React.ReactNode | null>(null);

  return (
    <ModalContext.Provider value={{ modalBody, setModalBody }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

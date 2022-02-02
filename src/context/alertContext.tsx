import React, { useState, createContext } from 'react';
import IAlertStatus from '../interfaces/IAlertStatus';

import {
  AlertProviderProps,
  AlertProviderValue,
} from '../types/AlertContextTypes';

const AlertContext = createContext<AlertProviderValue | null>(null);

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({
  children,
}) => {
  const [alert, setAlert] = useState<IAlertStatus>({
    status: 'NONE',
    body: null,
  });

  const showSuccessAlert = (alertBody: string, timeOut?: number) => {
    setAlert({ status: 'SUCCESS', body: alertBody });
    if (timeOut) {
      setTimeout(() => {
        clearAlerts();
      }, timeOut);
    }
  };

  const showErrorAlert = (alertBody: string, timeOut?: number) => {
    setAlert({ status: 'ERROR', body: alertBody });
    if (timeOut) {
      setTimeout(() => {
        clearAlerts();
      }, timeOut);
    }
  };

  const clearAlerts = () => {
    setAlert({ status: 'NONE', body: null });
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        showSuccessAlert,
        showErrorAlert,
        clearAlerts,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

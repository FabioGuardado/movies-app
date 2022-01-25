import React, { useState, createContext } from 'react';

import {
  AlertProviderProps,
  AlertProviderValue,
} from '../types/AlertContextTypes';

const AlertContext = createContext<AlertProviderValue | null>(null);

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({
  children,
}) => {
  const [alert, setAlert] = useState<string>('NONE');
  const [alertText, setAlertText] = useState<string | null>(null);

  return (
    <AlertContext.Provider
      value={{
        alert: alert,
        alertText: alertText,
        success: (text: string, timeout: number) => {
          setAlertText(text);
          setAlert('SUCCESS');
          setTimeout(() => {
            setAlert('NONE');
          }, timeout * 1000 || 10000);
        },
        error: (text: string, timeout: number) => {
          setAlertText(text);
          setAlert('ERROR');
          setTimeout(() => {
            setAlert('NONE');
          }, timeout * 1000 || 10000);
        },
        clear: () => setAlert('NONE'),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

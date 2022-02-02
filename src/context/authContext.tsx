import React, { createContext } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';
import { AuthContextValue, AuthProviderProps } from '../types/AuthContextTypes';

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContext;

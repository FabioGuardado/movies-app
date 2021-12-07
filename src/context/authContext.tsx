import React, { createContext, ReactElement } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';

export const authContext = createContext<Partial<IAuthContext>>({});

export const ProvideAuth: React.FunctionComponent<ProvideAuthProps> = ({
  children,
}) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

type ProvideAuthProps = {
  children: ReactElement;
};

interface IAuthContext {
  user?: null | {};
  login?: () => void;
  createSession?: (requestToken: string) => void;
  logout?: () => void;
}

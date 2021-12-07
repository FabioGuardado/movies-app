import React, { createContext, ReactElement } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';
import IUser from '../interfaces/IUser';

export const authContext = createContext<Partial<IAuthContext>>({
  user: null,
});

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
  user: null | IUser;
  login?: () => void;
  createSession?: (requestToken: string) => void;
  logout?: () => void;
}

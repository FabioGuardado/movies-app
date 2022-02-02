import IUser from '../interfaces/IUser';

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextValue = {
  user: IUser | null;
  sessionId: string | null;
  login: CallableFunction;
  createSession: (requestToken: string) => void;
  logout: CallableFunction;
};

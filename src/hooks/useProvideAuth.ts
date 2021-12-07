import { useState } from 'react';
import {
  deleteSession,
  getRequestToken,
  getSession,
  getUser,
} from '../API/auth';
import IUser from '../interfaces/IUser';
import routes from '../routes/routes';

function useProvideAuth() {
  const [user, setUser] = useState<IUser | null>(() => {
    let user = localStorage.getItem('tmdbUser');
    let parsedUser: IUser | null = null;
    if (user) {
      parsedUser = JSON.parse(user);
    }
    return parsedUser;
  });

  const login = async () => {
    const data = await getRequestToken();
    window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/approved`;
  };

  const createSession = async (requestToken: string) => {
    const { session_id: sessionId } = await getSession(requestToken);
    localStorage.setItem('sessionId', sessionId);
    const user = await getUser(sessionId);
    localStorage.setItem('tmdbUser', JSON.stringify(user));
  };

  const logout = async () => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      console.log(sessionId);
      const { success } = await deleteSession(sessionId);

      if (success) {
        localStorage.removeItem('sessionId');
        localStorage.removeItem('tmdbUser');
        window.location.href = `${routes.HOME}`;
      }
    }
  };

  return {
    user,
    login,
    createSession,
    logout,
  };
}

export default useProvideAuth;

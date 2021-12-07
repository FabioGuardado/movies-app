import { del, get, post } from '../helpers/requestService';
import ICreateSessionResponse from '../interfaces/ICreateSessionResponse';
import IRequestTokenResponse from '../interfaces/IRequestTokenResponse';
import IUser from '../interfaces/IUser';

const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

export const getRequestToken = async () => {
  const response = await get<IRequestTokenResponse>(
    `/authentication/token/new?api_key=${API_KEY}`,
  );
  return response;
};

export const getSession = async (requestToken: string) => {
  const response = await post<sessionBody, ICreateSessionResponse>(
    `/authentication/session/new?api_key=${API_KEY}`,
    { request_token: requestToken },
  );
  return response;
};

type sessionBody = {
  request_token: string;
};

export const getUser = async (sessionId: string) => {
  const response = await get<IUser>(
    `/account?api_key=${API_KEY}&session_id=${sessionId}`,
  );
  return response;
};

export const deleteSession = async (sessionId: string) => {
  const response = await del<deleteSessionResponse>(
    `/authentication/session?api_key=${API_KEY}&session_id=${sessionId}`,
  );
  return response;
};

type deleteSessionResponse = {
  success: boolean;
};

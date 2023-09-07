import { del, get, post } from '../helpers/requestService';
import ICreateSessionResponse from '../interfaces/ICreateSessionResponse';
import IFavoriteBody from '../interfaces/IFavoriteBody';
import IFavoriteResponse from '../interfaces/IFavoriteResponse';
import IRequestTokenResponse from '../interfaces/IRequestTokenResponse';
import IUser from '../interfaces/IUser';

const API_KEY = import.meta.env.VITE_API_KEY;

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

export const markAsFavorite = async (
  sessionId: string,
  accountId: string | number,
  mediaId: number,
  mediaType: string,
  favorite: boolean,
) => {
  const response = await post<IFavoriteBody, IFavoriteResponse>(
    `/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
    { media_type: mediaType, media_id: mediaId, favorite: favorite },
  );
  return response;
};

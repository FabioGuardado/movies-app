import { get } from '../helpers/requestService';
import IResponse from '../interfaces/IResponse';
import { IShowSummary } from '../interfaces/ISummaries';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getPopularShows() {
  const response = await get<IResponse<IShowSummary>>(
    `/tv/popular?api_key=${API_KEY}`,
  );

  return response;
}

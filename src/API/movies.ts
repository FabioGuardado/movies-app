import { get } from '../helpers/requestService';
import IResponse from '../interfaces/IResponse';
import { IMovieSummary } from '../interfaces/ISummaries';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getPopularMovies() {
  const response = await get<IResponse<IMovieSummary>>(
    `/movie/popular?api_key=${API_KEY}`,
  );

  return response;
}

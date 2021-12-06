import { get } from '../helpers/requestService';
import { ICertificationsList } from '../interfaces/ICertification';
import { IGenresList } from '../interfaces/IGenre';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getMovieCertifications() {
  const response = await get<ICertificationsList>(
    `/certification/movie/list?api_key=${API_KEY}`,
  );

  return response;
}

export async function getMovieGenres() {
  const response = await get<IGenresList>(
    `/genre/movie/list?api_key=${API_KEY}`,
  );
  return response;
}

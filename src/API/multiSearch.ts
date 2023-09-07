import { get } from '../helpers/requestService';
import IResponse from '../interfaces/IResponse';
import {
  IMovieSummary,
  IPersonSummary,
  IShowSummary,
} from '../interfaces/ISummaries';

const API_KEY = import.meta.env.VITE_API_KEY;

export async function multiSearch(query: string, page: number) {
  const response = await get<
    IResponse<IMovieSummary | IShowSummary | IPersonSummary>
  >(`/search/multi?query=${query}&page=${page}&api_key=${API_KEY}`);

  return response;
}

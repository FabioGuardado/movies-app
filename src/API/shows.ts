import { get } from '../helpers/requestService';
import ICredits from '../interfaces/ICredits';
import IResponse from '../interfaces/IResponse';
import IReview from '../interfaces/IReview';
import IShow from '../interfaces/IShow';
import { IShowSummary } from '../interfaces/ISummaries';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getPopularShows() {
  const response = await get<IResponse<IShowSummary>>(
    `/tv/popular?api_key=${API_KEY}`,
  );

  return response;
}

export async function getShowById(showId: number) {
  const response = await get<IShow>(`/tv/${showId}?api_key=${API_KEY}`);
  return response;
}

export async function getCreditsByShowId(showId: number) {
  const response = await get<ICredits>(
    `/tv/${showId}/credits?api_key=${API_KEY}`,
  );
  return response;
}

export async function getReviewsByShowId(showId: number) {
  const response = await get<IResponse<IReview>>(
    `/tv/${showId}/reviews?api_key=${API_KEY}`,
  );
  return response;
}

export async function getSimilarShows(showId: number) {
  const response = await get<IResponse<IShowSummary>>(
    `/tv/${showId}/similar?api_key=${API_KEY}`,
  );

  return response;
}

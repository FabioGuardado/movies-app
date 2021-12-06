import { get } from '../helpers/requestService';
import ICredits from '../interfaces/ICredits';
import IMovie from '../interfaces/IMovie';
import IResponse from '../interfaces/IResponse';
import IReview from '../interfaces/IReview';
import { IMovieSummary } from '../interfaces/ISummaries';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getMoviesWithFilters(
  page: number,
  certification?: string | null,
  genre?: number | null,
  release_year?: number | null,
) {
  const response = await get<IResponse<IMovieSummary>>(
    `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${
      page ? page : 1
    }${
      certification
        ? `&certification_country=US&certification=${certification.trim()}`
        : ''
    }${genre ? `&with_genres=${genre}` : ''}${
      release_year ? `&primary_release_year=${release_year}` : ''
    }
  `,
  );
  return response;
}

export async function getPopularMovies() {
  const response = await get<IResponse<IMovieSummary>>(
    `/movie/popular?api_key=${API_KEY}`,
  );

  return response;
}

export async function getMovieById(movieId: number) {
  const response = await get<IMovie>(`/movie/${movieId}?api_key=${API_KEY}`);
  return response;
}

export async function getCreditsByMovieId(movieId: number) {
  const response = await get<ICredits>(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  return response;
}

export async function getReviewsByMovieId(movieId: number, page?: number) {
  const response = await get<IResponse<IReview>>(
    `/movie/${movieId}/reviews?${
      page ? `page=${page}&` : ''
    }api_key=${API_KEY}`,
  );
  return response;
}

export async function getSimilarMovies(movieId: number) {
  const response = await get<IResponse<IMovieSummary>>(
    `/movie/${movieId}/similar?api_key=${API_KEY}`,
  );

  return response;
}

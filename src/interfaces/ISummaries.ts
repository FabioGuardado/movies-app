export interface IMovieSummary {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  media_type?: string;
}

export interface IShowSummary {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
  media_type?: string;
}

export interface ISeasonSummary {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface IPersonSummary {
  adult: boolean;
  gender: number;
  id: number;
  known_for: IMovieSummary | IShowSummary[];
  known_for_department: string;
  media_type: string;
  name: string;
  popularity: number;
  profile_path: string;
}

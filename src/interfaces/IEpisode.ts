interface IEpisode {
  air_date: string;
  episode_number: number;
  crew: ICrew[];
  guest_stars: IGuestStar[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: null | string;
  vote_average: number;
  vote_count: number;
}

export default IEpisode;

interface ICrew {
  job: string;
  department: string;
  credit_id: string;
  adult: boolean | null;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
}
interface IGuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
}

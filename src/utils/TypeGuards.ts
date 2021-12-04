import ICast from '../interfaces/ICast';
import ICrew from '../interfaces/ICrew';
import IMovie from '../interfaces/IMovie';
import IShow from '../interfaces/IShow';
import { IMovieSummary, IShowSummary } from '../interfaces/ISummaries';

export const getNameOrTitle = (element: IMovieSummary | IShowSummary) => {
  if ('title' in element) return element.title;

  return element.name;
};

export const getDate = (element: IMovieSummary | IShowSummary) => {
  if ('first_air_date' in element) return element.first_air_date;

  return element.release_date;
};

export const getDetailsLink = (element: IMovieSummary | IShowSummary) => {
  if ('title' in element) return `/movie/${element.id}`;

  return `/show/${element.id}`;
};

export const isCast = (element: ICast | ICrew) => {
  if ('character' in element) return element.character;
  return null;
};

export const isMovie = (element: IMovie | IShow) => {
  if ('title' in element) return true;
  return false;
};

export const isShow = (element: IMovie | IShow) => {
  if ('name' in element) return true;
  return false;
};

export const getOriginalNameOrTitle = (element: IShow | IMovie) => {
  if ('original_name' in element) return element.original_name;
  return element.original_title;
};

export const getBudget = (element: IShow | IMovie) => {
  if ('budget' in element) return element.budget;
  return null;
};

export const getRevenue = (element: IShow | IMovie) => {
  if ('revenue' in element) return element.revenue;
  return null;
};

export const getType = (element: IShow | IMovie) => {
  if ('type' in element) return element.type;
  return null;
};

export const getNetworkPath = (element: IShow | IMovie) => {
  if ('networks' in element) return element.networks[0].logo_path;
  return null;
};

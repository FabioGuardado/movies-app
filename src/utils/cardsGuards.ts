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

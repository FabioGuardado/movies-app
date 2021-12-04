import { IMovieSummary, IShowSummary } from '../interfaces/ISummaries';

type SimilarItemCardProps = {
  item: IMovieSummary | IShowSummary;
  elementType: 'movie' | 'tv';
};

export default SimilarItemCardProps;

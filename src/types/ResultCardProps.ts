import {
  IMovieSummary,
  IPersonSummary,
  IShowSummary,
} from '../interfaces/ISummaries';

type ResultCardProps = {
  data: IMovieSummary | IShowSummary | IPersonSummary;
};

export default ResultCardProps;

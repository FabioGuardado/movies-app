import ICast from './ICast';
import ICrew from './ICrew';

interface ICredits {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}

export default ICredits;

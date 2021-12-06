import IGenre from '../interfaces/IGenre';

type GenreTagProps = {
  genre: IGenre;
  element_type: 'movie' | 'show';
};

export default GenreTagProps;

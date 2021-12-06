interface IGenre {
  id: number;
  name: string;
}

export default IGenre;

export interface IGenresList {
  genres: IGenre[];
}

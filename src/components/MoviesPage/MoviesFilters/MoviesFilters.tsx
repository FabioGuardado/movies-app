import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { useHistory } from 'react-router';
import { getMovieCertifications, getMovieGenres } from '../../../API/filters';
import useURLParams from '../../../hooks/useURLParams';
import {
  ICertification,
  ICertificationsList,
} from '../../../interfaces/ICertification';
import IGenre, { IGenresList } from '../../../interfaces/IGenre';
import routes from '../../../routes/routes';
import filtersState from '../../../types/filtersState';

const MoviesFilters: React.FunctionComponent = () => {
  let history = useHistory();
  const certification = useURLParams('certification');
  const genre = useURLParams('genre');
  const year = useURLParams('year');
  const [certifications, setCertifications] =
    useState<ICertificationsList | null>(null);
  const [genres, setGenres] = useState<IGenresList | null>(null);
  const [years, setYears] = useState<number[] | []>([]);
  const [filters, setFilters] = useState<filtersState>({
    certification: certification,
    genre: Number(genre),
    year: Number(year),
  });

  useEffect(() => {
    let mounted: boolean = true;

    const getData = async () => {
      const certificationsResponse = await getMovieCertifications();
      const genresResponse = await getMovieGenres();

      if (mounted) {
        setCertifications(certificationsResponse);
        setGenres(genresResponse);

        for (let i = 1990; i <= 2021; i++) {
          setYears(previousValue => [...previousValue, i]);
        }
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!filters.certification && !filters.genre && !filters.year) return;

    history.push(
      `${routes.MOVIE}?page=1${
        filters.certification ? `&certification=${filters.certification}` : ''
      }${filters.genre ? `&genre=${filters.genre}` : ''}${
        filters.year ? `&year=${filters.year}` : ''
      }`,
    );
  };

  return (
    <section className="mr-4 mb-4 lg:mb-0 lg:w-1/4 w-full h-1/3 px-6 py-2 bg-gray-200 rounded-md">
      <h1 className="mt-4 font-bold text-xl">Filters</h1>
      <form id="filters-form" onSubmit={handleSubmit}>
        <div className="my-2 grid grid-rows-2">
          <label
            className="flex flex-row items-center justify-start"
            htmlFor="certification"
          >
            Certification:{' '}
          </label>
          <select
            className="bg-gray-100 rounded-md border-1 border-solid border-gray-300 focus:ring-0 cursor-pointer"
            name="certification"
            id="certification"
            onChange={handleChange}
          >
            <option value={filters.certification ? filters.certification : ''}>
              {filters.certification
                ? filters.certification
                : 'Select a certification'}
            </option>
            {certifications?.certifications.US.map(
              (certification: ICertification) => (
                <option
                  key={certification.certification}
                  value={certification.certification}
                >
                  {certification.certification}
                </option>
              ),
            )}
          </select>
        </div>
        <div className="my-2 grid grid-rows-2">
          <label
            className="flex flex-row items-center justify-start"
            htmlFor="genre"
          >
            Genre:{' '}
          </label>
          <select
            className="bg-gray-100 rounded-md border-1 border-solid border-gray-300 focus:ring-0 cursor-pointer"
            name="genre"
            id="genre"
            onChange={handleChange}
          >
            <option value={filters.genre ? filters.genre : ''}>
              {filters.genre
                ? genres?.genres.find(
                    (genre: IGenre) => genre.id === filters.genre,
                  )?.name
                : 'Select a genre'}
            </option>
            {genres?.genres.map((genre: IGenre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2 grid grid-rows-2">
          <label
            className="flex flex-row items-center justify-start"
            htmlFor="year"
          >
            Release year:{' '}
          </label>
          <select
            className="bg-gray-100 rounded-md border-1 border-solid border-gray-300 focus:ring-0 cursor-pointer"
            name="year"
            id="year"
            onChange={handleChange}
          >
            <option value={filters.year ? filters.year : ''}>
              {filters.year ? filters.year : 'Select a year'}
            </option>
            {years.map((year: number) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="my-4 w-full">
        <button
          className="px-6 py-2 mr-4 text-white bg-blue-800 rounded-md transition-all hover:bg-blue-700"
          type="submit"
          form="filters-form"
        >
          Filter
        </button>

        <button
          className="px-6 py-2 text-white bg-blue-800 rounded-md transition-all hover:bg-blue-700"
          onClick={() => history.push(routes.MOVIE)}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default MoviesFilters;

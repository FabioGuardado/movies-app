import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getMoviesWithFilters } from '../../API/movies';
import MoviesFilters from '../../components/MoviesPage/MoviesFilters/MoviesFilters';
import FilterPageCard from '../../components/UI/FilterPageCard/FilterPageCard';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import Paginator from '../../components/UI/Paginator/Paginator';
import useURLParams from '../../hooks/useURLParams';
import IResponse from '../../interfaces/IResponse';
import { IMovieSummary } from '../../interfaces/ISummaries';
import routes from '../../routes/routes';

const MoviesPage: React.FunctionComponent = () => {
  let history = useHistory();
  const page = useURLParams('page');
  const certification = useURLParams('certification');
  const genre = useURLParams('genre');
  const year = useURLParams('year');
  const [movies, setMovies] = useState<IResponse<IMovieSummary> | null>(null);

  useEffect(() => {
    let mounted: boolean = true;

    const getData = async () => {
      const response = await getMoviesWithFilters(
        Number(page),
        certification,
        genre ? Number(genre) : null,
        year ? Number(year) : null,
      );

      if (mounted) setMovies(response);
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [page, certification, genre, year]);

  const setNewPage = (newPage: number) => {
    history.push(
      `${routes.MOVIE}?page=${newPage}${
        certification ? `&certification=${certification}` : ''
      }${genre ? `&genre=${genre}` : ''}${year ? `&year=${year}` : ''}`,
    );
  };

  return (
    <>
      {!movies && <Loader />}
      <Layout>
        <div className="my-8 flex flex-col lg:flex-row">
          <MoviesFilters />
          {movies && movies.total_results > 0 ? (
            <div className="flex flex-col lg:w-3/4">
              <section className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {movies.results.map((movie: IMovieSummary) => (
                  <FilterPageCard key={movie.id} data={movie} />
                ))}
              </section>
              <Paginator
                totalPages={movies.total_pages}
                currentPage={page ? Number(page) : 1}
                setNewPage={setNewPage}
              />
            </div>
          ) : (
            <div className="w-full flex flex-row items-center justify-center">
              <h1 className="text-2xl font-bold">
                There were no results for this search.
              </h1>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default MoviesPage;

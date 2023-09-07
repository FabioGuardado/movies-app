import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getShowsWithFilters } from '../../API/shows';
import ShowsFilters from '../../components/ShowsPage/ShowsFilters/ShowsFilters';
import FilterPageCard from '../../components/UI/FilterPageCard/FilterPageCard';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import Paginator from '../../components/UI/Paginator/Paginator';
import useURLParams from '../../hooks/useURLParams';
import IResponse from '../../interfaces/IResponse';
import { IShowSummary } from '../../interfaces/ISummaries';
import routes from '../../routes/routes';

const ShowsPage: React.FunctionComponent = () => {
  let history = useHistory();
  const page = useURLParams('page');
  const genre = useURLParams('genre');
  const year = useURLParams('year');
  const [shows, setShows] = useState<IResponse<IShowSummary> | null>(null);

  useEffect(() => {
    let mounted: boolean = true;

    const getData = async () => {
      const response = await getShowsWithFilters(
        Number(page),
        genre ? Number(genre) : null,
        year ? Number(year) : null,
      );

      if (mounted) setShows(response);
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [page, genre, year]);

  const setNewPage = (newPage: number) => {
    history.push(
      `${routes.SHOW}?page=${newPage}${genre ? `&genre=${genre}` : ''}${
        year ? `&year=${year}` : ''
      }`,
    );
  };

  if (!shows) return <Loader />;

  return (
    <>
      <Layout>
        <div className="my-8 flex flex-col lg:flex-row">
          <ShowsFilters />
          {shows && shows.total_results > 0 ? (
            <div className="flex flex-col lg:w-3/4">
              <section className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {shows.results.map((show: IShowSummary) => (
                  <FilterPageCard key={show.id} data={show} />
                ))}
              </section>
              <Paginator
                totalPages={shows.total_pages}
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

export default ShowsPage;

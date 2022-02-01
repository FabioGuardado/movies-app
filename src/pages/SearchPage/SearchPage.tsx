import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { multiSearch } from '../../API/multiSearch';
import SearchSection from '../../components/SearchPage/SearchSection/SearchSection';
import ResultCard from '../../components/SearchPage/ResultCard/ResultCard';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import Paginator from '../../components/UI/Paginator/Paginator';
import useURLParams from '../../hooks/useURLParams';
import IResponse from '../../interfaces/IResponse';
import {
  IMovieSummary,
  IPersonSummary,
  IShowSummary,
} from '../../interfaces/ISummaries';
import routes from '../../routes/routes';
import scrollTop from '../../utils/scrollTop';

const SearchPage: React.FunctionComponent = () => {
  const query = useURLParams('query');
  const page = useURLParams('page');
  let history = useHistory();
  const [response, setResponse] = useState<IResponse<
    IMovieSummary | IShowSummary | IPersonSummary
  > | null>(null);
  const [currentPage] = useState<number>(() => (page ? Number(page) : 1));
  const [queryText] = useState<string | null>(() => (query ? query : null));

  useEffect(() => {
    scrollTop();
    let mounted: boolean = true;

    const getData = async () => {
      if (queryText && currentPage) {
        const response = await multiSearch(queryText, currentPage);
        if (mounted) setResponse(response);
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [page, query, queryText, currentPage]);

  const setNewPage = (newPage: number) => {
    history.push(`${routes.SEARCH}?query=${queryText}&page=${newPage}`);
  };

  return (
    <>
      {queryText && !response && <Loader />}
      <Layout>
        <SearchSection />
        {queryText && response && response.results.length > 0 ? (
          <section className="my-8">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {response?.results.map(
                (item: IMovieSummary | IShowSummary | IPersonSummary) => (
                  <ResultCard key={item.id} data={item} />
                ),
              )}
            </div>

            <Paginator
              totalPages={response.total_pages}
              currentPage={currentPage}
              setNewPage={setNewPage}
            />
          </section>
        ) : (
          <div className="w-full flex flex-row items-center justify-center">
            <h1 className="text-2xl font-bold">
              There were no results for this search.
            </h1>
          </div>
        )}
      </Layout>
    </>
  );
};

export default SearchPage;

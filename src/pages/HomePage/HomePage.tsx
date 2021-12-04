import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../../API/movies';
import { getPopularShows } from '../../API/shows';
import HomePageCard from '../../components/HomePage/Card/Card';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import { IMovieSummary, IShowSummary } from '../../interfaces/ISummaries';

const HomePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovieSummary[] | null>(null);
  const [shows, setShows] = useState<IShowSummary[] | null>(null);
  /* const [error, setError] = useState(false); */

  useEffect(() => {
    let mounted: boolean = true;
    const getData = async () => {
      const moviesResponse = await getPopularMovies();
      const showsResponse = await getPopularShows();
      if (mounted) {
        setMovies(moviesResponse.results);
        setShows(showsResponse.results);
      }
    };
    getData();

    return () => {
      mounted = false;
    };
  }, []);

  return movies && shows ? (
    <Layout>
      <section className="mb-5">
        <div className="p-3 bg-gray-200 rounded-sm my-5">
          <p className="text-xl ml-2">
            🔥 <span className="font-bold">Popular movies</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies &&
            movies.map((movie: IMovieSummary) => (
              <HomePageCard key={movie.id} data={movie} />
            ))}
        </div>
      </section>

      <section className="mb-5">
        <div className="p-3 bg-gray-200 rounded-sm my-5">
          <p className="text-xl ml-2">
            🔥 <span className="font-bold">Popular TV shows</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {shows &&
            shows.map((show: IShowSummary) => (
              <HomePageCard key={show.id} data={show} />
            ))}
        </div>
      </section>
    </Layout>
  ) : (
    <Loader />
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import IUser from '../../interfaces/IUser';

import defaultImage from '../../assets/user.png';
import Layout from '../../components/UI/Layout/Layout';
import IResponse from '../../interfaces/IResponse';
import { IMovieSummary, IShowSummary } from '../../interfaces/ISummaries';
import { getFavoriteMovies } from '../../API/movies';
import ResultCard from '../../components/SearchPage/ResultCard/ResultCard';
import { getFavoriteShows } from '../../API/shows';
import { useAuth } from '../../hooks/useAuth';

const ProfilePage: React.FunctionComponent = () => {
  const auth = useAuth();
  const sessionId = localStorage.getItem('sessionId');
  const user = localStorage.getItem('tmdbUser');
  const parsedUser: IUser | null = user ? JSON.parse(user) : null;
  const [favoriteMovies, setFavoriteMovies] =
    useState<IResponse<IMovieSummary> | null>(null);
  const [favoriteShows, setFavoriteShows] =
    useState<IResponse<IShowSummary> | null>(null);

  useEffect(() => {
    let mounted: boolean = true;

    const getData = async () => {
      if (sessionId) {
        const moviesResponse = await getFavoriteMovies(
          Number(parsedUser?.id),
          sessionId,
        );
        const showsResponse = await getFavoriteShows(
          Number(parsedUser?.id),
          sessionId,
        );

        if (mounted) {
          setFavoriteMovies(moviesResponse);
          setFavoriteShows(showsResponse);
        }
      }
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [parsedUser?.id, sessionId]);

  return (
    <Layout>
      <section className="relative p-8 flex flex-row rounded-b-md text-white bg-gradient-to-r from-blue-900 via-blue-400 to-green-500">
        <div className="profile-image-container mx-4 overflow-hidden object-contain rounded-full">
          <img
            src={
              parsedUser?.avatar.tmdb?.avatar_path
                ? `${process.env.REACT_APP_IMAGE_URL}${parsedUser.avatar.tmdb.avatar_path}`
                : defaultImage
            }
            alt={parsedUser?.username}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">{parsedUser?.username}</h2>
          <p className="my-2 text-lg">
            Country:{' '}
            <span className="ml-1 p-1 rounded-md border border-white border-solid">
              {parsedUser?.iso_3166_1}
            </span>
          </p>
        </div>
        <div className="absolute bottom-5 right-5">
          <button
            className="px-4 py-2 rounded-md bg-red-600 transition-all hover:bg-red-500"
            onClick={() => auth.logout && auth.logout()}
          >
            Logout
          </button>
        </div>
      </section>

      {favoriteMovies && favoriteMovies.total_results > 0 && (
        <section className="my-4">
          <h1 className="p-4 mb-4 text-3xl font-bold text-center bg-gray-100 rounded-md border border-gray-200 border-solid">
            Your favorite movies
          </h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {favoriteMovies.results.map((movie: IMovieSummary) => (
              <ResultCard key={movie.title} data={movie} />
            ))}
          </div>
        </section>
      )}

      {favoriteShows && favoriteShows.total_results > 0 && (
        <section className="my-4">
          <h1 className="p-4 mb-4 text-3xl font-bold text-center bg-gray-100 rounded-md border border-gray-200 border-solid">
            Your favorite shows
          </h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {favoriteShows.results.map((movie: IShowSummary) => (
              <ResultCard key={movie.name} data={movie} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProfilePage;

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import routes from '../../../routes/routes';

const SearchSection: React.FunctionComponent = () => {
  let history = useHistory();
  const [textToSearch, setTextToSearch] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setTextToSearch(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (textToSearch.trim() !== '') {
      history.push(`${routes.SEARCH}?query=${textToSearch}`);
    }
    setTextToSearch('');
  };
  return (
    <section className="rounded-b-md bg-gradient-to-r from-blue-900 via-blue-400 to-green-500 px-5 md:px-16 md:py-12 py-6">
      <div className="mb-8">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">Welcome.</h1>
        <h3 className="text-white text-lg sm:text-2xl font-medium">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <form className="relative" id="search-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full rounded-md text-xs md:text-base bg-gray-100 border-transparent  focus:bg-white focus:border-0 focus:ring-0"
            type="text"
            name="text"
            id="content-input"
            placeholder="Search for a movie, tv show, person..."
            value={textToSearch}
            onChange={handleChange}
          />
          <button
            className="absolute h-full right-0 bg-blue-700 text-white px-3 md:px-8 text-xs md:text-base rounded-r-md"
            type="submit"
            form="search-form"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchSection;

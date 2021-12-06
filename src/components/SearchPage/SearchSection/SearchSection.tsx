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
    <section className="my-8 border border-solid border-gray-300 p-8 rounded-md">
      <form className="relative" id="query-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full rounded-md text-xs md:text-base bg-gray-100 border-transparent  focus:bg-white focus:border-0 focus:ring-0"
            type="text"
            name="query"
            id="query-input"
            placeholder="Search for a movie, tv show, person..."
            value={textToSearch}
            onChange={handleChange}
          />
          <button
            className="absolute h-full right-0 bg-blue-700 text-white px-3 md:px-8 text-xs md:text-base rounded-r-md"
            form="query-form"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchSection;

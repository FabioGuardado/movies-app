import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { debounce } from 'lodash';

import { multiSearch } from '../../../API/multiSearch';
import {
  IMovieSummary,
  IPersonSummary,
  IShowSummary,
} from '../../../interfaces/ISummaries';
import SuggestionsListProps from '../../../types/SuggestionsListProps';
import { getDetailsLink, getNameOrTitle } from '../../../utils/TypeGuards';

const SuggestionsList: React.FunctionComponent<SuggestionsListProps> = ({
  textToSearch,
}) => {
  let history = useHistory();
  const [suggestions, setSuggestions] = useState<Array<
    IMovieSummary | IShowSummary | IPersonSummary
  > | null>(null);

  const getData = async () => {
    const response = await multiSearch(textToSearch, 1);
    setSuggestions(response.results.slice(0, 10));
  };

  const delayedSearch = useCallback(debounce(getData, 600), [textToSearch]);

  const handleClick = (
    suggestion: IMovieSummary | IShowSummary | IPersonSummary,
  ) => {
    history.push(getDetailsLink(suggestion));
  };

  useEffect(() => {
    if (textToSearch) delayedSearch();

    return () => {
      delayedSearch.cancel();
    };
  }, [textToSearch]);

  return suggestions ? (
    <div className="w-1/2 absolute z-50 bg-white border border-solid border-gray-200 shadow-md rounded-t-none rounded-md">
      <ul className="w-full">
        {suggestions.map(
          (suggestion: IMovieSummary | IShowSummary | IPersonSummary) => (
            <li
              className="px-4 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleClick(suggestion)}
            >
              {getNameOrTitle(suggestion)}
            </li>
          ),
        )}
      </ul>
      <span className="font-thin italic pt-3 p-2 text-xs">
        Suggestions limited to the first 10 results.
      </span>
    </div>
  ) : null;
};

export default SuggestionsList;

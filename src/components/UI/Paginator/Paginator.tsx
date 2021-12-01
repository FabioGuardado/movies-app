import React, { useEffect, useState } from 'react';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginatorProps from '../../../types/PaginatorProps';

const Paginator: React.FunctionComponent<PaginatorProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const [pages, setPages] = useState<Array<number> | []>([]);

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      setPages(prevState => [...prevState, i]);
    }

    return () => {
      setPages([]);
    };
  }, [totalPages]);

  const handleNewPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-8 mx-auto flex flex-row items-center justify-center w-full text-sm sm:text-lg">
      <button
        className={`py-1 px-3 sm:px-4 sm:mx-1 cursor-pointer transition-all ${
          currentPage === 1
            ? 'text-gray-400 pointer-events-none'
            : 'text-black cursor-pointer rounded-full transition-all hover:bg-gray-300'
        }`}
        onClick={() => handleNewPage(1)}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
      <button
        className={`py-1 px-3 sm:px-4 sm:mx-1 cursor-pointer transition-all  ${
          currentPage === 1
            ? 'text-gray-400 pointer-events-none'
            : 'text-black cursor-pointer rounded-full transition-all hover:bg-gray-300'
        }`}
        onClick={() => handleNewPage(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {pages.length > 0 &&
        pages.map((page: number) =>
          page === currentPage ||
          (page > currentPage && page <= currentPage + 2) ||
          (page < currentPage && page >= currentPage - 2) ||
          (currentPage === 1 && page <= currentPage + 4) ||
          (currentPage === 2 && page <= currentPage + 3) ? (
            <button
              key={page}
              onClick={() => handleNewPage(page)}
              className={`py-1 px-3 sm:px-4 sm:mx-1 cursor-pointer transition-all ${
                page === currentPage
                  ? 'text-white bg-gray-500 rounded-full'
                  : 'text-black cursor-pointer rounded-full transition-all hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ) : null,
        )}
      <button
        className={`py-1 px-3 sm:px-4 sm:mx-1 cursor-pointer transition-all ${
          currentPage === totalPages
            ? 'text-gray-400 pointer-events-none'
            : 'text-black cursor-pointer rounded-full transition-all hover:bg-gray-300'
        }`}
        onClick={() => handleNewPage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        className={`py-1 px-3 sm:px-4 sm:mx-1 cursor-pointer transition-all ${
          currentPage === totalPages
            ? 'text-gray-400 pointer-events-none'
            : 'text-black cursor-pointer rounded-full transition-all hover:bg-gray-300'
        }`}
        onClick={() => handleNewPage(totalPages)}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    </div>
  );
};

export default Paginator;

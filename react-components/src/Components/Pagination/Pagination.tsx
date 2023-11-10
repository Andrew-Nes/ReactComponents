import './pagination.css';
import { FC, useEffect, useState } from 'react';

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  maxPages: number;
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const { page, setPage, maxPages } = props;
  const [pageNumber, setPageNumber] = useState(page);
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    setPage(pageNumber + 1);
  };
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
    setPage(pageNumber - 1);
  };
  useEffect(() => {
    setPageNumber(page);
  }, [page]);
  return (
    <div className="pagination">
      <button
        onClick={prevPage}
        className="pagination__button"
        disabled={pageNumber === 1}
      >
        &larr;
      </button>
      <input
        type="number"
        value={pageNumber}
        readOnly
        className="pagination__input"
      />
      <button
        onClick={nextPage}
        className="pagination__button"
        disabled={pageNumber >= maxPages || maxPages === 0}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;

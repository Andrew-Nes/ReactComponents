import './pagination.css';
import { FC, useState } from 'react';

interface PaginationProps {
  setPage: (page: number) => void;
  maxPages: number;
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { setPage, maxPages } = props;
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    setPage(pageNumber + 1);
  };
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
    setPage(pageNumber - 1);
  };
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

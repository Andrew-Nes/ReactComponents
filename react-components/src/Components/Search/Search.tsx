import { ChangeEvent, useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import ItemsNumber from '../ItemsNumber/ItemsNumber';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { setSearchTerm } from '../../state/searchTerm/searchTermslice';
import Spinner from '../Spinner/Spinner';
import './search.css';
import { useGetListQuery } from '../../services/apiCalls/apiCalls';

interface SearchProps {
  setSearchParameters: (parameters: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const dispatch = useDispatch();
  const itemsNumber = useSelector(
    (state: RootState) => state.itemsNumber.value
  );
  const searchTerm = useSelector((state: RootState) => state.searchTerm.value);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [searchWord, setSearchWord] = useState(searchTerm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };
  const parameters = `query_term=${searchTerm}&limit=${itemsNumber}&page=${page}`;
  const { isLoading, data } = useGetListQuery(parameters);

  const countPages = () => {
    if (data) {
      return Math.ceil(data.movie_count / data.limit);
    }
    return 1;
  };

  useEffect(() => {
    setMaxPages(countPages());
    props.setSearchParameters(parameters);
  }, [data, searchTerm, itemsNumber, page, maxPages]);

  const onButtonClick = () => {
    dispatch(setSearchTerm(searchWord));
    window.localStorage.setItem('searchWord', searchWord);
    props.setSearchParameters(parameters);
  };

  return (
    <section className="search-section">
      <h2>Type in a film title</h2>
      <div className="search-field">
        <input
          type="text"
          className="search-input"
          value={searchWord}
          onChange={onInputChange}
        />
        {isLoading ? (
          <div className="search-button-container">
            <Spinner classname={'loader_small'} />
            <button disabled>Loading...</button>
          </div>
        ) : (
          <button className="search-button" onClick={onButtonClick}>
            Search
          </button>
        )}
        <div className="search-options">
          <ItemsNumber setPage={setPage} />
          <Pagination
            setPage={setPage}
            maxPages={maxPages}
            page={page}
          ></Pagination>
        </div>
      </div>
    </section>
  );
};

export default Search;

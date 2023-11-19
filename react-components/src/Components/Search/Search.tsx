import { ChangeEvent, useEffect, useState } from 'react';
import { searchCall } from '../../services/apiCalls/apiCalls';
import { searchResponseState } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import ItemsNumber from '../ItemsNumber/ItemsNumber';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsNumber } from '../../state/itemsNumber/itemsNumberSlice';
import { RootState } from '../../state/store';
import { setSearchTerm } from '../../state/searchTerm/searchTermslice';
import Spinner from '../Spinner/Spinner';
import './search.css';

interface SearchProps {
  setSearchResponse: (response: searchResponseState[]) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const dispatch = useDispatch();
  const itemsNumber = useSelector(
    (state: RootState) => state.itemsNumber.value
  );
  const searchTerm = useSelector((state: RootState) => state.searchTerm.value);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [searchWord, setSearchWord] = useState(searchTerm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const getData = async (searchWord: string) => {
    setLoading(true);
    const responce = await searchCall(searchWord, page, itemsNumber);
    responce.json().then((data) => {
      props.setSearchResponse(data.data.movies);
      const countPages = () => {
        return Math.ceil(data.data.movie_count / data.data.limit);
      };

      setMaxPages(countPages);
      setLoading(false);
    });
  };

  const onButtonClick = () => {
    dispatch(setSearchTerm(searchWord));
    window.localStorage.setItem('searchWord', searchWord);
    getData(searchWord);
  };

  useEffect(() => {
    getData(searchWord);
  }, [page, setPage, itemsNumber, setItemsNumber]);

  const renderButton = () => {
    if (loading) {
      return (
        <div className="search-button-container">
          <Spinner classname={'loader_small'} />
          <button disabled>Loading...</button>
        </div>
      );
    } else {
      return (
        <button className="search-button" onClick={onButtonClick}>
          Search
        </button>
      );
    }
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
        {renderButton()}
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

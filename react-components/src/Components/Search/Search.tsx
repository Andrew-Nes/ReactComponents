import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { searchCall } from '../../services/apiCalls/apiCalls';
import { searchResponseState } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import ItemsNumber from '../ItemsNumber/ItemsNumber';
import { SearchContext } from '../../App';
import { useSelector } from 'react-redux';
import { setItemsNumber } from '../../state/itemsNumber/itemsNumberSlice';
import { RootState } from '../../state/store';

interface SearchProps {
  setSearchResponse: (response: searchResponseState[]) => void;
  setWord: (word: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const itemsNumber = useSelector(
    (state: RootState) => state.itemsNumber.value
  );
  const { search } = useContext(SearchContext);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setWord(event.target.value);
    window.localStorage.setItem('searchWord', event.target.value);
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
  useEffect(() => {
    getData(search);
  }, [page, setPage, itemsNumber, setItemsNumber]);

  const renderButton = () => {
    if (loading) {
      return <button disabled>Loading...</button>;
    } else {
      return (
        <button className="search-button" onClick={() => getData(search)}>
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
          value={search}
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

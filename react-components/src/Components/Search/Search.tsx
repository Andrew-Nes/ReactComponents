import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { searchCall } from '../../services/apiCalls/apiCalls';
import { searchResponseState } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import ItemsNumber from '../ItemsNumber/ItemsNumber';
import { SearchContext } from '../../App';

interface SearchProps {
  setSearchResponse: (response: searchResponseState[]) => void;
  setWord: (word: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [itemsNumber, setItemsNumber] = useState(20);

  const context = useContext(SearchContext);

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
    getData(context.search);
  }, [page, setPage, itemsNumber, setItemsNumber]);

  const renderButton = () => {
    if (loading) {
      return <button disabled>Loading...</button>;
    } else {
      return (
        <button
          className="search-button"
          onClick={() => getData(context.search)}
        >
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
          value={context.search}
          onChange={onInputChange}
        />
        {renderButton()}
        <div className="search-options">
          <ItemsNumber
            itemsNumber={itemsNumber}
            setItemsNumber={setItemsNumber}
            setPage={setPage}
          />
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

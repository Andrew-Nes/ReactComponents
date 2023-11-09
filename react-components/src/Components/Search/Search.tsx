import { ChangeEvent, useEffect, useState } from 'react';
import { searchCall } from '../../services/apiCalls/apiCalls';
import { searchResponseState } from '../../types/types';
import Pagination from '../Pagination/Pagination';

interface SearchProps {
  setSearchResponse: (response: searchResponseState[]) => void;
}
const Search: React.FC<SearchProps> = (props) => {
  const searchWord: string = window.localStorage.getItem('searchWord') || '';
  const [word, setWord] = useState<string>(searchWord);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    window.localStorage.setItem('searchWord', event.target.value);
  };

  const getData = async (searchWord: string) => {
    setLoading(true);
    const responce = await searchCall(searchWord, page, 20);
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
    getData(word);
  }, [page, setPage]);
  const renderButton = () => {
    if (loading) {
      return <button disabled>Loading...</button>;
    } else {
      return (
        <button className="search-button" onClick={() => getData(word)}>
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
          value={word}
          onChange={onInputChange}
        />
        {renderButton()}
        <Pagination setPage={setPage} maxPages={maxPages}></Pagination>
      </div>
    </section>
  );
};

export default Search;

import { ChangeEvent, useState } from 'react';
import { initialCall, searchCall } from '../../services/apiCalls/apiCalls';
import { searchResponseState } from '../../types/types';

interface SearchProps {
  setSearchResponse: (response: searchResponseState[]) => void;
}
const Search: React.FC<SearchProps> = (props) => {
  const searchWord: string = window.localStorage.getItem('searchWord') || '';
  const [word, setWord] = useState<string>(searchWord);
  const [loading, setLoading] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    window.localStorage.setItem('searchWord', event.target.value);
  };

  const getData = async (searchWord: string) => {
    setLoading(true);
    if (searchWord.length === 0) {
      const responce = await initialCall();
      responce.json().then((data) => {
        props.setSearchResponse(data.results);
        setLoading(false);
      });
    } else {
      const responce = await searchCall(searchWord, 1);
      responce.json().then((data) => {
        props.setSearchResponse(data.results);
        setLoading(false);
      });
    }
  };

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
    <>
      <h2>It searches over Star Wars charracters</h2>
      <div className="search-field">
        <input
          type="text"
          className="search-input"
          value={word}
          onChange={onInputChange}
        />
        {renderButton()}
      </div>
    </>
  );
};

export default Search;

import './App.css';
import { createContext, useState } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';
import Result from './Components/Result/Result';
import { SearchContextType, searchResponseState } from './types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const SearchContext = createContext<SearchContextType>({
  search: '',
  response: [],
});

const App: React.FC = () => {
  const [searchResponse, setSearchResponse] = useState<
    searchResponseState[] | []
  >([]);
  const searchWord: string = window.localStorage.getItem('searchWord') || '';
  const [word, setWord] = useState<string>(searchWord);

  const handleSetSearchResponse = (response: searchResponseState[]) => {
    setSearchResponse(response);
  };
  const setSearchWord = (word: string) => {
    setWord(word);
  };

  return (
    <SearchContext.Provider value={{ search: word, response: searchResponse }}>
      <BrowserRouter>
        <div className="application">
          <ErrorBoundary>
            <ErrorGenerator></ErrorGenerator>
            <Search
              setSearchResponse={handleSetSearchResponse}
              setWord={setSearchWord}
            ></Search>
            <Routes>
              <Route path="/" element={<Result />} index />
              <Route path="*" element={<h1>No results</h1>} />
            </Routes>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;

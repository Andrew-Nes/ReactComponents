import './App.css';
import { useState } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';
import Result from './Components/Result/Result';
import { searchResponseState } from './types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [searchResponse, setSearchResponse] = useState<
    searchResponseState[] | []
  >([]);

  const handleSetSearchResponse = (response: searchResponseState[]) => {
    setSearchResponse(response);
  };

  return (
    <BrowserRouter>
      <div className="application">
        <ErrorBoundary>
          <ErrorGenerator></ErrorGenerator>
          <Search setSearchResponse={handleSetSearchResponse}></Search>
          <Routes>
            <Route
              path="/"
              element={<Result searchResponse={searchResponse}></Result>}
              index
            />
            <Route path="*" element={<h1>No results</h1>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import { useState } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';
import Result from './Components/Result/Result';
import { searchResponseState } from './types/types';

const App: React.FC = () => {
  const [searchResponse, setSearchResponse] = useState<
    searchResponseState[] | []
  >([]);

  const handleSetSearchResponse = (response: searchResponseState[]) => {
    setSearchResponse(response);
  };

  return (
    <div className="application">
      <ErrorBoundary>
        <ErrorGenerator></ErrorGenerator>
        <Search setSearchResponse={handleSetSearchResponse}></Search>
        <Result searchResponse={searchResponse}></Result>
      </ErrorBoundary>
    </div>
  );
};

export default App;

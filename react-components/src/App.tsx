import './App.css';
import { createContext, useState } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';
import Result from './Components/Result/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const SearchContext = createContext<string>('');

const App: React.FC = () => {
  const [searchParameters, setSearchParameters] = useState<string>('');

  const handleSetSearchParameters = (parameters: string) => {
    setSearchParameters(parameters);
  };

  return (
    <SearchContext.Provider value={searchParameters}>
      <BrowserRouter>
        <div className="application">
          <ErrorBoundary>
            <ErrorGenerator></ErrorGenerator>
            <Search setSearchParameters={handleSetSearchParameters}></Search>
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

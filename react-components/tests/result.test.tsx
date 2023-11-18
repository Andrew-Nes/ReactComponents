import { cleanup, render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { SearchContextType } from '../src/types/types';
import Result from '../src/Components/Result/Result';
import React from 'react';

const SearchContext = createContext<SearchContextType>({
  search: '',
  response: [],
});
React;

describe('testing card list component', () => {
  test('Appropriate message is displayed if no cards are present', async () => {
    render(
      <SearchContext.Provider value={{ search: '', response: [] }}>
        <Result />
      </SearchContext.Provider>
    );
    const noResults = screen.getByText('No results');
    expect(noResults).toBeInTheDocument();
    cleanup();
  });
});

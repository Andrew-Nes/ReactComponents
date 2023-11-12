import { cleanup, render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { SearchContextType } from '../src/types/types';
import Result from '../src/Components/Result/Result';
import React from 'react';

const SearchContext = createContext<SearchContextType>({
  search: '',
  response: [],
});

const responseArr = [
  {
    title: 'testTitle0',
    genres: ['testgenre0'],
    year: '0',
    rating: 'testrating0',
    medium_cover_image: 'https://picsum.photos/id/237/200/300',
    summary: 'testSummary0',
    large_cover_image: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'testTitle1',
    genres: ['testgenre1'],
    year: '1',
    rating: 'testrating1',
    medium_cover_image: 'https://picsum.photos/id/237/200/300',
    summary: 'testSummary1',
    large_cover_image: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'testTitle2',
    genres: ['testgenre2'],
    year: '2',
    rating: 'testrating2',
    medium_cover_image: 'https://picsum.photos/id/237/200/300',
    summary: 'testSummary2',
    large_cover_image: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'testTitle3',
    genres: ['testgenre3'],
    year: '3',
    rating: 'testrating3',
    medium_cover_image: 'https://picsum.photos/id/237/200/300',
    summary: 'testSummary3',
    large_cover_image: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'testTitle4',
    genres: ['testgenre4'],
    year: '4',
    rating: 'testrating4',
    medium_cover_image: 'https://picsum.photos/id/237/200/300',
    summary: 'testSummary4',
    large_cover_image: 'https://picsum.photos/id/237/200/300',
  },
];

describe('testing card list component', () => {
  test('Component renders the specified number of cards', async () => {
    render(
      <SearchContext.Provider value={{ search: '', response: responseArr }}>
        <Result />
      </SearchContext.Provider>
    );
    const cards = document.getElementsByClassName('result-card');
    expect(cards.length).toEqual(responseArr.length);
    cleanup();
  });
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

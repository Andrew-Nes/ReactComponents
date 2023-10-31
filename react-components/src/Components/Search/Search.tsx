import { ChangeEvent, Component, ReactNode } from 'react';

interface SearchProps {
  setSearchResponse: (response: object[]) => void;
}
export default class Search extends Component<SearchProps> {
  searchWord: string = window.localStorage.getItem('searchWord') || '';
  state = { word: this.searchWord, results: [], loading: false };

  setSearchResponse = this.props.setSearchResponse;

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ word: event.target.value });
    window.localStorage.setItem('searchWord', event.target.value);
  };

  getData = async (searchWord: string) => {
    this.setState({ loading: true });
    if (searchWord.length === 0) {
      const responce = await fetch(`https://swapi.dev/api/people/`);
      responce.json().then((data) => {
        this.setSearchResponse(data.results);
        this.setState({ loading: false });
      });
    } else {
      const responce = await fetch(
        `https://swapi.dev/api/people/?search=${searchWord}&page=1`
      );
      responce.json().then((data) => {
        this.setSearchResponse(data.results);
        this.setState({ loading: false });
      });
    }
  };

  render(): ReactNode {
    const loading = this.state.loading;

    const renderButton = () => {
      if (loading) {
        return <button disabled>Loading...</button>;
      } else {
        return (
          <button
            className="search-button"
            onClick={() => this.getData(this.state.word)}
          >
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
            value={this.state.word}
            onChange={this.onInputChange}
          />
          {renderButton()}
        </div>
      </>
    );
  }
}

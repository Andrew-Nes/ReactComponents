import './App.css';
import { Component, ReactNode } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';
import Result from './Components/Result/Result';

export default class App extends Component {
  state = {
    searchResponse: [],
  };

  public setSearchResponse = (response: Object[]) => {
    this.setState({ searchResponse: response });
  };

  render(): ReactNode {
    return (
      <div className="application">
        <ErrorBoundary>
          <ErrorGenerator></ErrorGenerator>
          <Search setSearchResponse={this.setSearchResponse}></Search>
          <Result searchResponse={this.state.searchResponse}></Result>
        </ErrorBoundary>
      </div>
    );
  }
}

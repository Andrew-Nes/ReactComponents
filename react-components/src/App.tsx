import './App.css';
import { Component, ReactNode } from 'react';
import Search from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorGenerator from './Components/ErrorBoundary/ErrorGenerator';

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="application">
        <ErrorBoundary>
          <ErrorGenerator></ErrorGenerator>
          <Search></Search>
        </ErrorBoundary>
      </div>
    );
  }
}

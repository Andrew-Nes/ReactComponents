import './App.css';
import { Component, ReactNode } from 'react';
import Search from './Components/Search/Search';

export default class App extends Component {
  render(): ReactNode {
    return <div className="application">
      <Search></Search>
    </div>;
  }
}

import { Component, ReactNode } from 'react';

interface searchResponseState {
  searchResponse: object[];
}
export default class Result extends Component<searchResponseState> {
  render(): ReactNode {
    if (this.props.searchResponse.length === 0) {
      return <div className="result-field">No results</div>;
    }
    const articles = this.props.searchResponse.map((el, index) => {
      return <p key={index}>{JSON.stringify(el)}</p>;
    });
    return <div className="result-field">{articles}</div>;
  }
}

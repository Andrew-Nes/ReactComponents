import { Component, ReactNode } from 'react';

interface searchResponseState {
  searchResponse: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }[];
}
export default class Result extends Component<searchResponseState> {
  render(): ReactNode {
    if (this.props.searchResponse.length === 0) {
      return <div className="result-field">No results</div>;
    }
    const articles = this.props.searchResponse.map((el, index) => {
      return (
        <p key={index}>
          Name: {el.name} <br></br>
          Height: {el.height} <br></br>
          Weight: {el.mass} <br></br>
          Hair: {el.hair_color} <br></br>
          Skin: {el.skin_color} <br></br>
          Eyes: {el.eye_color} <br></br>
          Born: {el.birth_year} <br></br>
        </p>
      );
    });
    return <div className="result-field">{articles}</div>;
  }
}

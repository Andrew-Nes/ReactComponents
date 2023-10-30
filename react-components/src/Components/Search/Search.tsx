import { ChangeEvent, Component, ReactNode } from 'react';

export default class Search extends Component {
  searchWord: string = window.localStorage.getItem('searchWord') || '';
  state = { word: this.searchWord,
            results: []
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({word: event.target.value});
    window.localStorage.setItem('searchWord', event.target.value)
  }

  getData = async (searchWord: string) => {
    const responce = await fetch(`https://swapi.dev/api/people/?search=${searchWord}&page=1`);
    responce.json().then(data => {this.setState({results: data.results});
  console.log(data.results)});
  console.log('!!');
  }

  render(): ReactNode {
    return <div className="search-field">
      <input 
        type="text" 
        className="search-input" 
        value={this.state.word} 
        onChange={this.onInputChange} />
      <button className="search-button" onClick={() => this.getData(this.state.word)}>Search</button>
    </div>;
  }
}

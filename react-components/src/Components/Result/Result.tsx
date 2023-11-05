import { searchResponseState } from '../../types/types';

const Result: React.FC<{ searchResponse: searchResponseState[] }> = (props) => {
  if (props.searchResponse.length === 0) {
    return <div className="result-field">No results</div>;
  }
  return props.searchResponse.map((el, index) => {
    return (
      <p key={index}>
        Name: {el.searchResponse.name} <br></br>
        Height: {el.searchResponse.height} <br></br>
        Weight: {el.searchResponse.mass} <br></br>
        Hair: {el.searchResponse.hair_color} <br></br>
        Skin: {el.searchResponse.skin_color} <br></br>
        Eyes: {el.searchResponse.eye_color} <br></br>
        Born: {el.searchResponse.birth_year} <br></br>
      </p>
    );
  });
};

export default Result;

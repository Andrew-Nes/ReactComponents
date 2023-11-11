import { searchResponseState } from '../../types/types';
import ResultCard from '../ResultCard/ResultCard';
import './result.css';

const Result: React.FC<{ searchResponse: searchResponseState[] }> = (props) => {
  return (
    <section className="result-section">
      {props.searchResponse.length === 0 ? (
        <div className="result-field">No results</div>
      ) : (
        props.searchResponse.map((el, index) => {
          return <ResultCard searchResponse={el} key={index} />;
        })
      )}
    </section>
  );
};

export default Result;

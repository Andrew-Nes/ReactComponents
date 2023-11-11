import { useContext } from 'react';
import { SearchContext } from '../../App';
import ResultCard from '../ResultCard/ResultCard';
import './result.css';

const Result: React.FC = () => {
  const searchResponse = useContext(SearchContext);
  return (
    <section className="result-section">
      {searchResponse.response.length === 0 ? (
        <div className="result-field">No results</div>
      ) : (
        searchResponse.response.map((el, index) => {
          return <ResultCard searchResponse={el} key={index} />;
        })
      )}
    </section>
  );
};

export default Result;

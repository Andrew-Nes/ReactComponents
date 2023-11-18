import { useContext, useState } from 'react';
import { SearchContext } from '../../App';
import ResultCard from '../ResultCard/ResultCard';
import './result.css';
import ResultCardDetailed from '../ResultCard/ResultCardDetailed';

const Result: React.FC = () => {
  const { response } = useContext(SearchContext);
  const [detailed, setDetailed] = useState(-1);

  const handleSetDetailed = (index: number) => {
    setDetailed(index);
  };

  return (
    <section className="result-section">
      <div className="result-field">
        {response.length === 0 ? (
          <div className="result-field_empty">No results</div>
        ) : (
          response.map((el, index) => {
            return (
              <ResultCard
                searchResponse={el}
                key={index}
                setDetailed={handleSetDetailed}
              />
            );
          })
        )}
      </div>
      {detailed < 0 ? (
        <div></div>
      ) : (
        <ResultCardDetailed
          searchResponse={response[detailed]}
          setDetailed={handleSetDetailed}
        />
      )}
    </section>
  );
};

export default Result;

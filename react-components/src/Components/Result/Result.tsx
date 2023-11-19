import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../App';
import ResultCard from '../ResultCard/ResultCard';
import './result.css';
import ResultCardDetailed from '../ResultCard/ResultCardDetailed';
import { useGetListQuery } from '../../services/apiCalls/apiCalls';

const Result: React.FC = () => {
  const params = useContext(SearchContext);
  const { data } = useGetListQuery(params);
  const [detailed, setDetailed] = useState(-1);

  const handleSetDetailed = (index: number) => {
    setDetailed(index);
  };
  useEffect(() => {}, []);
  return (
    <section className="result-section">
      <div className="result-field">
        {!data?.movies ? (
          <div className="result-field_empty">No results</div>
        ) : (
          data?.movies.map((el, index) => {
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
          searchId={detailed}
          setDetailed={handleSetDetailed}
        />
      )}
    </section>
  );
};

export default Result;

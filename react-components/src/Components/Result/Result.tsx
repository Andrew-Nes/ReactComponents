import { searchResponseState } from '../../types/types';
import './result.css';

const Result: React.FC<{ searchResponse: searchResponseState[] }> = (props) => {
  return (
    <section className="result-section">
      {props.searchResponse.length === 0 ? (
        <div className="result-field">No results</div>
      ) : (
        props.searchResponse.map((el, index) => {
          return (
            <div key={index} className="result-card">
              <img
                className="result-card__img"
                src={el.medium_cover_image}
              ></img>
              <p className="result-card__info">Title: {el.title}</p>
              <p className="result-card__info">Genre: {el.genres.join(', ')}</p>
              <p className="result-card__info">Year: {el.year}</p>
              <p className="result-card__info">Rating: {el.rating}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Result;

import { useGetDetailsQuery } from '../../services/apiCalls/apiCalls';
import Spinner from '../Spinner/Spinner';
import './resultCard.css';

interface ResultCardDetailedProps {
  searchId: number;
  setDetailed: (index: number) => void;
}
const ResultCardDetailed: React.FC<ResultCardDetailedProps> = (props) => {
  const { data, isLoading, isError } = useGetDetailsQuery(`${props.searchId}`);

  const closeDetailed = () => {
    props.setDetailed(-1);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner classname="loader"></Spinner>
        </div>
      ) : (
        <div className="result-card_detailed">
          {isError ? (
            <h3>No results</h3>
          ) : (
            <div className="result-card_detailed">
              <div className="result-card__close" onClick={closeDetailed}>
                &#9587;
              </div>
              <img
                className="result-card__img_detailed"
                src={data?.movie.large_cover_image}
              ></img>
              <p className="result-card__info">Title: {data?.movie.title}</p>
              <p className="result-card__info">
                Genre: {data?.movie.genres.join(', ')}
              </p>
              <p className="result-card__info">Year: {data?.movie.year}</p>
              <p className="result-card__info">Rating: {data?.movie.rating}</p>
              <p className="result-card__info">
                {data?.movie.description_full}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultCardDetailed;

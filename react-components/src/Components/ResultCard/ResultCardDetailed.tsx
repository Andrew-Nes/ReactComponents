import { searchResponseState } from '../../types/types';
import './resultCard.css';

interface ResultCardDetailedProps {
  searchResponse: searchResponseState;
  setDetailed: (index: number) => void;
}
const ResultCardDetailed: React.FC<ResultCardDetailedProps> = (props) => {
  const description =
    props.searchResponse.summary.length <= 1
      ? 'No description provided'
      : props.searchResponse.summary;

  const closeDetailed = () => {
    props.setDetailed(-1);
  };

  return (
    <div className="result-card_detailed">
      <div className="result-card__close" onClick={closeDetailed}>
        &#9587;
      </div>
      <img
        className="result-card__img_detailed"
        src={props.searchResponse.large_cover_image}
      ></img>
      <p className="result-card__info">Title: {props.searchResponse.title}</p>
      <p className="result-card__info">
        Genre: {props.searchResponse.genres.join(', ')}
      </p>
      <p className="result-card__info">Year: {props.searchResponse.year}</p>
      <p className="result-card__info">Rating: {props.searchResponse.rating}</p>
      <p className="result-card__info">{description}</p>
    </div>
  );
};

export default ResultCardDetailed;

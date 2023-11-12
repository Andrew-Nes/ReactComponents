import { searchResponseState } from '../../types/types';

interface ResultCardProps {
  setDetailed: (index: number) => void;
  searchResponse: searchResponseState;
  key: number;
  index: number;
}
const ResultCard: React.FC<ResultCardProps> = (props) => {
  const handleClick = () => {
    props.setDetailed(props.index);
  };

  return (
    <div key={props.index} className="result-card" onClick={handleClick}>
      <img
        className="result-card__img"
        src={props.searchResponse.medium_cover_image}
      ></img>
      <p className="result-card__info">Title: {props.searchResponse.title}</p>
      <p className="result-card__info">
        Genre: {props.searchResponse.genres.join(', ')}
      </p>
      <p className="result-card__info">Year: {props.searchResponse.year}</p>
      <p className="result-card__info">Rating: {props.searchResponse.rating}</p>
    </div>
  );
};

export default ResultCard;

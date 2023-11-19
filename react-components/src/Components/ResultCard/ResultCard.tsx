import { Movie } from '../../types/types';

interface ResultCardProps {
  setDetailed: (index: number) => void;
  searchResponse: Movie;
  key: number;
}
const ResultCard: React.FC<ResultCardProps> = (props) => {
  const handleClick = () => {
    props.setDetailed(Number(props.searchResponse.id));
  };

  return (
    <div key={props.key} className="result-card" onClick={handleClick}>
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

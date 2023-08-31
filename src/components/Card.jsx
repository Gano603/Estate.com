import { Link } from 'react-router-dom';
import '../styles/Card.scss';

const Card = ({ title , target , imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title}/>
      <h2>{title}</h2>
      <Link to={target}>Browse</Link>
    </div>
  );
};

export default Card;
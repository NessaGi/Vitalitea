import PropTypes from 'prop-types';
import '../styles/plantCard.css';
import cupIcon from '../assets/cup-icon.png'; 
import cartIcon from '../assets/cart-icon.png'; 

function PlantCard({ plant, onFavoriteClick, onCartClick }) {
  return (
    <div className="plant-card">
        <img 
          src={`${import.meta.env.VITE_API_URL}/assets/${plant.image_url}`}
          alt={plant.name}
          className="plant-image"
        />
      <div>
        <button className="cup-icon" type="button" onClick={() => onFavoriteClick(plant.id)}>
          <img src={cupIcon} alt="Add to tisane" />
        </button>
        <button className="cart-icon" type="button" onClick={() => onCartClick(plant.id)}>
          <img src={cartIcon} alt="Add to Cart" />
        </button>
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-properties">{plant.properties}</p>
      </div>
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    properties: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default PlantCard;

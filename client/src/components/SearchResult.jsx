/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import PlantCard from "./PlantCard";
import "../styles/searchResult.css";

function SearchResults({
  selectedSymptom,
  plante = [], // Utilisation de paramètres par défaut pour 'plante'
  onFavoriteClick = () => {}, // Utilisation de paramètres par défaut pour 'onFavoriteClick'
  onCartClick = () => {}, // Utilisation de paramètres par défaut pour 'onCartClick'
}) {
  if (plante.length === 0) {
    return (
      <p className="no-results">Aucune plante trouvée pour ce symptôme.</p>
    );
  }

  return (
    <div className="search-results-container">
      {selectedSymptom && (
        <h2 className="results-title">
          Plantes associées à : {selectedSymptom.name}
        </h2>
      )}
      <div className="plants-grid">
        {plante.map((pl) => (
          <Link to={`/detail/${pl.id}`} key={pl.id}>
            <PlantCard
              plant={pl}
              onFavoriteClick={onFavoriteClick}
              onCartClick={onCartClick}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  selectedSymptom: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  plante: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      properties: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    })
  ),
  onFavoriteClick: PropTypes.func,
  onCartClick: PropTypes.func,
};

// Supprimer l'utilisation de defaultProps

export default SearchResults;

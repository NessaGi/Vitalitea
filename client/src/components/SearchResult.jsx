import { Link, useOutletContext } from 'react-router-dom';
import PropTypes from "prop-types";
import PlantCard from "./PlantCard";
import "../styles/searchResult.css";

function SearchResults({
  selectedSymptom = { id: null, name: 'Tous les symptômes' }, // Valeur par défaut pour selectedSymptom
  onFavoriteClick = () => {}, // Valeur par défaut pour onFavoriteClick
  onCartClick = () => {}, // Valeur par défaut pour onCartClick
}) {
  // Récupérer les plantes depuis le contexte d'Outlet
  const { plante } = useOutletContext();

  if (!plante || plante.length === 0) {
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
  // eslint-disable-next-line react/no-unused-prop-types
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

SearchResults.defaultProps = {
  plante: [],
  onFavoriteClick: () => {},
  onCartClick: () => {},
};

export default SearchResults;

import { useState, useEffect } from 'react';
import PropTypes from "prop-types";


function SearchResults ({ selectedSymptom }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (selectedSymptom) {
      fetch(`${import.meta.env.VITE_API_URL}/api/plantes/symptome/${selectedSymptom.id}`)
        .then((response) => response.json())
        .then((data) => setPlants(data))
        .catch((error) => console.error('Erreur:', error));
    }
  }, [selectedSymptom]);

  return (
    <div className="search-results">
      {plants.length > 0 ? (
        <ul className="plants-list">
          {plants.map((plant) => (
            <li key={plant.id} className="plant-item">
              <img src={`${import.meta.env.VITE_API_URL}/images/${plant.image_url}`} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.properties}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune plante trouvée pour ce symptôme.</p>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  selectedSymptom: PropTypes.func.isRequired,
};

export default SearchResults;

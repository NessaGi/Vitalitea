import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import "../styles/searchBar.css";

function SearchBar({ onSymptomSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      fetch(`${import.meta.env.VITE_API_URL}/api/symptomes`)
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter(symptom =>
            symptom.name.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filtered);
        })
        .catch((error) => console.error('Erreur:', error));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelect = (symptom) => {
    if (typeof onSymptomSelect === 'function') {
      onSymptomSelect(symptom);
    } else {
      console.error('onSymptomSelect is not a function');
    }
    setQuery(symptom.name);
    setSuggestions([]);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Entrez un symptôme..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((symptom) => (
            <button
              type="button"
              className="suggestion-item"
              key={symptom.id}
              onClick={() => handleSelect(symptom)}
            >
              {symptom.name}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  onSymptomSelect: PropTypes.func.isRequired,
};

export default SearchBar;

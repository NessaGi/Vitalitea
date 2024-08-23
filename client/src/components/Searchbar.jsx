import { useState, useEffect } from 'react';
import PropTypes from "prop-types";


function SearchBar ({ onSymptomSelect }) {
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
    onSymptomSelect(symptom);
    setQuery(symptom.name);
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Recherchez un symptôme..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((symptom) => (
            <button
              type="button"
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
};

SearchBar.propTypes = {
  onSymptomSelect: PropTypes.func.isRequired,
};

export default SearchBar;

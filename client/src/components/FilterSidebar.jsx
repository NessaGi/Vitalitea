import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../styles/filterSidebar.css";

function FilterSidebar({ onFilterChange }) {
  const [symptoms, setSymptoms] = useState([]);
  const [properties, setProperties] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/symptomes`)
      .then((response) => response.json())
      .then((data) => {
        setSymptoms(data);
      });

    fetch(`${import.meta.env.VITE_API_URL}/api/propertiesPlante`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  const handleSymptomChange = (e) => {
    const symptomId = e.target.value;
    setSelectedSymptom(symptomId);
    onFilterChange({ symptomId, propertyId: selectedProperty });
  };

  const handlePropertyChange = (e) => {
    const propertyId = e.target.value;
    setSelectedProperty(propertyId);
    onFilterChange({ symptomId: selectedSymptom, propertyId });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h3>Symptômes</h3>
        <select onChange={handleSymptomChange} value={selectedSymptom || ""}>
          <option value="">Sélectionner un symptôme</option>
          {symptoms.map((symptom) => (
            <option key={symptom.id} value={symptom.id}>
              {symptom.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <h3>Propriétés</h3>
        <select onChange={handlePropertyChange} value={selectedProperty || ""}>
          <option value="">Sélectionner une propriété</option>
          {properties.map((property) => (
            <option key={property} value={property}>
              {property}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

FilterSidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired, // Validation du type de la prop 'onFilterChange'
};

export default FilterSidebar;

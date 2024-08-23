import { useState } from 'react';
import SearchBar from '../components/Searchbar';
import SearchResults from '../components/SearchResult';

function SearchPage() {
  // État pour stocker le symptôme sélectionné
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  // Fonction de gestion de la sélection d'un symptôme
  const handleSymptomeSelect = (symptome) => {
    setSelectedSymptom(symptome);
  };

  return (
    <div>
      <h1>Recherche de Plantes par Symptôme</h1>
      
      {/* Composant pour la barre de recherche */}
      <SearchBar onSymptomSelect={handleSymptomeSelect} />
      
      {/* Afficher la liste des plantes seulement si un symptôme est sélectionné */}
      {selectedSymptom && (
        <div>
          <h2>Plantes associées au symptôme : {selectedSymptom.name}</h2>
          <SearchResults selectedSymptom={selectedSymptom} />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
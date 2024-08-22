import { useState, useEffect } from 'react';
import SymptomesList from '../components/SymptomesList';
import PlantesList from '../components/PlantesList';

function SearchPage() {
  // État pour stocker les symptômes
  const [symptomes, setSymptomes] = useState([]);

  // État pour stocker les plantes associées au symptôme sélectionné
  const [plantes, setPlantes] = useState([]);

  // État pour le symptôme sélectionné
  const [selectedSymptome, setSelectedSymptome] = useState(null);

  // Charger les symptômes au chargement du composant
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/symptomes`)      
      .then((response) => response.json())
      .then((data) => setSymptomes(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  // Fonction de gestion de la sélection d'un symptôme
  const handleSymptomeSelect = (symptomeId) => {
    setSelectedSymptome(symptomeId);

    // Récupérer les plantes associées au symptôme sélectionné
    fetch(`${import.meta.env.VITE_API_URL}/api/plantes/${symptomeId}`)
      .then((response) => response.json())
      .then((data) => setPlantes(data))
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div>
      <h1>Recherche de Plantes par Symptôme</h1>
      
      {/* Composant pour afficher la liste des symptômes */}
      <SymptomesList symptomes={symptomes} onSymptomeSelect={handleSymptomeSelect} />
      
      {/* Afficher la liste des plantes seulement si un symptôme est sélectionné */}
      {selectedSymptome && (
        <div>
          <h2>Plantes associées au symptôme sélectionné :</h2>
          <PlantesList plantes={plantes} onPlanteSelect={(id) => 
            (`Plante sélectionnée: ${id}`)} />
        </div>
      )}
    </div>
  );
}

export default SearchPage;

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchResults from '../components/SearchResult';
import "../styles/searchPage.css"

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [plante, setPlante] = useState([]);
  const symptomName = searchParams.get('symptom');

  useEffect(() => {
    if (symptomName) {
      // Fetch des plantes associées au symptôme sélectionné par nom
      fetch(`${import.meta.env.VITE_API_URL}/api/plantes/symptome?name=${encodeURIComponent(symptomName)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Symptôme non trouvé");
          }
          return response.json();
        })
        .then((data) => setPlante(data))
        .catch((error) => console.error('Erreur lors de la récupération des plantes:', error));
    }
  }, [symptomName]);

  return (
    <div>
          <SearchResults
            selectedSymptom={{ name: symptomName }} // Passe le nom du symptôme comme prop
            plante={plante}
            onFavoriteClick={() => {}}
            onCartClick={() => {}}
          />
        <div/>
    </div>
  );
}

export default SearchPage;

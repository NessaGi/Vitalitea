import { useState, useEffect } from "react"; // Suppression de useSearchParams et useOutletContext inutilisés
import SearchResults from "../components/SearchResult";
import FilterSidebar from "../components/FilterSidebar";
import "../styles/searchPage.css";

function SearchPage() {
  const [plante, setPlante] = useState([]);

  const fetchPlantes = ({ symptomId = null, propertyId = null } = {}) => {
    let url = `${import.meta.env.VITE_API_URL}/api/plantes`;

    const params = new URLSearchParams();

    if (symptomId) {
      params.append("symptomId", symptomId);
    }

    if (propertyId) {
      params.append("propertyId", propertyId);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlante(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des plantes:", error)
      );
  };

  useEffect(() => {
    fetchPlantes({ symptomId: null, propertyId: null });
  }, []);

  const handleFilterChange = (filters) => {
    fetchPlantes(filters);
  };

  return (
    <div className="search-page">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <SearchResults
        plante={plante}
        onFavoriteClick={() => {}}
        onCartClick={() => {}}
      />
    </div>
  );
}

export default SearchPage;

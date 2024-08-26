import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FilterSidebar from "./components/FilterSidebar";
import bannerImage from "./assets/bg-banner-all-plants.png";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ symptomId: null, propertyId: null });

  const getBannerTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ACCUEIL";
      case "/resultats":
        return "VOTRE RECHERCHE:";
      // Autres cases...
      default:
        return "TON BIEN-ÊTRE À INFUSER";
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    navigate('/resultats');
  };
  const handleSymptomSelect = (symptom) => {
    navigate(`/resultats?symptom=${symptom.name}`);
  };

  return (
    <div>
      <Header onSymptomSelect={handleSymptomSelect}/>
      <nav>
        <Link to="/toutes-nos-plantes">NOS PLANTES</Link>
        <Link to="/conseils">CONSEILS</Link>
      </nav>
      <Banner title={getBannerTitle()} imageUrl={bannerImage} />
      <FilterSidebar onFilterChange={handleFilterChange} />
      <Outlet context={{ filters }} />
    </div>
  );
}

export default App;

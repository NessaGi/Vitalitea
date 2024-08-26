import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import bannerImage from "./assets/bg-banner-all-plants.png";

import "./App.css";


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const getBannerTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ACCUEIL";
      case "/resultats":
        return "VOTRE RECHERCHE:";
      case "/nos-plantes":
        return "TOUTES NOS PLANTES";
      case "/conseils":
        return "CONSEILS BIEN-ÊTRE";
      case "/details":
        return "EN SAVOIR PLUS";
      case "/mes-tisanes":
        return "CONCOCTE TA TISANE";
      case "/panier":
        return "VOTRE PANIER";
      default:
        return "TON BIEN-ÊTRE À INFUSER";
    }
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
      <Banner title={getBannerTitle()} imageUrl={bannerImage}/>
      <Outlet />
    </div>
  );
}

export default App;

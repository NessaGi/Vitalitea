import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/vitaliteaLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={logo} alt="Vitalitea Logo" className="logo" />
        <nav className="header-nav">
          <Link to="/recherche" className="nav-link">
            Recherche
          </Link>
          <p className="button">Connexion</p>
        </nav>
      </div>
      <h1>Votre bien-etre à infuser sur mesure</h1>
    </header>
  );
}

export default Header;

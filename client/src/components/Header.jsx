import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/header.css";
import logo from "../assets/vitaliteaLogo.png";
import SearchBar from "./Searchbar";
import cupIcon from "../assets/cup-icon.png";
import userIcon from "../assets/user-Icon.png";
import cartIcon from "../assets/cart-icon.png";

function Header({ onSymptomSelect }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-searchbar desktop-only">
          <SearchBar onSymptomSelect={onSymptomSelect}/>
        </div>
        <div className="header-logo">
          <Link to= "/" className= "Vitalitea logo">
          <img src={logo} alt="Vitalitea Logo" className="logo" />
          </Link>
        </div>
        <div className="header-icons">
          <img src={cupIcon} alt="Add to tisane" className="header-icon" />
          <img src={userIcon} alt="User" className="header-icon" />
          <img src={cartIcon} alt="Add to Cart" className="header-icon" />
        </div>
      </div>
      <h1 className="header-tagline">Infusez votre bien-être</h1>
      <div className="mobile-only searchbar-container">
        <SearchBar onSymptomSelect={onSymptomSelect}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSymptomSelect: PropTypes.func.isRequired,
};

export default Header;

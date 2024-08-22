import { Outlet, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recherche">Recherche</Link>
      </nav>
      {/* Rendre les composants enfants ici */}
      <Outlet />
    </div>
  );
}

export default App;

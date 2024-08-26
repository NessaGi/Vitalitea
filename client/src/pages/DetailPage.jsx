import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CupIcon from '../assets/cup-icon.png'
import "../styles/detailPage.css"

function DetailPage() {
  const { id } = useParams(); // Récupère l'id de la plante à partir de l'URL
  const [plante, setPlante] = useState(null);

  useEffect(() => {
    // Fetch des détails de la plante par ID
    fetch(`${import.meta.env.VITE_API_URL}/api/plantes/${id}`)
      .then((response) => response.json())
      .then((data) => setPlante(data))
      .catch((error) => console.error('Erreur lors de la récupération des détails de la plante:', error));
  }, [id]);

  if (!plante) return <p>Chargement...</p>;

  return (
    <div className="details-page">
      <div className="details-left">
        <img src={`${import.meta.env.VITE_API_URL}/assets/${plante.image_url}`} alt={plante.name} className="details-image" />
      </div>
      <div className="details-right">
        <h2 className="nom">{plante.name} <img src={CupIcon} alt="Add to tisane" /></h2>
        <p>{plante.description}</p>
        <p><strong>Quantité :</strong> {plante.quantity}g</p>
        <p><strong>Prix :</strong> {plante.price}€</p>
        <div className="quantity-selector">
          <button type='button'> -  </button>
          <input type="number" value="1" readOnly />
          <button type='button'>+</button>
        </div>
        <button type='button'className="add-to-cart">Ajouter au panier</button>
      </div>
    </div>
  );
}

export default DetailPage;

import PropTypes from "prop-types";

function PlantesList({ plantes, onPlanteSelect }) {
  return (
    <div>
      <h2>Liste des Plantes</h2>
      <ul>
        {plantes.map((plante) => (
          <button
            type="button"
            key={plante.id}
            onClick={() => onPlanteSelect(plante.id)}
          >
            {plante.name}
          </button>
        ))}
      </ul>
    </div>
  );
}

// Validation des props
PlantesList.propTypes = {
// Un tableau d'objets représentant des plantes. Chaque objet doit avoir un id et un name.  
  plantes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
// Une fonction appelée lorsqu'une plante est sélectionnée (cliquée). Elle reçoit l'ID de la plante sélectionnée.  
  onPlanteSelect: PropTypes.func.isRequired,
};

export default PlantesList;

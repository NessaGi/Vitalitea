import PropTypes from "prop-types";

function SymptomesList({ symptomes, onSymptomeSelect }) {
  return (
    <div>
      <h2>Liste des Symptômes</h2>
      <ul>
        {symptomes.map((symptome) => (
          <button
            type="button"
            key={symptome.id}
            onClick={() => onSymptomeSelect(symptome.id)}
            className="list-button"
          >
            {symptome.name}
          </button>
        ))}
      </ul>
    </div>
  );
}

// Validation des props
SymptomesList.propTypes = {
  // Un tableau d'objets, où chaque objet représente un symptôme avec un id et un name.
  symptomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  // Une fonction qui est appelée lorsqu'un symptôme est cliqué, transmettant l'ID du symptôme sélectionné.
  onSymptomeSelect: PropTypes.func.isRequired,
};

export default SymptomesList;

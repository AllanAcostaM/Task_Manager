import PropTypes from "prop-types";
import { useContext } from "react";

import LocalizationContext from "../context/LocalizationContext";
import "../styles/Title.scss";

const Title = ({ count }) => {
  // Obtiene el contexto
  const local = useContext(LocalizationContext);

  return (
    <div className="Title">
      <h2>{local.Title}</h2>
      <h4>
        {local.count}: {count}
      </h4>
    </div>
  );
};

// Porpiedades por defecto
Title.defaultProps = {
  count: 0,
};

// Define tipos de parametros
Title.propTypes = {
  count: PropTypes.number,
};

export default Title;

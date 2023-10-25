import PropTypes from "prop-types";
import "../styles/Title.scss";

const Title = ({ text, small }) => {
  return (
    <div className="Title">
      <h2>{text}</h2>
      <h4>{small}</h4>
    </div>
  );
};

// Porpiedades por defecto
Title.defaultProps = {
  text: "Admin tareas",
  small: "App",
};

// Define tipos de parametros
Title.propTypes = {
  text: PropTypes.string,
  small: PropTypes.string,
};

export default Title;

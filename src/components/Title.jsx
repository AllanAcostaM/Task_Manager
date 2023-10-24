import PropTypes from "prop-types";

const Title = ({ text, small }) => {
  const subHeadingStyles = {
    color: small.length > 3 ? "blue3" : "yellow",
    textoDecoration: "underline",
  };

  return (
    <>
      <h1 style={{ color: "orange", backgroundColor: "red" }}>{text}</h1>
      <h3 style={subHeadingStyles}>{small}</h3>
    </>
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

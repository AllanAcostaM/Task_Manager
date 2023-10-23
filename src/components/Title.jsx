import PropTypes from 'prop-types';

const Title = ({ text, small }) => {
    return (
    <>
    <h1>{text}</h1>
    <h3>{small}</h3>
    </>
  );
};

// Porpiedades por defecto
Title.defaultProps = {
    text: "Admin tareas",
    small: "App"
}

// Define tipos de parametros
Title.propTypes = {
    text: PropTypes.string,
    small: PropTypes.string
}

export default Title;
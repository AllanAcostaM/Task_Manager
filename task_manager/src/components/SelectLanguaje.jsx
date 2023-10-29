import PropTypes from "prop-types";
import "../styles/Languajes.scss";

const SelectLanguaje = ({ onChangeLanguaje }) => {
  return (
    <div className="languajes">
      <span onClick={() => onChangeLanguaje("es")}>🇪🇦</span>
      <span onClick={() => onChangeLanguaje("en")}>🇬🇧</span>
      <span onClick={() => onChangeLanguaje("fr")}>🇲🇫</span>
    </div>
  );
};

SelectLanguaje.propTypes = {
  onChangeLanguaje: PropTypes.func,
};

export default SelectLanguaje;

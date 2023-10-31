import { useContext } from "react";

import LocalizationContext from "../context/LocalizationContext";
import local from "../context/LocalizationData";

import "../styles/Languajes.scss";

const SelectLanguaje = () => {
  // Obtiene el contexto
  const { setLanguaje } = useContext(LocalizationContext);

  return (
    <div className="languajes">
      <span onClick={() => setLanguaje(local["es"])}>🇪🇦</span>
      <span onClick={() => setLanguaje(local["en"])}>🇬🇧</span>
      <span onClick={() => setLanguaje(local["fr"])}>🇲🇫</span>
    </div>
  );
};

export default SelectLanguaje;

import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

import "../styles/AddTaskForm.scss";

const AddTaskForm = ({ onCreateTask }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  // Obtiene el contexto
  const { languaje } = useContext(LocalizationContext);
  // Detecta los cambios en la variable "text" y actualiza la variable "amount"
  useEffect(() => {
    setAmount(text.length);
  }, [text]);

  const handleSubmit = (event) => {
    // Previene que se envie informacion al servidor refrescando la pagina
    event.preventDefault();
    // Valida que el usuario haya digitado un texto
    if (!text) {
      alert(languaje);
      return;
    }
    // Envia la nueva tarea al componente padre
    onCreateTask(text);
    // Limpia el formulario
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">{languaje.newTask}:</label>
      <input
        type="text"
        className="form__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <small className="form__characters">
        {languaje.typedCharacters}: {amount}
      </small>
      <button className="form__button">{languaje.add}</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};
export default AddTaskForm;

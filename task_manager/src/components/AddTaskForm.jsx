import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../styles/AddTaskForm.scss";

const AddTaskForm = ({ onCreateTask }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Detecta los cambios en la variable "text" y actualiza la variable "amount"
  useEffect(() => {
    setAmount(text.length);
  }, [text]);

  const handleSubmit = (event) => {
    // Previene que se envie informacion al servidor refrescando la pagina
    event.preventDefault();
    // Valida que el usuario haya digitado un texto
    if (!text) {
      alert("You must type the text of the task");
      return;
    }
    // Envia la nueva tarea al componente padre
    onCreateTask(text);
    // Limpia el formulario
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">New Task</label>
      <input
        type="text"
        className="form__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <small className="form__characters">Typed characters: {amount}</small>
      <button className="form__button">Add</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};
export default AddTaskForm;

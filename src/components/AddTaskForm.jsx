import "../styles/AddTaskForm.scss";

const AddTaskForm = () => {
  return (
    <form className="form">
      <label className="form__label">New Task</label>
      <input type="text" className="form__input" />
      <button className="form__button">Add</button>
    </form>
  );
};
export default AddTaskForm;

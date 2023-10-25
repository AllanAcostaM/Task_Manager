import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

import "../styles/TaskItem.scss";

const TaskItem = ({ task }) => {
  const onClickHandler = () => {
    console.log(`Eliminado tarea ${task.text} con ${task.id}`);
  };

  return (
    <div className="task">
      <h3>{task.text}</h3>
      <FaTrashAlt className="delete" onClick={onClickHandler} />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
};

export default TaskItem;

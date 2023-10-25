import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import "../styles/TaskItem.scss";

const TaskItem = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTrashAlt />
      </h3>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
};

export default TaskItem;

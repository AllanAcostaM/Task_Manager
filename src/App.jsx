import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Running" },
    { id: "2", text: "Cooking" },
    { id: "3", text: "Drawing" },
    { id: "4", text: "Swimming" },
  ]);

  const onDeleteHandler = (id) => {
    if (confirm("Are you sure ypu want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      const result = tasks.filter((task) => task.id !== id);
      // Modifica el estado
      setTasks(result);
    }
  };

  return (
    <div className="app">
      <Header />
      <AddTaskForm />
      <TaskList tasks={tasks} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;

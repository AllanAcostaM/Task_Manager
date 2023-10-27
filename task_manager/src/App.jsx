import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect se ejecuta una sola vez cuando se monta el componente
  useEffect(() => {
    const getTasks = async () => {
      try {
        // Hace la peticion al backend
        const comunication = await axios.get("http://localhost:3000/tasks");

        // Verifica el exito de la peticion
        if (comunication.status === 200) {
          // Modifica el estado
          setTasks(comunication.data);
        }
      } catch (error) {
        console.error("No hubo conexion al backend");
      }
    };
    // Invoca la funcion para comunicarse con el backend
    getTasks();
  }, []);

  const onDeleteHandler = (id) => {
    if (confirm("Are you sure ypu want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      const result = tasks.filter((task) => task.id !== id);
      // Modifica el estado
      setTasks(result);
    }
  };

  const onCreateHandler = (text) => {
    // Crean un objeto para la nueva tarea
    const newTask = {
      id: crypto.randomUUID(),
      text,
    };
    // Crea un nuevo arreglo basado en los elementos del
    // arreglo tasks agregando la nueva tarea al final
    const newTasks = [...tasks, newTask];
    // Modifica el estado
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header count={tasks.length} />
      <AddTaskForm onCreateTask={onCreateHandler} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
    </div>
  );
}

export default App;

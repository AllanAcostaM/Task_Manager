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
        const comunication = await axios.get(import.meta.env.VITE_BACKEND_URL);

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

  const onDeleteHandler = async (id) => {
    if (confirm("Are you sure ypu want to delete the task?")) {
      try {
        // Elimina la tarea del backend
        const comunication = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}${id}`
        );
        if (comunication.status === 200) {
          // Elimina el elemento filtrando el arreglo por el id de cada tarea
          const result = tasks.filter((task) => task.id !== id);
          // Modifica el estado
          setTasks(result);
        }
      } catch (error) {
        alert("Error eliminado la tarea\nIntente mas tarde!!");
        console.log(error);
      }
    }
  };

  const onCreateHandler = async (text) => {
    try {
      // Crean un objeto para la nueva tarea
      const newTask = {
        id: crypto.randomUUID(),
        text,
      };
      // Crea la tarea en el backend
      const comunication = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        newTask
      );
      // Verificacion de exito de la operacion
      if (comunication.status === 201) {
        // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva tarea al final
        const newTasks = [...tasks, comunication.data];
        // Modifica el estado
        setTasks(newTasks);
      }
    } catch (error) {
      alert("Error de comunicacion creando la tarea\nIntente mas tarde!");
      console.log("Hubo un error de comunicacion creando la tarea");
    }
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

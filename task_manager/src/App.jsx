import { useState, useEffect, useReducer } from "react";

// Componentes
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import SelectLanguaje from "./components/SelectLanguaje";

// Contexto
import LocalizationContext from "./context/LocalizationContext";
import local from "./context/LocalizationData";

// Reducers
import taskReducer from "./reducers/taskReducer";
import { GET, ADD, DELETE } from "./reducers/actions";

// API
import getTasks from "./api/getTasks";
import createTask from "./api/createTask";
import deleteTask from "./api/deleteTask";

// Estilos
import "./styles/App.scss";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [languaje, setLanguaje] = useState(local.es);
  // useEffect se ejecuta una sola vez cuando se monta el componente
  useEffect(() => {
    const loadTasks = async () => {
      // Obtiene las tareas del backend
      const tasks = await getTasks();
      // Modifica el estado
      if (tasks) {
        dispatch({ type: GET, tasks });
      } else {
        dispatch({ type: GET, tasks: [] });
      }
    };

    loadTasks();
  }, []);

  const onDeleteHandler = async (id) => {
    if (confirm(languaje.confirmDeletion)) {
      if (await deleteTask(id)) {
        // Elimina la tarea del backend
        // Modifica el estado
        dispatch({ type: DELETE, id });
      }
    }
  };

  const onCreateHandler = async (text) => {
    // Crea la tarea en el backend
    const newTask = await createTask(text);
    // Modifica el estado
    if (newTask) {
      dispatch({ type: ADD, newTask });
    } else {
      alert("Hubo un error\nIntente mas tarde");
    }
  };

  return (
    <LocalizationContext.Provider value={{ languaje, setLanguaje }}>
      <div className="app">
        <Header count={tasks.length} />
        <SelectLanguaje />
        <AddTaskForm onCreateTask={onCreateHandler} />
        <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
      </div>
    </LocalizationContext.Provider>
  );
}

export default App;

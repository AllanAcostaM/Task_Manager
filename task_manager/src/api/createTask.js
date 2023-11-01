import axios from "axios";

const createTask = async (text) => {
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
      return comunication.data;
    }
  } catch (error) {
    console.log("Hubo un error de comunicacion creando la tarea");
    return null;
  }
};

export default createTask;

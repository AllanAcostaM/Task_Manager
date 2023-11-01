import axios from "axios";

const getTasks = async () => {
  try {
    // Hace la peticion al backend
    const comunication = await axios.get(import.meta.env.VITE_BACKEND_URL);

    // Verifica el exito de la peticion
    if (comunication.status === 200) {
      return comunication.data;
    }
  } catch (error) {
    console.error("No hubo conexion al backend");
    return null;
  }
};
export default getTasks;

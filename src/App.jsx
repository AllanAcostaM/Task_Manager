import "./app.css"

const nombre = "Allan"
const edad = 21

function App() {
  return (
    <>
    <p>El nombre del estudiante es {nombre}</p>
    <p>{edad > 21 ? "Vida triste" : "Vida feliz"}</p>
    </>
  )
}


export default App;

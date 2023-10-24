import "./app.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <TaskList />
    </div>
  );
}

export default App;

const tasks = [
  { id: "1", text: "Running" },
  { id: "2", text: "Cooking" },
  { id: "3", text: "Drawing" },
  { id: "4", text: "Swimming" },
];

// const tasks = [];

const TaskList = () => {
  const username = "Joseph";
  return (
    <>
      <p>Welcome, {username || "Guest"}</p>
      {tasks.length < 0 ? (
        <h1>No hay tareas</h1>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
      {tasks.length > 0 && <p>length: {tasks.length}</p>}
    </>
  );
};

export default TaskList;

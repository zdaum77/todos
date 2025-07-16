import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      label: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      labe: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      label: "Task 3",
      isCompleted: false,
    },
  ]);

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos}></TodoList>
        <div className="mt-4">
          <AddTodoForm todos={todos} setTodos={setTodos}></AddTodoForm>
        </div>
      </div>
    </div>
  );
}

export default App;

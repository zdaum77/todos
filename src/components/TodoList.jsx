import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, setTodos } = props;
  return (
    <ul className="list-group">
      {todos.map((task) => {
        const { label, id, isCompleted } = task;
        return (
          <TodoItem
            key={id}
            id={id}
            label={label}
            isCompleted={isCompleted}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;

import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="list-group">
      <div

      >
        {todos.map((task) => {
          const { label, id, isCompleted } = task;
          return <TodoItem key={id} label={label} isCompleted={isCompleted} />;
        })}
      </div>
    </ul>
  );
}

export default TodoList;

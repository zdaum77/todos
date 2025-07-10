import TodoItem from "./TodoItem";

function TodoList() {
  return <ul className="list-group">
    <TodoItem name="Todo 1"/>
    <TodoItem name="Todo 2"/>
    <TodoItem name="Todo 3"/>
  </ul>;
}

export default TodoList;

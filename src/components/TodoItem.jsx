function TodoItem(props) {
  const { id, label, isCompleted, todos, setTodos } = props;
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      const updatedTodos = todos.filter((task) => {
        if (task.id !== id) {
          return true;
        } else {
          return false;
        }
      });
      setTodos(updatedTodos);
    }
  };

  const handleChange = () => {
    const updatedTodos = [...todos];
    const selected = updatedTodos.find((task) =>
      task.id === id ? true : false
    );
    if (selected.isCompleted) {
      selected.isCompleted = false;
    } else {
      selected.isCompleted = true;
    }
    setTodos(updatedTodos);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={handleChange}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm" onClick={handleChange}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          style={isCompleted ? { color: "grey" } : { color: "black" }}
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

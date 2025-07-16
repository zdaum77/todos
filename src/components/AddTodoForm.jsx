function AddTodoForm(props) {
  const { todos, setTodos } = props;
  return (
    <div>
      <form className="mt-4 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          id="taskname"
          required
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            // disable the default button behaviour
            event.preventDefault();

            // check if the input field is empty or not
            if (taskname.value === "") {
              alert("Please fill in the task");
            } else {
              setTodos([
                ...todos,
                {
                  id: Math.random(),
                  label: taskname.value,
                  isCompleted: false,
                },
              ]);
              // clear the input
              taskname.value = "";
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;

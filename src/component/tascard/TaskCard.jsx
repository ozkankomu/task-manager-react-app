import React from "react";

const TaskCard = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((items) => items.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="row gap-2">
      {todos.map((item) => {
        const { id, task, date } = item;
        return (
          <div className="card text-center" key={id}>
            <div className="card-header">Tasks Schedule</div>
            <div className="card-body">
              <h5 className="card-title">{task}</h5>
              <p className="card-text">{date}</p>
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-danger"> Task Completed</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Task Delete
                </button>
              </div>
            </div>
            <div className="card-footer text-muted">Created Via React</div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;

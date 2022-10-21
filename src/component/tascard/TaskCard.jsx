import React from "react";
import "./TaskCard.css";

const TaskCard = ({ todos, setTodos }) => {
  console.log(...todos);

  const handleDelete = (id) => {
    const newTodos = todos.filter((items) => items.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (e, id, completed) => {
    e.preventDefault();
    const newList = [];
    todos.map((item) => {
      console.log(item);
      if (item.id === id) {
        newList.push({
          ...item,
          completed: !completed,
        });
      } else {
        newList.push(item);
      }
    });
    setTodos(newList);
    localStorage.setItem("TODOS", JSON.stringify(newList));
  };

  return (
    <div className="row gap-2">
      {todos.map((item) => {
        const { id, task, date, completed } = item;

        return (
          <div className="card text-center" key={id}>
            <div className={!completed ? "card-body " : "cord-body completed"}>
              Tasks Schedule
            </div>
            <div className="card-body">
              <h5 className="card-title">{task}</h5>
              <p className="card-text">
                {new Date(date).toLocaleString("tr-TR")}
              </p>
              <div className="d-flex justify-content-evenly">
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleCompleted(e, id, completed)}
                >
                  Task Completed
                </button>
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

import { useState, useEffect } from "react";
import TaskCard from "../tascard/TaskCard.jsx";

const TaskManager = () => {
  const [showTasks, setShowTasks] = useState(true);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TODOS")) || []
  );
  const [tasks, setTasks] = useState({
    id: "",
    task: "",
    date: "",
    completed: false,
  });

  const handleTasks = (e) => {
    e.preventDefault();
    setTodos([...todos, tasks]);
    setTasks({ id: "", task: "", date: "", completed: false });
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  return (
    <form onSubmit={handleTasks}>
      <div className="input-group flex-nowrap my-5">
        <label htmlFor="task"></label>

        <input
          required
          id="task"
          type="text"
          className="form-control fs-5"
          placeholder="Please enter a task"
          aria-label="task"
          aria-describedby="addon-wrapping"
          value={tasks.task}
          onChange={(e) =>
            setTasks({ ...tasks, task: e.target.value, id: Math.random() })
          }
        ></input>
      </div>
      <div className="input-group flex-nowrap">
        <label htmlFor="dt-input"></label>

        <input
          required
          id="date"
          type="datetime-local"
          className="form-control fs-5"
          placeholder="please enter a date"
          value={tasks.date}
          aria-describedby="addon-wrapping"
          onChange={(e) => setTasks({ ...tasks, date: e.target.value })}
        ></input>
      </div>
      <div className="d-flex justify-content-evenly my-4">
        <button className="btn btn-danger" type="submit">
          Add Task
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setShowTasks(!showTasks)}
        >
          {!showTasks ? "Show Tasks" : "Hide Tasks"}
        </button>
      </div>
      {showTasks && (
        <TaskCard
          todos={todos}
          setTodos={setTodos}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}
    </form>
  );
};

export default TaskManager;

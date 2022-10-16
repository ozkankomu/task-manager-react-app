import { useState } from "react";
import TaskManager from "../taskmanager/TaskManager";
import "./Main.css";

const Main = () => {
  const [showBar, setShowBar] = useState(false);

  const handleTaskBar = () => {
    setShowBar(!showBar);
    console.log(showBar);
  };
  return (
    <div className="container">
      <div className="text-center">
        <h1>Task Tracer</h1>
        <button className="btn btn-danger" onClick={handleTaskBar}>
          Show Add Task Bar
        </button>
      </div>
      {showBar && <TaskManager />}
    </div>
  );
};

export default Main;

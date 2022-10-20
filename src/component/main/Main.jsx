import { useState } from "react";
import TaskManager from "../taskmanager/TaskManager";
import "./Main.css";

const Main = () => {
  const [showBar, setShowBar] = useState(true);

  const handleTaskBar = () => {
    setShowBar(!showBar);
    console.log(showBar);
  };
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="my-3">Task Tracer</h1>
        <button className="btn btn-danger" onClick={handleTaskBar}>
          {!showBar ? "Show Task Bar" : "Hide Task Bar"}
        </button>
      </div>
      {showBar && <TaskManager />}
    </div>
  );
};

export default Main;

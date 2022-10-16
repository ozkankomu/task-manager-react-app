import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import TaskCard from "../tascard/TaskCard.jsx";
import "./TaskManager.css";

const TaskManager = () => {
  const [formValues, setFormValues] = useState({ task: "", date: "" });
  const { task, date } = formValues;

  const saveFormHandle = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const [showCard, setShowCard] = useState(false);

  const handleTextCard = (e) => {
    setShowCard(!showCard);
    e.preventDefault();
  };

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="task">
          <Form.Label className="taskLabel">Task</Form.Label>
          <Form.Control
            onChange={saveFormHandle}
            type="text"
            placeholder="Add Task"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            onChange={saveFormHandle}
            type="datetime-local"
            placeholder="Add Day & Time"
          />
        </Form.Group>

        <Button onClick={handleTextCard} variant="danger" type="submit">
          Save Task
        </Button>
      </Form>
      {showCard && <TaskCard task={task} date={date} />}
    </div>
  );
};

export default TaskManager;

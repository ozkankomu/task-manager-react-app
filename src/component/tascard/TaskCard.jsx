import "./TaskCard.css";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TaskCard = (props) => {
  return (
    <div>
      <Card className="text-center mt-3">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{props.task}</Card.Title>
          <Card.Text>{props.date}</Card.Text>
          <Button className="m-1" variant="danger">
            Task Completed
          </Button>
          <Button className="m-1" variant="danger" style={{ width: "140px" }}>
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Disigned By Ozkan via React-Bootstrap
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;

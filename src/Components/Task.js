import React from "react";
import { useDispatch } from "react-redux";
import { Accordion, Card, Badge, Row, Button, Col } from "react-bootstrap";
import ModifyingTaskBlock from "./ModifyingTaskBlock";
import { deleteTask, completeTask } from "../js/Actions/actions";

const Task = ({ task, i, modifyTask }) => {
  const dispatch = useDispatch();
  return (
    <Accordion defaultActiveKey="0">
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <Row className="d-flex justify-content-between">
            <h5
              className={
                task.isComplete
                  ? "ml-2 mb-auto is-complete"
                  : "ml-2 mb-auto"
              }
            >
              {task.title}
            </h5>
            <Badge className="badge-Operator mr-5 " variant="secondary">
              {task.operator}
            </Badge>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <Row>
              <p
                className={task.isComplete ? "is-complete" : "is-not-complete"}
              >
                {task.description}
              </p>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end pr-0">
                {task.isComplete ? (
                  <Button
                    variant="warning mr-1"
                    onClick={() => {
                      dispatch(
                        completeTask({
                          ...task,
                          isComplete: !task.isComplete,
                        })
                      );
                    }}
                  >
                    Completed
                  </Button>
                ) : (
                  <Button
                    variant="outline-success mr-1"
                    onClick={() => {
                      dispatch(
                        completeTask({
                          ...task,
                          isComplete: !task.isComplete,
                        })
                      );
                    }}
                  >
                    Complete
                  </Button>
                )}

                <ModifyingTaskBlock task={task} modifyTask={modifyTask} />
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteTask(task.id));
                  }}
                >
                  Supprimer
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

Task.propTypes = {};

export default Task;

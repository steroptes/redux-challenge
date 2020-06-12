import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Accordion, Card, Badge, Row, Button, Col } from "react-bootstrap"; 
import ModifyingTaskBlock from "./ModifyingTaskBlock";
import { deleteTask } from "../js/Actions/actions";

const Task = ({ task,i,modifyTask }) => {
  const dispatch = useDispatch();
  return (
    <Accordion defaultActiveKey="0">
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <Row className="d-flex justify-content-between">
            <h5 className="ml-2 mb-auto ">{task.title}</h5>
            <Badge className="badge-Operator mr-5 " variant="secondary">
              {task.operator}
            </Badge>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <Row>
              <p>{task.description}</p>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end pr-0">
                <Button variant="warning mr-1">Complete</Button>
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
    // <Row>
    //   <h5>{task.title}</h5>
    //   <p>{task.description}</p>
    //   <p>{task.operator}</p>
    // </Row>
  );
};

Task.propTypes = {};

export default Task ;

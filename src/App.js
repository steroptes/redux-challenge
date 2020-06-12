import React from 'react';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask'

function App() {
  return (
    <Container>
      <h1 className="mt-5 mb-5 text-center">ToDo List App</h1>
      <Row>
        <AddTask />
      </Row>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

const TaskList = ({ taskList }) => {
  return (
    <React.Fragment>
      {taskList.map((task, key) => (
        <Task task={task} key={key} />
      ))}
    </React.Fragment>
  );
};

TaskList.propTypes = {

}

const mapStateToProps = (state) => ({
  taskList: state.taskReducer.tasks
});

export default connect(mapStateToProps) (TaskList);

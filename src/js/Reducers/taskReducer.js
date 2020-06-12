import { ADD_TASK, DELETE_TASK } from "../Constants/actions-type";

const initialState = {
  tasks: [
    {
      id: 0,
      title: "Task 1",
      description: "First Task",
      operator: "Men 1",
      isEdited: false,
    },
    {
      id: 1,
      title: "Task 2",
      description: "Second Task",
      operator: "Men 2",
      isEdited: false,
    },
    {
      id: 2,
      title: "Task 3",
      description: "Third Task",
      operator: "Men 3",
      isEdited: false,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload
        ],
      };
    case DELETE_TASK:
      return{
        ...state,
        tasks:state.tasks.filter(el => el.id !== payload),
      };
    default:
      return state;
  }
};

export default taskReducer;

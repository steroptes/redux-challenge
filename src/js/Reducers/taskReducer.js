import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "../Constants/actions-type";

const initialState = {
  tasks: [
    
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
    case EDIT_TASK: return{
      ...state,
      tasks:state.tasks.map(el => (el.id === payload.id) ? payload : el) 
    }

    case COMPLETE_TASK: return{
      ...state,
      tasks:state.tasks.map(el => (el.id === payload.id)? payload : el)
    }

    default:
      return state;
  }
};

export default taskReducer;

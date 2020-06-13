import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from "../Constants/actions-type"

export const addTask = (newTask) => ({
    type : ADD_TASK,
    payload : newTask,
});

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload:id,
})

export const editTask = (payload) => ({
    type : EDIT_TASK,
    payload,
})

export const completeTask = (payload) => ({
    type : COMPLETE_TASK,
    payload,
})
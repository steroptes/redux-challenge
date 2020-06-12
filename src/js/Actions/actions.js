import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../Constants/actions-type"

export const addTask = (newTask) => ({
    type : ADD_TASK,
    payload : newTask,
});

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload:id,
})

export const editTask = (editedTask) => ({
    type : EDIT_TASK,
    payload : editedTask,
})
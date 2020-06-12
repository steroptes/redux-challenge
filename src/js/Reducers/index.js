import { combineReducers } from "redux";
import taskReducer from "./taskReducer";


export const firstReducer = combineReducers({ taskReducer, });

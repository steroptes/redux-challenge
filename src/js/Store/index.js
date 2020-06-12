import { createStore } from "redux";
import {firstReducer} from "../Reducers";

const initialState = {

};

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(firstReducer, initialState, reduxDevtools);

export default Store; 
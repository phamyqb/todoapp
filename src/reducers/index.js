import getListTodo from "./getListToDo";
import { combineReducers } from "redux";

const reducers = combineReducers({
    getListTodo: getListTodo,
})

export default reducers;
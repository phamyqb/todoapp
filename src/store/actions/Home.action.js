import { MockAPI } from "../../services";
import { FETCH_LIST_TODO, FETCH_LIST_TODO_COMPLETED, FETCH_LIST_TODO_FAILED } from "../ActionTypes"

export const getTodoList = () => async dispatch => {
    dispatch({ type: FETCH_LIST_TODO });
    try {
        const data = await MockAPI.getListTodo();
        dispatch({ type: FETCH_LIST_TODO_COMPLETED, data })
    } catch (error) {
        dispatch({ type: FETCH_LIST_TODO_FAILED, error })
    }
}
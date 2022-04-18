import { FETCH_LIST_TODO, FETCH_LIST_TODO_COMPLETED, FETCH_LIST_TODO_FAILED } from "../ActionTypes"

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST_TODO:
            return {
                ...state,
                loading: true
            }
        case FETCH_LIST_TODO_COMPLETED:
            return {
                ...state,
                loading: false,
                data: action.data || []
            }
        case FETCH_LIST_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
import { DECREASE, INCREASE, RESET_COUNTER } from "../ActionTypes"

const initialState = {
    counter: 0,
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET_COUNTER:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}
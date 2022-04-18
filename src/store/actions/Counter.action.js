import { DECREASE, INCREASE, RESET_COUNTER } from "../ActionTypes";

export const increase = (param1, param2) => {
    return {
        type: INCREASE,
    }
}

export const decrease = () => ({
    type: DECREASE
})

export const resetCounter = () => ({
    type: RESET_COUNTER
})
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, resetCounter } from '../../store/actions';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(s => s.counterReducer.counter || 0);

    const increaseCounter = () => dispatch(increase())
    const decreaseCounter = () => dispatch(decrease())
    const reset = () => dispatch(resetCounter())

    return (
        <div>
            <button className="btn btn-success" onClick={increaseCounter}>+</button>
            <h3>{counter}</h3>
            <button className="btn btn-success" onClick={decreaseCounter}>-</button>

            <div>
                <button className="btn btn-default" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

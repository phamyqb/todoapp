import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increase, decrease, resetCounter } from '../../store/actions'

class Counter extends Component {
    render() {
        const { counter = 0, increase = () => { }, decrease = () => { }, resetCounter = () => { } } = this.props;
        return (
            <div className='d-flex items-center justify-center'>
                <button className="btn btn-success" onClick={increase}>+</button>
                <h3>{counter}</h3>
                <button className="btn btn-success" onClick={decrease}>-</button>

                <div>
                    <button className="btn btn-default" onClick={resetCounter}>Reset</button>
                </div>
            </div>
        )
    }
}

// const mapState2Props = (state) => ({
//     counter: state.counterReducer.counter
// })

// const mapDispatch2Props = () => {
//     return {
//         increase,
//         decrease,
//         resetCounter
//     }
// }

// export default connect(mapState2Props, mapDispatch2Props)(Counter);

export default connect((state) => ({
    counter: state.counterReducer.counter
}), {
    increase,
    decrease,
    resetCounter
})(Counter)


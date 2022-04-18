import { combineReducers } from 'redux'
import homeReducer from './Home.reducer';
import counterReducer from './Counter.reducer';

export default combineReducers({
    homeReducer,
    counterReducer
})
import { combineReducers } from "redux";
import counterReducer from './Counter/counter.reducers';

const rootReducer = combineReducers({

    counter: counterReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import signupReducer from './auth'
import signinReducer from './sigin'
import interestReducer from './interest'

const rootReducer = combineReducers({
signupReducer,
signinReducer,
interestReducer
});

export default rootReducer;

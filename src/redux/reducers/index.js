import { combineReducers } from "redux";
import signupReducer from './auth'
import signinReducer from './auth'

const rootReducer = combineReducers({
signupReducer,
signinReducer
});

export default rootReducer;

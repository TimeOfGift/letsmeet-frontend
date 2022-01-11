import { combineReducers } from "redux";
import signupReducer from './auth'
import signinReducer from './sigin'

const rootReducer = combineReducers({
signupReducer,
signinReducer
});

export default rootReducer;

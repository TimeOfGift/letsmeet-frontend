import { combineReducers } from "redux";
import signupReducer from './auth'
<<<<<<< HEAD
import signinReducer from './auth'
=======
import signinReducer from './sigin'
>>>>>>> f8667b9b93901690603c87fade1c1cc287ccf97e

const rootReducer = combineReducers({
signupReducer,
signinReducer
});

export default rootReducer;

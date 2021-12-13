import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from '../actionCreators';

const initialState = {
  user: {}
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };

    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case USER_SIGNUP_FAILURE:
      return { ...state, user: action.payload, loading: false};
    default:
      return state;
  }
};

export default signupReducer;
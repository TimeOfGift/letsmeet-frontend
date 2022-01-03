import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_FAILURE,
    USER_SIGNIN_SUCCESS
  } from '../actionCreators';
  
  const initialState = {
    user: {}
  };
  
  const signinReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { ...state, loading: true };
  
      case USER_SIGNIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
        };
      case USER_SIGNIN_FAILURE:
        return { ...state, user: action.payload, loading: false};
      default:
        return state;
    }
  };
  
  export default signinReducer;
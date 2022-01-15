import axios from 'axios';

import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE
} from '../actionCreators';


export const signup = (data) => dispatch => {
  dispatch({
    type: USER_SIGNUP_REQUEST
  })

  axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, data).then(user => {
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: user.data
    })

    console.log(user.data)
  }).catch(e => {
    dispatch({
      type: USER_SIGNUP_FAILURE,
      error: e.message
    })
  })
}

export const signin = (data) => dispatch => {
  dispatch({
    type: USER_SIGNIN_REQUEST
  })
  axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, data).then(user => {
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: user.data
    })
    localStorage.setItem('isAuthenticated', user.data.token);
  }).catch(e => {
    dispatch({
      type: USER_SIGNIN_FAILURE,
      error: e.message
    })
  })
}
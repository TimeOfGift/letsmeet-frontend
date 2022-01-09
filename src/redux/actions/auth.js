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

  axios.post('https://event-meet.herokuapp.com/api/v1/auth/signup', data).then(user => {
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: user.data
    })

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
  axios.post('https://event-meet.herokuapp.com/api/v1/auth/signin', data).then(user => {
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: user.data
    })
  }).catch(e => {
    dispatch({
      type: USER_SIGNIN_FAILURE,
      error: e.message
    })
  })
}
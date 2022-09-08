import axios from "axios"
import {FETCH_INTEREST} from './../actionCreators'


export const fetchInterests = () => dispatch => {
axios.get(`${process.env.REACT_APP_BASE_URL}/interest`).then(interest => {

dispatch({
    type: FETCH_INTEREST,
    payload: interest.data.data
})

}).catch(e=> console.log(e))



}
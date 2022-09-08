import {FETCH_INTEREST} from './../actionCreators'


const interestReducer = (state={}, action) => {
  
    switch(action.type){
        case FETCH_INTEREST:
            return {...state, interests: action.payload}

            default: 
            return state;
    }
}

export default interestReducer;
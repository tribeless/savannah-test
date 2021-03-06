import * as actionTypes from "../actions/actionTypes";

const initialState = {
    number:0
}

const clickIndexReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.CLICKINDEX:
            return {
                ...state,
                number:action.payload
            }
        default:
            return state;
    }
}

export default clickIndexReducer;
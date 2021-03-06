import * as actionTypes from "../actions/actionTypes";

const initialState = {
    open:false
}

const addIssueReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ISSUE:
            return {
                ...state,
                open:action.payload
            }
        default:
            return state;
    }
}

export default addIssueReducer;
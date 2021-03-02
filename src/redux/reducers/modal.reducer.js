import * as actionTypes from "../actions/actionTypes";

const initialState = {
    open:false
}

const modalReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                open:action.payload
            }
        default:
            return state;
    }
}

export default modalReducer;
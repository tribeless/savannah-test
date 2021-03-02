import * as actionTypes from "../actions/actionTypes";

const initialState = {
    passData:{}
}

const passDataReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PASS_DATA:
            return {
                ...state,
                passData:action.payload
            }
        default :
            return state;
    }
}

export default passDataReducer;
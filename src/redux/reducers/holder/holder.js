import * as actionTypes from "../../actions/actionTypes";

const initialState = {};

const holderReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.HOLDER:
            return state;
        default:
            return state;
    }
}

export default holderReducer;
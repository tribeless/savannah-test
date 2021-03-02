import * as actionTypes from "../../actions/actionTypes";

const initialState = {
    data:[]
};

const holderReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.HOLDER:
            return {...state,data:action.payload}
        default:
            return state;
    }
}

export default holderReducer;
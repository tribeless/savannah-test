import * as actionTypes from "../actions/actionTypes";

const initialState = {
    owner:"",
    id:""
}

const ownerReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.OWNER:
            return {
                ...state,
                owner:action.payload,
                id:action.id
            }
    
        default:
            return state;
    }
}

export default ownerReducer;
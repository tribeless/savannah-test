import * as actionTypes from "../actions/actionTypes";

const initialState = {
    data:{}
}

const repoModalReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.REPO_MODAL:
            return {
                ...state,
                data:action.payload
            }

        default:
            return state;
    }
}

export default repoModalReducer;
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    name:''
}
const repoReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.REPO_NAME:
            return {...state,name:action.name}
        default:
            return state;
    }
}
export default repoReducer;
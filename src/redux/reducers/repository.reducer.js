import * as actionTypes from "../actions/actionTypes";

const repoReducer = (state={},action)=>{
    switch(action.type){
        case actionTypes.REPO_NAME:
            return {...state,name:action.name}
        default:
            return state;
    }
}
export default repoReducer;
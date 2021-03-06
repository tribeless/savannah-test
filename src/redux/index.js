import {combineReducers} from "redux";
import {holderReducer,repoReducer,passDataReducer,modalReducer,repoModalReducer,ownerReducer,clickIndexReducer,addIssueReducer} from "./reducers";

const combinedReducers = combineReducers({
    holderReducer,
    repoReducer,
    passDataReducer,
    modalReducer,
    repoModalReducer,
    ownerReducer,
    clickIndexReducer,
    addIssueReducer
});

export default combinedReducers;
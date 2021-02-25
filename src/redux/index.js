import {combineReducers} from "redux";
import {holderReducer,repoReducer} from "./reducers";

const combinedReducers = combineReducers({
    holderReducer,
    repoReducer
});

export default combinedReducers;
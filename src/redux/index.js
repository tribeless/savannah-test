import {combineReducers} from "redux";
import {holderReducer} from "./reducers";

const combinedReducers = combineReducers({
    holderReducer
});

export default combinedReducers;
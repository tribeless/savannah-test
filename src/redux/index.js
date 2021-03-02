import {combineReducers} from "redux";
import {holderReducer,repoReducer,passDataReducer,modalReducer,repoModalReducer} from "./reducers";

const combinedReducers = combineReducers({
    holderReducer,
    repoReducer,
    passDataReducer,
    modalReducer,
    repoModalReducer
});

export default combinedReducers;
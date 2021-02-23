import {compose,createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import combinedReducers from "./index";

const middleware = [thunk];

const store = createStore(combinedReducers,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

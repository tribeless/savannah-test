import {compose,createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {
    persistStore,
    persistReducer
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import combinedReducers from "./index";

const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)
const store = createStore(persistedReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const persistor = persistStore(store);
export {store,persistor};

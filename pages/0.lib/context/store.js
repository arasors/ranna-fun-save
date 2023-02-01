import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import siteReducer from "0.lib/context/reducer/siteReducer";
import userReducer from "0.lib/context/reducer/userReducer";


const rootReducer = combineReducers({
    site: siteReducer,
    user: userReducer
});

const persistConfig = {
    key: "context",
    storage,
    blacklist: ["user"]
};
// middleware
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => persistStore(store);

export const wrapper = createWrapper(makeStore);

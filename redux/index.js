import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getItems, checkForToken } from "./actions";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(getItems());
store.dispatch(checkForToken());
// store.dispatch(checkForOrderHistory());

export default store;

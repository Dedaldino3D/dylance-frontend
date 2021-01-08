import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import loadingBarMiddleware from "../middlewares/loadingBarMiddleware";
import rootReducer from "../reducers";

const middlewares = [thunk, loadingBarMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

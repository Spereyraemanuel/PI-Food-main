import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer"; 
import thunkMiddleware from "redux-thunk";
                                  //si no las toma de devtools  que las tome de compose,
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,   //y este middleware vas a estar encargado de hacer las request
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
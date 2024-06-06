import {combineReducers, createStore, applyMiddleware} from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from 'redux-thunk'
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers ({
restaurants:restaurantReducer,
products: productReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

// applyMiddleware herhangi bir ara yazılımı redux a dahil etmeye yarar.
// Biz burda thunk dahil etmek için kullandık.


export default createStore(rootReducer, applyMiddleware(thunk));
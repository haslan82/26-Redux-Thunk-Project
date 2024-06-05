import {combineReducers, createStore, applyMiddleware} from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers ({
restaurants:restaurantReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

// applyMiddleware herhangi bir ara yazılımı redux a dahil etmeye yarar.
// Biz burda thunk dahil etmek için kullandık.


export default createStore(rootReducer, applyMiddleware(thunk));
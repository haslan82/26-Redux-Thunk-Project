import {combineReducers, createStore} from "redux";
import restaurantReducer from "./reducers/restaurantReducer";

const rootReducer = combineReducers ({
restaurants:restaurantReducer,
});

const store = createStore(rootReducer);

export default store;
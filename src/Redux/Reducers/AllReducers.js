import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";

const allReducer = combineReducers({
    loaderReducer: loaderReducer
});


export default allReducer;
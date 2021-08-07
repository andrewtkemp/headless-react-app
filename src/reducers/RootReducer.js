import {combineReducers} from "redux";
import RouteLoadingReducer from "./RouteLoadingReducer";

const RootReducer = combineReducers({
    Routes: RouteLoadingReducer
})

export default RootReducer;
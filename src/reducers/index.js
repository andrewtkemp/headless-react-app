import navRoutes from "./NavRoutes"
import counterReducer from "./counter"
import routeUrlApis from "./RouteUrlApis";
import { combineReducers } from "redux"

const allReducers = combineReducers({
    counter: counterReducer,
    navRoutes
    // routeUrlsApis: routeUrlApis
});

export default allReducers;
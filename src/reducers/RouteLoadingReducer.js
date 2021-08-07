const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
}

const RouteLoadingReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "ROUTES_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "ROUTE_LOADED_SUCCESS":
            return {
                ...state,
                loading: true,
                data: action.payload
            }
        case "ROUTE_LOAD_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to load"
            }
        default:
            return state;
    }
}

export default RouteLoadingReducer
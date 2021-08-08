// import API from "./utils/API";

const navRoutes = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD':
            return {...state, 'stuff': 1};
        default:
            return state;
    }
};

export default navRoutes;
// import API from "./utils/API";

const navRoutes = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD':
            console.log(state);
            console.log(action);
            return {...action.payload};
        default:
            return state;
    }
};

export default navRoutes;
import axios from "axios"

export const GetRoutes = (page) => async dispatch => {
    try {

        dispatch({
            type: "ROUTES_LOADING"
        })

        const res = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json`);
        console.log(res);

        dispatch({
            type: "ROUTE_LOADED_SUCCESS"
        })

    } catch (error) {
        dispatch({
            type: "ROUTE_LOAD_FAIL"
        })
    }
}





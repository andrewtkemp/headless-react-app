import axios from "axios"

export default {
    GetRoutes: async () => {
        try {
            const res = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json`);
            return res;

        } catch (error) {
            console.log(error)
        }
    },

    // GetRouteContent: async () => {
    //     try {
    //         const res = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json`);
    //         return res;

    //     } catch (error) {
    //         console.log(error)
    //     }
    // },



}




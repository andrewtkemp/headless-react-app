import axios from "axios"


export const GetRoutes = () => {
    return axios.get('https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json')

    }

    // GetRouteContent: async () => {
    //     try {
    //         const res = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json`);
    //         return res;

    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

export default { GetRoutes };



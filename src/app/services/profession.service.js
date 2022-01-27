import httpServices from "./http.service";

const professionEndpoint = "profession/";

const professionService = {
    get: async () => {
        const { data } = await httpServices.get(professionEndpoint);
        return data;
    }
};

export default professionService;

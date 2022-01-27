import httpServices from "./http.service";

const userEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpServices.get(userEndpoint);
        return data;
    }
};

export default userService;

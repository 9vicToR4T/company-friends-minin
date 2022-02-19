import httpServices from "./http.service";

const commentEndPoint = "comment/";
const commentService = {
    createComment: async (payload) => {
        const { data } = await httpServices.put(
            commentEndPoint + payload._id,
            payload
        );
        return data;
    },
    getComments: async (pageId) => {
        const { data } = await httpServices.get(commentEndPoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        });
        return data;
    },
    removeComment: async (commentId) => {
        const { data } = await httpServices.delete(commentEndPoint + commentId);
        return data;
    }
};

export default commentService;

// pentru filtrarea datelor in firebae noi avem nevoie sa transmitem
// prin axiox query params, orderBy si equalTo. Firebase lucreaza cu json si de aceea avem nevoie sa transmitem query ca string
// se mai cere indexOf care trebuie adaugat in rules

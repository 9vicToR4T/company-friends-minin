export const professionsObject = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Physics" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Enginer" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
};
export const professions = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Physics" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Enginer" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professions);
        }, 1000);
    });

export default {
    fetchAll
};

//  export const professionsObject = {
//     doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
//     waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
//     physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
//     engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
//     actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
//     cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
// };
// export const professions = [
//     { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
//     { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
//     { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
//     { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
//     { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
//     { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
// ];
// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(professionsObject);
//         }, 2000);
//     });

// export default {
//     fetchAll
// };

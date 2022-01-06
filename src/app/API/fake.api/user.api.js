import { professionsObject as professions } from "./professions";
const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Tedious",
        color: "primary"
    },
    strange: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Strange",
        color: "secondary"
    },
    buller: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Buller",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Alcoholic",
        color: "danger"
    },
    handsome: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Handsome",
        color: "info"
    },
    uncertain: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Uncertain",
        color: "dark"
    }
};

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "John Dorian",
        email: "johndorian@fastcompany.ru",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Koks Koksium",
        email: "koks@fastcompany.ru",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Bob Kelso",
        email: "bobkelso@fastcompany.ru",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Reichel Green",
        email: "rachelgreene@fastcompany.ru",
        sex: "female",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Sheldon Kuper",
        email: "sheldoncooper@fastcompany.ru",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Leonardo DiCaprio",
        email: "leonardhofstedter@fastcompany.ru",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Hovard Holovitz",
        email: "howardwolowitz@fastcompany.ru",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Niccolo Tesla",
        email: "nikolatesla@fastcompany.ru",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Monica Beluci",
        email: "monicageller@fastcompany.ru",
        sex: "female",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Ratatui",
        email: "ratatouille@fastcompany.ru",
        sex: "male",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "John Coffe",
        email: "joeytribbiani@fastcompany.ru",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Brad Nonpitt",
        email: "bradpitt@fastcompany.ru",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookMark: false
    }
];
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users[userIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};

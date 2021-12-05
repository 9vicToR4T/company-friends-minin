import { professionsObject as professions } from "./professions";
const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Нудила",
        color: "primary"
    },
    strange: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Странный",
        color: "secondary"
    },
    buller: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Троль",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Алкоголик",
        color: "danger"
    },
    handsome: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Красавчик",
        color: "info"
    },
    uncertain: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Неуверенный",
        color: "dark"
    }
};

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "John Dorian",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Koks",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Bob Kelso",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Reichel Green",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Sheldon Kuper",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Leonardo DiCaprio",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Hovard Holovitz",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Niccolo Tesla",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Monica Beluci",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Ratatui",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "John Coffe",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookMark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Brad Nonpitt",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookMark: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 500);
    });

const getUserById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(users.find((user) => user._id === id));
        }, 500);
    });

export default {
    fetchAll,
    getUserById
};

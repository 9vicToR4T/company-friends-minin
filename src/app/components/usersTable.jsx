import React from "react";
import { PropTypes } from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookMark";
import Btn from "./buttonDelete";
import QualitiesList from "./qualitiesList";

const UsersTable = ({
    users,
    onDeleteBtn,
    onSort,
    selectedSort,
    onChangeBookMark
}) => {
    const columns = {
        name: { path: "name", name: "Name" },
        qualities: { name: "Qualities", component: (user) => <QualitiesList qualities={user.qualities}/> },
        profession: { path: "profession.name", name: "Profession" },
        completedMeetings: { path: "completedMeetings", name: "Meetings" },
        rate: { path: "rate", name: "Rate" },
        bookmark: {
            path: "bookMark",
            name: "Selected",
            component: (user) => (
                <BookMark
                    stautus={user.bookMark}
                    onChangeBookMark={() => onChangeBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => <Btn id={user._id} onDeleteBtn={onDeleteBtn} />
        }
    };

    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users, onDeleteBtn }} />
            {/* <tbody onClick={(e) => onDeleteBtn(e)}>
                {users.map((el) => (
                    <User
                        key={el["_id"]}
                        id={el["_id"]}
                        name={el["name"]}
                        profession={el["profession"]["name"]}
                        qualities={el["qualities"]}
                        completedMeetings={el["completedMeetings"]}
                        rate={el["rate"]}
                    />
                ))}
            </tbody> */}
        </table>
    );
};
UsersTable.propTypes = {
    users: PropTypes.array,
    onDeleteBtn: PropTypes.func,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onChangeBookMark: PropTypes.func
};

export default UsersTable;

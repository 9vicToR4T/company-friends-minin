import React from "react";
import { PropTypes } from "prop-types";
import BookMark from "../common/bookMark";
import Qualities from "../ui/qualities";
import { Link } from "react-router-dom";
import Table from "../common/table";
import Profession from "./profession";

const UsersTable = ({
    users,
    onSort,
    selectedSort,
    onChangeBookMark
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Name",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Qualities",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        profession: {
            name: "Profession",
            component: (user) => <Profession id={user.profession} />
        },
        completedMeetings: { path: "completedMeetings", name: "Meetings" },
        rate: { path: "rate", name: "Rate" },
        sex: { path: "sex", name: "Sex" },
        email: { path: "email", name: "Email" },
        bookmark: {
            path: "bookMark",
            name: "Selected",
            component: (user) => (
                <BookMark
                    status={user.bookMark}
                    onChangeBookMark={() => onChangeBookMark(user._id)}
                />
            )
        }
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};
UsersTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onChangeBookMark: PropTypes.func
};

export default UsersTable;

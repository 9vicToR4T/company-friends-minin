import React from "react";
import { PropTypes } from "prop-types";
import BookMark from "../common/bookMark";
import Btn from "../common/buttonDelete";
import Qualities from "../ui/qualities";
import { Link } from "react-router-dom";
import Table from "../common/table";

const UsersTable = ({
    users,
    onDeleteBtn,
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
        profession: { path: "profession.name", name: "Profession" },
        completedMeetings: { path: "completedMeetings", name: "Meetings" },
        rate: { path: "rate", name: "Rate" },
        sex: { path: 'sex', name: 'Sex' },
        email: { path: 'email', name: 'Email' },
        bookmark: {
            path: "bookMark",
            name: "Selected",
            component: (user) => (
                <BookMark
                    status={user.bookMark}
                    onChangeBookMark={() => onChangeBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => <Btn id={user._id} onDeleteBtn={onDeleteBtn} />
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
    onDeleteBtn: PropTypes.func,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onChangeBookMark: PropTypes.func
};

export default UsersTable;

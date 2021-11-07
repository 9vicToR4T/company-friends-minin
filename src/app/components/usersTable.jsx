import React from "react";
import { PropTypes } from "prop-types";
import BookMark from "./bookMark";
import Btn from "./buttonDelete";
import QualitiesList from "./qualitiesList";
import Table from './table';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

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
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        >
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users, onDeleteBtn }} />
        </Table>
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

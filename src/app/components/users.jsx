import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import { PropTypes } from "prop-types";
import ListGroup from "./listGroup";
import api from "../API";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDeleteBtn = (e) => {
        const { target } = e;
        const getId = target.dataset.id;
        setUsers(users.filter((user) => getId !== user["_id"]));
    };

    const pageSize = 4;
    const [professions, setProfessions] = useState();
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const [currentPage, setcurrenPage] = useState(1);
    const handleChangePage = (indexPage) => {
        setcurrenPage(indexPage);
    };

    const [selectedProf, setSelectedProf] = useState();
    const handleProfessionSelect = (itemObj) => {
        setSelectedProf(itemObj);
    };

    useEffect(() => {
        setcurrenPage(1);
    }, [selectedProf]);

    const filteredUsers = selectedProf
        ? users.filter(
            (user) =>
                JSON.stringify(user["profession"].name) ===
                JSON.stringify(selectedProf.name)
        )
        : users;

    const handleBookMarkState = (id) => {
        console.log(id);
    };

    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    const handleCleanFilters = () => {
        setSelectedProf();
    };

    const handleSortItems = (item) => {
        setSortBy(item);
    };

    if (users) {
        const count = filteredUsers.length;
        return (
            <div className="d-flex ">
                {professions && (
                    <div className="flex-column m-3 align-items-end">
                        <ListGroup
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            selectedProf={selectedProf}
                        />
                        <button
                            className="btn btn-primary mt-2"
                            onClick={() => handleCleanFilters()}
                        >
                            Clean filters!
                        </button>
                    </div>
                )}

                <div>
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <>
                            <UsersTable
                                users={usersCrop}
                                onSort={handleSortItems}
                                selectedSort={sortBy}
                                onChangeBookMark={handleBookMarkState}
                                onDeleteBtn={handleDeleteBtn}
                            />
                            <div className="d-flex justify-content-center">
                                <Pagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onChangePage={handleChangePage}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return "loading...";
    }
};
Users.propTypes = {
    users: PropTypes.array,
    onDeleteBtn: PropTypes.func
};

export default Users;

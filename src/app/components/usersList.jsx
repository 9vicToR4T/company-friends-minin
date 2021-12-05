import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import { PropTypes } from "prop-types";
import ListGroup from "./listGroup";
import api from "../API";
import UsersTable from "./usersTable";
import _ from "lodash";
import LoadingElement from "./loadingComponent";

const UsersList = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDeleteBtn = (e) => {
        const { target } = e;
        const getId = target.dataset.id;
        setUsers(users.filter((user) => getId !== user["_id"]));
    };

    const handleBookMarkState = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookMark: !user.bookMark };
            } else {
                return user;
            }
        });
        setUsers(newArray);
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
    const getInput = document.getElementById("searchInput");
    const handleProfessionSelect = (itemObj) => {
        getInput.value = "";
        setSelectedProf(itemObj);
    };

    useEffect(() => {
        setcurrenPage(1);
    }, [selectedProf]);

    const [searchByName, setSearchByName] = useState();

    const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user["profession"].name) ===
                  JSON.stringify(selectedProf.name)
          )
        : searchByName || users;

    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    const handleCleanFilters = () => {
        getInput.value = "";
        setSearchByName();
        setSelectedProf();
    };

    const handleSortItems = (item) => {
        setSortBy(item);
    };

    const handleChangeUser = (e) => {
        setSelectedProf();
        const { value } = e.target;
        const newArrayForSearch = users.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchByName(newArrayForSearch);
    };

    if (users) {
        const count = filteredUsers ? filteredUsers.length : 0;
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
                    <form>
                        <label htmlFor="searchInput"></label>
                        <div className="input-group has-validation mb-3">
                            <input
                                type="text"
                                id="searchInput"
                                className="w-50"
                                autoComplete="off"
                                onChange={handleChangeUser}
                            />
                            <button type="button" className="btn btn-primary">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
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
        return <LoadingElement />;
    }
};
UsersList.propTypes = {
    users: PropTypes.array,
    onDeleteBtn: PropTypes.func
};

export default UsersList;

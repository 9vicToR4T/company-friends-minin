import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import User from "./user";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import { PropTypes } from "prop-types";
import ListGroup from "./listGroup";
import api from "../API";

const Users = ({ users: allUsers, onDeleteBtn }) => {
    const pageSize = 4;
    console.log(allUsers);
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
    console.log(selectedProf, 'selectedProf');
    console.log(allUsers, 'all');
    useEffect(() => {
        setcurrenPage(1);
    }, [selectedProf]);

    const filteredUsers = selectedProf
        ? allUsers.filter((item) => item["profession"].name === selectedProf.name)
        : allUsers;
    const count = filteredUsers.length;
    const users = paginate(filteredUsers, currentPage, pageSize);

    const handleCleanFilters = () => {
        setSelectedProf();
    };
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

            {count > 0 && (
                <div>
                    <SearchStatus length={count} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Job</th>
                                <th scope="col">Met</th>
                                <th scope="col">Note</th>
                                <th scope="col">Mark</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody onClick={(e) => onDeleteBtn(e)}>
                            {users.map((el) => (
                                <User
                                    key={uuid()}
                                    id={el["_id"]}
                                    name={el["name"]}
                                    profession={el["profession"]["name"]}
                                    qualities={el["qualities"]}
                                    completedMeetings={el["completedMeetings"]}
                                    rate={el["rate"]}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onChangePage={handleChangePage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    onDeleteBtn: PropTypes.func
};

export default Users;

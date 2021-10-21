import React, { useState } from "react";
import uuid from "react-uuid";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { PropTypes } from "prop-types";

const Users = ({ users: allUsers, onDeleteBtn }) => {
    const pageSize = 4;
    const count = allUsers.length;

    const [currenPage, setcurrenPage] = useState(1);
    const handleChangePage = (indexPage) => {
        setcurrenPage(indexPage);
    };

    const users = paginate(allUsers, currenPage, pageSize);

    return (
        <>
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currenPage={currenPage}
                onChangePage={handleChangePage}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    onDeleteBtn: PropTypes.func
};

export default Users;

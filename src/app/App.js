import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./API";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDeleteBtn = (e) => {
        const { target } = e;
        const getId = target.dataset.id;
        setUsers(users.filter((user) => getId !== user["_id"]));
    };

    return (
        <div>
            {users && <Users users={users} onDeleteBtn={handleDeleteBtn} />}
        </div>
    );
};

export default App;

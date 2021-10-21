import React, { useState } from "react";
import Users from "./components/users";
import api from "./API/index";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll);

    const handleDeleteBtn = (e) => {
        const { target } = e;
        const getId = target.dataset.id;
        setUsers(users.filter((user) => getId !== user["_id"]));
    };

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users users={users} onDeleteBtn={handleDeleteBtn} />
        </div>
    );
};

export default App;

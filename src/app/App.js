import React from "react";
import Users from "./components/users";

const App = () => {
    return <Users />;
};

export default App;
// const [users, setUsers] = useState();
// useEffect(() => {
//     api.users.fetchAll().then((data) => setUsers(data));
// }, []);

// const handleDeleteBtn = (e) => {
//     const { target } = e;
//     const getId = target.dataset.id;
//     setUsers(users.filter((user) => getId !== user["_id"]));
// };

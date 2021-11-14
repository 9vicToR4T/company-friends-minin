import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import InfoUser from "./components/infoUser";

const App = () => {
    return (
        <Router>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={InfoUser} />
                <Route path="/users" exact component={Users} />
            </Switch>
        </Router>
    );
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

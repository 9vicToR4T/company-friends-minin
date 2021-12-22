import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import RegisterForm from "./components/ui/registerForm";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path = '/login/:registerParam?' component={RegisterForm}/>
                <Route path="/users/:userId?" component={Users} />
                {/* <Route path="/users" exact component={Users} /> */}
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

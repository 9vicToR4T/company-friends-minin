import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import EditUserDetails from "./components/page/editUserDetails/editUserDetails";
import NavBar from "./components/ui/navBar";
import RegisterForm from "./components/ui/registerForm";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

const App = () => {
    // const match = useRouteMatch();
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/login/:registerParam?" component={RegisterForm} />
                <Route path="/users/:userId?" component={Users} />
                {/* <Route
                    path={`${match.path}/edit`}
                    component={EditUserDetails}
                /> */}
            </Switch>
        </Router>
    );
};

export default App;

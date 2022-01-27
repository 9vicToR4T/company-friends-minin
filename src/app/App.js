import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <ProfessionProvider>
                    <QualitiesProvider>
                        <Route path="/login" component={Login} />
                        <Route path="/users/:userId?" component={Users} />
                    </QualitiesProvider>
                </ProfessionProvider>
            </Switch>
            <ToastContainer />
        </Router>
    );
};

export default App;

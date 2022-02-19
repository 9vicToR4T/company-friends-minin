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
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoutes from "./components/common/protectedRoutes";
import LogOut from "./layouts/logOut";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <NavBar />
                <ProfessionProvider>
                    <QualitiesProvider>
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/login" component={Login} />
                            <Route path='/logout' component = {LogOut}/>
                            <ProtectedRoutes path="/users/:userId?" component={Users} />
                        </Switch>
                    </QualitiesProvider>
                </ProfessionProvider>
            </AuthProvider>

            <ToastContainer />
        </Router>
    );
};

export default App;

import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const LogOut = () => {
    const { logOut } = useAuth();
    useEffect(() => {
        logOut();
    }, []);
    return <h1>LogOut</h1>;
};

export default LogOut;

// pentru log out avem nevoie sa stergem datele despre user --- respectiv din localStorage
// sa setam setCurrentUser null
// chemam logOut doar in momentul de montare

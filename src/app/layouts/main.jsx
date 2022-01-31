import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progres, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1 className="">Main Page!</h1>
            <h3>Initializing data with Firebase!</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progres: {progres}%</li>
                {error && <li>{error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Set data!
            </button>
        </div>
    );
};

export default Main;

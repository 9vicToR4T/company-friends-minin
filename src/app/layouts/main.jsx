import React from "react";
import useMockData from "../utils/mockData";
import AboutProject from "../components/ui/mainPageBody/aboutProject/aboutProject";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1> Main Page</h1>
            <h3>Initiate Firebase server</h3>
            <ul>
                <li>Status:{status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button className="btn btn-primary" disabled onClick={handleClick}>
                {" "}
                Initiate project
            </button>
            <AboutProject />
        </div>
    );
};

export default Main;

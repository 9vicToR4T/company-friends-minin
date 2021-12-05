import React from "react";

const LoadingElement = () => {
    return (
        <>
            <div className="text-center m-3">Loading...</div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </>
    );
};

export default LoadingElement;

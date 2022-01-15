import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => {
                const isAuthenticated = localStorage.getItem("isAuthenticated");
                return isAuthenticated ? children : <Redirect to="/login" />
            }}
        />
    )

}
export default ProtectedRoute;
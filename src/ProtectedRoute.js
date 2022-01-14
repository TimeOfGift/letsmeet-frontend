import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({children, ...rest}) =>{
    const authToken = localStorage.getItem("isAuthenticated")

    return (
        <Route 
            {...rest}
            render={() =>
                authToken ? children : <Redirect to="/login" />
            }
        />
    )

}
export default ProtectedRoute;
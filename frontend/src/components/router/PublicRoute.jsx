import React from "react";
import { Route, Navigate } from "react-router-dom";
import isAuthenticated from "../../api/isAuthenticated";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Navigate to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

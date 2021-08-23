import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = { isAuth: true };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

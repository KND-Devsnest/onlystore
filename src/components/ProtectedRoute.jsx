import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ children, ...rest }) => {
  // load auth state from store
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

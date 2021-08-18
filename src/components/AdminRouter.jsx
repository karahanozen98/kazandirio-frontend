import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(routeProps) => (user.role === "Admin" ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />)}
    />
  );
};

export default PrivateRoute;

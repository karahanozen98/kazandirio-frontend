import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useSelector((state) => state.user.id);

  return (
    <Route
      {...rest}
      render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />)}
    />
  );
};

export default PrivateRoute;

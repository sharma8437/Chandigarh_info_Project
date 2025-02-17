// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, userData, ...rest }) => {
  if (!userData) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  //   const { isLoading, email } = useSelector((state) => state.auth);

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  //   if (!isLoading && !email) {
  //     return <Navigate to="/login" state={{ from: pathname }} />;
  //   }

  return children;
};

export default PrivateRoute;

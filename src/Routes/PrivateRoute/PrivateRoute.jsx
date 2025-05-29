import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={`/signIn`} state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Hide_Auth_Routes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/profile" />;
  }

  return children;
};

export default Hide_Auth_Routes;

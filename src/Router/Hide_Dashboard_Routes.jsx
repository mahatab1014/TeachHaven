/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/LoadingAnimation/Spinner";
import { AuthContext } from "../Provider/AuthProvider";

const Hide_Dashboard_Routes = ({children}) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};

export default Hide_Dashboard_Routes;

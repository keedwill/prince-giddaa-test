import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReducersType } from "../redux/store";

// type PrivateRouteProps = RouteProps & {
//   component: React.ComponentType<unknown>;
// };

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
}: PrivateRouteProps) => {
  const token = useSelector((state: ReducersType) => state.token.token);
  console.log(token);
  
  if (token === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

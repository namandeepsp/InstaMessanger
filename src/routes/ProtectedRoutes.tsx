import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRoutes {
  isAuth: boolean;
}

const ProtectedRoutes = ({ isAuth = false }: IProtectedRoutes) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;

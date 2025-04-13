import { Navigate, Outlet } from "react-router-dom";

interface IRedirectRoute {
  isAuth: boolean;
}

const RedirectRoute = ({ isAuth = false }: IRedirectRoute) => {
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default RedirectRoute;

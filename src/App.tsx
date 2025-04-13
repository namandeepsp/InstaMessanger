import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { AuthProvider } from "./contexts/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RedirectRoute from "./routes/RedirectRoute";
import { useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthProvider>
      <Router basename="/instamessanger">
        <Routes>
          {/* Public Routes */}
          <Route element={<RedirectRoute isAuth={isAuth} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route element={<MainLayout />}>
              <Route path="/" index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

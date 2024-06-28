import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import CarFilter from "./components/CarFilter";
import HomeContent from "./components/HomeContent";
import AdminDashboardLayout from "./layouts/admin/AdminDashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import { CarsProvider } from "./contexts/CarContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <GuestLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        path: "",
        element: <HomeContent />,
      },
      {
        path: "/cars",
        element: <CarFilter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <Login admin />,
  },
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <AdminDashboardLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        path: "",
        element: (
          <CarsProvider>
            <Dashboard />
          </CarsProvider>
        ),
      },
    ],
  },
]);

export default router;

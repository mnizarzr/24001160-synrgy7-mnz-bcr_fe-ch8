import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import CarFilter from "./components/CarFilter";
import HomeContent from "./components/HomeContent";
import DashboardLayout from "./layouts/admin/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
      },
      {
        path: "/cars",
        element: <CarFilter />,
      },
    ],
  },
  {
    path: '/admin',
    element: <DashboardLayout/>
  }
]);

export default router;

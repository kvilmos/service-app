import AuthView from "@/features/auth/auth-page";
import { ProtectedRoute } from "@/router/protected-route";
import BlankLayout from "@/layouts/blank-layout";
import MainLayout from "@/layouts/main-layout";
import { createBrowserRouter } from "react-router";
import ProtectedPage from "@/features/protected-page";
import { GuestRoute } from "./guest-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [{ path: "protected", element: <ProtectedPage /> }],
      },
    ],
  },
  {
    path: "/authentication",
    element: <BlankLayout />,
    children: [
      {
        element: <GuestRoute />,
        children: [{ path: "", element: <AuthView /> }],
      },
    ],
  },
]);

export default router;

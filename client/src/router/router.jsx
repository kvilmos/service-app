import AuthView from "@/features/auth/auth-page";
import { ProtectedRoute } from "@/features/auth/protected-test";
import BlankLayout from "@/layouts/blank-layout";
import MainLayout from "@/layouts/main-layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "protected",
        element: <ProtectedRoute />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <BlankLayout />,
    children: [
      {
        path: "",
        element: <AuthView />,
      },
    ],
  },
]);

export default router;

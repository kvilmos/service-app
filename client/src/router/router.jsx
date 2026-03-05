import SignInForm from "@/features/auth/sign-in-form";
import SignUpForm from "@/features/auth/sign-up-form";
import MainLayout from "@/layouts/main-layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <SignInForm />,
      },
      {
        path: "register",
        element: <SignUpForm />,
      },
    ],
  },
]);

export default router;

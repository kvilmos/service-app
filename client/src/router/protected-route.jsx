import { authClient } from "@/lib/auth-client";
import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <Navigate to="/authentication" replace />;

  return <Outlet />;
}

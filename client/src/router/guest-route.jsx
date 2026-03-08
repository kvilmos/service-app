import { authClient } from "@/lib/auth-client";
import { Navigate, Outlet } from "react-router";

export function GuestRoute() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (session) return <Navigate to="/" replace />;

  return <Outlet />;
}

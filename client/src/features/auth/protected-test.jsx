import { authClient } from "@/lib/auth-client";

export function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) {
    return <div>Go Sign in</div>;
  }

  return <div>Welcome {session.user.name}!</div>;
}

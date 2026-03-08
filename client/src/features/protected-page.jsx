import { authClient } from "@/lib/auth-client";

export default function ProtectedPage() {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) return <div>Loading...</div>;

  if (!session) {
    return <div>You should be authenticated</div>;
  }

  return <div>Welcome {session.user.name}!</div>;
}

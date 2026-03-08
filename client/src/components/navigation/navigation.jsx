import { NavLink } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "../shadcn-ui/tabs";

import "./navigation.css";
import { authClient } from "@/lib/auth-client";
import { Button } from "../shadcn-ui/button";

export default function NavBar() {
  const { data: session } = authClient.useSession();

  return (
    <nav className="navbar">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="home">
            <NavLink to="/" end>
              Home
            </NavLink>
          </TabsTrigger>

          {!session && (
            <TabsTrigger value="authentication">
              <NavLink to="/authentication" end>
                Auth
              </NavLink>
            </TabsTrigger>
          )}

          {session && (
            <TabsTrigger value="protected">
              <NavLink to="/protected" end>
                Protected-test
              </NavLink>
            </TabsTrigger>
          )}

          {session && (
            <Button variant="link" onClick={() => authClient.signOut()}>
              Sign out
            </Button>
          )}
        </TabsList>
      </Tabs>
    </nav>
  );
}

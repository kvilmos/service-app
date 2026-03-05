import { NavLink } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "../shadcn-ui/tabs";

import "./navigation.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="home">
            <NavLink to="/" end>
              Home
            </NavLink>
          </TabsTrigger>
          <TabsTrigger value="content">
            <NavLink to="/login" end>
              sign in
            </NavLink>
          </TabsTrigger>
          <TabsTrigger value="sign in">
            <NavLink to="/register" end>
              sing up
            </NavLink>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
}

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
          <TabsTrigger value="authentication">
            <NavLink to="/authentication" end>
              Auth
            </NavLink>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
}

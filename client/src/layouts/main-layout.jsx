import NavBar from "@/components/navigation/navigation";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

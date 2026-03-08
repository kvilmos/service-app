import NavBar from "@/components/navigation/navigation";
import { Toaster } from "@/components/shadcn-ui/sonner";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Toaster />
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

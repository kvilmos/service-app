import { Toaster } from "@/components/shadcn-ui/sonner";
import { Outlet } from "react-router";

export default function BlankLayout() {
  return (
    <div>
      <Toaster />
      <Outlet />
    </div>
  );
}

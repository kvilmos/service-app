import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>Test button</Button>
        <Label>test label</Label>
      </div>
    ),
  },
]);

export default router;

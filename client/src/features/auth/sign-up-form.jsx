import { Button } from "@/components/shadcn-ui/button";
import { Label } from "@/components/shadcn-ui/label";

export default function SignUpForm() {
  return (
    <div>
      <h1>Welcome to Service App</h1>

      <Label>Full Name</Label>
      <input type="text" />
      <Label>Email</Label>
      <input type="text" />
      <Label>Password</Label>
      <input type="text" />
      <Label>Password Confirm</Label>
      <input type="text" />

      <Button>Sign Un</Button>
    </div>
  );
}

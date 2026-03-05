import { Button } from "@/components/shadcn-ui/button";
import { Label } from "@/components/shadcn-ui/label";

export default function SignInForm() {
  return (
    <div>
      <h1>Welcome Back</h1>

      <Label>Email</Label>
      <input type="text" />
      <Label>Password</Label>
      <input type="text" />
      <Button>Sign In</Button>
    </div>
  );
}

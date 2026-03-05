import { Button } from "@/components/shadcn-ui/button";
import { Label } from "@/components/shadcn-ui/label";

export default function SignInForm({ onSwitch }) {
  return (
    <div>
      <h1>Welcome Back</h1>

      <Label>Email</Label>
      <input type="text" />
      <Label>Password</Label>
      <input type="text" />
      <Button>Sign In</Button>
      <p>
        Don't have an account?
        <Button onClick={onSwitch} variant="link">
          Sign Up
        </Button>
      </p>
    </div>
  );
}

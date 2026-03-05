import { Button } from "@/components/shadcn-ui/button";
import { Label } from "@/components/shadcn-ui/label";

export default function SignUpForm({ onSwitch }) {
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
      <p>
        Already have an account?
        <Button onClick={onSwitch} variant="link">
          Sign In
        </Button>
      </p>
    </div>
  );
}

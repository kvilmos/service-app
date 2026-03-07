import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";

import "@/features/auth/auth-page.css";
import { Field, FieldGroup, FieldLabel } from "@/components/shadcn-ui/field";

export default function SignUpForm({ onSwitch }) {
  return (
    <div>
      <h1 className="text-xl">Welcome to Service App</h1>

      <FieldGroup className="auth-form">
        <Field className="auth-field">
          <FieldLabel htmlFor="signup-email">Email</FieldLabel>
          <Input
            id="signup-email"
            type="email"
            placeholder="example@mail.com"
          />
        </Field>

        <Field className="auth-field">
          <FieldLabel htmlFor="signup-full-name">Full Name</FieldLabel>
          <Input
            id="signup-full-name"
            type="text"
            placeholder="example@mail.com"
          />
        </Field>

        <Field className="auth-field">
          <FieldLabel htmlFor="signup-password">Password</FieldLabel>
          <Input id="signup-password" type="password" />
        </Field>

        <Field className="auth-field">
          <FieldLabel htmlFor="signup-confirm-password">
            Confirm Password
          </FieldLabel>
          <Input id="signup-confirm-password" type="password" />
        </Field>

        <Field>
          <Button type="submit">Sign Up</Button>
        </Field>
      </FieldGroup>

      <p className="text-sm switch-p">
        Already have an account?&nbsp;
        <Button
          onClick={onSwitch}
          variant="link"
          className="text-sm auth-form__switch"
        >
          Sign In
        </Button>
      </p>
    </div>
  );
}

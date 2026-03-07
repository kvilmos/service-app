import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";

import "@/features/auth/auth-page.css";
import { Field, FieldGroup, FieldLabel } from "@/components/shadcn-ui/field";

export default function SignInForm({ onSwitch }) {
  return (
    <div>
      <h1 className="text-xl">Welcome Back</h1>
      <p className="text-sm">Please enter your details.</p>

      <FieldGroup className="auth-form">
        <Field className="auth-field">
          <FieldLabel htmlFor="signin-email">Email</FieldLabel>
          <Input
            id="signin-email"
            type="email"
            placeholder="example@mail.com"
          />
        </Field>
        <Field className="auth-field">
          <FieldLabel htmlFor="signin-password">Password</FieldLabel>
          <Input id="signin-password" type="password" />
        </Field>

        <Field>
          <Button type="submit">Sign In</Button>
        </Field>
      </FieldGroup>

      <p className="text-sm switch-p">
        Don't have an account?&nbsp;
        <Button
          onClick={onSwitch}
          variant="link"
          className="text-sm auth-form__switch"
        >
          Sign Up
        </Button>
      </p>
    </div>
  );
}

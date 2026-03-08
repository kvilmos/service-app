import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";

import "@/features/auth/auth-page.css";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn-ui/field";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@app/shared";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Spinner } from "@/components/shadcn-ui/spinner";

export default function SignUpForm({ onSwitch }) {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values) {
    setIsLoading(true);

    const { data, error } = await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.fullName,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: (ctx) => {
          console.log("registered", ctx);
        },
        onError: (ctx) => {
          console.log("registered", ctx);

          form.setError("root", { message: ctx.error.message });
        },
      },
    );

    setIsLoading(false);

    if (error) {
      form.setError("root", { message: error.message });
      return;
    }

    if (data) {
      console.log("Siker:", data);
    }
  }

  return (
    <div>
      <h1 className="text-xl">Welcome to Service App</h1>

      <form id="sign-up-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="auth-form">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-up-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="sign-up-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="example@mail.com"
                  autoComplete="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-up-full-name">Full Name</FieldLabel>
                <Input
                  {...field}
                  id="sign-up-full-name"
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Your Name"
                  autoComplete="name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-up-password">Password</FieldLabel>
                <Input
                  {...field}
                  id="sign-up-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="new-password"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-up-confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  {...field}
                  id="sign-up-confirm-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="new-password"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Field>
            <Button
              type="submit"
              form="sign-up-form"
              disabled={form.formState.isSubmitting}
            >
              {isLoading ? <Spinner></Spinner> : "Sign Up"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

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

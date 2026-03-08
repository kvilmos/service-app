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
import { signInSchema } from "@app/shared/schemas/auth-schema";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/shadcn-ui/spinner";

import { toast } from "sonner";

export default function SignInForm({ onSwitch }) {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values) {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        rememberMe: true,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          toast("Successful log in.", {
            position: "top-center",
          });
        },
        onError: (ctx) => {
          console.log(ctx);
          toast.warning(ctx.error.message, { position: "top-center" });
          form.setError("root", { message: ctx.error.message });
        },
      },
    );

    setIsLoading(false);
  }

  return (
    <div>
      <h1 className="text-xl">Welcome Back</h1>
      <p className="text-sm">Please enter your details.</p>
      <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="auth-form">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-in-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="sign-in-email"
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
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="auth-field">
                <FieldLabel htmlFor="sign-in-password">Password</FieldLabel>
                <Input
                  {...field}
                  id="sign-in-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="password"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Field>
            <Button
              form="sign-in-form"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {isLoading ? <Spinner></Spinner> : "Sign In"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

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

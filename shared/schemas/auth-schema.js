import z from "zod";

export const singUpForm = z
  .object({
    email: z
      .trim()
      .email("Invalid email address")
      .min(5, "Email must be at least 5 characters")
      .max(100, "Email must be less than 100 characters"),
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name must be less than 100 characters"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters"),
    confirmPassword: z
      .string()
      .trim()
      .min(6, "Confirm password must be at least 6 characters")
      .max(100, "Confirm password must be less than 100 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

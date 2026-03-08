import z from "zod";

export const signUpSchema = z
  .object({
    email: z
      .email("Invalid email address")
      .trim()
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
      .min(8, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters"),
    confirmPassword: z
      .string()
      .trim()
      .min(8, "Confirm password must be at least 6 characters")
      .max(100, "Confirm password must be less than 100 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

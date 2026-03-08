import z from "zod";

export const signUpSchema = z
  .object({
    email: z
      .email("Please enter a valid email address")
      .trim()
      .min(5, "Email must be at least 5 characters")
      .max(100, "Email must be less than 100 characters"),
    fullName: z
      .string()
      .trim()
      .nonempty("Please enter your full name")
      .regex(/^[\p{L}\s]+$/u, {
        message: "Only letters and spaces are allowed",
      })
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name must be less than 100 characters"),
    password: z
      .string()
      .trim()
      .nonempty("Password cannot be empty")
      .min(8, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters"),
    confirmPassword: z.string().trim().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .trim()
    .max(100, "Email must be less than 100 characters"),
  password: z
    .string()
    .trim()
    .nonempty("Please enter your password")
    .max(100, "Password must be less than 100 characters"),
});

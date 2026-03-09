import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db";
import { admin, openAPI } from "better-auth/plugins";
import { sendEmailViaMailgun } from "@/lib/email";

export const auth = betterAuth({
  basePath: "/api/v1/auth",
  trustedOrigins: ["http://localhost:5173"],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: _sendVerificationEmail,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [openAPI(), admin()],
});

function _sendVerificationEmail({ user, url, token }, request) {
  sendEmailViaMailgun({
    to: user.email,
    subject: "Verify your email address",
    text: `Click the link to verify your email: ${url}`,
  }).catch((err) => console.log("Email sanding failed:", err));
}

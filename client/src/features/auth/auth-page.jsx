import { useState } from "react";
import { Button } from "@/components/shadcn-ui/button";
import { NavLink } from "react-router";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

import "@/features/auth/auth-page.css";

const AUTH_STATES = { LOGIN: "login", REGISTER: "register" };

export default function AuthView() {
  const [currentForm, setCurrentForm] = useState(AUTH_STATES.LOGIN);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold">Service App</h1>
        <div>
          <Button variant="link" className="back-button">
            <NavLink to="/" end>
              back to home
            </NavLink>
          </Button>
        </div>
        <img src="../src/assets/logo/logo.svg" className="s-logo logo"></img>
        <div>
          {currentForm === AUTH_STATES.LOGIN ? (
            <SignInForm onSwitch={() => setCurrentForm(AUTH_STATES.REGISTER)} />
          ) : (
            <SignUpForm onSwitch={() => setCurrentForm(AUTH_STATES.LOGIN)} />
          )}
        </div>
      </div>
    </div>
  );
}

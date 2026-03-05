import { useState } from "react";
import { Button } from "@/components/shadcn-ui/button";
import { NavLink } from "react-router";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const AUTH_STATES = { LOGIN: "login", REGISTER: "register" };

export default function AuthView() {
  const [currentForm, setCurrentForm] = useState(AUTH_STATES.LOGIN);

  return (
    <div>
      <h1>Service App</h1>
      <Button variant="link">
        <NavLink to="/" end>
          back to home
        </NavLink>
      </Button>
      <img src="../src/assets/logo/logo.svg" className="s-logo"></img>
      <div>
        {currentForm === AUTH_STATES.LOGIN ? (
          <SignInForm onSwitch={() => setCurrentForm(AUTH_STATES.REGISTER)} />
        ) : (
          <SignUpForm onSwitch={() => setCurrentForm(AUTH_STATES.LOGIN)} />
        )}
      </div>
    </div>
  );
}

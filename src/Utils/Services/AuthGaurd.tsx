import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "./Auth";
const appMode = (import.meta.env.VITE_APP_APPMODE as string) || null;
console.log(appMode);

function AuthGaurd({ children, redirectTo }: any) {
  if (appMode === "Dev") {
    return children;
  } else {
    return isLogin() ? children : <Navigate to={redirectTo} />;
  }
}

export default AuthGaurd;

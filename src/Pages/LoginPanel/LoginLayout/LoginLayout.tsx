import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, LoginHeader } from "../../../Components";
import "./LoginLayout.scss";

function LoginLayout() {
  return (
    <div className="LoginLayout">
      <LoginHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LoginLayout;

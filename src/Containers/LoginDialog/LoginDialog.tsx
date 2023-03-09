import React from "react";
import { BsGithub } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { login } from "../../Utils/Services/Auth";
import { getGitHubUrl } from "../../Utils/Services/Other";
import "./LoginDialog.scss";

function LoginDialog() {
const location = useLocation()
  let from = ((location.state as any)?.from?.pathname as string) || '/'
  return (
    <div className="LoginDialog">
      <p className="LoginDialog__title">Login</p>
      <div className="LoginDialog__buttonContainer">
        <div
          className="button"
          onClick={() => {
            // login("/dashboard");
            window.open(getGitHubUrl(from))
            
          }}
        >
          <BsGithub />
          &nbsp;Login with Github
        </div>
      </div>
    </div>
  );
}

export default LoginDialog;

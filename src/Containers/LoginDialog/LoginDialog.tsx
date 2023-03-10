import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { login } from "../../Utils/Services/Auth";
import { getGitHubUrl } from "../../Utils/Services/Other";
import "./LoginDialog.scss";

function LoginDialog() {
  const [redirectURL, setRedirectURL] = useState<string>(undefined || "");

  useEffect(() => {
    setRedirectURL(
      `${window?.location?.protocol}//${window?.location?.host}/login`
    );
    return () => {};
  }, []);

  return (
    <div className="LoginDialog">
      <p className="LoginDialog__title">Login</p>
      <div className="LoginDialog__buttonContainer">
        <div
          className="button"
          onClick={() => {
            window.open(
              `https://github.com/login/oauth/authorize?client_id=${
                import.meta.env.VITE_APP_GITHUB_OAUTH_CLIENT_ID as string
              }&redirect_uri=${redirectURL}&state=%2F`,
              "_self"
            );
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

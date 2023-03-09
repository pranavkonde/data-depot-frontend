import React, { useState } from "react";
import { Header } from "../../Components";
import { HeroSection, LoginDialog } from "../../Containers";
import "./LandingPage.scss";
import { Dialog } from "@material-ui/core";

function LandingPage() {
  const [loginDialog , setLoginDialog] = useState(false);
  return (
    <div className="LandingPage">
      <Header setLoginDialog={setLoginDialog} />
      <HeroSection />
      <Dialog open={loginDialog} onClose={() => {
        setLoginDialog(false);
      }}>
        <LoginDialog/>
      </Dialog>
    </div>
  );
}

export default LandingPage;

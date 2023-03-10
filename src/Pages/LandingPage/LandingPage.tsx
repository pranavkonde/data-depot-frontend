import React, { useEffect, useState } from "react";
import { Header } from "../../Components";
import { HeroSection, LoginDialog } from "../../Containers";
import "./LandingPage.scss";
import { Dialog } from "@material-ui/core";
import { useLocation } from 'react-router-dom'
import { login } from "../../Utils/Services/Auth";


function LandingPage() {
  const [loginDialog , setLoginDialog] = useState(false);
    const location = useLocation();
  
  useEffect(() => {
    if(location?.pathname === '/login'){
      const urlParams = new URLSearchParams(location?.search);
      const codeParam = urlParams.get("code");
      console.log(codeParam);
      codeParam && (async ()=>{await login(codeParam)})()
    }
    return () => {}
  }, [location])
  
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

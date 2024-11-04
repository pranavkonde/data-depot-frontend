import React from 'react';
import './Header.scss';
const appMode = (import.meta.env.VITE_APP_APPMODE as string) || null;
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";




interface HeaderProps {
  setLoginDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setLoginDialog }) => {
  return (
    <div className="Header _container">
      <div className="Header__logo">
        <img src="/filecoin.png" alt="logo" />
        <p>Filecoin Virtual Machine</p>
      </div>
      <div className="Header__loginContainer">
        {/* <button disabled={true} style={{opacity:0.5}}>Login</button> */}
        <button disabled={false} style={{cursor:'pointer'}} onClick={() => {appMode === 'Dev'? Navigator.push('/dashboard') :setLoginDialog(true)}}>Login</button>
      </div>
    </div>
  );
};

export default Header;


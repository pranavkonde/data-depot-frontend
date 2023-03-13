import React from 'react';
import './Header.scss';


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
        <button onClick={() => setLoginDialog(true)}>Login</button>
      </div>
    </div>
  );
};

export default Header;


import React from 'react';
import './Header.scss';
import {BsCaretDownFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';

interface HeaderProps {
  setLoginDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setLoginDialog }) => {
  return (
    <div className="Header _container">
      <div className="Header__logo">
        <img src="/Logo.png" alt="logo" />
      </div>
      <div className="Header__loginContainer">
        <button onClick={() => setLoginDialog(true)}>Login</button>
      </div>
    </div>
  );
};

export default Header;


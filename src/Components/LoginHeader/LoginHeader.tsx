import React from 'react';
import './LoginHeader.scss';
import {HiOutlineMenu} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {GoBell} from 'react-icons/go'

function LoginHeader() {
  return (
    <div className='LoginHeader _container'>
        <div className="LoginHeader__brandContainer">
            {/* <span>
                <HiOutlineMenu/>
            </span> */}
            <img src="/filecoin_dark.png" alt="logo" />
        </div>
        <div className="LoginHeader__profileContainer">
            <FaUser/>
            {/* <GoBell/> */}
        </div>
    </div>
  )
}

export default LoginHeader
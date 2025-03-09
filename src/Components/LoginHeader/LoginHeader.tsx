import React, { useState } from "react";
import "./LoginHeader.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { Popover } from "react-tiny-popover";
import { logout } from "../../Utils/Services/Auth";

function LoginHeader() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className="LoginHeader _container">
      <div className="LoginHeader__brandContainer">
        <img src="/filecoin_dark.png" alt="logo" />
          <p>Filecoin Virtual Machine</p>
      </div>
      <div className="LoginHeader__profileContainer">
       
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom"]}
           onClickOutside={() => setIsPopoverOpen(false)}
       
          content={<div className="ProfileDropdown">
            <p className="ProfileDropdown__logout _buttonOutline"
            onClick={()=>{
              logout()
            }}>Logout</p>
          </div>}
        >
          <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className={"_ptr"}>
             <FaUser />
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default LoginHeader;

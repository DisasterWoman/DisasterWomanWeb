import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container-navbar">
          <img
            className="logo-main"
            alt="logo"
            src="/images/logo-black.png"
            width={135}
            height={35}
          ></img>
          <div className="menu-icon">
            <img
            className="icons"
            alt="icon"
            src={click ? 'public/images/icons/hamburger-menu-icon.svg' : '../../../'}
            ></img>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

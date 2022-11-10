import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleC
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
              src={
                click
                  ? "/images/icons/close-icon.svg"
                  : "/images/icons/hamburger-menu-icon.svg"
              }
              width={25}
              height={25}
            ></img>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

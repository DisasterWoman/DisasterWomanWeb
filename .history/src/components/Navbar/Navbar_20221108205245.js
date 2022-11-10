import React, { useState } from "react";
import "./Navbar.scss";
import

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
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

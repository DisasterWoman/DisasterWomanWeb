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
          <
        </div>
      </nav>
    </>
  );
}

export default Navbar;

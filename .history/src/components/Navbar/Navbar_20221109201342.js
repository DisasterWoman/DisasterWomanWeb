import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="container-navbar">
        <Link></Link>
          <div className="menu-icon" onClick={handleClick}>
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

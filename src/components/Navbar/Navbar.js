import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar d-flex justify-center align-cener">
        <div className="container-navbar">
          <Link to="/" className="navbar-logo">
            <img
              className="logo-main mr-40"
              alt="logo"
              src="/images/logo-white.png"
              width={135}
              height={35}
            ></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <img
              className="nav-icon"
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
          <div className="nav-container d-flex">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cv" className="nav-links">
                  CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

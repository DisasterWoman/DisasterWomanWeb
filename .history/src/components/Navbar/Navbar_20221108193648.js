import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
    <div className="container-navbar">
    <img className='logo-main' src='/images/logo-black.png' width={0} height={30}></img>
    </div>
    </nav>
    </>
  )
}

export default Navbar